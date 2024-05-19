// LIBRARIES
import { VariantProps, cva } from "class-variance-authority";
// UTILS
import { cn } from "@/utils/helpers";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {}

export const tagVariants = cva(
  "whitespace-nowrap font-semibold leading-none text-primary rounded-[6px] border-solid border-[0.3rem]", 
  {
    variants: {
      variant: {
        primary: "bg-primary text-secondary border-primary",
        secondary: "bg-secondary text-primary border-secondary",
        alternate: "bg-alternate text-secondary border-alternate",
        success: "bg-success text-secondary border-success",
        accent: "bg-accent text-secondary border-accent",
        highlight: "bg-highlight text-secondary border-highlight",
      },
      size: {
        default: "py-[0.5rem] px-[1rem]",
        sm: "py-[0.25rem] px-[0.75rem]",
        lg: "py-[0.75rem] px-[1.25rem]"
      }
    }, 
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

export function Tag({ className, variant, size, ...props }: TagProps) {
  return (
    <span
      className={cn(tagVariants({ variant, size, className}))}
      {...props}
    />
  );
}