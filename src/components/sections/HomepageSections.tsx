import React from 'react';
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
