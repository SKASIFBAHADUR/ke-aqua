import React from 'react';
import Link from 'next/link';

export function FounderPreviewSection() {
  return (
    <section className="py-24 bg-[#0A192F] border-t border-slate-800">
      <div className="container-width px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-square sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
               <img 
                 src="/assets/Founder_photo.png" 
                 alt="Kamatham Emmanuel"
                 className="object-cover w-full h-full"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                 <p className="text-white font-bold text-xl">Kamatham Emmanuel</p>
                 <p className="text-cyan-400 text-sm font-mono mt-1">Founder | Entrepreneur</p>
               </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-2">Our Founder</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
              From Engineering &amp; Skill Development to Scientific Aquaculture
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Kamatham Emmanuel is a Mechanical Engineer, entrepreneur, technical trainer and aquaculture professional. Through KE Aqua Farms, his focus is on learning from real farm conditions, monitoring systematically, evaluating technology practically and sharing useful knowledge responsibly.
            </p>
            <div className="bg-slate-900/60 p-6 rounded-xl border-l-4 border-emerald-500 my-8">
              <p className="text-xl font-medium italic text-emerald-300">
                “We Practice. We Monitor. We Learn. We Share.”
              </p>
            </div>
            <Link href="/founder" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold rounded-lg transition-colors">
              Meet the Founder &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
