// NEXT
import { MetadataRoute } from "next";
// CONTENTLAYER
import { allProjects } from "@/.contentlayer/generated";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const projectsEntries: MetadataRoute.Sitemap = allProjects.map((project) => ({ 
    url: `${process.env.NEXT_PUBLIC_APP_URL}/${project._raw.flattenedPath}`,
    lastModified: new Date(project?.date).toISOString(),
    // lastModified: new Date(project._raw.updatedAt).toISOString(),
    // changeFrequency: 'daily',
    // priority: number
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/projects`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`,
    },
    ...projectsEntries
  ]
}