// REACT
import React from "react";
// PACKAGES
import { VariantProps, cva } from "class-variance-authority";
// UTILS
import { cn } from "@/utils/helpers";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[6px] font-medium font-poppins disabled:opacity-50 disabled:pointers-events-none", {
    variants: {
      variant: {
        primary: "bg-primary text-secondary border-[0.3rem] border-solid border-primary hover:bg-secondary hover:text-primary",
        primaryOutlined: "bg-neutral text-primary border-[0.3rem] border-solid border-primary hover:bg-secondary hover:text-primary",
        secondary: "bg-secondary text-primary border-[0.3rem] border-solid border-primary hover:bg-primary hover:text-secondary",
        alternate: "bg-secondary text-alternate border-[0.3rem] border-solid border-secondasry hover:bg-alternate hover:text-secondary",
        alternateOutlined: "bg-alternate text-secondary border-[0.3rem] border-solid border-secondary hover:bg-secondary hover:text-alternate",
        danger: "bg-danger text-secondary border-[0.3rem] border-solid border-danger hover:bg-secondary hover:text-danger",
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

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = ({ className, variant, size, ...props }: IButton) => {
  return (
    <button 
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}