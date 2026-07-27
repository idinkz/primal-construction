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
  // Mobile: simple stacked column. Desktop: 12-col grid with explicit row placements.
  // Each "row unit" is ~40px so a rowOffset of 8 = 320px down.
  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col gap-12 md:hidden">
        {items.map(({ card, href }) => (
          <ProjectCard key={card.slug} card={card} href={href} />
        ))}
      </div>

      {/* Desktop */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gridAutoRows: "40px",
          columnGap: "32px",
        }}
      >
        {items.map(({ card, href }) => {
          // Card height scales with column width (4:3 image + caption), so the
          // row span must scale with colSpan too, or wide cards overflow their
          // allocated rows and throw off the grid container's total height.
          const rowSpan = Math.ceil(card.placement.colSpan * 2.3);
          return (
            <div
              key={card.slug}
              style={{
                gridColumn: `${card.placement.colStart} / span ${card.placement.colSpan}`,
                gridRowStart: card.placement.rowOffset + 1,
                gridRowEnd: `span ${rowSpan}`,
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
