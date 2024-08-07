// NEXT
import Link from "next/link"
// COMPONENTS
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Status } from "@/components/status";
import { FormatedTime } from "@/components/formated-time";
import { QuickView } from "./quick-view";
// UTILS
import { cn, truncate } from "@/utils/helpers";
// TYPES
import { IFirestoreItem } from "@/types/firestore";

export const GridContainer = ({ data }: { data: IFirestoreItem[] | null }) => {

  if (!data) return null;
  
  return (
    <div className="grid grid-cols-1 auto-rows-[285px] gap-4 lg:grid-cols-2 lg:gap-8 mt-4">
      {data.map((item: IFirestoreItem) => (
        <Card key={item.id} className="bg-secondary flex flex-col justify-center items-stretch">
          <CardHeader className="flex-1 flex-row justify-between items-center">
              <Status status={item.status} />
              <FormatedTime time={item.createdAt} />
          </CardHeader>
          {item?.additionalInfo && (
            <CardContent className="flex-1">
            {truncate(item.additionalInfo, 150)}
          </CardContent>
          )}
          <CardFooter className="flex-1 flex-col justify-center items-stretch gap-2">
            <Link 
                className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}
                href={`/dashboard/${item.id}`}
            >
                Edit
            </Link>
            <QuickView item={item} />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}