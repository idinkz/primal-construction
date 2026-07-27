"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, navLinks } from "@/content/nav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="flex items-start justify-between px-6 pt-5 md:px-10 md:pt-9">
          <Link
            href="/"
            className="wordmark pointer-events-auto inline-block select-none text-center leading-tight"
            aria-label={BRAND.full}
            style={
              isHome
                ? { color: "#ffffff", textShadow: "0 1px 10px rgba(0,0,0,0.45)" }
                : undefined
            }
          >
            <span className="block">{BRAND.line1}</span>
            <span
              className="block"
              style={{ fontSize: "0.65em", letterSpacing: "0.32em" }}
            >
              {BRAND.line2}
            </span>
          </Link>

          <nav className="pointer-events-auto hidden md:block" aria-label="Primary">
            <ul className="flex flex-col items-end gap-[6px]">
              {navLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`font-nav transition-opacity hover:opacity-100 ${
                        active ? "opacity-100" : "opacity-70"
                      } ${isHome ? "text-white" : ""}`}
                      style={
                        isHome
                          ? { textShadow: "0 1px 6px rgba(0,0,0,0.45)" }
                          : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="pointer-events-auto relative h-8 w-8 md:hidden"
          >
            <span
              className={`absolute left-1 right-1 top-[12px] h-px transition-transform ${
                isHome && !menuOpen ? "bg-white" : "bg-black"
              } ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-1 right-1 top-[18px] h-px transition-transform ${
                isHome && !menuOpen ? "bg-white" : "bg-black"
              } ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
