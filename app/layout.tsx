import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suluk - Teman Ibadah Harianmu",
  description: "Refleksi diri, arah kiblat, dan sedekah harian dalam satu genggaman. Aplikasi spiritual Muslim modern dari Indonesia.",
  keywords: ["Suluk", "aplikasi muslim", "ibadah", "qibla", "Al-Quran", "masjid", "sedekah", "muhasabah"],
  authors: [{ name: "Suluk Team" }],
  openGraph: {
    title: "Suluk - Teman Ibadah Harianmu",
    description: "Refleksi diri, arah kiblat, dan sedekah harian dalam satu genggaman.",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
