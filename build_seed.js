const fs = require('fs');
const path = require('path');

const pageContent = `import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: "Seed Selection & Screening | KE Aqua Farms",
  description: "Explore the KE Aqua Farms seed selection and screening process, from hatchery evaluation and microscopic screening to PCR assessment, acclimatization and stocking.",
  alternates: { canonical: 'https://keaquafarms.com/seed-selection' },
  openGraph: {
    title: "Seed Selection & Screening | KE Aqua Farms",
    description: "Explore the KE Aqua Farms seed selection and screening process, from hatchery evaluation and microscopic screening to PCR assessment, acclimatization and stocking.",
    url: 'https://keaquafarms.com/seed-selection'
  }
};

const selectionProcess = [
  { step: "01", title: "HATCHERY EVALUATION", desc: "Assessing hatchery infrastructure, biosecurity protocols, and broodstock history." },
  { step: "02", title: "SEED OBSERVATION", desc: "Visual inspection for size uniformity, active swimming behavior, and clean appearance." },
  { step: "03", title: "STRESS ASSESSMENT", desc: "Subjecting samples to salinity and formalin stress tests to gauge hardiness." },
  { step: "04", title: "MICROSCOPIC SCREENING", desc: "Lab analysis of gill structure, gut fullness, and hepatopancreas lipid droplets." },
  { step: "05", title: "DISEASE / PCR SCREENING", desc: "Sending samples for essential PCR screening against major viral pathogens." },
  { step: "06", title: "SELECTION", desc: "Final decision based on cumulative data from all previous assessment stages." },
  { step: "07", title: "TRANSPORTATION", desc: "Managing temperature and oxygen parameters during transit to the farm." },
  { step: "08", title: "ACCLIMATIZATION", desc: "Gradual adjustment of seed bags to pond temperature and salinity levels." },
  { step: "09", title: "STOCKING", desc: "Careful release into prepared nursery or grow-out ponds during optimal hours." },
];

export default function SeedSelectionPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Seed Selection', href: '/seed-selection' }]} />
      </div>
      
      {/* 1. Hero Section */}
      <PageHero 
        title="Seed Selection & Screening" 
        description="A successful crop begins with the right seed."
      />
      
      <div className="container-width px-4 sm:px-6 lg:px-8 -mt-8 mb-20">
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
          <Image
            src="/assets/seed_selection_screening_home.png"
            alt="Seed Selection and Microscopic Observation"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute top-6 right-6">
             <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/80 px-4 py-2 rounded-lg border border-cyan-500/50">QUALITY ASSURANCE</span>
          </div>
        </div>
      </div>
      
      <div className="container-width py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-24 text-slate-300">
        
        {/* 2. Why Seed Quality Matters */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Why Seed Quality Matters</h2>
          <p className="text-lg leading-relaxed mb-8">
            Seed quality is one of the earliest decisions in a crop cycle. Our approach is to evaluate the source, observe seed condition, conduct appropriate screening, and combine the available evidence before making a stocking decision.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/20 p-4 md:p-6 rounded-xl border border-emerald-900/50">
            <span>Hatchery</span><span className="text-slate-600">→</span>
            <span>Assessment</span><span className="text-slate-600">→</span>
            <span>Selection</span><span className="text-slate-600">→</span>
            <span>Stocking</span>
          </div>
        </section>

        {/* 3. The 9-Step Protocol */}
        <section>
          <SectionHeader 
            title="The 9-Step Protocol" 
            subtitle="Quality Assurance" 
            description="We do not accept seed on faith. We evaluate, stress-test, and microscopically screen seed batches before making a commitment." 
          />

          <div className="relative mt-16 mb-20">
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-800 hidden md:block"></div>
            <div className="space-y-6">
              {selectionProcess.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 relative group">
                  <div className="md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center shrink-0 z-10 hidden md:flex text-cyan-400 font-bold text-sm group-hover:bg-cyan-950 transition-colors">
                    {item.step}
                  </div>
                  <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex-1 group-hover:border-cyan-900/80 transition-colors">
                    <span className="md:hidden text-cyan-500 font-mono text-xs font-bold mb-1 block">{item.step}</span>
                    <h3 className="text-cyan-400 font-bold tracking-widest text-sm mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Selection Based on Evidence */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6">Selection Based on Evidence</h2>
          <p className="text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto mb-10">
            We do not rely on a single observation or test. The final selection is based on the cumulative information available from the assessment process.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-mono font-bold text-blue-400 uppercase tracking-wider">
            <div className="bg-blue-950/30 border border-blue-900/50 px-4 py-2 rounded">Hatchery</div>
            <span className="hidden md:block text-slate-600">→</span>
            <span className="md:hidden text-slate-600">↓</span>
            
            <div className="bg-blue-950/30 border border-blue-900/50 px-4 py-2 rounded">Observation</div>
            <span className="hidden md:block text-slate-600">→</span>
            <span className="md:hidden text-slate-600">↓</span>
            
            <div className="bg-blue-950/30 border border-blue-900/50 px-4 py-2 rounded">Stress Response</div>
            <span className="hidden md:block text-slate-600">→</span>
            <span className="md:hidden text-slate-600">↓</span>
            
            <div className="bg-blue-950/30 border border-blue-900/50 px-4 py-2 rounded">Microscopy</div>
            <span className="hidden md:block text-slate-600">→</span>
            <span className="md:hidden text-slate-600">↓</span>
            
            <div className="bg-blue-950/30 border border-blue-900/50 px-4 py-2 rounded">PCR</div>
            
            <span className="hidden md:block text-slate-600">→</span>
            <span className="md:hidden text-slate-600">↓</span>
            <div className="bg-emerald-950/40 border border-emerald-900/60 text-emerald-400 px-4 py-2 rounded">Cumulative Assessment</div>
            
            <span className="hidden md:block text-slate-600">→</span>
            <span className="md:hidden text-slate-600">↓</span>
            <div className="bg-cyan-950/50 border border-cyan-500/50 text-cyan-400 px-6 py-2 rounded shadow-lg shadow-cyan-900/20">SELECTION</div>
          </div>
        </section>

        {/* 5. From Selection to Stocking */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">From Selection to Stocking</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">01 — Transportation</h3>
              <p className="text-sm text-slate-400">Temperature • Oxygen • Careful Handling</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">02 — Acclimatization</h3>
              <p className="text-sm text-slate-400">Gradual Adjustment to Pond Conditions</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">03 — Stocking</h3>
              <p className="text-sm text-slate-400">Careful Release Into Prepared Ponds</p>
            </div>
          </div>
        </section>

        {/* 6. Important Disclaimer */}
        <div className="bg-amber-950/30 border border-amber-900/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 max-w-4xl mx-auto shadow-lg">
          <ShieldAlert className="w-10 h-10 text-amber-500 shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-amber-500 mb-3">Important Disclaimer</h2>
            <p className="text-amber-200/80 text-sm leading-relaxed">
              While our rigorous screening process supports highly informed stocking decisions and eliminates visibly compromised batches, it does not guarantee a disease-free crop or eliminate farming risk. Environmental factors, post-stocking management, and natural variables heavily influence the final outcome.
            </p>
          </div>
        </div>

        {/* 7. After Stocking / Seed Selection Is Only the Beginning */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-white">Seed Selection Is Only the Beginning</h2>
          <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mx-auto">
            Once stocking is complete, crop performance depends on continued observation, feeding management, water-quality monitoring, animal health observation and appropriate farm management.
          </p>
          <div className="pt-4">
            <Link href="/our-farms" className="inline-flex px-6 py-3 bg-slate-800 text-cyan-400 hover:text-slate-950 hover:bg-cyan-500 font-bold rounded-lg transition-colors border border-slate-700 hover:border-cyan-500">
              Explore Our Working Farms →
            </Link>
          </div>
        </section>

        {/* 8. Case Study Connection */}
        <section className="bg-slate-900/50 border border-slate-800 p-8 lg:p-12 rounded-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Learn From Our Farm Experience</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our approach to aquaculture is built around observation, documentation and learning from real farm conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {/* Case Study 1 */}
            <div className="bg-[#0A192F] border border-slate-800 rounded-2xl p-6 flex flex-col h-full hover:border-emerald-500/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-3">Smart Aquaculture &amp; Technology Evaluation</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Practical assessment of IoT sensor performance, auto-feeders, and data integration in active ponds.
              </p>
              <Link href="/case-studies/smart-aquaculture" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 group">
                View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-[#0A192F] border border-slate-800 rounded-2xl p-6 flex flex-col h-full hover:border-cyan-500/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-3">Preventive Pond Management &amp; White-Gut Risk</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Field documentation of proactive water quality and feeding strategies to address gastrointestinal challenges.
              </p>
              <Link href="/case-studies/white-gut-risk" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group">
                View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/case-studies" className="inline-flex font-bold text-sm text-slate-300 hover:text-white underline decoration-slate-600 hover:decoration-white transition-colors">
              Explore All Case Studies →
            </Link>
          </div>
        </section>

        {/* 9. Service CTA (Replaces previous service upsell) */}
        <section className="bg-cyan-950/20 border border-cyan-900/50 rounded-3xl p-8 lg:p-12 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Have Questions About Seed Selection?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Contact KE Aqua Group to discuss aquaculture requirements and explore the areas where our experience and technical approach may be relevant.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-colors shadow-lg shadow-cyan-500/20">
            Contact Our Team →
          </Link>
        </section>

      </div>
      
    </main>
  );
}
`;

fs.writeFileSync(path.join('src', 'app', 'seed-selection', 'page.tsx'), pageContent);
console.log("Done");
