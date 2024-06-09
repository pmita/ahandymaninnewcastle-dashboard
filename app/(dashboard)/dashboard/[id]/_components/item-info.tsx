// COMPONENTS
import { Card, CardDescription } from "@/components/ui/card";

export type ItemInfoProps = {
  fullName: string;
  email: string;
  mobile: string;
  location?: string;
  additionalInfo?: string;
}

export const ItemInfo = ({
  fullName,
  email,
  mobile,
  location,
  additionalInfo,
}: ItemInfoProps) => {

  return (
    <div className="rounded-lg bg-secondary flex flex-col justify-center items-stretch p-2 lg:p-4">
      <Card>
        <CardDescription>
          <h1>Name: {fullName}</h1>
          <h1>Email: {email}</h1>
          <h1>Mobile: {mobile}</h1>
          {location && <h1>Location: {location}</h1>}
          {additionalInfo && <p>Details: {additionalInfo}</p>}
        </CardDescription>
      </Card>
    </div>
  )
}