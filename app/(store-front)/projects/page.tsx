// NEXT
import { type Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// COMPONENTS
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
// PACKAGES
import { allProjects } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com/projects'),
  title: 'Projects Page',
  description: 'Showcasing some of our projects across various categories such as painting, tilling, and miscellaneous',
}

export default async function ProjectsPage() {
  // SERVER LAND
  const projects = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="container flex flex-col justify-start items-center pt-10 px-10 min-h-[90dvh]">
      <h2 className="font-font font-poppins text-xl text-primary text-center">Some of our Work</h2>
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 auto-rows-[550px] justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {projects.map((project) => (
              <Link href={project?._raw.flattenedPath} key={project?._raw.flattenedPath} className="w-full h-full">
                <Card className="duration-500 hover:scale-105 hover:shadow-xl w-full h-full">
                  <CardHeader className="p-0 w-full h-[60%] sm:h-[70%] overflow-hidden">
                    <Image
                      src={project?.thumbnailImg ?? '/images/placeholder.jpg'}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      objectFit="cover"
                      objectPosition="100% 50%"
                      alt={project?.thumbnailImgAlt ?? 'Project Thumbnail'}
                    />
                  </CardHeader>
                  <CardFooter className="flex flex-col justify-start items-center h-[40%] sm:h-[30%] pt-5 gap-2.5 bg-secondary">
                    <h3 className="text-lg text-primary font-bold font-poppins">{project?.title}</h3>
                    <p className="text-primary font-roboto">{project?.description}</p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
        </section>
    </main>
  )
}