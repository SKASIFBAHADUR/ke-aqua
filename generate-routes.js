const fs = require('fs');
const path = require('path');

const routes = [
  'about-ke-aqua-group',
  'our-businesses',
  'our-farms',
  'aqua-pulse-lab',
  'farm-technology',
  'seed-selection',
  'practical-training',
  'farmer-development',
  'aquaculture-entrepreneurship',
  'responsible-aquaculture',
  'case-studies',
  'knowledge-hub',
  'media',
  'founder',
  'registrations-credentials',
  'ke-coastal'
];

routes.forEach(route => {
  const dir = path.join('src', 'app', route);
  fs.mkdirSync(dir, { recursive: true });
  
  const formattedTitle = route.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const content = `import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";

export const metadata = {
  title: "${formattedTitle} | KE Aqua Farms",
  description: "Learn more about ${formattedTitle} at KE Aqua Farms."
};

export default function ${formattedTitle.replace(/ /g, '')}Page() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container-width mb-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: '${formattedTitle}', href: '/${route}' }]} />
      </div>
      <PageHero 
        title="${formattedTitle}" 
        description="[CONTENT PENDING CLIENT CONFIRMATION] This section explores ${formattedTitle} as part of the KE Aqua ecosystem."
      />
      <div className="container-width py-16">
        <SectionHeader 
          title="Overview" 
          subtitle="Practical Aquaculture" 
          description="[CONTENT PENDING CLIENT CONFIRMATION] Detailed information about ${formattedTitle} will be published upon final approval." 
        />
      </div>
      <CTASection />
    </main>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});
console.log('Routes generated successfully!');
