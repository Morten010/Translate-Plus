import * as React from "react"

import { cn } from "@/src/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-stone-200 border-stone-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-800 dark:border-stone-800 dark:bg-stone-950 dark:placeholder:text-stone-400 dark:focus-visible:ring-stone-800",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
