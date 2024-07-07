// COMPONENTS
import { Skeleton } from '@/components/ui/skeleton';


export default async function DashboardLoadingPage({ searchParams }: { searchParams: any }) {
  return (
    <>
      <section className="flex flex-row justify-between items-stetch flex-wrap">
        <div className="flex flex-row justify-start items-center gap-2">
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-20 h-8" />
        </div>
        <div className="flex flex-row justify-start items-center">
          <Skeleton className="w-8 h-8" />
          <Skeleton className="w-8 h-8" />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center pt-5">
        <div className="grid grid-cols-1 auto-rows-[285px] gap-4 lg:grid-cols-2 lg:gap-8 mt-4">
          <Skeleton className="w-full h-72" />
          <Skeleton className="w-full h-72" />
          <Skeleton className="w-full h-72" />
          <Skeleton className="w-full h-72" />
        </div>
      </section>
    </>
  )
}