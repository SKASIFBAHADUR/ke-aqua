import { Hero } from "@/components/sections/Hero";
import { AboutStorySection } from "@/components/sections/AboutStorySection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { PracticeShowcaseSection } from "@/components/sections/PracticeShowcaseSection";
import { ConversionSection } from "@/components/sections/ConversionSection";
import { CaseStudiesSection } from "@/components/sections/HomepageSections";
import { FounderPreviewSection } from "@/components/sections/FounderPreviewSection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KE Aqua Farms | Practical Aquaculture Ecosystem',
  description: 'An integrated aquaculture ecosystem combining real commercial farming, scientific diagnostics, practical training, and responsible seafood practices.',
  alternates: {
    canonical: 'https://keaquafarms.com',
  },
  openGraph: {
    title: 'KE Aqua Farms | Practical Aquaculture Ecosystem',
    description: 'An integrated aquaculture ecosystem combining real commercial farming, scientific diagnostics, practical training, and responsible seafood practices.',
    url: 'https://keaquafarms.com',
    siteName: 'KE Aqua Farms',
    type: 'website',
  }
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KE Aqua Farms',
    image: 'https://keaquafarms.com/assets/ke-logo-emblem.png',
    '@id': 'https://keaquafarms.com',
    url: 'https://keaquafarms.com',
    telephone: '+917661966922',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'D. No. 17-129, Ismailbegpeta, Koduru',
      addressLocality: 'Krishna District',
      addressRegion: 'Andhra Pradesh',
      postalCode: '521328',
      addressCountry: 'IN'
    }
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 2. Full-screen Farm Video / Main Promise */}
      <Hero />

      {/* 3. Who We Are */}
      <AboutStorySection />

      {/* 4. Our Aqua Ecosystem */}
      <EcosystemSection />



      {/* 8. Technology in Practice */}
      <PracticeShowcaseSection />

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Founder Preview */}
      <FounderPreviewSection />



      {/* 18. Contact */}
      <ConversionSection />

    </main>
  );
}
