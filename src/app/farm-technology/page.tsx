import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Farm Technology | Practical Aquaculture Tech | KE Aqua Farms",
  description: "We evaluate and deploy practical farm technology to solve real farming challenges, from auto-feeders to IoT sensors.",
  alternates: { canonical: 'https://keaquafarms.com/farm-technology' },
  openGraph: {
    title: "Farm Technology | KE Aqua Farms",
    description: "Solving real farming challenges with applied technology.",
    url: 'https://keaquafarms.com/farm-technology'
  }
};

const technologies = [
  {
    name: "Auto Feeder Solutions",
    problem: "Manual feeding can lead to feed wastage, localized water quality issues, and uneven distribution.",
    tech: "Automated, programmable feed broadcasting systems.",
    practice: "Deployed across commercial ponds with synchronized feeding schedules.",
    observation: "Shrimp exhibit more consistent feeding behavior throughout the day.",
    benefit: "Observed to support feeding consistency which may positively influence feed conversion and water quality.",
    link: "/services/auto-feeder-solutions"
  },
  {
    name: "IoT & Sensor Monitoring",
    problem: "Intermittent manual testing may miss critical nighttime dissolved oxygen fluctuations.",
    tech: "Continuous IoT-based remote water parameter sensors.",
    practice: "Real-time monitoring of DO, pH, and temperature linked to mobile dashboards.",
    observation: "Enables identification of parameter fluctuations for timely management.",
    benefit: "Supports proactive management and timely response to environmental stress.",
    link: "/services/iot-sensor-monitoring"
  },
  {
    name: "Aeration Management",
    problem: "Inefficient aeration leads to low dissolved oxygen zones and energy waste.",
    tech: "Optimized paddlewheel placement and spiral aerators.",
    practice: "Strategic positioning to create directional flow and manage sludge accumulation.",
    observation: "Observed improvements in pond bottom condition and oxygen distribution.",
    benefit: "May contribute to a more stable shrimp environment and optimized electrical usage.",
    link: "/services/aeration-management"
  },
  {
    name: "Micro/Nano Bubble Tech",
    problem: "Standard aeration can struggle to maintain high DO in dense stocking or low atmospheric pressure conditions.",
    tech: "High-efficiency nano-bubble generation systems.",
    practice: "Supplementary oxygenation during critical crop phases.",
    observation: "Observed to maintain dissolved oxygen in the water column for extended periods.",
    benefit: "Can provide supplementary oxygenation support during critical crop phases or environmental stress.",
    link: "/services/micro-nano-bubble-technology"
  }
];

export default function FarmTechnologyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Farm Technology', href: '/farm-technology' }]} />
      </div>
      
      <PageHero 
        title="Farm Technology" 
        description="We don't adopt technology because it is new. We evaluate technology because it may solve a real farming problem."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* New Section: Technology Should Solve a Farm Problem */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 text-center shadow-xl mb-24">
          <h2 className="text-2xl font-bold text-white mb-6">Technology Should Solve a Farm Problem</h2>
          <p className="text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto mb-10">
            We don't implement technology for the sake of it. We study the farm problem, evaluate the technology under real conditions, monitor its performance, identify its limitations, and decide whether it provides practical value.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 p-4 md:p-6 rounded-xl border border-cyan-900/50">
            <span>FARM PROBLEM</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span>TECHNOLOGY</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span>IMPLEMENT</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span>MONITOR</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span>IDENTIFY LIMITATIONS</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span>EVALUATE</span>
            <span className="md:hidden text-slate-600">↓</span><span className="hidden md:block text-slate-600">→</span>
            
            <span className="text-emerald-400">IMPROVE</span>
          </div>
        </section>

        <SectionHeader 
          title="Applied Technology" 
          subtitle="Problem to Practice" 
          description="Explore the technologies we evaluate on our farms. Every piece of equipment is assessed based on its practical impact on the crop." 
        />

        <div className="space-y-12 mt-12 mb-24">
          {technologies.map((tech, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-10 hover:border-slate-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
                <h3 className="text-2xl font-display font-bold text-white">{tech.name}</h3>
                <Link href={tech.link} className="inline-block px-5 py-2.5 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-slate-700 hover:border-cyan-500">
                  View Full Details
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
                  <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest block mb-2">Farm Problem</span>
                  <p className="text-sm text-slate-300">{tech.problem}</p>
                </div>
                <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
                  <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest block mb-2">Technology</span>
                  <p className="text-sm text-slate-300">{tech.tech}</p>
                </div>
                <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
                  <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest block mb-2">Our Practice</span>
                  <p className="text-sm text-slate-300">{tech.practice}</p>
                </div>
                <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
                  <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest block mb-2">Observation</span>
                  <p className="text-sm text-slate-300">{tech.observation}</p>
                </div>
                <div className="bg-cyan-950/20 p-5 rounded-xl border border-cyan-900/30">
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest block mb-2">Potential Benefit</span>
                  <p className="text-sm text-cyan-200">{tech.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Section: Technology in Practice */}
        <section className="bg-slate-900/50 border border-slate-800 p-8 lg:p-12 rounded-3xl text-center mb-10">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Technology in Practice</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Technology is only useful when it helps farmers understand, manage or improve a real farm problem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#0A192F] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Observe</h3>
              <p className="text-sm text-slate-400">
                Monitor what is happening in the pond.
              </p>
            </div>
            
            <div className="bg-[#0A192F] border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Evaluate</h3>
              <p className="text-sm text-slate-400">
                Compare technology performance with farm conditions and requirements.
              </p>
            </div>

            <div className="bg-[#0A192F] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Improve</h3>
              <p className="text-sm text-slate-400">
                Use the observations to refine future farm decisions.
              </p>
            </div>
          </div>
        </section>

      </div>
      
      {/* Updated CTA */}
      <section className="bg-slate-900 border-t border-slate-800 py-16 text-center">
        <div className="container-width px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Discuss Farm Technology?</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Contact our team to discuss aquaculture requirements and explore practical technology solutions.
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
