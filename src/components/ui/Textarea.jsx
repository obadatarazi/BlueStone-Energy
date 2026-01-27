import { cn } from "@/lib/utils"

export const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={cn(
        "w-full px-4 py-3.5 border-2 border-muted rounded-md text-base font-inter resize-y",
        "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10",
        "transition-all duration-300",
        className
      )}
      {...props}
    />
  )
}
