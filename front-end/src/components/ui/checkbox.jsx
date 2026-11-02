import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "cn"
import { CheckIcon } from "lucide-react"

function Checkbox({
  className,
  ...props
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "tw-peer tw-relative tw-flex tw-size-4 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-[4px] tw-border tw-border-input tw-transition-colors tw-outline-none group-has-disabled/field:tw-opacity-50 group-has-[:focus-visible]/field-label:tw-ring-0 group-has-[:focus-visible]/field-label:not-data-checked:tw-border-input after:tw-absolute after:tw--inset-x-3 after:tw--inset-y-2 focus-visible:tw-border-ring focus-visible:tw-ring-3 focus-visible:tw-ring-ring/50 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 aria-invalid:tw-border-destructive aria-invalid:tw-ring-3 aria-invalid:tw-ring-destructive/20 aria-invalid:aria-checked:tw-border-primary dark:tw-bg-input/30 dark:aria-invalid:tw-border-destructive/50 dark:aria-invalid:tw-ring-destructive/40 data-checked:tw-border-primary data-checked:tw-bg-primary data-checked:tw-text-primary-foreground group-has-[:focus-visible]/field-label:data-checked:tw-border-primary dark:data-checked:tw-bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="tw-grid tw-place-content-center tw-text-current tw-transition-none [&>svg]:tw-size-3.5"
      >
        <CheckIcon
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
