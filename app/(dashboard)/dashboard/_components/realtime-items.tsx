"use client"

// NEXT
import { useSearchParams } from "next/navigation"
// REACT
import { useState, useCallback, useEffect } from "react"
// COMPONENTS
import { Button, buttonVariants } from "@/components/ui/button"
import { ToggleLayout } from "./toggle-layout"
// FIREBASE
import { firestore, fromMillis } from "@/firebase/client/config"
// UTILS
import { cn } from "@/utils/helpers"
// TYPES
import { IFirestoreItem } from "@/types/firestore"

const TEN_MORE_ITEMS = 10;

export const RealtimeItems = ({ data }: { data: IFirestoreItem[] | null } ) => {
    // STATE && VARIABLES
    const [items, setItems] = useState<IFirestoreItem[] | null>(data);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState<Error | string | null>(null);
    const searchParams = useSearchParams();
    const status = searchParams.get('status');

    if (!items || !items.length) return null;

    // USE EFFECTS
    useEffect(() => {
        setItems(data);
    }, [status]);

    // EVENTS
    const loadMoreItems = useCallback(async () => {
        setLoading(true);
        setError(null);

        const lastItem = items[items.length - 1];
        const lastItemTimestamp = typeof lastItem?.createdAt === 'number' 
            ? fromMillis(lastItem.createdAt)
            : lastItem?.createdAt;

        try {
            const additionalItemsRef = firestore.collection('queries')
            .orderBy('createdAt', 'desc')
            .startAfter(lastItemTimestamp)
            .limit(TEN_MORE_ITEMS)
            
            const newItems = await additionalItemsRef.get();
            const additionalItems = newItems.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                createdAt: doc.data()?.createdAt ?? null,
                lastUpdatedAt: doc.data()?.lastUpdated ?? null,
            })) as unknown as IFirestoreItem[];

            setItems([...items, ...additionalItems]);

            if (additionalItems.length < TEN_MORE_ITEMS) {
                setHasMore(false);
            }


        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    }, [items]);

    return (
        <>
            <ToggleLayout data={items} />

            <section className="flex flex-col justify-center items-center pt-5">
                {hasMore 
                ? (
                    <Button
                        className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), "text-center")}
                        onClick={loadMoreItems}
                        disabled={loading || !hasMore}
                    >
                        {loading ? 'Loading...' : 'Load More'}
                    </Button>
                ): (
                    <p className="text-center text-neutral">No more items to load</p>
                )}
            </section>    
        </>
    )
}
