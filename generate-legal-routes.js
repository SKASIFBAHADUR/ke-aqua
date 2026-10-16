const fs = require('fs');
const path = require('path');

const legalRoutes = [
  'privacy-policy',
  'terms',
  'disclaimer',
  'training-cancellation-refund',
  'laboratory-disclaimer'
];

legalRoutes.forEach(route => {
  const dir = path.join('src', 'app', route);
  fs.mkdirSync(dir, { recursive: true });
  
  const formattedTitle = route.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const content = `import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "${formattedTitle} | KE Aqua Farms",
  description: "Legal documentation and policies for KE Aqua Farms.",
  alternates: { canonical: 'https://keaquafarms.com/${route}' },
  robots: { index: false } // Prevent indexing of placeholder legal pages
};

export default function ${formattedTitle.replace(/ /g, '')}Page() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: '${formattedTitle}', href: '/${route}' }]} />
      </div>
      
      <PageHero 
        title="${formattedTitle}" 
        description="Legal Documentation & Policies"
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6">
            <span className="text-slate-500 font-mono text-xs">LEGAL</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">[CLIENT LEGAL COPY REQUIRED]</h3>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            This document is pending finalized and approved legal copy. It remains unpublished to the public index until final client confirmation is received.
          </p>
        </div>
      </div>
    </main>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});
console.log('Legal Routes generated successfully!');
