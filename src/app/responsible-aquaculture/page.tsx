import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Responsible Aquaculture | KE Aqua Farms",
  description: "Our practical approach to biosecurity, food safety, water management, and responsible farming practices.",
  alternates: { canonical: 'https://keaquafarms.com/responsible-aquaculture' },
  openGraph: {
    title: "Responsible Aquaculture",
    description: "Practical sustainability in commercial shrimp farming.",
    url: 'https://keaquafarms.com/responsible-aquaculture'
  }
};

const principles = [
  { title: "Biosecurity Protocols", desc: "Implementing strict physical barriers, crab fencing, bird netting, and vehicle/personnel sanitization to prevent pathogen introduction into ponds." },
  { title: "Responsible Inputs", desc: "Careful vetting of all feeds, probiotics, and minerals. Ensuring every input has a clear, scientifically-supported purpose for the crop." },
  { title: "Antibiotic Awareness", desc: "Strict adherence to antibiotic-free farming. We manage bacterial loads through competitive exclusion, probiotics, and Vibrio monitoring, never through banned substances." },
  { title: "Water Management", desc: "Optimizing water exchange protocols and utilizing settling ponds to minimize external discharge and maintain internal carrying capacity." },
  { title: "Food Safety", desc: "Ensuring residue-free harvesting processes that meet strict international export standards and local food safety requirements." },
  { title: "Worker Safety", desc: "Providing safe living conditions, protective equipment, and clear operational protocols for all farm personnel operating heavy machinery and electrical equipment." },
  { title: "Environmental Responsibility", desc: "Preventing soil salinization in adjacent lands, managing sludge properly, and protecting local mangrove/coastal ecosystems from farm runoff." },
  { title: "Women in Aquaculture", desc: "Promoting inclusive employment opportunities and specialized training for women in laboratory and farm-management roles." },
  { title: "Scientific Farmer Awareness", desc: "Actively disseminating our findings to surrounding communities, shifting local mindsets from traditional guesswork to data-driven farming." }
];

export default function ResponsibleAquaculturePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Responsible Aquaculture', href: '/responsible-aquaculture' }]} />
      </div>
      
      <PageHero 
        title="Responsible Aquaculture" 
        description="Sustainability on our farms is not a marketing buzzword. It is a set of daily, practical operational choices concerning water, inputs, and biosecurity."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Practical Implementation" 
          subtitle="Our Standards" 
          description="We focus on concrete actions that protect the crop, the consumer, the worker, and the coastal environment." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-20">
          {principles.map((prin, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-900 transition-colors">
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-2">0{i + 1}</span>
              <h3 className="text-white font-bold mb-3">{prin.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{prin.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold rounded-lg transition-colors">
            Contact for Farm Audits & Consultation &rarr;
          </Link>
        </div>
      </div>
      
      <CTASection />
    </main>
  );
}
