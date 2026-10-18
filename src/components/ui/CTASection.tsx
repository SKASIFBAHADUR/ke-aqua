"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-slate-900 border-t border-slate-800 py-16 text-center">
      <div className="container-width px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Discuss Your Aquaculture Needs?</h3>
        <p className="text-slate-300 mb-8 leading-relaxed">
          Contact our team to learn more about our services, schedule a farm visit, or explore technical solutions.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-colors"
        >
          Contact Our Team <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
