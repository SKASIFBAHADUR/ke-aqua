import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Practical Aquaculture Training | KE Aqua Farms",
  description: "Learn practical aquaculture through hands-on experience at our working commercial farm. Structured programs from 1-day exposure to full crop-cycle learning.",
  alternates: { canonical: 'https://keaquafarms.com/practical-training' },
  openGraph: {
    title: "Practical Aquaculture Training",
    description: "Hands-on learning at a real working commercial shrimp farm.",
    url: 'https://keaquafarms.com/practical-training'
  }
};

const programs = [
  { name: "1-Day Farm Exposure", desc: "A brief, intensive introduction to commercial farming infrastructure, equipment, and daily routines. Ideal for students and those considering entering the sector." },
  { name: "3-Day Practical Orientation", desc: "Deeper immersion into water quality monitoring, basic feed management, and farm biosecurity protocols." },
  { name: "7-Day Foundation Program", desc: "Structured learning covering the first critical stages of a crop, including pond preparation and seed selection parameters." },
  { name: "1-Month Hands-On Program", desc: "Immersive participation in farm operations, dealing with real-time water quality fluctuations, feeding adjustments, and data recording." },
  { name: "Full Crop-Cycle Learning", desc: "The ultimate practical experience. Follow a complete crop from initial pond preparation through to final harvest and post-crop analysis." }
];

const philosophy = ["SEE", "LEARN", "PRACTICE", "UNDERSTAND", "DECIDE"];

export default function PracticalTrainingPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Practical Learning (Developing)', href: '/practical-training' }]} />
      </div>
      
      <PageHero 
        title="Practical Learning (Developing) Center" 
        description="Theory is important, but aquaculture is mastered in the pond. We offer hands-on, practical training directly at our commercial demonstration farm."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Learning Philosophy" 
          subtitle="The KE Aqua Approach" 
          description="We believe in experiential learning. Our training is not classroom-bound; it is field-driven, utilizing our 30-acre farm as a living laboratory." 
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 my-12 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          {philosophy.map((step, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8">
              <span className="text-cyan-400 font-display font-bold text-xl md:text-2xl tracking-widest">{step}</span>
              {i < philosophy.length - 1 && <span className="text-slate-600 hidden md:block">→</span>}
            </div>
          ))}
        </div>

        <SectionHeader 
          title="Structured Learning Ladder" 
          subtitle="Training Programs" 
          description="[CLIENT CONFIRMATION REQUIRED] Fees, specific dates, and availability for these programs will be published shortly. We do not offer employment guarantees."
        />

        <div className="space-y-6 mt-12 mb-20">
          {programs.map((prog, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-cyan-900 transition-colors">
              <div className="w-16 h-16 rounded-full bg-cyan-950 text-cyan-400 font-bold text-xl flex items-center justify-center shrink-0 border border-cyan-900">
                0{i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">{prog.name}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{prog.desc}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
      
      <CTASection />
    </main>
  );
}
