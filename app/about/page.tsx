import { aboutParagraphs, alumni, team } from "@/content/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Primal Construction and Consulting",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="space-y-6 text-[15px] leading-relaxed">
        {aboutParagraphs.map((p, i) => (
          <p key={i} className="serif-title not-italic">
            {p}
          </p>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="font-caption mb-5 opacity-70">Our Team</h2>
        <ul className="space-y-1 text-[14px]">
          {team.map((name) => (
            <li key={name} className="serif-title not-italic">
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-caption mb-5 opacity-70">Our Alumni</h2>
        <ul className="space-y-1 text-[14px]">
          {alumni.map((name) => (
            <li key={name} className="serif-title not-italic">
              {name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
