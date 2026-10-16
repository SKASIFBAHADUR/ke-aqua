"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 text-xs font-medium">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="inline-flex items-center">
              {index > 0 && <ChevronRight className="w-3 h-3 text-slate-500 mx-1" />}
              {isLast ? (
                <span className="text-cyan-400" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
