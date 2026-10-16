const fs = require('fs');
const path = require('path');

const services = [
  {
    path: 'water-quality-testing',
    title: 'Water Quality Testing',
    type: 'aquapulse'
  },
  {
    path: 'microscopic-shrimp-health-analysis',
    title: 'Microscopic Shrimp Health Analysis',
    type: 'aquapulse'
  },
  {
    path: 'microbiology-vibrio-testing',
    title: 'Microbiology & Vibrio Testing',
    type: 'aquapulse'
  },
  {
    path: 'periodic-farm-monitoring',
    title: 'Periodic Farm Monitoring',
    type: 'aquapulse'
  },
  {
    path: 'auto-feeder-solutions',
    title: 'Auto Feeder Solutions',
    type: 'tech'
  },
  {
    path: 'aeration-management',
    title: 'Aeration Management',
    type: 'tech'
  },
  {
    path: 'iot-sensor-monitoring',
    title: 'IoT & Sensor Monitoring',
    type: 'tech'
  },
  {
    path: 'micro-nano-bubble-technology',
    title: 'Micro/Nano Bubble Technology',
    type: 'tech'
  }
];

services.forEach(svc => {
  const file = path.join('src', 'app', 'services', svc.path, 'page.tsx');
  
  let content = '';
  
  if (svc.type === 'aquapulse') {
    content = `import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "${svc.title} | Aqua Pulse | KE Aqua Farms",
  description: "Diagnostic and analytical services for ${svc.title.toLowerCase()} to support informed farming decisions.",
  alternates: { canonical: 'https://keaquafarms.com/services/${svc.path}' },
  openGraph: {
    title: "${svc.title}",
    description: "Diagnostic services to support informed farming decisions.",
    url: 'https://keaquafarms.com/services/${svc.path}'
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Aqua Pulse Lab', href: '/aqua-pulse-lab' }, { label: '${svc.title}', href: '/services/${svc.path}' }]} />
      </div>
      
      <PageHero 
        title="${svc.title}" 
        description="Aqua Pulse Laboratory Capability. Supporting proactive farm management through targeted diagnostic analysis."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Diagnostic Approach" 
          subtitle="Observation to Action" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">Problem</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] Visual observation alone is insufficient for early detection of sub-clinical issues.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2">Observation</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] Specific changes in animal behavior or water color that trigger laboratory analysis.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">Test / Monitor</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] The specific methodologies and parameters tested in our laboratory.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">What It May Inform</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] How this data supports management decisions.</p>
          </div>
        </div>

        <div className="bg-cyan-950/30 border border-cyan-900/50 rounded-xl p-8 mb-20 max-w-4xl mx-auto">
          <h4 className="text-cyan-500 font-bold mb-3">Practical Context & Disclaimer</h4>
          <p className="text-cyan-100/80 text-sm leading-relaxed">
            Our laboratory diagnostics provide critical data points for farm management, but they do not guarantee disease prevention or crop success. 
            [CLIENT CONFIRMATION REQUIRED] The commercial availability of these testing services to external farmers is pending confirmation.
          </p>
        </div>

        <div className="text-center flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold rounded-lg transition-colors">
            Service Enquiry &rarr;
          </Link>
          <Link href="/aqua-pulse-lab" className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
            Back to Aqua Pulse
          </Link>
        </div>
      </div>
      
      <CTASection />
    </main>
  );
}
`;
  } else {
    content = `import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "${svc.title} | Farm Technology | KE Aqua Farms",
  description: "Practical implementation of ${svc.title.toLowerCase()} to solve real aquaculture challenges.",
  alternates: { canonical: 'https://keaquafarms.com/services/${svc.path}' },
  openGraph: {
    title: "${svc.title}",
    description: "Applied farm technology for real aquaculture challenges.",
    url: 'https://keaquafarms.com/services/${svc.path}'
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Farm Technology', href: '/farm-technology' }, { label: '${svc.title}', href: '/services/${svc.path}' }]} />
      </div>
      
      <PageHero 
        title="${svc.title}" 
        description="Applied technology deployed on our working farms to address operational challenges."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Technology Application" 
          subtitle="Problem to Practice" 
        />

        <div className="space-y-6 mt-12 mb-20 max-w-5xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">Farm Problem</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] The specific operational inefficiency or risk this technology addresses.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2">Technology</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] Overview of the equipment and its core specifications.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">Our Practice</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] How we actually deploy and maintain this technology in real pond conditions.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">Observation & Potential Benefit</h3>
            <p className="text-slate-300 leading-relaxed">[CLIENT CONTENT REQUIRED] Documented shifts in farm dynamics. Note: We do not guarantee standardized performance improvements as environmental factors vary.</p>
          </div>
        </div>

        <div className="text-center flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold rounded-lg transition-colors">
            Consultation Enquiry &rarr;
          </Link>
          <Link href="/farm-technology" className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 transition-colors">
            Back to Farm Technology
          </Link>
        </div>
      </div>
      
      <CTASection />
    </main>
  );
}
`;
  }
  
  fs.writeFileSync(file, content);
});
console.log('Services updated successfully!');
