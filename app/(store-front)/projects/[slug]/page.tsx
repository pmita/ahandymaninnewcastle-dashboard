export const revalidate = 1200;

// REACT
import { Suspense } from "react";
// PACKAGES
import { allProjects } from "contentlayer/generated";
// DATA
import { getProjectByParams } from "@/data/project";
// COMPONENTS
import { Mdx } from "@/components/mdx";


export type ProjectPageParams = {
  params: {
    slug: string
  }

}
export async function generateStaticParams(): Promise<ProjectPageParams["params"][]> {
  return allProjects.map((project) => ({
    slug: project._raw.flattenedPath
  }))
}

export const generateMetadata = ({ params }: ProjectPageParams) => {
  const project = getProjectByParams(params);

  if (!project) return {};

  return {
    metadataBase: `https://example.com/projects/${project.slugAsParams}`,
    title: project?.title,
    description: project?.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  // SERVER LAND
  const project = getProjectByParams(params);

  if (!project) return null;

  return (
    <section className="container flex flex-col justify-center items-center min-h-[90dvh]">
      <Suspense fallback={<p>Loading...</p>}>
        <Mdx code={project.body.code} />
      </Suspense>
    </section>
  )
}