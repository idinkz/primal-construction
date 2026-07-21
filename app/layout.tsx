import type { Metadata } from "next";
import { Roboto, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Primal Construction and Consulting",
  description: "Primal Construction and Consulting — Modern Houses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
