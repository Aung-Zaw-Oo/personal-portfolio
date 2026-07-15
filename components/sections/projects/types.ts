export type ProjectCategory = "saas" | "ecommerce" | "fullstack" | "frontend";

export interface Project {
  id: number;

  title: string;

  category: ProjectCategory;

  categoryLabel: string;

  year: string;

  description: string;

  image: string;

  tech: string[];

  liveUrl: string;

  githubUrl?: string;
}
