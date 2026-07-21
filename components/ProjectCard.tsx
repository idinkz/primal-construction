import Image from "next/image";
import Link from "next/link";
import type { ProjectCardData } from "@/content/types";

type Props = {
  card: ProjectCardData;
  href?: string;
};

export default function ProjectCard({ card, href }: Props) {
  const inner = (
    <>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
        <Image
          src={card.thumb}
          alt={card.thumbAlt}
          fill
          sizes="(max-width: 768px) 100vw, 35vw"
          className="object-cover"
        />
      </div>
      <div className="mt-2">
        <p className="font-caption opacity-70">{card.label}</p>
        <p className="serif-title text-[16px] leading-tight">{card.name}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="block group">
        {inner}
      </Link>
    );
  }
  return <div>{inner}</div>;
}
