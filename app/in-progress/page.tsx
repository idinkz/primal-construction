import ScatteredGrid from "@/components/ScatteredGrid";
import { inProgress } from "@/content/inProgress";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In Progress — Primal Construction and Consulting",
};

export default function InProgressPage() {
  const items = inProgress.map((c) => ({ card: c }));
  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <ScatteredGrid items={items} />
    </div>
  );
}
