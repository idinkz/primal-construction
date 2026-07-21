"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content/nav";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const pathname = usePathname();

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ background: "var(--background)" }}
    >
      <nav
        className="flex h-full flex-col items-center justify-center gap-7"
        aria-label="Mobile primary"
      >
        {navLinks.map((link) => {
          const active =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`font-nav text-[14px] tracking-[0.18em] transition-opacity ${
                active ? "opacity-100" : "opacity-70"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
