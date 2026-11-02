import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Sheet({
  ...props
}) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "tw-fixed tw-inset-0 tw-z-50 tw-bg-black/10 tw-transition-opacity tw-duration-150 data-ending-style:tw-opacity-0 data-starting-style:tw-opacity-0 supports-backdrop-filter:tw-backdrop-blur-xs",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "tw-fixed tw-z-50 tw-flex tw-flex-col tw-gap-4 tw-bg-popover tw-bg-clip-padding tw-text-sm tw-text-popover-foreground tw-shadow-lg tw-transition tw-duration-200 tw-ease-in-out data-ending-style:tw-opacity-0 data-starting-style:tw-opacity-0 data-[side=bottom]:tw-inset-x-0 data-[side=bottom]:tw-bottom-0 data-[side=bottom]:tw-h-auto data-[side=bottom]:tw-border-t data-[side=bottom]:data-ending-style:tw-translate-y-[2.5rem] data-[side=bottom]:data-starting-style:tw-translate-y-[2.5rem] data-[side=left]:tw-inset-y-0 data-[side=left]:tw-left-0 data-[side=left]:tw-h-full data-[side=left]:tw-w-3/4 data-[side=left]:tw-border-r data-[side=left]:data-ending-style:tw-translate-x-[-2.5rem] data-[side=left]:data-starting-style:tw-translate-x-[-2.5rem] data-[side=right]:tw-inset-y-0 data-[side=right]:tw-right-0 data-[side=right]:tw-h-full data-[side=right]:tw-w-3/4 data-[side=right]:tw-border-l data-[side=right]:data-ending-style:tw-translate-x-[2.5rem] data-[side=right]:data-starting-style:tw-translate-x-[2.5rem] data-[side=top]:tw-inset-x-0 data-[side=top]:tw-top-0 data-[side=top]:tw-h-auto data-[side=top]:tw-border-b data-[side=top]:data-ending-style:tw-translate-y-[-2.5rem] data-[side=top]:data-starting-style:tw-translate-y-[-2.5rem] data-[side=left]:sm:tw-max-w-sm data-[side=right]:sm:tw-max-w-sm",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="tw-absolute tw-top-3 tw-right-3"
                size="icon-sm"
              />
            }
          >
            <XIcon
            />
            <span className="tw-sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("tw-flex tw-flex-col tw-gap-0.5 tw-p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("tw-mt-auto tw-flex tw-flex-col tw-gap-2 tw-p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "tw-font-heading tw-text-base tw-font-medium tw-text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("tw-text-sm tw-text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
