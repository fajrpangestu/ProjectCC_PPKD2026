import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva } from "class-variance-authority";
import { cn } from "cn"

const badgeVariants = cva(
  "tw-group/badge tw-inline-flex tw-h-5 tw-w-fit tw-shrink-0 tw-items-center tw-justify-center tw-gap-1 tw-overflow-hidden tw-rounded-4xl tw-border tw-border-transparent tw-px-2 tw-py-0.5 tw-text-xs tw-font-medium tw-whitespace-nowrap tw-transition-all focus-visible:tw-border-ring focus-visible:tw-ring-[3px] focus-visible:tw-ring-ring/50 has-data-[icon=inline-end]:tw-pr-1.5 has-data-[icon=inline-start]:tw-pl-1.5 aria-invalid:tw-border-destructive aria-invalid:tw-ring-destructive/20 dark:aria-invalid:tw-ring-destructive/40 [&>svg]:tw-pointer-events-none [&>svg]:tw-size-3!",
  {
    variants: {
      variant: {
        default: "tw-bg-primary tw-text-primary-foreground [a]:hover:tw-bg-primary/80",
        secondary:
          "tw-bg-secondary tw-text-secondary-foreground [a]:hover:tw-bg-secondary/80",
        destructive:
          "tw-bg-destructive/10 tw-text-destructive focus-visible:tw-ring-destructive/20 dark:tw-bg-destructive/20 dark:focus-visible:tw-ring-destructive/40 [a]:hover:tw-bg-destructive/20",
        outline:
          "tw-border-border tw-text-foreground [a]:hover:tw-bg-muted [a]:hover:tw-text-muted-foreground",
        ghost:
          "hover:tw-bg-muted hover:tw-text-muted-foreground dark:hover:tw-bg-muted/50",
        link: "tw-text-primary tw-underline-offset-4 hover:tw-underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps({
      className: cn(badgeVariants({ variant }), className),
    }, props),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants }
