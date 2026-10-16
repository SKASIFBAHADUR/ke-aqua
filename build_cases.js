const fs = require('fs');
const path = require('path');

function mdToJsx(md) {
  if (md.charCodeAt(0) === 0xFEFF) md = md.slice(1);
  md = md.replace(/\\_/g, '_').replace(/\\-/g, '-').replace(/\\\./g, '.').replace(/\\,/g, ',');
  
  const blocks = md.split(/\r?\n\r?\n/);
  return blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    if (block.startsWith('# ')) return `<h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 mt-12">${block.substring(2)}</h1>`;
    if (block.startsWith('## ')) return `<h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 mt-8">${block.substring(3)}</h2>`;
    if (block.startsWith('### ')) return `<h3 className="text-xl font-bold text-emerald-400 mb-3 mt-6">${block.substring(4)}</h3>`;
    
    // Lists
    if (block.includes('\n') && block.split('\n').every(line => line.trim().startsWith('- ') || line.trim().match(/^[A-Za-z0-9]+ /))) {
      const lis = block.split('\n').map(line => {
        let text = line.trim();
        if (text.startsWith('- ')) text = text.substring(2);
        return `<li className="mb-2 flex items-start"><span className="text-cyan-400 mr-2">•</span><span>${text}</span></li>`;
      }).join('');
      return `<ul className="text-slate-300 mb-6 space-y-2 ml-4">${lis}</ul>`;
    }

    block = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    if (block.toUpperCase().startsWith('IMPORTANT INTERPRETATION:') || block.toUpperCase().startsWith('IMPORTANT:')) {
      return `<div className="bg-amber-950/20 border border-amber-700/50 p-6 rounded-xl my-8"><p className="text-amber-200 text-sm leading-relaxed">${block}</p></div>`;
    }

    return `<p className="text-slate-300 leading-relaxed mb-6">${block}</p>`;
  }).join('\n');
}

function createPage(slug, title, mdFile) {
  const dir = path.join('src', 'app', 'case-studies', slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const md = fs.readFileSync(mdFile, 'utf16le');
  let jsxContent = mdToJsx(md);

  // Quick fix for unescaped characters in JSX
  jsxContent = jsxContent.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

  const content = `import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "${title} | KE Aqua Farms",
  description: "Read our documented field experience on ${title.toLowerCase()}.",
};

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' }, 
          { label: 'Case Studies', href: '/case-studies' },
          { label: '${title}', href: '/case-studies/${slug}' }
        ]} />
      </div>
      
      <PageHero 
        title="${title}"
        description="Documented field experience, practical observations and lessons from KE Aqua Farms."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          ${jsxContent}
        </div>
      </div>
      <CTASection />
    </main>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
}

// 1. Create the 3 case study pages
createPage('white-gut-risk', 'Preventive Pond Management Approach for Reducing White-Gut Risk in Vannamei Culture', 'case1.md');
createPage('smart-aquaculture', 'From Traditional Farming to Data-Driven Smart Aquaculture', 'case2.md');
createPage('feed-cost-optimization', 'Optimizing Feed Cost Through Stage-Wise Protein Management', 'case3.md');

// 2. Create the main Case Studies page
const indexContent = `import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | KE Aqua Farms",
  description: "Documented field experience, practical observations and lessons from KE Aqua Farms.",
};

const caseStudies = [
  {
    id: '01',
    title: 'Preventive Pond Management Approach for Reducing White-Gut Risk in Vannamei Culture',
    href: '/case-studies/white-gut-risk'
  },
  {
    id: '02',
    title: 'From Traditional Farming to Data-Driven Smart Aquaculture',
    href: '/case-studies/smart-aquaculture'
  },
  {
    id: '03',
    title: 'Optimizing Feed Cost Through Stage-Wise Protein Management',
    href: '/case-studies/feed-cost-optimization'
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Case Studies', href: '/case-studies' }]} />
      </div>
      
      <PageHero 
        title="Verified Case Studies" 
        description="Documented field experience, practical observations and lessons from KE Aqua Farms."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {caseStudies.map(cs => (
            <div key={cs.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors">
              <span className="text-cyan-400 font-mono text-sm font-bold mb-4 block">CASE STUDY {cs.id}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">{cs.title}</h3>
              <Link href={cs.href} className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold rounded-lg transition-colors">
                View Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <CTASection />
    </main>
  );
}
`;
fs.writeFileSync(path.join('src', 'app', 'case-studies', 'page.tsx'), indexContent);

// 3. Create the Homepage Section
const homepageSectionContent = `import React from 'react';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      id: '01',
      title: 'Preventive Pond Management Approach for Reducing White-Gut Risk in Vannamei Culture',
      href: '/case-studies/white-gut-risk'
    },
    {
      id: '02',
      title: 'From Traditional Farming to Data-Driven Smart Aquaculture',
      href: '/case-studies/smart-aquaculture'
    },
    {
      id: '03',
      title: 'Optimizing Feed Cost Through Stage-Wise Protein Management',
      href: '/case-studies/feed-cost-optimization'
    }
  ];

  return (
    <section className="py-24 border-b border-slate-800 bg-[#0A192F]">
      <div className="container-width px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">CASE STUDIES</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">Documented Field Experience</h2>
          <p className="text-slate-400 text-lg">Documented field experience, practical observations and lessons from KE Aqua Farms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map(cs => (
            <div key={cs.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col hover:border-cyan-500/50 transition-colors group">
              <span className="text-cyan-400 font-mono text-sm font-bold mb-4 block">CARD {cs.id}</span>
              <h3 className="text-xl font-bold text-white mb-8 flex-grow">{cs.title}</h3>
              <Link href={cs.href} className="inline-flex items-center gap-2 text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">
                View Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            Explore All Case Studies &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join('src', 'components', 'sections', 'HomepageSections.tsx'), homepageSectionContent);
console.log("Done");
