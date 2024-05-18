
// COMPONENTS
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Status } from "@/components/status";
import { FormatedTime } from "@/components/formated-time";
// UTILS
import { cn, truncate } from "@/utils/helpers";

export const GridContainer = ({ data}: { data: any }) => {
  return (
    <div className="bg-secondary grid grid-cols-1 grid-rows-[350px] gap-4 lg:grid-cols-2 lg:gap-8 min-h-[100dvh] outline-dashed">
      {data.map((item: any) => (
        <Card key={item.id}>
          <CardHeader className="flex-row justify-between items-center">
              <Status status={item.status} />
              <FormatedTime time={item.createdAt} />
          </CardHeader>
          <CardContent>
            {truncate(item.additionalInfo, 150)}
          </CardContent>
          <CardFooter className="self-end flex-col justify-center items-stretch gap-2">
            <Button
              className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}
            >
              Edit
            </Button>
            <Button
              className={cn(buttonVariants({ variant: 'primaryOutlined', size: 'sm' }))}
            >
              Quick View
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}