// REACT
import React from 'react';
// UTILS
import { cn } from "@/utils/helpers";

export const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...props}, ref) => {
    return (
        <table 
            ref={ref}
            className={cn(
                "min-w-full text-sm mt-4 p-4",
                className
            )}
            {...props}
        />
    )
});
Table.displayName="Table"

export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props}, ref) => {
    return (
        <thead 
            ref={ref}
            className={cn("ltr:text-left rtl:text-right", className)}
            {...props}
        />
    )
});
TableHeader.displayName="TableHeader"

export const TableHead = React.forwardRef<HTMLTableCellElement, React.HTMLAttributes<HTMLTableCellElement>>(({ className, ...props}, ref) => {
    return (
        <th 
            ref={ref}
            className={cn("text-bold ltr:text-left rtl:text-right px-4 py-2", className)}
            {...props}
        />
    )
});
TableHead.displayName="TableHead"


export const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props}, ref) => {
    return (
        <tbody 
            ref={ref}
            className={cn(className)}
            {...props}
        />
    )
});
TableBody.displayName="TableBody"

export const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({ className, ...props}, ref) => {
    return (
        <tr 
            ref={ref}
            className={cn("border-b-[3px] bg-gray", className)}
            {...props}
        />
    )
});
TableRow.displayName="TableRow"

export const TableCell = React.forwardRef<HTMLTableCellElement, React.HTMLAttributes<HTMLTableCellElement>>(({ className, ...props}, ref) => {
    return (
        <td 
            ref={ref}
            className={cn(
                "whitespace-nowrap px-4 py-2 font-medium",
                className
            )}
            {...props}
        />
    )
});
TableCell.displayName="TableCell"

