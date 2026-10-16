import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | KE Aqua Farms",
  description: "Documented field experience, practical observations and lessons from KE Aqua Farms.",
};

const caseStudies = [
  {
    id: '01',
    title: 'Preventive Pond Management Approach for Reducing White-Gut Risk in Vannamei Culture',
    href: '/case-studies/white-gut-risk'
  },
  {
    id: '02',
    title: 'From Traditional Farming to Data-Driven Smart Aquaculture',
    href: '/case-studies/smart-aquaculture'
  },
  {
    id: '03',
    title: 'Optimizing Feed Cost Through Stage-Wise Protein Management',
    href: '/case-studies/feed-cost-optimization'
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Case Studies', href: '/case-studies' }]} />
      </div>
      
      <PageHero 
        title="Verified Case Studies" 
        description="Documented field experience, practical observations and lessons from KE Aqua Farms."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {caseStudies.map(cs => (
            <div key={cs.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors">
              <span className="text-cyan-400 font-mono text-sm font-bold mb-4 block">CASE STUDY {cs.id}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">{cs.title}</h3>
              <Link href={cs.href} className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold rounded-lg transition-colors">
                View Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <CTASection />
    </main>
  );
}
