"use client"

import { useState, useCallback } from "react";
// COMPONENTS
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/aside-dialog"
import { Status } from "@/components/status";
import { FormatedTime } from "@/components/formated-time";
import { Button, buttonVariants } from "@/components/ui/button";
// UTILS
import { cn } from "@/utils/helpers";
import { Comments } from "../dashboard/[id]/_components/comments";
import { ItemStatus } from "../dashboard/[id]/_components/item-status";
import { ItemInfo } from "../dashboard/[id]/_components/item-info";

export const QuickViewButton = ({ item }: { item: any }) => {
    // STATE && VARIABLES
    const [isOpen, setIsOpen]= useState(false);

    // EVENTS
    const handleClick= useCallback(() => 
        setIsOpen(!isOpen)
    , [isOpen, setIsOpen]);

    return (
        <>
            {isOpen && (
                <QuickViewDialog item={item} onClick={handleClick} />
            )}
            <Button 
                className={cn(buttonVariants({ variant: "primaryOutlined", size: "sm" }))}
                onClick={handleClick}
            >
                Quick View
            </Button>
        </>
    )
}


export const QuickViewDialog = ({ item, onClick }: { item: any, onClick: () => void}) => {
    return (
        <DialogContent className="bg-secondary">
            <DialogHeader>
                <DialogTitle className="flex flex-row justify-between items-center p-2">
                    <Button 
                        className={cn(buttonVariants({ variant: "primary" }))}
                        onClick={onClick}
                    >
                        Close
                    </Button>
                </DialogTitle>
                <ItemInfo
                    fullName={item?.fullName}
                    email={item?.email}
                    mobile={item?.mobile}
                    location={item?.location}
                    additionalInfo={item?.additionalInfo}
                />
            </DialogHeader>
            <DialogDescription>
                <div className="bg-secondary lg:col-span-2 p-4 flex flex-col gap-4">
                    <Comments
                        itemId={item.id}
                        status={item.status}
                        comments={item.comments}
                    />
                </div>
            </DialogDescription>
        </DialogContent>
    )
}