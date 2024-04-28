// COMPONENTS
import { Card, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsPageLoading() {
  return (
    <main className="container flex flex-col justify-start items-center pt-10 px-10 min-h-[90dvh]">
      <h2 className="font-font font-poppins text-xl text-primary text-center">Some of our Work</h2>
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 auto-rows-[500px] justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <Card className="duration-500 hover:scale-105 hover:shadow-xl w-full h-full">
            <Skeleton className={"w-full h-[60%] sm:h-[70%]"} />
            <CardFooter className="flex flex-col justify-start items-center h-[40%] sm:h-[30%] pt-5 gap-2.5 bg-secondary">
                <Skeleton className="w-3/4 h-5" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
            </CardFooter>
          </Card>
          <Card className="duration-500 hover:scale-105 hover:shadow-xl w-full h-full">
            <Skeleton className={"w-full h-[60%] sm:h-[70%]"} />
            <CardFooter className="flex flex-col justify-start items-center h-[40%] sm:h-[30%] pt-5 gap-2.5 bg-secondary">
                <Skeleton className="w-3/4 h-5" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
            </CardFooter>
          </Card>
          <Card className="duration-500 hover:scale-105 hover:shadow-xl w-full h-full">
            <Skeleton className={"w-full h-[60%] sm:h-[70%]"} />
            <CardFooter className="flex flex-col justify-start items-center h-[40%] sm:h-[30%] pt-5 gap-2.5 bg-secondary">
                <Skeleton className="w-3/4 h-5" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
            </CardFooter>
          </Card>
        </section>
    </main>
  )
}