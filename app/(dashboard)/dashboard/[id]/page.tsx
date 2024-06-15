// DATA
import { getCollectionData, getDocumentData } from "@/data/firestore";
// COMPONENTS
import { ItemInfo } from "./_components/item-info";
import { RealTimeContainer } from "./_components/realtime-container";
// TYPES
import { queryDocumentType } from "@/types/firestore";

interface DashboardItemPageProps {
  params: {
    id: string;
  }
}

export default async function ItemPage({ params }: DashboardItemPageProps) {
  // SERVER LAND
  const { id: itemId } = params;
  const itemData = await getDocumentData('queries', itemId);
  const itemComments = await getCollectionData(`queries/${itemId}/comments`, { sort: 'desc' })

  if (!itemData) return null;

  return (
    <section className="flex flex-col justify-center items-stretch gap-4 p-8">
      <div className="grid grid-cols-1 grid-rows-[250px] gap-4 lg:grid-cols-2 lg:gap-8">
          <ItemInfo
              fullName={itemData?.fullName}
              email={itemData?.email}
              mobile={itemData?.mobile}
              location={itemData?.location}
              additionalInfo={itemData?.additionalInfo}
            />
        <RealTimeContainer item={itemData as queryDocumentType} />
      </div>
    </section>
  )
}