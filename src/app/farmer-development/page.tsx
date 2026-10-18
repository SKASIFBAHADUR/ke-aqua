import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';
import { Activity, BookOpen, Calculator, PenTool, Search, Sprout } from 'lucide-react';

export const metadata: Metadata = {
  title: "Farmer Development | Professional Aquaculture Journey",
  description: "A comprehensive practical development journey for aquaculture professionals, focusing on data, decision-making, and continuous improvement.",
  alternates: { canonical: 'https://keaquafarms.com/farmer-development' },
  openGraph: {
    title: "Farmer Development | KE Aqua Farms",
    description: "Transforming farm workers into scientific pond operators.",
    url: 'https://keaquafarms.com/farmer-development'
  }
};

const modules = [
  { icon: Search, title: "Observation Skills", desc: "Training the eye to spot behavioral changes, water color shifts, and physical stress indicators before they become critical." },
  { icon: BookOpen, title: "Records & Data", desc: "Maintaining accurate, continuous farm records and learning how to interpret historical data to predict future trends." },
  { icon: Calculator, title: "Decision-Making", desc: "Moving from reactive farming to proactive management based on water parameters and diagnostic lab reports." },
  { icon: Sprout, title: "Seed & Feed Management", desc: "Mastering the selection of quality seed and optimizing feed conversion ratios through strategic application." },
  { icon: Activity, title: "Health & Technology", desc: "Integrating automated feeders, aeration technology, and routine microbiological monitoring into daily farm operations." },
  { icon: PenTool, title: "Farm Problem-Solving", desc: "Developing frameworks to rapidly assess and respond to environmental crashes or biosecurity threats." }
];

const philosophy = ["SEE", "LEARN", "DO", "MEASURE", "IMPROVE"];

export default function FarmerDevelopmentPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Farmer Development', href: '/farmer-development' }]} />
      </div>
      
      <PageHero 
        title="Farmer Development" 
        description="Developing a farmer takes more than a single training course. It is an ongoing journey of professional development, bridging the gap between field worker and scientific pond operator."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="The Development Cycle" 
          subtitle="Continuous Growth" 
          description="True farming expertise is built iteratively. We focus on transforming passive observation into active, data-driven management." 
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 my-12 bg-cyan-950/20 py-8 px-4 border border-cyan-900/30 rounded-xl">
          {philosophy.map((step, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6">
              <span className="text-cyan-400 font-bold text-lg md:text-xl tracking-widest bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">{step}</span>
              {i < philosophy.length - 1 && <span className="text-slate-400 hidden md:block">→</span>}
            </div>
          ))}
        </div>

        <SectionHeader 
          title="Core Competencies" 
          subtitle="Practical Skills" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-20">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-900 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold mb-2">{mod.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{mod.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold rounded-lg transition-colors">
            Explore Initial Training Programs &rarr;
          </Link>
        </div>
      </div>
      
      <CTASection />
    </main>
  );
}
