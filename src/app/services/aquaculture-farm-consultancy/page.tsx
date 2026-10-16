import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Aquaculture Farm Consultancy | Services | KE Aqua Farms",
  description: "Learn more about our aquaculture farm consultancy and how they integrate into the broader KE Aqua ecosystem.",
  alternates: { canonical: 'https://keaquafarms.com/services/aquaculture-farm-consultancy' },
  openGraph: {
    title: "Aquaculture Farm Consultancy",
    description: "Detailed service overview.",
    url: 'https://keaquafarms.com/services/aquaculture-farm-consultancy'
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' }, 
          { label: 'Our Farms', href: '/our-farms' }, 
          { label: 'Aquaculture Farm Consultancy', href: '/services/aquaculture-farm-consultancy' }
        ]} />
      </div>
      
      <PageHero 
        title="Aquaculture Farm Consultancy" 
        description="Detailed service overview connected to our primary operational hubs."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 lg:p-12 mb-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">[CLIENT CONTENT REQUIRED]</h3>
          <p className="text-slate-400 leading-relaxed mb-8">
            The specific commercial deliverables, pricing, and availability parameters for this service are currently pending final confirmation. We do not publish unverified commercial guarantees.
          </p>
          
          <div className="bg-cyan-950/30 border border-cyan-900/50 p-6 rounded-xl text-left">
            <h4 className="text-cyan-400 font-bold mb-3 uppercase tracking-wider text-sm">Ecosystem Integration</h4>
            <p className="text-cyan-100/80 text-sm leading-relaxed mb-6">
              This service is deeply integrated with our primary operational hubs. To understand the philosophy, workflow, and foundational practices behind this offering, please review its parent hub.
            </p>
            <div className="flex gap-4">
              <Link href="/our-farms" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-lg transition-colors border border-slate-700">
                Explore Our Farms Hub
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-950/40 hover:bg-cyan-900 border border-cyan-900/60 text-cyan-400 font-bold rounded-lg transition-colors">
            Service Enquiry &rarr;
          </Link>
        </div>
      </div>
      
      <CTASection />
    </main>
  );
}
