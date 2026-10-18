"use client";

import React from 'react';

export function SectionHeader({ title, subtitle, description }: { title: string; subtitle?: string; description?: string }) {
  return (
    <div className="mb-12">
      {subtitle && (
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-display font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-300 max-w-3xl leading-relaxed text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
