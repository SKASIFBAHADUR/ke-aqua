import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Kamatham Emmanuel | Founder | KE Aqua Farms",
  description: "Meet Kamatham Emmanuel, founder of KE Aqua Farms, and explore his journey from engineering and technical skill development to practical, scientific and technology-driven aquaculture.",
  alternates: { canonical: 'https://keaquafarms.com/founder' },
  openGraph: {
    title: "Kamatham Emmanuel | Founder",
    description: "Meet Kamatham Emmanuel, founder of KE Aqua Farms, and explore his journey from engineering and technical skill development to practical, scientific and technology-driven aquaculture.",
    url: 'https://keaquafarms.com/founder'
  }
};

export default function FounderPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Founder', href: '/founder' }]} />
      </div>
      
      <PageHero 
        title="Kamatham Emmanuel" 
        description="Founder | Aquaculture Professional | Entrepreneur | Technical Trainer"
      />
      
      <div className="container-width py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 text-slate-300">
        
        {/* 1. Hero & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl">
               <Image 
                 src="/assets/Founder_photo.png" 
                 alt="Kamatham Emmanuel - Founder"
                 fill
                 className="object-cover"
                 sizes="(max-width: 768px) 100vw, 33vw"
               />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <span className="text-cyan-400 font-mono text-sm font-bold uppercase tracking-widest block">Founder Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              FROM ENGINEERING &amp; SKILL DEVELOPMENT TO SCIENTIFIC, TECHNOLOGY-DRIVEN AQUACULTURE
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl my-6">
              <p className="text-2xl font-display font-medium text-emerald-400 italic">
                “We Practice. We Monitor. We Learn. We Share.”
              </p>
            </div>
            <p className="leading-relaxed">
              Every crop provides data. Every challenge provides a lesson. Every technology must prove itself in the field. Every useful lesson can help build better farmers for the future.
            </p>
          </div>
        </div>

        {/* 2. Professional Profile */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6">Professional Profile</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Kamatham Emmanuel is a Mechanical Engineer, entrepreneur, technical trainer and aquaculture professional. His professional journey spans the automobile industry, technical education, agricultural technology, and commercial aquaculture.
            </p>
            <p>
              His work is built on a practical philosophy: Learn through field experience. Implement with scientific understanding. Evaluate technology under real conditions. Share useful knowledge responsibly.
            </p>
          </div>
        </section>

        {/* 3. Professional Journey */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Professional Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <span className="text-slate-500 font-mono text-xs font-bold block mb-2">01</span>
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Automobile Industry</h3>
              <p className="text-sm leading-relaxed">Started career at Varun Maruti Suzuki and Tata Jasper, developing a strong foundation in mechanical systems, service operations, and technical troubleshooting.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <span className="text-slate-500 font-mono text-xs font-bold block mb-2">02</span>
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Technical Training &amp; Skill Development</h3>
              <p className="text-sm leading-relaxed">Worked extensively with APSSDC-associated programs at Andhra Loyola Engineering College and Government Polytechnic, Vijayawada. Evaluated candidate skills for major manufacturers like Kia Motors.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <span className="text-slate-500 font-mono text-xs font-bold block mb-2">03</span>
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Agricultural Technology</h3>
              <p className="text-sm leading-relaxed">Transitioned to agricultural mechanization with TAFE CSR (JFarm Services), facilitating machinery access for farmers across multiple districts and training farmers on modern agricultural technology adoption.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <span className="text-slate-500 font-mono text-xs font-bold block mb-2">04</span>
              <h3 className="text-lg font-bold text-emerald-400 mb-3">Transition to Aquaculture</h3>
              <p className="text-sm leading-relaxed">Recognized the need for practical engineering, scientific monitoring, and responsible management in the rapidly expanding aquaculture sector, shifting full focus to shrimp farming operations.</p>
            </div>
          </div>
        </section>

        {/* 4. Entrepreneurial Journey */}
        <section className="relative py-8 pl-6 border-l-2 border-slate-800 space-y-12">
          <div className="absolute -left-3 top-8 w-6 h-6 bg-[#0A192F] rounded-full border-2 border-cyan-500 flex items-center justify-center"></div>
          <div className="absolute -left-3 top-[42%] w-6 h-6 bg-[#0A192F] rounded-full border-2 border-emerald-500 flex items-center justify-center"></div>
          <div className="absolute -left-3 bottom-12 w-6 h-6 bg-[#0A192F] rounded-full border-2 border-blue-500 flex items-center justify-center"></div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Kamatham Enterprises</h3>
            <span className="text-sm font-mono text-cyan-400 bg-cyan-950/30 px-3 py-1 rounded inline-block mb-4">From Feed to Health, Complete Shrimp Care.</span>
            <p className="leading-relaxed">Established in 2021 as the commercial foundation. Focuses on shrimp and fish feed, aquaculture healthcare products, farmer technical support, and shrimp procurement/buy-back support.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Aqua Pulse Trader&apos;s</h3>
            <span className="text-sm font-mono text-emerald-400 bg-emerald-950/30 px-3 py-1 rounded inline-block mb-4">Driving Growth Through Shrimp Science.</span>
            <p className="leading-relaxed">Developed to strengthen the scientific, laboratory and technical-service side of aquaculture. Provides water and soil testing, microbiology support, technical services, farm monitoring, and trading support.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">KE Aqua Farms</h3>
            <span className="text-sm font-mono text-blue-400 bg-blue-950/30 px-3 py-1 rounded inline-block mb-4">Practical Farming | Scientific Monitoring | Smart Technology | Training</span>
            <p className="leading-relaxed mb-4">The primary practical farming platform. A 30-acre aquaculture facility where farming practices, technologies and management approaches are implemented, monitored and evaluated under real pond conditions.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li>✓ Shrimp farming &amp; pond management</li>
              <li>✓ Water-quality &amp; DO monitoring</li>
              <li>✓ Feed &amp; growth management</li>
              <li>✓ Automatic feeding</li>
              <li>✓ Aeration technologies</li>
              <li>✓ IoT-based monitoring</li>
              <li>✓ Laboratory-supported decisions</li>
              <li>✓ Biosecurity practices</li>
            </ul>
          </div>
        </section>

        {/* 5. Technology Philosophy & Responsible Aquaculture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Technology Philosophy</h3>
            <p className="text-sm leading-relaxed mb-6">
              Technology should not be adopted merely for display—it must demonstrate practical value in the pond. Evaluated solutions include:
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Automatic feeders &amp; feed management</li>
              <li>• Water-quality monitoring and IoT systems</li>
              <li>• Paddlewheel, blower &amp; aeration approaches</li>
              <li>• Nano-bubble and oxygen-support tech</li>
              <li>• Laboratory integration with field data</li>
              <li>• Data-supported management &amp; traceability</li>
            </ul>
            <div className="mt-6 flex items-center justify-between text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 p-3 rounded-lg">
              <span>Study</span><span className="text-slate-600">→</span>
              <span>Test</span><span className="text-slate-600">→</span>
              <span>Implement</span><span className="text-slate-600">→</span>
              <span>Monitor</span><span className="text-slate-600">→</span>
              <span>Learn</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Responsible &amp; Scientific Aquaculture</h3>
            <p className="text-sm leading-relaxed mb-6">
              Developing farming practices around regulatory awareness, responsible production, biosecurity, traceability and scientific monitoring.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Biosecurity and farm documentation</li>
              <li>• Responsible chemical &amp; antibiotic usage</li>
              <li>• Water, soil and microbiological monitoring</li>
              <li>• Environmental responsibility</li>
              <li>• Worker safety &amp; food-safety awareness</li>
              <li>• Certification-oriented farm practices</li>
            </ul>
          </div>
        </div>

        {/* 6. Practical Learning & Future Visions */}
        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Farm Learning &amp; Knowledge-Sharing Vision</h2>
            <p className="leading-relaxed text-slate-300">
              One of Emmanuel&apos;s major objectives is to encourage young people, aspiring farmers, professionals, investors and entrepreneurs to understand aquaculture through practical exposure before making major decisions.
            </p>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 mt-6">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block mb-2">Developing Initiative</span>
              <p className="text-sm text-slate-400">
                KE Aqua Farms is developing as a practical platform for observing and learning about shrimp farming fundamentals, scientific monitoring, farm economics, technology in real conditions, and responsible entrepreneurship.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-12">
            <h2 className="text-2xl font-bold text-white mb-4">KE Coastal — Developing Vision</h2>
            <p className="leading-relaxed text-slate-300">
              KE Coastal represents the next stage of Emmanuel&apos;s vision, aiming to connect aquaculture and responsible sourcing directly with processing, value addition and consumer markets.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-cyan-400 mt-6 bg-cyan-950/20 p-4 rounded-xl border border-cyan-900/50">
              <span>Pond / Responsible Sourcing</span><span className="text-slate-600">→</span>
              <span>Harvest</span><span className="text-slate-600">→</span>
              <span>Processing</span><span className="text-slate-600">→</span>
              <span>Value Addition</span><span className="text-slate-600">→</span>
              <span>Consumer</span>
            </div>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Long-Term Vision</h2>
            <p className="text-lg leading-relaxed text-emerald-100/80 max-w-3xl mx-auto">
              To develop an integrated aquaculture ecosystem where practical farming experience, scientific monitoring, technology, training, and seafood value addition work together. The aim is not simply to build another aquaculture business, but to create a platform where experience can be tested, knowledge shared, and the next generation can participate with greater confidence.
            </p>
          </div>
        </section>

        <div className="flex justify-center pt-8">
          <Link href="/contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-colors shadow-lg shadow-cyan-500/20">
            Contact the Founder
          </Link>
        </div>

      </div>
      
      <CTASection />
    </main>
  );
}
