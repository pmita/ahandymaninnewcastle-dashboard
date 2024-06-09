"use client"

import { useState, useCallback } from "react";
// COMPONENTS
import { Button, buttonVariants } from "@/components/ui/button";
import { Comments } from "../[id]/_components/comments";
import { ItemInfo } from "../[id]/_components/item-info";
import { 
    OverlayPanelContainer, 
    OverlayPanelDescription, 
    OverlayPanelHeader, 
    OverlayPanelOverlay, 
    OverlayPanelSection, 
    OverlayPanelTitle, 
    OverlayPanelWrapper 
} from "@/components/ui/overlay-panel";
// UTILS
import { cn } from "@/utils/helpers";

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
        <OverlayPanelWrapper>
            <OverlayPanelContainer>
                <OverlayPanelOverlay onClick={onClick} />
                <OverlayPanelSection>
                    <OverlayPanelHeader>
                        <OverlayPanelTitle className="p-4">
                            <Button 
                                className={cn(buttonVariants({ variant: "primary" }))}
                                onClick={onClick}
                            >
                                Close
                            </Button>
                        </OverlayPanelTitle>
                        <ItemInfo
                            fullName={item?.fullName}
                            email={item?.email}
                            mobile={item?.mobile}
                            location={item?.location}
                            additionalInfo={item?.additionalInfo}
                        />
                    </OverlayPanelHeader>
                    <OverlayPanelDescription>
                        <div className="bg-secondary lg:col-span-2 p-4 flex flex-col gap-4">
                            <Comments
                                itemId={item.id}
                                status={item.status}
                                comments={item.comments}
                            />
                        </div>
                    </OverlayPanelDescription>
                </OverlayPanelSection>
            </OverlayPanelContainer>
        </OverlayPanelWrapper>
    )
}