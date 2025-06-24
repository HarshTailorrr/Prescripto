import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface ButtonProps {
    handleClick? : () => void
    children? : React.ReactNode
    className? : string,
    size? : "default" | "lg" | "sm" | "icon",
    variant? : "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export default function CommonButton({
    handleClick,
    children,
    className,
    size,
    variant
}: ButtonProps){
    return (
        <Button
        onClick={handleClick}
        className={cn(` rounded-full ${className}`)}
        size={size}
        variant={variant}
        >
            {children}
        </Button>
    )
}