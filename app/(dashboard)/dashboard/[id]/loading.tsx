// COMPONENTS
import { Skeleton } from "@/components/ui/skeleton";

export default async function ItemPageLoading() {
  return (
    <section className="flex flex-col justify-center items-stretch gap-4 p-8">
      <div className="grid grid-cols-1 grid-rows-[250px] gap-4 lg:grid-cols-2 lg:gap-8">
        <Skeleton className="h-full w-full bg-primary" />
        <Skeleton className="h-full w-full bg-primary" />
        <div className="rounded-lg lg:col-span-2 h-[20dvh] w-[100%]">
          <Skeleton className="h-full w-full bg-primary" />
        </div>
      </div>
  </section>
  )
}