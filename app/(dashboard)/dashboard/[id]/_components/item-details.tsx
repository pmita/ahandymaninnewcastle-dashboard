"use client"

// COMPONENTS
import { ItemStatus } from "./item-status";
// HOOKS
import { useDocumentSnapshot } from "@/hooks/useDocumentSnapshot";
// TYPES
import { queryDocumentType } from "@/types/firestore"



export const ItemDetails = ({ item }: { item: queryDocumentType }) => {
  // STATE && VARIABLES
  const { document } = useDocumentSnapshot('queries', item.id);
  const itemData = document || item;
  return (
    <>
      <div className="reounded-lg bg-secondary flex flex-col justify-center items-stretch gap-4 p-2 lg:p-4">
        <ItemStatus id={item.id} status={itemData?.status} />
      </div>
    </>
  )
}