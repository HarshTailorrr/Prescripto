import zod from "zod"

const errorMessages = {
    email: {
        required: "Email is required",
        invalid: "Please enter a valid email address",
        empty: "Email cannot be empty"
    },
    username: {
        required: "Username is required",
        min: "Username must be at least 3 characters",
        max: "Username cannot exceed 20 characters",
        invalid: "Username can only contain letters, numbers, and underscores"
    },
    password: {
        required: "Password is required",
        min: "Password must be at least 8 characters",
        max: "Password cannot exceed 20 characters",
        invalid: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    }
}

export const signupSchema = zod.object({
    email: zod.string()
        .email(errorMessages.email.invalid)
        .min(1, errorMessages.email.required)
        .trim(),
    
    username: zod.string()
        .min(3, errorMessages.username.min)
        .max(20, errorMessages.username.max)
        .regex(/^[a-zA-Z_\s]+$/, 'Username can only contain letters, underscores, and spaces')
        .trim(),
    
    password: zod.string()
        .min(8, errorMessages.password.min)
        .max(20, errorMessages.password.max)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 
            errorMessages.password.invalid)
        .trim()
})

export type SignupFormData = zod.infer<typeof signupSchema>
