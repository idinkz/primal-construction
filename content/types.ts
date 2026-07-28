export type GridPlacement = {
  /** 1-12 column start (desktop) */
  colStart: number;
  /** column span in 12-col grid */
  colSpan: number;
  /** which band the card sits in — bands are content-height, so cards in
   *  different bands can never collide no matter how wide the viewport gets */
  band: number;
  /** downward stagger within the band, as a % of the card's own width, so the
   *  composition scales proportionally instead of drifting at large widths */
  drop?: number;
};

export type ProjectCardData = {
  slug: string;
  name: string;
  /** small label above the name — e.g. year ("2024") or status ("In Construction") */
  label: string;
  thumb: string;
  thumbAlt: string;
  /** desktop grid placement — mobile collapses to single column */
  placement: GridPlacement;
};

export type Project = ProjectCardData & {
  year: number;
  location: string;
  sqft?: string;
  description?: string[];
  detailImages?: { src: string; alt: string }[];
  /** when false, detail page shows a "coming soon" stub */
  hasDetail: boolean;
};
