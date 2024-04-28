// PACKAGES
import { allProjects } from "@/.contentlayer/generated";

export function getProjectByParams(params: { slug: string }) {
  const project = allProjects.find((project) => project.slugAsParams === params.slug);

  if (!project) return null;

  return project;
}