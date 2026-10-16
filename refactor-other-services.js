const fs = require('fs');
const path = require('path');

const otherServices = [
  {
    path: 'seed-selection-screening',
    title: 'Seed Selection & Screening Services',
    hubPath: '/seed-selection',
    hubName: 'Seed Selection'
  },
  {
    path: 'practical-aquaculture-training',
    title: 'Practical Aquaculture Training Services',
    hubPath: '/practical-training',
    hubName: 'Practical Training'
  },
  {
    path: 'aquaculture-entrepreneurship',
    title: 'Aquaculture Entrepreneurship Consulting',
    hubPath: '/aquaculture-entrepreneurship',
    hubName: 'Aquaculture Entrepreneurship'
  },
  {
    path: 'aquaculture-farm-consultancy',
    title: 'Aquaculture Farm Consultancy',
    hubPath: '/our-farms',
    hubName: 'Our Farms'
  },
  {
    path: 'aquaculture-inputs-products',
    title: 'Aquaculture Inputs & Products',
    hubPath: '/our-businesses',
    hubName: 'Our Businesses'
  },
  {
    path: 'farm-monitoring-technical-support',
    title: 'Farm Monitoring & Technical Support',
    hubPath: '/aqua-pulse-lab',
    hubName: 'Aqua Pulse Lab'
  },
  {
    path: 'farm-technology-consulting',
    title: 'Farm Technology Consulting',
    hubPath: '/farm-technology',
    hubName: 'Farm Technology'
  },
  {
    path: 'farm-visits-exposure',
    title: 'Farm Visits & Exposure',
    hubPath: '/practical-training',
    hubName: 'Practical Training'
  }
];

otherServices.forEach(svc => {
  const file = path.join('src', 'app', 'services', svc.path, 'page.tsx');
  
  const content = `import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "${svc.title} | Services | KE Aqua Farms",
  description: "Learn more about our ${svc.title.toLowerCase()} and how they integrate into the broader KE Aqua ecosystem.",
  alternates: { canonical: 'https://keaquafarms.com/services/${svc.path}' },
  openGraph: {
    title: "${svc.title}",
    description: "Detailed service overview.",
    url: 'https://keaquafarms.com/services/${svc.path}'
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' }, 
          { label: '${svc.hubName}', href: '${svc.hubPath}' }, 
          { label: '${svc.title}', href: '/services/${svc.path}' }
        ]} />
      </div>
      
      <PageHero 
        title="${svc.title}" 
        description="Detailed service overview connected to our primary operational hubs."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 lg:p-12 mb-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">[CLIENT CONTENT REQUIRED]</h3>
          <p className="text-slate-400 leading-relaxed mb-8">
            The specific commercial deliverables, pricing, and availability parameters for this service are currently pending final confirmation. We do not publish unverified commercial guarantees.
          </p>
          
          <div className="bg-cyan-950/30 border border-cyan-900/50 p-6 rounded-xl text-left">
            <h4 className="text-cyan-400 font-bold mb-3 uppercase tracking-wider text-sm">Ecosystem Integration</h4>
            <p className="text-cyan-100/80 text-sm leading-relaxed mb-6">
              This service is deeply integrated with our primary operational hubs. To understand the philosophy, workflow, and foundational practices behind this offering, please review its parent hub.
            </p>
            <div className="flex gap-4">
              <Link href="${svc.hubPath}" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-lg transition-colors border border-slate-700">
                Explore ${svc.hubName} Hub
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-950/40 hover:bg-cyan-900 border border-cyan-900/60 text-cyan-400 font-bold rounded-lg transition-colors">
            Service Enquiry &rarr;
          </Link>
        </div>
      </div>
      
      <CTASection />
    </main>
  );
}
`;
  
  fs.writeFileSync(file, content);
});
console.log('Other Services updated successfully!');
