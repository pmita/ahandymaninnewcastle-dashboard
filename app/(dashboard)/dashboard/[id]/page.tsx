
// DATA
import { getCollectionDocument } from "@/data/firestore";
// COMPONENTS
import { ItemDetails } from "./_components/item-details";
import { ItemInfo } from "./_components/item-info";
import { Comments } from "./_components/comments";
// TYPES
import { queryDocumentType } from "@/types/firestore";

interface DashboardItemPageProps {
  params: {
    id: string;
  }
}

export default async function ItemPage({ params }: DashboardItemPageProps) {
  // SERVER LAND
  const itemData = await getCollectionDocument('queries', params.id);

  if (!itemData) return null;

  return (
    <section className="flex flex-col justify-center items-stretch gap-4 p-8">
      <div className="grid grid-cols-1 grid-rows-[250px] gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-lg bg-secondary flex flex-col justify-center items-stretch p-2 lg:p-4">
          <ItemInfo
              fullName={itemData?.fullName}
              email={itemData?.email}
              mobile={itemData?.mobile}
              location={itemData?.location}
              additionalInfo={itemData?.additionalInfo}
            />
        </div>
        <ItemDetails item={itemData as queryDocumentType} />
        <Comments status={itemData.status} comments={itemData.comments} />
      </div>
    </section>
  )
}