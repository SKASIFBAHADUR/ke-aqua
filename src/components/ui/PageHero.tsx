"use client";

import React from 'react';

export function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="bg-[#0A192F] py-16 border-b border-slate-800">
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
