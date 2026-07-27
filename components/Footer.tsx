"use client";

import { usePathname } from "next/navigation";
import { BRAND } from "@/content/nav";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const year = new Date().getFullYear();
  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-6 pb-4 md:px-10 md:pb-6">
      <p
        className={`font-nav text-[10px] opacity-70 ${isHome ? "text-white" : ""}`}
        style={isHome ? { textShadow: "0 1px 6px rgba(0,0,0,0.45)" } : undefined}
      >
        © {year} {BRAND.full}
      </p>
    </footer>
  );
}
