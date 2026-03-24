import { cn } from "@/lib/utils"

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "default",
  className, 
  ...props 
}) => {
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300",
    ghost: "hover:bg-muted transition-colors duration-300",
  }

  const sizes = {
    default: "px-6 py-3 text-base",
    sm: "px-4 py-2 text-sm",
    lg: "px-12 py-4 text-lg",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold cursor-pointer tracking-wide",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
