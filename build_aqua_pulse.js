const fs = require('fs');
const path = require('path');

const pageContent = `import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Metadata } from 'next';
import Link from 'next/link';
import { Microscope, Droplet, Activity, FlaskConical, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Aqua Pulse Lab | Scientific & Diagnostic Support | KE Aqua Farms",
  description: "Aqua Pulse is our dedicated scientific laboratory supporting aquaculture through water quality, microbiology, and microscopic health analysis.",
  alternates: { canonical: 'https://keaquafarms.com/aqua-pulse-lab' },
  openGraph: {
    title: "Aqua Pulse Lab | Scientific & Diagnostic Support",
    description: "Bringing laboratory diagnostics directly to farming decisions.",
    url: 'https://keaquafarms.com/aqua-pulse-lab'
  }
};

const capabilities = [
  {
    icon: Droplet,
    name: "Water Quality Testing",
    desc: "Comprehensive testing of physical and chemical water parameters crucial for optimal shrimp growth.",
    link: "/services/water-quality-testing"
  },
  {
    icon: Microscope,
    name: "Microscopic Observation",
    desc: "Microscopic analysis of shrimp gills, hepatopancreas, and gut to assess animal health.",
    link: "/services/microscopic-shrimp-health-analysis"
  },
  {
    icon: FlaskConical,
    name: "Microbiology & Vibrio",
    desc: "Bacterial load monitoring and Vibrio isolation using targeted culture media.",
    link: "/services/microbiology-vibrio-testing"
  },
  {
    icon: Activity,
    name: "Periodic Farm Monitoring",
    desc: "Scheduled, routine diagnostics combining water and health analysis for proactive management.",
    link: "/services/periodic-farm-monitoring"
  }
];

export default function AquaPulseLabPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Aqua Pulse Lab', href: '/aqua-pulse-lab' }]} />
      </div>
      
      <PageHero 
        title="Aqua Pulse Lab" 
        description="Our dedicated science and laboratory division. We believe farming decisions should be driven by accurate observation and diagnostic data rather than guesswork."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* New Section: From Observation to Decision */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 text-center shadow-xl mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">From Observation to Decision</h2>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 p-4 md:p-6 rounded-xl border border-cyan-900/50 mb-8">
            <span>SAMPLE</span><span className="text-slate-600">→</span>
            <span>TEST</span><span className="text-slate-600">→</span>
            <span>INTERPRET</span><span className="text-slate-600">→</span>
            <span>FARM DECISION</span><span className="text-slate-600">→</span>
            <span>MONITOR</span>
          </div>

          <p className="text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Laboratory and field observations help provide evidence for farm decisions. Aqua Pulse connects diagnostic information with practical pond observations so that management can respond to actual conditions rather than assumptions.
          </p>
        </section>

        {/* Existing: Laboratory Capabilities */}
        <SectionHeader 
          title="Laboratory Capabilities" 
          subtitle="Diagnostics & Science" 
          description="Aqua Pulse maintains robust internal capabilities to support our working farms. Note: [CLIENT CONFIRMATION REQUIRED] Commercial availability and pricing for these services to external farmers is pending final confirmation." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-24">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col hover:border-cyan-900 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-950/40 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-900/50">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-3">{cap.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {cap.desc}
                </p>
                <Link href={cap.link} className="text-cyan-400 hover:text-cyan-300 font-bold text-xs uppercase tracking-wider mt-auto inline-flex items-center gap-1">
                  View Details &rarr;
                </Link>
              </div>
            );
          })}
        </div>

        {/* New Section: Science Meets the Farm */}
        <section className="bg-slate-900/50 border border-slate-800 p-8 lg:p-12 rounded-3xl mb-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-10">Science Meets the Farm</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            <div className="bg-[#0A192F] border border-emerald-900/50 p-6 rounded-2xl w-full md:w-64">
              <h3 className="text-emerald-400 font-bold text-lg mb-2">KE AQUA FARMS</h3>
              <p className="text-slate-400 text-sm">Practical Farm Observation</p>
            </div>
            
            <div className="text-2xl font-bold text-slate-600">+</div>
            
            <div className="bg-[#0A192F] border border-cyan-900/50 p-6 rounded-2xl w-full md:w-64">
              <h3 className="text-cyan-400 font-bold text-lg mb-2">AQUA PULSE</h3>
              <p className="text-slate-400 text-sm">Scientific &amp; Diagnostic Support</p>
            </div>
          </div>
          
          <div className="text-2xl font-bold text-slate-600 mb-6">↓</div>
          
          <div className="bg-cyan-950/30 border border-cyan-500/30 p-4 rounded-xl inline-block mb-10 shadow-lg">
            <span className="text-cyan-400 font-mono font-bold uppercase tracking-widest">BETTER-INFORMED FARM DECISIONS</span>
          </div>

          <p className="text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Laboratory-supported observations are connected with real farm conditions, allowing water, shrimp and pond observations to be considered together when evaluating farming decisions.
          </p>
        </section>

      </div>
      
      {/* Updated CTA Section */}
      <section className="bg-slate-900 border-t border-slate-800 py-16 text-center">
        <div className="container-width px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Have Questions About Aqua Pulse?</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Contact our team to discuss aquaculture requirements and explore the areas where Aqua Pulse may be relevant.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
          >
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
`;

fs.writeFileSync(path.join('src', 'app', 'aqua-pulse-lab', 'page.tsx'), pageContent);
console.log("Done");
