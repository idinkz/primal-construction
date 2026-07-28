import ProjectCard from "./ProjectCard";
import type { ProjectCardData } from "@/content/types";

type Item = {
  card: ProjectCardData;
  href?: string;
};

type Props = {
  items: Item[];
};

export default function ScatteredGrid({ items }: Props) {
  // Mobile: simple stacked column. Desktop: 12-col grid of content-height bands.
  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col gap-12 md:hidden">
        {items.map(({ card, href }) => (
          <ProjectCard key={card.slug} card={card} href={href} />
        ))}
      </div>

      {/* Desktop — cards terrace across content-height bands, the way the
          houses themselves step down a slope. Bands keep neighbours from ever
          colliding; the stagger inside each band does the composing. */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          columnGap: "32px",
          rowGap: "clamp(32px, 3vw, 72px)",
        }}
      >
        {items.map(({ card, href }) => {
          const { colStart, colSpan, band, drop } = card.placement;
          return (
            <div
              key={card.slug}
              style={{
                gridColumn: `${colStart} / span ${colSpan}`,
                gridRow: band,
                alignSelf: "start",
                marginTop: drop ? `${drop}%` : undefined,
              }}
            >
              <ProjectCard card={card} href={href} />
            </div>
          );
        })}
      </div>
    </>
  );
}
