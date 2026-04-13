import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Harsh | Visual Storyteller & Photographer",
  description:
    "High-impact photography across weddings, lifestyle, product, and documentary projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} dark scroll-smooth`}
    >
      <body
        className="bg-neutral-950 text-neutral-50 font-sans antialiased selection:bg-neutral-800 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
