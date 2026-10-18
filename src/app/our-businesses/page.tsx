import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Our Businesses | KE Aqua Group Ecosystem",
  description: "Explore the integrated KE Aqua Group ecosystem, including KE Aqua Farms, Kamatham Enterprises, Aqua Pulse, and KE Coastal.",
  alternates: { canonical: 'https://keaquafarms.com/our-businesses' },
  openGraph: {
    title: "Our Businesses | KE Aqua Group",
    description: "Discover the KE Aqua Group value chain from practical farming to scientific laboratory support.",
    url: 'https://keaquafarms.com/our-businesses'
  }
};

const divisions = [
  {
    name: "KE Aqua Farms",
    role: "Working Farm & Training",
    description: "Our 30-acre commercial aquaculture farm operating under real field conditions. It serves as the foundation for our practical training programs, demonstrating scientifically-guided crop management, pond preparation, and water quality monitoring.",
    link: "/our-farms",
    linkText: "Explore the Farms"
  },
  {
    name: "Kamatham Enterprises",
    role: "Inputs & Farmer Support",
    description: "The support backbone for farmers, acting as an authorized dealer for leading aquaculture brands. Providing quality feeds, essential aqua healthcare products, and technical guidance directly to the farming community.",
    link: "/contact",
    linkText: "Contact for Inputs"
  },
  {
    name: "Aqua Pulse",
    role: "Science & Laboratory",
    description: "Our dedicated technical support division focusing on water quality monitoring, microscopic shrimp health observation, and microbiology. Bringing laboratory diagnostics directly to farming decisions.",
    link: "/aqua-pulse-lab",
    linkText: "Visit the Lab"
  },
  {
    name: "KE Coastal",
    role: "Processing & Value Addition",
    description: "Our initiative towards seafood processing and market development, aiming to complete the value chain from responsible farming to the final consumer market.",
    link: "/ke-coastal",
    linkText: "Learn More"
  }
];

export default function OurBusinessesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Our Businesses', href: '/our-businesses' }]} />
      </div>
      
      <PageHero 
        title="Our Integrated Businesses" 
        description="KE Aqua Group brings together complementary divisions across the aquaculture value chain. From practical farming to scientific testing and farmer support."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="The Complete Ecosystem" 
          subtitle="Value Chain" 
          description="Each division serves a distinct and purposeful role, integrating traditional farming knowledge with modern scientific practice." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {divisions.map((div, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-900 transition-colors">
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2 block">{div.role}</span>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{div.name}</h3>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                {div.description}
              </p>
              <Link href={div.link} className="text-cyan-400 hover:text-cyan-300 font-bold text-sm inline-flex items-center gap-2">
                {div.linkText} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <CTASection />
    </main>
  );
}
