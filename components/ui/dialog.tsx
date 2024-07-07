// REACT
import React from "react"
// UTILS
import { cn } from "@/utils/helpers"

interface IDialog extends React.HTMLAttributes<HTMLDialogElement> {
  className?: string;
}

interface IDialogPanel extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Dialog = React.forwardRef<HTMLDialogElement, IDialog>(({ className, children, ...props }, ref) => {
    return (
      <dialog className={cn(
       "container relative bg-slate-900/20 backdrop-blur left-0 top-0 w-full h-full overflow-hidden z-[1000] outline-[0px]",
        className
      )}
      {...props}
      ref={ref}
      >
        {children}
      </dialog>
    )
  })
  Dialog.displayName = "Dialog";

  export const DialogPanel = React.forwardRef<HTMLDivElement, IDialogPanel>(({ className, children, ...props }, ref) => {
    return (
      <div className={cn(
        "absolute h-full z-[2000] bg-secondary overflow-y-scroll right-0 top-0 w-[450px]",
        className
      )}
      {...props}
      ref={ref}
      >
        {children}
      </div>
    )
  })
  DialogPanel.displayName = "DialogPanel";

  export const DialogHeader = React.forwardRef<HTMLDivElement, IDialogPanel>(({ className, ...props }) => {
    return (
      <div className={cn(
       "flex flex-col gap-5",
        className
        )}
        {...props}
      />
    )
  })
  DialogHeader.displayName = "DialogHeader";
  
  export const DialogTitle = React.forwardRef<HTMLDivElement, IDialogPanel>(({ className, ...props }) => {
    return (
      <div className={cn(
       "text-sm text-secondary font-bold",
        className
        )}
        {...props}
      />
    )
  })
  DialogTitle.displayName = "DialogTitle";
  
  export const DialogDescription = React.forwardRef<HTMLDivElement, IDialogPanel>(({ className, ...props }) => {
    return (
      <div className={cn(
       "text-sm text-secondary",
        className
        )}
        {...props}
      />
    )
  })
  DialogDescription.displayName = "DialogDescription";
  
  export const DialogFooter = React.forwardRef<HTMLDivElement, IDialogPanel>(({ className, ...props }) => {
    return (
      <div className={cn(
       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
        )}
        {...props}
      />
    )
  })
  DialogFooter.displayName = "DialogFooter";