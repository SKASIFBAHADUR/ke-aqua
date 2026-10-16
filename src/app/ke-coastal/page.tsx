import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';
import { Package, TrendingUp, Anchor } from 'lucide-react';

export const metadata: Metadata = {
  title: "KE Coastal | Seafood Value Addition",
  description: "KE Coastal focuses on processing, seafood value addition, and market development within the KE Aqua Group.",
  alternates: { canonical: 'https://keaquafarms.com/ke-coastal' },
  openGraph: {
    title: "KE Coastal — Developing Vision Division",
    description: "A developing division focused on future opportunities in seafood value addition and coastal aquaculture.",
    url: 'https://keaquafarms.com/ke-coastal'
  }
};

const focuses = [
  {
    icon: Anchor,
    title: "Processing Initiatives",
    desc: "Bridging the gap between the farm gate and the final consumer through dedicated seafood processing efforts."
  },
  {
    icon: Package,
    title: "Value Addition",
    desc: "Enhancing the core product to meet evolving market demands and improve overall supply chain economics."
  },
  {
    icon: TrendingUp,
    title: "Market Development",
    desc: "Exploring and establishing sustainable market linkages to ensure fair value for responsibly farmed seafood."
  }
];

export default function KECoastalPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'KE Coastal', href: '/ke-coastal' }]} />
      </div>
      
      <PageHero 
        title="KE Coastal — Developing Vision Division" 
        description="A developing division focused on future opportunities in seafood value addition and coastal aquaculture. Further details will be published as the division develops."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Beyond the Farm Gate" 
          subtitle="Future Vision" 
          description="Producing a quality crop is our primary focus today. KE Coastal represents our future vision for ensuring that responsibly farmed seafood reaches the market efficiently and with maximized value." 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-20">
          {focuses.map((focus, i) => {
            const Icon = focus.icon;
            return (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-900 transition-colors text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center mx-auto mb-6 border border-cyan-900/50">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{focus.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {focus.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 lg:p-12 mb-16 text-center max-w-4xl mx-auto">
           <h4 className="text-cyan-400 font-bold mb-4 text-sm uppercase tracking-wider">Developing Division</h4>
           <p className="text-slate-300 leading-relaxed mb-6">
             KE Coastal is currently a developing vision division. It is not an operational division with active production or export infrastructure. We are focused on exploring future opportunities in seafood value addition and coastal aquaculture. Program details will be published as the division formally develops.
           </p>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold rounded-lg transition-colors">
            Contact KE Coastal &rarr;
          </Link>
        </div>
      </div>
      
      <CTASection />
    </main>
  );
}
