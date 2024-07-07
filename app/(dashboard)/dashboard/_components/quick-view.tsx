"use client"

import { useState, useCallback, useRef, useEffect } from "react";
// COMPONENTS
import { Button, buttonVariants } from "@/components/ui/button";
import { Comments } from "../[id]/_components/comments";
import { ItemInfo } from "../[id]/_components/item-info";
// HOOKS
import { useCollectionSnapshot } from "@/hooks/useCollectionSnapshot";
// UTILS
import { cn } from "@/utils/helpers";
// TYPES
import { IFirestoreItem } from "@/types/firestore";
import { Dialog, DialogHeader, DialogPanel, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type QuickViewProps = {
    item: IFirestoreItem
}

type QuickViewDialogProps = {
    item: IFirestoreItem
    isOpen: boolean
    toggleDialog: (option: boolean) => void
}

export const QuickView = ({ item }: QuickViewProps) => {
    // STATE && VARIABLES
    const [isOpen, setIsOpen]= useState(false);

    // EVENTS
    const toggleDialog = useCallback((option: boolean) => {
        setIsOpen(option)
    }, [setIsOpen])

    return (
        <>
            {isOpen && (
                <QuickViewDialog item={item} isOpen={isOpen} toggleDialog={toggleDialog} />
            )}
            <Button 
                className={cn(buttonVariants({ variant: "primaryOutlined", size: "sm" }))}
                onClick={() => toggleDialog(true)}
            >
                Quick View
            </Button>
        </>
    )
}

export const QuickViewDialog = ({ item, isOpen, toggleDialog }: QuickViewDialogProps) => {
    // STATE && VARIABLES
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { data: realtimeComments } = useCollectionSnapshot(`queries/${item.id}/comments`, { sort: 'asc' });

    // USE EFFECTS
    useEffect(() => {
        if(isOpen) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [isOpen,dialogRef])

    return (
        <Dialog ref={dialogRef}>
            <DialogPanel>
                <DialogHeader>
                    <DialogTitle className="p-4">
                        <Button 
                            className={cn(buttonVariants({ variant: "primary" }))}
                            onClick={() => toggleDialog(false)}
                        >
                            Close
                        </Button>
                    </DialogTitle>
                    <ItemInfo itemData={item as IFirestoreItem} />
                </DialogHeader>
                <DialogDescription>
                    <div className="bg-secondary lg:col-span-2 p-4 flex flex-col gap-4">
                        <Comments
                            itemId={item.id}
                            status={item.status}
                            comments={realtimeComments}
                            canAddComments={true}
                        />
                    </div>
                </DialogDescription>
            </DialogPanel>
        </Dialog>
    )
}