"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GoogleLogo } from "../icon"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema } from "@/lib/models/signupmodel/signupSchema"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { setCookie } from "@/lib/utils/cookie"
import { decodeToken } from "@/lib/utils/jwt"

interface Inputs extends z.infer<typeof signupSchema> {}

export function SingUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
   console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold font-outfit">Create your new account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter below details to create your account
        </p>
      </div>

      {error && (
        <div className="text-red-600 text-sm text-center mb-4">
          {error}
        </div>
      )}

      <div className="grid gap-7">
        <div className="grid gap-3">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register("email")}
              className={cn("input-bordered input", errors.email && "input-error")}
            />
            {errors.email && (
              <p className="text-red-700 mt-1 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="mitchel"
              {...register("username")}
              className={cn("input-bordered input", errors.username && "input-error")}
            />
            {errors.username && (
              <p className="text-red-700 mt-1 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password")}
                className={cn("input-bordered input", errors.password && "input-error")}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? (
                  <EyeOff className="h-5 w-5 transition-all duration-300 ease-in-out" />
                ) : (
                  <Eye className="h-5 w-5 transition-all duration-300 ease-in-out" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-700 mt-1 text-sm">{errors.password.message}</p>
            )}
          </div>

          <a
            href="#"
            className="ml-auto text-sm underline-offset-4 hover:underline"
          >
            Forgot your password?
          </a>

          <Button
            type="submit"
            className="w-full cursor-pointer bg-theme-color hover:bg-theme-color/85 text-white font-semibold py-3 rounded-lg"
          >
            Create Account
          </Button>
        </div>

        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>

        <Button variant="outline" className="w-full flex gap-1.5 cursor-pointer">
          <GoogleLogo />
          Signup with Google
        </Button>
      </div>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/login" className="underline underline-offset-4 hover:text-theme-color">
          Sign in
        </a>
      </div>
    </form>
  )
}
