import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Hardcode URL domain kamu di sini (ganti dengan domain asli)
  metadataBase: new URL("https://suluk.idrisiyyah.com"), // atau hapus baris ini jika pakai URL relatif
  title: {
    default: "Suluk - Teman Ibadah Harianmu",
    template: "%s | Suluk",
  },
  description: "Refleksi diri, arah kiblat, dan sedekah harian dalam satu genggaman. Aplikasi spiritual Muslim modern dari Indonesia yang membantu Anda menjaga konsistensi ibadah setiap hari.",
  keywords: ["Suluk", "aplikasi muslim", "aplikasi islam", "ibadah harian", "qibla", "arah kiblat", "Al-Quran", "masjid terdekat", "sedekah", "muhasabah", "aplikasi spiritual", "aplikasi muslim indonesia", "quran online", "panduan sholat"],
  authors: [{ name: "Suluk Team" }],
  creator: "Suluk Team",
  publisher: "Suluk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Suluk",
    title: "Suluk - Teman Ibadah Harianmu",
    description: "Refleksi diri, arah kiblat, dan sedekah harian dalam satu genggaman. Aplikasi spiritual Muslim modern dari Indonesia.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Suluk - Teman Ibadah Harianmu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suluk - Teman Ibadah Harianmu",
    description: "Refleksi diri, arah kiblat, dan sedekah harian dalam satu genggaman. Aplikasi spiritual Muslim modern dari Indonesia.",
    images: ["/logo.png"],
    creator: "@sulukapp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  category: "Lifestyle",
  classification: "Aplikasi Muslim",
  other: {
    "application-name": "Suluk",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Suluk",
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030213" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
