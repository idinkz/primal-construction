import { BRAND } from "@/content/nav";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-6 pb-4 md:px-10 md:pb-6">
      <p className="font-nav text-[10px] opacity-70">
        © {year} {BRAND.full}
      </p>
    </footer>
  );
}
