import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "tw-h-8 tw-w-full tw-min-w-0 tw-rounded-lg tw-border tw-border-input tw-bg-transparent tw-px-2.5 tw-py-1 tw-text-base tw-transition-colors tw-outline-none file:tw-inline-flex file:tw-h-6 file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium file:tw-text-foreground placeholder:tw-text-muted-foreground focus-visible:tw-border-ring focus-visible:tw-ring-3 focus-visible:tw-ring-ring/50 disabled:tw-pointer-events-none disabled:tw-cursor-not-allowed disabled:tw-bg-input/50 disabled:tw-opacity-50 aria-invalid:tw-border-destructive aria-invalid:tw-ring-3 aria-invalid:tw-ring-destructive/20 md:tw-text-sm dark:tw-bg-input/30 dark:disabled:tw-bg-input/80 dark:aria-invalid:tw-border-destructive/50 dark:aria-invalid:tw-ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
