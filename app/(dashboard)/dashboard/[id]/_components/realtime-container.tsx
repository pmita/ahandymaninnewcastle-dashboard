"use client"

// HOOKS
import { useDocumentSnapshot } from "@/hooks/useDocumentSnapshot";
import { ItemStatus } from "./item-status";
import { Comments } from "./comments";
// TYPES
import { queryDocumentType } from "@/types/firestore"

export const RealTimeContainer = ({ item }: { item: queryDocumentType }) => {
  // STATE && VARIABLES
  const { document } = useDocumentSnapshot('queries', item.id);
  const itemData = document || item;

  return (
    <>
      <div className="rounded-lg bg-secondary flex flex-col justify-center items-stretch gap-4 p-2 lg:p-4">
        <ItemStatus id={item.id} status={itemData?.status} />
      </div>
      <div className="rounded-lg bg-secondary lg:col-span-2 p-4 flex flex-col gap-4 overflow-y-scroll">
        <Comments 
          itemId={itemData.id} 
          status={itemData.status} 
          comments={itemData.comments} 
          canAddComments={true}
        />
      </div>
    </>
  )
}