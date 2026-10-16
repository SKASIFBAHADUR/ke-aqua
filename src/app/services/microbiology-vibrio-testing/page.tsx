import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Microbiology & Vibrio Testing | Aqua Pulse | KE Aqua Farms",
  description: "Diagnostic and analytical services for microbiology and Vibrio testing to support informed farming decisions.",
  alternates: { canonical: 'https://keaquafarms.com/services/microbiology-vibrio-testing' },
  openGraph: {
    title: "Microbiology & Vibrio Testing",
    description: "Diagnostic services to support informed farming decisions.",
    url: 'https://keaquafarms.com/services/microbiology-vibrio-testing'
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Aqua Pulse Lab', href: '/aqua-pulse-lab' }, { label: 'Microbiology & Vibrio Testing', href: '/services/microbiology-vibrio-testing' }]} />
      </div>
      
      <PageHero 
        title="Microbiology & Vibrio Testing" 
        description="Aqua Pulse Laboratory Capability. Supporting proactive farm management through targeted diagnostic analysis."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeader 
          title="Diagnostic Approach" 
          subtitle="Observation to Action" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-20">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
            <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">Problem</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] Visual observation alone is insufficient for early detection of sub-clinical issues.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
            <h3 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2">Observation</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] Specific changes in animal behavior or water color that trigger laboratory analysis.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
            <h3 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">Test / Monitor</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] The specific methodologies and parameters tested in our laboratory.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
            <h3 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">What It May Inform</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] How this data supports management decisions.</p>
          </div>
        </div>

        {/* New Section: From Microbiology to Farm Action */}
        <section className="bg-slate-900/50 border border-slate-800 p-8 lg:p-12 rounded-3xl text-center mb-16 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-8">From Microbiology to Farm Action</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 p-4 md:p-6 rounded-xl border border-cyan-900/50 mb-8">
            <span>OBSERVE</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span>COLLECT SAMPLE</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span>MICROBIOLOGICAL ANALYSIS</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span>INTERPRET</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span className="text-emerald-400">INFORM FARM MANAGEMENT</span>
          </div>

          <p className="text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Microbiological analysis provides additional evidence that can be considered alongside pond conditions, animal observations and other available farm information.
          </p>
        </section>

        <div className="bg-cyan-950/30 border border-cyan-900/50 rounded-xl p-8 mb-20">
          <h4 className="text-cyan-500 font-bold mb-3">Practical Context & Disclaimer</h4>
          <p className="text-cyan-100/80 text-sm leading-relaxed">
            Our laboratory diagnostics provide critical data points for farm management, but they do not guarantee disease prevention or crop success. 
            [CLIENT CONFIRMATION REQUIRED] The commercial availability of these testing services to external farmers is pending confirmation.
          </p>
        </div>
      </div>
      
      {/* Updated CTA Block */}
      <section className="bg-slate-900 border-t border-slate-800 py-16 text-center">
        <div className="container-width px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Have Questions About Testing?</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Contact our team to discuss laboratory and aquaculture requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
            >
              Service Enquiry &rarr;
            </Link>
            <Link 
              href="/aqua-pulse-lab" 
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-colors"
            >
              Back to Aqua Pulse
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
