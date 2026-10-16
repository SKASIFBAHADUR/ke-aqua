import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keaquafarms.com"),
  title: {
    default: "KE Aqua Farms | Practical Aquaculture & Scientific Farming",
    template: "%s | KE Aqua Farms",
  },
  description:
    "KE Aqua Farms combines 30 acres of active commercial shrimp farming, Aqua Pulse laboratory diagnostics, smart technology adoption, and hands-on practical training in Krishna District, AP.",
  keywords: [
    "KE Aqua Farms",
    "aquaculture",
    "shrimp farming",
    "practical aquaculture training",
    "aquaculture farm",
    "scientific farm monitoring",
    "aquaculture technology",
    "water quality monitoring",
    "shrimp health",
    "farmer development",
    "Andhra Pradesh aquaculture",
  ],
  authors: [{ name: "KE Aqua Group" }],
  creator: "KE Aqua Farms",
  publisher: "KE Aqua Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "KE Aqua Farms | Practical Aquaculture & Scientific Farming",
    description:
      "Combining 30 acres of commercial shrimp farming, Aqua Pulse laboratory diagnostics, smart technology adoption, and hands-on practical training in Krishna District, AP.",
    url: "https://keaquafarms.com",
    siteName: "KE Aqua Farms",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/hero-farm-pond.jpg",
        width: 1200,
        height: 630,
        alt: "KE Aqua Farms 30-Acre Commercial Growout Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KE Aqua Farms | Practical Aquaculture & Scientific Farming",
    description:
      "Combining 30 acres of commercial shrimp farming, Aqua Pulse lab diagnostics, smart tech, and practical training.",
    images: ["/assets/hero-farm-pond.jpg"],
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
  icons: {
    icon: "/assets/ke-logo-emblem.png",
    shortcut: "/assets/ke-logo-emblem.png",
    apple: "/assets/ke-logo-emblem.png",
  },
};

// JSON-LD Structured Data Schema
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://keaquafarms.com/#organization",
      "name": "KE Aqua Farms",
      "alternateName": "KE Aqua Group",
      "url": "https://keaquafarms.com",
      "logo": "https://keaquafarms.com/assets/ke-logo-emblem.png",
      "slogan": "The Key to Practical Aquaculture",
      "description":
        "KE Aqua Farms is a commercial demonstration farm and Farmer Development Initiative combining real commercial farming, laboratory diagnostics, and smart technology.",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://keaquafarms.com/#localbusiness",
      "name": "KE Aqua Farms Commercial Facility",
      "url": "https://keaquafarms.com",
      "image": "https://keaquafarms.com/assets/hero-farm-pond.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "D. No. 17-129, Ismailbegpeta, Koduru",
        "addressLocality": "Krishna District",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "521328",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.05,
        "longitude": 80.89,
      },
      "priceRange": "$$",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[var(--color-primary)] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        <Header />
        <div className="flex-grow flex flex-col pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
