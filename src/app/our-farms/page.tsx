import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Our Working Farms | KE Aqua Farms",
  description: "Explore how KE Aqua Farms approaches commercial aquaculture through practical farming, scientific monitoring, technology evaluation and systematic crop management from seed to harvest.",
  alternates: { canonical: 'https://keaquafarms.com/our-farms' },
  openGraph: {
    title: "Our Working Farms | KE Aqua Farms",
    description: "Explore how KE Aqua Farms approaches commercial aquaculture through practical farming, scientific monitoring, technology evaluation and systematic crop management from seed to harvest.",
    url: 'https://keaquafarms.com/our-farms'
  }
};

const farmProcess = [
  { step: "PLAN", desc: "Evaluating seasonality, resources, and selecting the right crop strategy for the cycle." },
  { step: "PREPARE", desc: "Rigorous pond preparation, drying, tilling, and establishing a stable initial bloom." },
  { step: "SCREEN SEED", desc: "Thorough hatchery evaluation and microscopic screening before procurement." },
  { step: "STOCK", desc: "Careful acclimatization to pond conditions to minimize initial stress." },
  { step: "FEED", desc: "Scientific feed management utilizing auto-feeders and continuous observation." },
  { step: "MONITOR", desc: "Daily physical farm monitoring and data recording of environmental parameters." },
  { step: "TEST", desc: "Regular laboratory diagnostics for water quality and shrimp health." },
  { step: "MANAGE", desc: "Proactive aeration, biosecurity protocols, and corrective actions based on data." },
  { step: "HARVEST", desc: "Planned harvesting protocols ensuring product quality and market readiness." },
  { step: "ANALYSE", desc: "Post-crop evaluation of records to improve subsequent cycles." },
];

export default function OurFarmsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Our Farms', href: '/our-farms' }]} />
      </div>
      
      {/* 1. Hero / Farm Introduction */}
      <PageHero 
        title="Our Working Farms" 
        description="Experience aquaculture in practice. We operate a commercial demonstration farm that bridges the gap between traditional knowledge and modern scientific practice."
      />

      <div className="container-width px-4 sm:px-6 lg:px-8 -mt-8 mb-20">
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
          <Image
            src="/assets/commercial_aquaculture_farming_home.png"
            alt="Real Working Shrimp Farm"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/20"></div>
        </div>
      </div>
      
      <div className="container-width py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-24 text-slate-300">
        
        {/* 2. Farm Overview */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white">A Real Farm. A Practical Learning Environment.</h2>
          <p className="text-lg leading-relaxed">
            KE Aqua Farms is built around real aquaculture operations where farming practices, monitoring methods and technologies can be observed under actual pond conditions.
          </p>
          <p className="text-lg leading-relaxed">
            Our approach combines practical farm experience with scientific monitoring, responsible management and technology evaluation.
          </p>
        </section>

        {/* 3. Our Farming Philosophy */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-xl text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Our Farming Philosophy</h2>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 p-4 md:p-6 rounded-xl border border-cyan-900/50 mb-8">
            <span>Observe</span><span className="text-slate-600">→</span>
            <span>Measure</span><span className="text-slate-600">→</span>
            <span>Understand</span><span className="text-slate-600">→</span>
            <span>Act</span><span className="text-slate-600">→</span>
            <span>Record</span><span className="text-slate-600">→</span>
            <span>Improve</span>
          </div>

          <p className="text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
            We focus on understanding what is happening in the pond before deciding what action is required. Farm observations, measurements, laboratory information and crop records help guide management decisions.
          </p>
        </section>

        {/* 4. Seed to Harvest — 10-Step Farming Process */}
        <section>
          <SectionHeader 
            title="The Farming Process" 
            subtitle="Seed to Harvest" 
            description="We follow a systematic, 10-step practical farming process that emphasizes observation, data collection, and proactive management over reactive treatment." 
          />

          <div className="relative mt-16 mb-20">
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-800 hidden md:block"></div>
            <div className="space-y-6">
              {farmProcess.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 relative group">
                  <div className="md:w-10 md:h-10 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center shrink-0 z-10 hidden md:flex text-cyan-400 font-bold text-sm group-hover:bg-cyan-950 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex-1 group-hover:border-cyan-900/80 transition-colors">
                    <span className="md:hidden text-cyan-500 font-mono text-xs font-bold mb-1 block">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2">{item.step}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. What We Monitor */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What We Monitor</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our monitoring practices are categorized into practical areas supported by farm operations and laboratory diagnostics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 border-b border-slate-800 pb-2">WATER</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Water-quality parameters</li>
                <li>• pH</li>
                <li>• Dissolved oxygen</li>
                <li>• General pond condition</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 border-b border-slate-800 pb-2">SHRIMP</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Feeding response</li>
                <li>• Growth</li>
                <li>• Behaviour</li>
                <li>• Gut / health observations</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 border-b border-slate-800 pb-2">POND</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Soil / bottom condition</li>
                <li>• Organic-load indicators</li>
                <li>• Aeration</li>
                <li>• Pond activity</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 border-b border-slate-800 pb-2">FARM OPERATIONS</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Feed</li>
                <li>• Equipment</li>
                <li>• Power</li>
                <li>• Farm records</li>
                <li>• Technology performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Our Approach */}
        <section className="bg-emerald-950/20 border border-emerald-900/50 p-8 lg:p-12 rounded-3xl">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-emerald-400 font-bold mb-2">Practical Farming</h3>
              <p className="text-sm text-slate-300">Real pond operations and field experience.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-bold mb-2">Scientific Monitoring</h3>
              <p className="text-sm text-slate-300">Measurements, laboratory support and systematic observation.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-bold mb-2">Responsible Management</h3>
              <p className="text-sm text-slate-300">Biosecurity, responsible input usage and farm documentation.</p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-bold mb-2">Technology Evaluation</h3>
              <p className="text-sm text-slate-300">Technology is evaluated for practical value under real farm conditions.</p>
            </div>
          </div>
        </section>

        {/* 6. Science Meets the Farm */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Science Meets the Farm</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Farming decisions are strengthened by scientific observation and appropriate technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Scientific Monitoring</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Water, shrimp and pond observations supported by laboratory analysis where required.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Technology in Practice</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Evaluation of tools such as automatic feeding, aeration and farm-monitoring technologies under real farm conditions.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Field Learning</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Farm records and crop observations are reviewed to understand what worked, what did not, and what can be improved.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/case-studies" className="inline-flex px-6 py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold rounded-lg transition-colors border border-slate-700 hover:border-cyan-500">
              Explore Our Case Studies
            </Link>
          </div>
        </section>

        {/* 8. What We Learn From the Farm — Case Study Preview */}
        <section className="bg-slate-900/50 border border-slate-800 p-8 lg:p-12 rounded-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">What We Learn From the Farm</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every crop provides data. Every challenge provides a lesson. Our farm observations are documented so that practical experiences can be evaluated and shared.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Case Study 1 */}
            <div className="bg-[#0A192F] border border-slate-800 rounded-2xl p-6 flex flex-col h-full hover:border-cyan-500/50 transition-colors">
              <div className="mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-500 uppercase">Case Study</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Preventive Pond Management &amp; White-Gut Risk Mitigation</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Field documentation of proactive water quality and feeding strategies to address gastrointestinal challenges.
              </p>
              <Link href="/case-studies/white-gut-risk" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group">
                View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Case Study 2 */}
            <div className="bg-[#0A192F] border border-slate-800 rounded-2xl p-6 flex flex-col h-full hover:border-cyan-500/50 transition-colors">
              <div className="mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-500 uppercase">Case Study</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Smart Aquaculture &amp; Technology Evaluation</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Practical assessment of IoT sensor performance, auto-feeders, and data integration in active ponds.
              </p>
              <Link href="/case-studies/smart-aquaculture" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 group">
                View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Case Study 3 */}
            <div className="bg-[#0A192F] border border-slate-800 rounded-2xl p-6 flex flex-col h-full hover:border-cyan-500/50 transition-colors">
              <div className="mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-blue-500 uppercase">Case Study</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Feed Cost Optimization &amp; Growth Strategies</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Analysis of feed utilization, FCR optimization techniques, and controlled feeding protocols.
              </p>
              <Link href="/case-studies/feed-cost-optimization" className="text-sm font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group">
                View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/case-studies" className="inline-flex px-6 py-3 bg-cyan-950/30 text-cyan-400 font-bold rounded-lg hover:bg-cyan-900/50 transition-colors border border-cyan-900">
              Explore All Case Studies
            </Link>
          </div>
        </section>

        {/* 9. Explore More / Related Areas (Replaces training/services) */}
        <section>
          <SectionHeader 
            title="Explore More" 
            subtitle="Related Areas" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-start hover:border-slate-600 transition-colors">
              <h3 className="text-white font-bold text-xl mb-3">Learn From Our Experience</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                Explore documented observations, practical lessons and field experience from KE Aqua Farms.
              </p>
              <Link href="/case-studies" className="text-cyan-400 font-bold text-sm inline-flex items-center gap-1 hover:underline">
                Explore Case Studies →
              </Link>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-start hover:border-slate-600 transition-colors">
              <h3 className="text-white font-bold text-xl mb-3">Explore Aqua Pulse</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                Discover the scientific monitoring and technical side of our aquaculture ecosystem.
              </p>
              <Link href="/aqua-pulse-lab" className="text-cyan-400 font-bold text-sm inline-flex items-center gap-1 hover:underline">
                Explore Aqua Pulse →
              </Link>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-start hover:border-slate-600 transition-colors">
              <h3 className="text-white font-bold text-xl mb-3">Contact KE Aqua Group</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                For farm-related enquiries and practical discussions.
              </p>
              <Link href="/contact" className="text-cyan-400 font-bold text-sm inline-flex items-center gap-1 hover:underline">
                Contact Us →
              </Link>
            </div>
          </div>
        </section>

      </div>
      
      {/* 10. Footer */}
      <CTASection />
    </main>
  );
}
