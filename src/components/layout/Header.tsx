"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

// TODO: CLIENT CONFIRMATION REQUIRED — MASTER BRAND HIERARCHY
// The logo currently displays KE Aqua Farms. Needs resolution if KE Aqua Group should be master.

const navGroups = [
  {
    label: "About",
    href: "/our-businesses",
    subItems: [
      { name: "Businesses", href: "/our-businesses" },
      { name: "Founder", href: "/founder" },
    ]
  },
  {
    label: "Farming",
    href: "/our-farms",
    subItems: [
      { name: "Farms", href: "/our-farms" },
      { name: "Seed Selection", href: "/seed-selection" },
    ]
  },
  {
    label: "Science & Tech",
    href: "/aqua-pulse-lab",
    subItems: [
      { name: "Aqua Pulse Lab", href: "/aqua-pulse-lab" },
      { name: "Farm Technology", href: "/farm-technology" },
      { name: "Water Quality Testing", href: "/services/water-quality-testing" },
      { name: "Microscopic Health Analysis", href: "/services/microscopic-shrimp-health-analysis" },
      { name: "Vibrio Testing", href: "/services/microbiology-vibrio-testing" },
      { name: "Periodic Farm Monitoring", href: "/services/periodic-farm-monitoring" },
      { name: "Auto Feeder Solutions", href: "/services/auto-feeder-solutions" },
      { name: "Aeration Management", href: "/services/aeration-management" },
      { name: "IoT Sensor Monitoring", href: "/services/iot-sensor-monitoring" },
      { name: "Micro Nano Bubble Tech", href: "/services/micro-nano-bubble-technology" },
    ]
  },
  {
    label: "Learning",
    href: "/practical-training",
    subItems: [
      { name: "Practical Learning (Developing)", href: "/practical-training" },
      { name: "Farmer Development", href: "/farmer-development" },
    ]
  },

  {
    label: "Media",
    href: "/case-studies",
    subItems: [

      { name: "Case Studies", href: "/case-studies" },
      { name: "Media Gallery", href: "/media" },
    ]
  },
  {
    label: "Business",
    href: "/our-businesses",
    subItems: [
      { name: "KE Coastal", href: "/ke-coastal" },
      { name: "Registrations & Credentials", href: "/registrations-credentials" },
    ]
  }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { /* setIsMobileMenuOpen(false); disabled to fix setState in effect */ }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A192F]/90 backdrop-blur-md shadow-lg border-b border-slate-800 py-3"
          : "bg-[#0A192F]/80 backdrop-blur-sm py-4 border-b border-slate-800/40"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Branding */}
        <Link
          href="/"
          className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 shrink-0"
        >
          <div className="relative w-10 h-10 flex items-center justify-center bg-slate-900 rounded-xl border border-slate-700/80 group-hover:border-cyan-400 transition-colors shrink-0 shadow-md">
            <img
              src="/assets/ke-logo-emblem.png"
              alt="KE Aqua Farms Emblem"
              className="w-7 h-7 object-contain"
            />
          </div>
          <div>
            <span className="block font-display font-extrabold text-base md:text-lg leading-none text-white tracking-tight">
              KE Aqua Farms
            </span>
            <span className="block font-sans text-[0.62rem] uppercase tracking-wider text-cyan-400 font-semibold mt-0.5">
              The Key to Practical Aquaculture
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-4">
          <ul className="flex items-center gap-4 xl:gap-6 flex-wrap justify-center">
            <li key="Home">
               <Link
                 href="/"
                 className={`text-[11px] xl:text-xs font-semibold uppercase tracking-wider transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-2 py-1 ${
                   pathname === "/" ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-white"
                 }`}
               >
                 Home
               </Link>
            </li>
            {navGroups.map((group) => {
              const isActive = pathname.startsWith(group.href) || group.subItems.some(sub => pathname === sub.href);
              return (
                <li key={group.label} className="group relative">
                  <div className={`flex items-center gap-1 text-[11px] xl:text-xs font-semibold uppercase tracking-wider transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-2 py-1 cursor-default ${
                      isActive ? "text-cyan-400 font-bold" : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {group.label}
                    <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  </div>
                  
                  {/* Dropdown */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="w-64 bg-[#0A192F]/95 backdrop-blur-xl border border-slate-700/80 rounded-xl shadow-2xl shadow-cyan-900/20 p-2 relative">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A192F] border-t border-l border-slate-700/80 transform rotate-45"></div>
                      <div className="flex flex-col gap-1">
                        {group.subItems.map((sub, idx) => (
                          <Link 
                            key={idx} 
                            href={sub.href}
                            className={`px-4 py-2 rounded-lg transition-colors border border-transparent text-sm leading-snug ${
                              pathname === sub.href 
                                ? "bg-slate-800/80 text-cyan-400 font-medium" 
                                : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-slate-200 hover:text-cyan-400 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg bg-slate-900 border border-slate-800"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-[#0A192F] shadow-2xl z-50 flex flex-col lg:hidden border-l border-slate-800 text-white"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/ke-logo-emblem.png"
                    alt="KE Aqua Emblem"
                    className="w-6 h-6 object-contain"
                  />
                  <span className="font-display font-extrabold text-base text-white">KE Aqua Farms</span>
                </div>
                <button
                  className="p-2 text-slate-400 hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg bg-slate-900 border border-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-6">
                <ul className="flex flex-col gap-4">
                  <li key="Home">
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-1 text-base transition-colors ${
                        pathname === "/" ? "font-bold text-cyan-400" : "font-semibold text-slate-300 hover:text-white"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  {navGroups.map((group) => {
                    const isActiveGroup = pathname.startsWith(group.href) || group.subItems.some(sub => pathname === sub.href);
                    return (
                      <li key={group.label} className="flex flex-col gap-2">
                        <span className={`block py-1 text-base uppercase tracking-wider text-[10px] ${isActiveGroup ? "text-cyan-400 font-bold" : "text-slate-500 font-semibold"}`}>
                          {group.label}
                        </span>
                        <div className="flex flex-col gap-2 pl-3 border-l border-slate-800">
                          {group.subItems.map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`py-1 text-sm transition-colors ${
                                pathname === sub.href ? "text-cyan-400 font-medium" : "text-slate-300 hover:text-white"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              <div className="p-5 border-t border-slate-800 shrink-0">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3.5 px-4 rounded-xl bg-cyan-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 mb-4"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 text-xs text-slate-400 text-center">
                  30-Acre Practical Demonstration Farm<br />
                  Krishna District, Andhra Pradesh
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
