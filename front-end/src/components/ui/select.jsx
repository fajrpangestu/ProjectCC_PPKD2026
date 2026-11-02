import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { cn } from "cn"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"

const Select = SelectPrimitive.Root

function SelectGroup({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("tw-scroll-my-1 tw-p-1", className)}
      {...props}
    />
  )
}

function SelectValue({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("tw-flex tw-flex-1 tw-text-left", className)}
      {...props}
    />
  )
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "tw-flex tw-w-fit tw-items-center tw-justify-between tw-gap-1.5 tw-rounded-lg tw-border tw-border-input tw-bg-transparent tw-py-2 tw-pr-2 tw-pl-2.5 tw-text-sm tw-whitespace-nowrap tw-transition-colors tw-outline-none tw-select-none focus-visible:tw-border-ring focus-visible:tw-ring-3 focus-visible:tw-ring-ring/50 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 aria-invalid:tw-border-destructive aria-invalid:tw-ring-3 aria-invalid:tw-ring-destructive/20 data-placeholder:tw-text-muted-foreground data-[size=default]:tw-h-8 data-[size=sm]:tw-h-7 data-[size=sm]:tw-rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:tw-line-clamp-1 *:data-[slot=select-value]:tw-flex *:data-[slot=select-value]:tw-items-center *:data-[slot=select-value]:tw-gap-1.5 dark:tw-bg-input/30 dark:hover:tw-bg-input/50 dark:aria-invalid:tw-border-destructive/50 dark:aria-invalid:tw-ring-destructive/40 [&_svg]:tw-pointer-events-none [&_svg]:tw-shrink-0 [&_svg:not([class*=size-])]:tw-size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className="tw-pointer-events-none tw-size-4 tw-text-muted-foreground" />
        }
      />
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="tw-isolate tw-z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn("tw- tw- tw-relative tw-isolate tw-z-50 tw-max-h-(--available-height) tw-w-(--anchor-width) tw-min-w-36 tw-origin-(--transform-origin) tw-overflow-x-hidden tw-overflow-y-auto tw-rounded-lg tw-bg-popover tw-text-popover-foreground tw-shadow-md tw-ring-1 tw-ring-foreground/10 tw-duration-100 data-[align-trigger=true]:tw-animate-none data-[side=bottom]:tw-slide-in-from-top-2 data-[side=inline-end]:tw-slide-in-from-left-2 data-[side=inline-start]:tw-slide-in-from-right-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2 data-open:tw-animate-in data-open:tw-fade-in-0 data-open:tw-zoom-in-95 data-closed:tw-animate-out data-closed:tw-fade-out-0 data-closed:tw-zoom-out-95", className )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("tw-px-1.5 tw-py-1 tw-text-xs tw-text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "tw-relative tw-flex tw-w-full tw-cursor-default tw-items-center tw-gap-1.5 tw-rounded-md tw-py-1 tw-pr-8 tw-pl-1.5 tw-text-sm tw-outline-hidden tw-select-none focus:tw-bg-accent focus:tw-text-accent-foreground not-data-[variant=destructive]:focus:**:tw-text-accent-foreground data-disabled:tw-pointer-events-none data-disabled:tw-opacity-50 [&_svg]:tw-pointer-events-none [&_svg]:tw-shrink-0 [&_svg:not([class*=size-])]:tw-size-4 *:[span]:last:tw-flex *:[span]:last:tw-items-center *:[span]:last:tw-gap-2",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="tw-flex tw-flex-1 tw-shrink-0 tw-gap-2 tw-whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="tw-pointer-events-none tw-absolute tw-right-2 tw-flex tw-size-4 tw-items-center tw-justify-center" />
        }
      >
        <CheckIcon className="tw-pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("tw-pointer-events-none tw--mx-1 tw-my-1 tw-h-px tw-bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "tw-top-0 tw-z-10 tw-flex tw-w-full tw-cursor-default tw-items-center tw-justify-center tw-bg-popover tw-py-1 [&_svg:not([class*=size-])]:tw-size-4",
        className
      )}
      {...props}
    >
      <ChevronUpIcon
      />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "tw-bottom-0 tw-z-10 tw-flex tw-w-full tw-cursor-default tw-items-center tw-justify-center tw-bg-popover tw-py-1 [&_svg:not([class*=size-])]:tw-size-4",
        className
      )}
      {...props}
    >
      <ChevronDownIcon
      />
    </SelectPrimitive.ScrollDownArrow>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
