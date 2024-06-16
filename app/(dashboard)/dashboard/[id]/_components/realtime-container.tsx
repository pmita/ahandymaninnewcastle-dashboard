"use client"

// COMPONENTS
import { ItemStatus } from "./item-status";
import { Comments } from "./comments";
// HOOKS
import { useDocumentSnapshot } from "@/hooks/useDocumentSnapshot";
import { useCollectionSnapshot } from "@/hooks/useCollectionSnapshot";
// TYPES
import { firestoreComment, queryDocumentType } from "@/types/firestore"



export const RealTimeContainer = ({ item, comments }: { item: queryDocumentType, comments: firestoreComment[] }) => {
  // STATE && VARIABLES
  const { data: realtimeItem } = useDocumentSnapshot('queries', item.id);
  const { data: realtimeComments } = useCollectionSnapshot(`queries/${item.id}/comments`, { sort: 'asc' });
  const itemData = realtimeItem || item;
  const commentsData = realtimeComments || comments;

  return (
    <>
      <div className="rounded-lg bg-secondary flex flex-col justify-center items-stretch gap-4 p-2 lg:p-4">
        <ItemStatus id={item.id} status={itemData?.status} />
      </div>
      <div className="rounded-lg bg-secondary lg:col-span-2 p-4 flex flex-col gap-4 overflow-y-scroll">
        <Comments 
          itemId={itemData.id} 
          status={itemData.status} 
          comments={commentsData} 
          canAddComments={true}
        />
      </div>
    </>
  )
}