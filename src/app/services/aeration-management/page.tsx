import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Aeration Management | Farm Technology | KE Aqua Farms",
  description: "Practical implementation of aeration management to solve real aquaculture challenges.",
  alternates: { canonical: 'https://keaquafarms.com/services/aeration-management' },
  openGraph: {
    title: "Aeration Management",
    description: "Applied farm technology for real aquaculture challenges.",
    url: 'https://keaquafarms.com/services/aeration-management'
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Farm Technology', href: '/farm-technology' }, { label: 'Aeration Management', href: '/services/aeration-management' }]} />
      </div>
      
      <PageHero 
        title="Aeration Management" 
        description="Applied technology deployed on our working farms to address operational challenges."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeader 
          title="Technology Application" 
          subtitle="Problem to Practice" 
        />

        <div className="space-y-6 mt-12 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
            <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">Farm Problem</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] The specific operational inefficiency or risk this technology addresses.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
            <h3 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2">Technology</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] Overview of the equipment and its core specifications.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
            <h3 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">Our Practice</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] How we actually deploy and maintain this technology in real pond conditions.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
            <h3 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">Observation & Potential Benefit</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] Documented shifts in farm dynamics. Note: We do not guarantee standardized performance improvements as environmental factors vary.</p>
          </div>
        </div>

        {/* New Section: Aeration Management Approach */}
        <section className="bg-slate-900/50 border border-slate-800 p-8 lg:p-12 rounded-3xl text-center mb-20 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-8">Aeration Management Approach</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 p-4 md:p-6 rounded-xl border border-cyan-900/50 mb-8">
            <span>OBSERVE</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span>POSITION</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span>OPERATE</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>

            <span>MONITOR</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>

            <span>ADJUST</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>

            <span className="text-emerald-400">RECORD</span>
          </div>

          <p className="text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Aeration management is evaluated according to pond conditions, equipment operation and observed farm response rather than treated as a fixed setup.
          </p>
        </section>
      </div>
      
      {/* Updated CTA Block */}
      <section className="bg-slate-900 border-t border-slate-800 py-16 text-center">
        <div className="container-width px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Have Questions About Technology?</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Contact our team to discuss aquaculture technology and farm requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
            >
              Consultation Enquiry &rarr;
            </Link>
            <Link 
              href="/farm-technology" 
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-colors"
            >
              Back to Farm Technology
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
