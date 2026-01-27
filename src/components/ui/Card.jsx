import { cn } from "@/lib/utils"

export const Card = ({ children, className, hover = false, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white p-8 rounded-lg shadow-md",
        hover && "card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
