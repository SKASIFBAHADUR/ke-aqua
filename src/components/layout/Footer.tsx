import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

export function Footer() {
  return (
    <footer className="bg-[#050D1A] text-slate-300 border-t border-slate-800/80 relative overflow-hidden">
      {/* Top Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          
          {/* COLUMN 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/ke-logo-emblem.png"
                  alt="KE Aqua Group Emblem"
                  width={44}
                  height={44}
                  className="object-contain"
                />
                <div>
                  <span className="text-lg font-bold font-display text-white tracking-wide block leading-none">
                    KE AQUA FARMS
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 tracking-wider block mt-1">
                    {CONTACT_CONFIG.tagline}
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Combining 30 acres of active commercial shrimp farming, Aqua Pulse laboratory diagnostics, smart technology adoption, and hands-on practical training.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">Traditional Knowledge</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">Scientific Farming</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400">Advanced Technology</span>
            </div>
          </div>

          {/* COLUMN 2: Explore Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-businesses" className="hover:text-white hover:underline transition-colors flex items-center gap-1">
                  Our Businesses
                </Link>
              </li>
              <li>
                <Link href="/our-farms" className="hover:text-white hover:underline transition-colors flex items-center gap-1">
                  Our Farms
                </Link>
              </li>
              <li>
                <Link href="/aqua-pulse-lab" className="hover:text-white hover:underline transition-colors flex items-center gap-1">
                  Aqua Pulse Lab
                </Link>
              </li>
              <li>
                <Link href="/farm-technology" className="hover:text-white hover:underline transition-colors flex items-center gap-1">
                  Farm Technology
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white hover:underline transition-colors flex items-center gap-1 text-emerald-400">
                  Practical Learning (Developing)
                </Link>
              </li>

              <li>
                <Link href="/responsible-aquaculture" className="hover:text-white hover:underline transition-colors flex items-center gap-1">
                  Responsible Aquaculture
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors flex items-center gap-1 text-cyan-400">
                  Contact Our Team
                </Link>
              </li>
            </ul>
          </div>


          {/* COLUMN 3: Business Ecosystem (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
              KE Aqua Group Ecosystem
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-850">
                <span className="font-bold text-white block">KE Aqua Farms</span>
                <span className="text-[11px] text-slate-400">30-Acre Commercial Farm &amp; Training Centre</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-850">
                <span className="font-bold text-white block">Kamatham Enterprises</span>
                <span className="text-[11px] text-slate-400">Quality Feeds, Healthcare &amp; Farmer Support</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-850">
                <span className="font-bold text-white block">Aqua Pulse Trader’s</span>
                <span className="text-[11px] text-slate-400">Water Diagnostics &amp; Shrimp Health Science</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-850">
                <span className="font-bold text-white block">KE Coastal</span>
                <span className="text-[11px] text-slate-400">Seafood Processing &amp; Value Chain</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
              Demonstration Facility
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed font-mono">
                  {CONTACT_CONFIG.location.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${CONTACT_CONFIG.phone.value}`} className="hover:text-white hover:underline transition-colors">
                  {CONTACT_CONFIG.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${CONTACT_CONFIG.email.value}`} className="hover:text-white hover:underline transition-colors">
                  {CONTACT_CONFIG.email.display}
                </a>
              </div>
            </div>

            {/* Group Slogan Card */}
            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200">
              <span className="font-semibold block mb-0.5">Group Philosophy:</span>
              <span className="italic">“We Practice. We Monitor. We Learn. We Share.”</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>&copy; {new Date().getFullYear()} KE Aqua Group. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] justify-center sm:justify-end">
            <Link href="/registrations-credentials" className="hover:text-cyan-400 transition-colors">Registrations</Link>
            <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-cyan-400 transition-colors">Disclaimer</Link>
            <Link href="/policies" className="hover:text-cyan-400 transition-colors">Policies</Link>
            <Link href="/laboratory-disclaimer" className="hover:text-cyan-400 transition-colors">Lab Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
