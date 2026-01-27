import { cn } from "@/lib/utils"

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full px-4 py-3.5 border-2 border-muted rounded-md text-base font-inter",
        "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10",
        "transition-all duration-300",
        className
      )}
      {...props}
    />
  )
}
