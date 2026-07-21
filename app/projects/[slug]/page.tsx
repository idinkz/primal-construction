import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectMap, projects } from "@/content/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projectMap[slug];
  if (!project) return { title: "Project — Primal Construction and Consulting" };
  return { title: `${project.name} — Primal Construction and Consulting` };
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = projectMap[slug];
  if (!project) notFound();

  return (
    <article className="pb-24 pt-32 md:pb-32 md:pt-40">
      <header className="mx-auto max-w-[680px] px-6">
        <h1 className="serif-title text-[28px] md:text-[34px]">{project.name}</h1>
        <p className="font-caption mt-3 opacity-70">
          {project.year} · {project.location}
          {project.sqft ? ` · ${project.sqft}` : ""}
        </p>

        {project.hasDetail && project.description ? (
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed">
            {project.description.map((p, i) => (
              <p key={i} className="serif-title not-italic">
                {p}
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-10 serif-title text-[18px] opacity-70">Coming soon.</p>
        )}
      </header>

      {project.hasDetail && project.detailImages?.length ? (
        <div className="mt-16 space-y-12 md:mt-24 md:space-y-20">
          {project.detailImages.map((image, i) => (
            <div
              key={image.src}
              className="relative mx-auto w-full max-w-[1600px]"
              style={{ aspectRatio: "16 / 9" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                priority={i === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : null}

      <div className="mx-auto mt-20 max-w-[680px] px-6">
        <Link href="/projects" className="font-nav opacity-70 hover:opacity-100">
          ← All projects
        </Link>
      </div>
    </article>
  );
}
