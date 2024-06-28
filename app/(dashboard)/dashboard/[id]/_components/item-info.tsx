// COMPONENTS
import { Card, CardDescription } from "@/components/ui/card";
import { IFirestoreItem } from "@/types/firestore";

export const ItemInfo = ({
  itemData
}: { itemData: IFirestoreItem}) => {

  return (
    <div className="rounded-lg bg-secondary flex flex-col justify-center items-stretch p-2 lg:p-4">
      <Card>
        <CardDescription>
          <h1>Name: {itemData?.fullName}</h1>
          <h1>Email: {itemData?.email}</h1>
          <h1>Mobile: {itemData?.mobile}</h1>
          {itemData.location && <h1>Location: {itemData.location}</h1>}
          {itemData.additionalInfo && <p>Details: {itemData.additionalInfo}</p>}
        </CardDescription>
      </Card>
    </div>
  )
}