import ScatteredGrid from "@/components/ScatteredGrid";
import { projects } from "@/content/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Primal Construction and Consulting",
};

export default function ProjectsPage() {
  const items = projects.map((p) => ({
    card: p,
    href: `/projects/${p.slug}`,
  }));

  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <ScatteredGrid items={items} />
    </div>
  );
}
