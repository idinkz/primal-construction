import Image from "next/image";
import { aboutParagraphs, aboutPhoto } from "@/content/about";
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

      <div className="mt-20">
        <Image
          src={aboutPhoto.src}
          alt={aboutPhoto.alt}
          width={aboutPhoto.width}
          height={aboutPhoto.height}
          sizes="(max-width: 768px) 100vw, 680px"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
