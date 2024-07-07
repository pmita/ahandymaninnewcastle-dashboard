"use client"

// REACT
import React from "react"
// COMPONENTS
import { VariantProps, cva } from "class-variance-authority";
// UTILS
import { cn } from "@/utils/helpers"

export const overlayPanelSectionVariants = cva(
  "absolute h-full z-[1000] bg-secondary overflow-y-scroll", {
    variants: {
      variant: {
        left: "right-0 top-0",
        right: "left-0 top-0",
        center: "left-0 top-0",
      },
      size: {
        default: "w-full",
        sm: "w-[450px]",
        lg: "w-[700px]",
        xl: "w-[800px]",
        full: "w-full",
      }
    },
    defaultVariants: {
      variant: 'left',
      size: 'lg',
    }
  }
)

interface IOverlayPanel extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface ITestOverlayPanel extends React.HTMLAttributes<HTMLDialogElement> {
  children?: React.ReactNode;
}


interface IOverlayPanelSectionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof overlayPanelSectionVariants> {
  children?: React.ReactNode;
}

export const OverlayPanelWrapper = React.forwardRef<HTMLDivElement, IOverlayPanel>(({ className, children, ...props }, ref) => {
    return (
      <div className={cn(
        "relative overflow-hidden z-[1000] outline-[0px]",
        className
      )}
      {...props}
      ref={ref}
      >
        {children}
      </div>
    )
  })
  OverlayPanelWrapper.displayName = "OverlayPanelWrapper";

export const OverlayPanelContainer = React.forwardRef<HTMLDivElement, IOverlayPanel>(({ className, children, ...props }, ref) => {
    return (
      <div className={cn(
        "flex flex-col items-center fixed right-0 top-0 w-full h-full z-[1000]",
        className
      )}
      {...props}
      ref={ref}
      >
        {children}
      </div>
    )
  })
  OverlayPanelContainer.displayName = "OverlayPanelContainer";

  export const OverlayPanelOverlay = React.forwardRef<HTMLDivElement, IOverlayPanel>(({ className, children, ...props }, ref) => {
    return (
      <div className={cn(
        "bg-slate-900/20 backdrop-blur absolute z-0 left-0 top-0 w-full h-full",
        className
      )}
      {...props}
      ref={ref}
      >
        {children}
      </div>
    )
  })
  OverlayPanelOverlay.displayName = "OverlayPanelOverlay";

  export const OverlayPanelSection = React.forwardRef<HTMLDivElement, IOverlayPanelSectionProps>(({ className, variant, size,children, ...props }, ref) => {
    return (
      <div
        className={cn(overlayPanelSectionVariants({
          variant,
          size,
          className
        }))}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    )
  })
  OverlayPanelSection.displayName = "OverlayPanelSection";


  export const OverlayPanelHeader = React.forwardRef<HTMLDivElement, IOverlayPanel>(({ className, ...props }) => {
    return (
      <div className={cn(
       "flex flex-col gap-5",
        className
        )}
        {...props}
      />
    )
  })
  OverlayPanelHeader.displayName = "OverlayPanelHeader";
  
  export const OverlayPanelTitle = React.forwardRef<HTMLDivElement, IOverlayPanel>(({ className, ...props }) => {
    return (
      <div className={cn(
       "text-sm text-secondary font-bold",
        className
        )}
        {...props}
      />
    )
  })
  OverlayPanelTitle.displayName = "OverlayPanelTitle";
  
  export const OverlayPanelDescription = React.forwardRef<HTMLDivElement, IOverlayPanel>(({ className, ...props }) => {
    return (
      <div className={cn(
       "text-sm text-secondary",
        className
        )}
        {...props}
      />
    )
  })
  OverlayPanelDescription.displayName = "OverlayPanelDescription";
  
  export const OverlayPanelFooter = React.forwardRef<HTMLDivElement, IOverlayPanel>(({ className, ...props }) => {
    return (
      <div className={cn(
       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
        )}
        {...props}
      />
    )
  })
  OverlayPanelFooter.displayName = "OverlayPanelFooter";




