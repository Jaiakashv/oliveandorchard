import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Olive & Orchard Banquet Hall | Luxury Event Venue",
    template: "%s | Olive & Orchard Banquet Hall",
  },
  description:
    "Olive & Orchard Banquet Hall — a premium luxury venue for weddings, receptions, corporate events, and celebrations. Accommodating up to 500 guests with world-class service.",
  keywords: [
    "banquet hall",
    "wedding venue",
    "event hall",
    "luxury venue",
    "reception hall",
    "corporate event venue",
    "Olive Orchard",
  ],
  authors: [{ name: "Olive & Orchard Banquet Hall" }],
  metadataBase: new URL("https://oliveorchard.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://oliveorchard.com",
    siteName: "Olive & Orchard Banquet Hall",
    title: "Olive & Orchard Banquet Hall | Luxury Event Venue",
    description:
      "Premium banquet hall for weddings, receptions, and corporate events. Accommodating up to 500 guests with world-class amenities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olive & Orchard Banquet Hall",
    description: "Luxury event venue for weddings, receptions & corporate events.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
