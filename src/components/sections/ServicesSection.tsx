"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Microscope,
  GraduationCap,
  Sprout,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Activity,
  Layers,
  Thermometer,
  Zap,
  Users,
  ChevronRight,
  Sparkles,
  Leaf,
  Compass,
  MessageSquare,
} from "lucide-react";

// Framer Motion helper with proper constant ease
function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  };
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0A192F] text-slate-100 relative overflow-hidden border-t border-slate-800">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ==================================================================== */}
        {/* SECTION HEADER                                                        */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Core Capabilities &amp; Services
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Practical Farming + Scientific Monitoring + Smart Tech + Training
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg text-slate-300 leading-relaxed">
            KE Aqua Farms is not an aqua-products dealership. We operate a <span className="text-cyan-400 font-semibold">30-acre commercial demonstration farm</span> integrated with laboratory diagnostics, automated smart technology, and hands-on practical training.
          </motion.p>
        </div>


        {/* ==================================================================== */}
        {/* 0. AQUACULTURE FARM CONSULTANCY & FARM SUPPORT — FEATURED             */}
        {/* ==================================================================== */}
        <div className="mb-24">
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Practical Farm Support</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Aquaculture Farm Consultancy & Farm Support</h3>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="relative rounded-2xl overflow-hidden border border-emerald-800/40 bg-[#112240] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

              {/* Left image panel */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px]">
                <Image
                  src="/assets/svc-farm-ops.jpg"
                  alt="KE Aqua Farms team at the pond — practical farm support and consultancy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#112240] hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent lg:hidden" />
              </div>

              {/* Right content panel */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-5">
                  <span className="inline-block px-3 py-1 rounded bg-emerald-950/80 text-emerald-300 text-xs font-semibold uppercase border border-emerald-800">
                    Grounded in Commercial Farming Experience
                  </span>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Practical farm consultancy and support informed by real commercial shrimp farming operations. KE Aqua Farms operates a 30-acre working farm — every area of support we offer is drawn from actual field experience, not theory alone.
                  </p>

                  {/* Key area tags */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Pond Preparation", "Seed & Stocking", "Feeding Management",
                      "Water Quality", "Shrimp Health Observation", "Aeration",
                      "Farm Records", "Technology Adoption", "Biosecurity",
                    ].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-700/60">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Approach strip */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    {["OBSERVE", "UNDERSTAND", "MEASURE", "ASSESS", "ACT", "IMPROVE"].map((step, i, arr) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-slate-800 font-bold tracking-wide">{step}</span>
                        {i < arr.length - 1 && <ChevronRight className="w-3 h-3 text-slate-400" />}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-8 pt-6 border-t border-slate-800 flex-wrap">
                  <Link
                    href="/services/aquaculture-farm-consultancy"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    Explore Farm Consultancy
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/services/farm-monitoring-technical-support"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 font-semibold text-xs transition-all"
                  >
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    Farm Monitoring &amp; Tech Support
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-xs hover:bg-slate-800 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    Enquire Direct
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* ==================================================================== */}
        {/* 1. SMART FARM TECHNOLOGY CONSULTING & IMPLEMENTATION                  */}
        {/* ==================================================================== */}
        <div className="mb-24">
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Technology &amp; Automation</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Smart Farm Technology Solutions</h3>
            </div>
          </motion.div>

          {/* Featured Tech Hero Card */}
          <motion.div {...fadeUp(0.1)} className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#112240] mb-8 p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 rounded bg-cyan-950/80 text-cyan-300 text-xs font-semibold uppercase border border-cyan-800">
                  Modern Commercial Infrastructure
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  Field-Tested Farm Automation &amp; Sensor Solutions
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We deploy automated feeding systems, mechanical aeration setups, continuous water sensors, and micro-bubble aeration technologies directly across our 30-acre growout ponds to evaluate real-world yield improvements and cost efficiency.
                </p>
                <div className="pt-2 flex flex-wrap gap-3 text-xs font-medium">
                  <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Lower Feed Conversion Ratio (FCR)
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Stable Dissolved Oxygen (DO)
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Early Stress Warning Alerts
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <Link
                    href="/services/farm-technology-consulting"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    Explore Farm Technology Consulting
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-56 sm:h-72 rounded-xl overflow-hidden border border-slate-700/60 shadow-lg">
                <Image
                  src="/assets/svc-tech-bg.jpg"
                  alt="Auto Feeders and Aeration in Growout Pond"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded bg-slate-950/90 backdrop-blur border border-slate-800 text-xs text-slate-200">
                  <span className="font-bold text-cyan-400">Pond 4 Infrastructure:</span> Dual Auto Feeders &amp; 4-HP Aeration Setup
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4 Tech Solutions Grid (Problem -> Solution -> KE Practice -> Benefit) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Tech Item 1: Auto Feeders */}
            <motion.div {...fadeUp(0.15)} className="p-6 rounded-2xl bg-[#112240] border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white">1. Auto Feeder Solutions</h4>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-slate-900 text-cyan-300 font-mono border border-slate-800">FCR Optimization</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-rose-400 block mb-1 flex items-center gap-1.5 text-xs">
                      <AlertTriangle className="w-3.5 h-3.5" /> Farm Challenge:
                    </span>
                    <p className="text-slate-300 leading-relaxed">Overfeeding causes bottom sludge, ammonia spikes, and high FCR costs. Underfeeding slows growth.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-cyan-400 block mb-1 text-xs">Technology Solution:</span>
                    <p className="text-slate-300 leading-relaxed">Timer-based &amp; acoustics-ready automated feed broadcasting units with adjustable dispersion radii.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-emerald-400 block mb-1 text-xs">Our Field Practice:</span>
                    <p className="text-slate-300 leading-relaxed">Installed across 30-acre growout ponds for regulated hourly feeding schedules matching biomass demand.</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-medium">
                <span className="text-slate-400">Potential Benefit:</span>
                <Link
                  href="/services/auto-feeder-solutions"
                  className="text-xs text-amber-400 hover:text-amber-300 font-mono flex items-center gap-1 font-bold"
                >
                  <span>Feeder Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

            {/* Tech Item 2: Aeration Management */}
            <motion.div {...fadeUp(0.2)} className="p-6 rounded-2xl bg-[#112240] border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white">2. Aeration Management</h4>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-slate-900 text-cyan-300 font-mono border border-slate-800">DO Stability</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-rose-400 block mb-1 flex items-center gap-1.5 text-xs">
                      <AlertTriangle className="w-3.5 h-3.5" /> Farm Challenge:
                    </span>
                    <p className="text-slate-300 leading-relaxed">Nighttime dissolved oxygen crashes cause sudden shrimp mortality and severe metabolic stress.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-cyan-400 block mb-1 text-xs">Technology Solution:</span>
                    <p className="text-slate-300 leading-relaxed">Strategic positioning of paddlewheel aerators, jet aerators, and subsurface air injectors.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-emerald-400 block mb-1 text-xs">Our Field Practice:</span>
                    <p className="text-slate-300 leading-relaxed">24/7 monitored aeration schedules tailored to crop phase, biomass weight, and weather shifts.</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-medium">
                <span className="text-slate-400">Potential Benefit:</span>
                <Link
                  href="/services/aeration-management"
                  className="text-xs text-blue-400 hover:text-blue-300 font-mono flex items-center gap-1 font-bold"
                >
                  <span>Aeration Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

            {/* Tech Item 3: IoT Sensors */}
            <motion.div {...fadeUp(0.25)} className="p-6 rounded-2xl bg-[#112240] border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white">3. Sensor Water Monitoring</h4>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-slate-900 text-cyan-300 font-mono border border-slate-800">Real-Time Data</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-rose-400 block mb-1 flex items-center gap-1.5 text-xs">
                      <AlertTriangle className="w-3.5 h-3.5" /> Farm Challenge:
                    </span>
                    <p className="text-slate-300 leading-relaxed">Manual water testing misses rapid mid-day pH swings or sudden temperature drops.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-cyan-400 block mb-1 text-xs">Technology Solution:</span>
                    <p className="text-slate-300 leading-relaxed">Digital probe sensors continuously reading pH, DO, temperature, and salinity levels.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-emerald-400 block mb-1 text-xs">Our Field Practice:</span>
                    <p className="text-slate-300 leading-relaxed">Deployed in active nursery &amp; growout ponds to trigger instant alerts to farm technicians.</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-medium">
                <span className="text-slate-400">Potential Benefit:</span>
                <Link
                  href="/services/iot-sensor-monitoring"
                  className="text-xs text-purple-400 hover:text-purple-300 font-mono flex items-center gap-1 font-bold"
                >
                  <span>Sensor Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

            {/* Tech Item 4: Micro/Nano Bubble Tech */}
            <motion.div {...fadeUp(0.3)} className="p-6 rounded-2xl bg-[#112240] border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white">4. Micro &amp; Nano Bubble Tech</h4>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-slate-900 text-cyan-300 font-mono border border-slate-800">Advanced Oxygenation</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-rose-400 block mb-1 flex items-center gap-1.5 text-xs">
                      <AlertTriangle className="w-3.5 h-3.5" /> Farm Challenge:
                    </span>
                    <p className="text-slate-300 leading-relaxed">Conventional aeration fails to efficiently oxygenate deep benthic sediment layers where sludge accumulates.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-cyan-400 block mb-1 text-xs">Technology Solution:</span>
                    <p className="text-slate-300 leading-relaxed">Ultra-fine micro and nano bubble generators providing extended oxygen residence time in water.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80">
                    <span className="font-bold text-emerald-400 block mb-1 text-xs">Our Field Practice:</span>
                    <p className="text-slate-300 leading-relaxed">Evaluated in nursery ponds for enhanced bio-floc support and anaerobic zone reduction.</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-medium">
                <span className="text-slate-400">Potential Benefit:</span>
                <Link
                  href="/services/micro-nano-bubble-technology"
                  className="text-xs text-teal-400 hover:text-teal-300 font-mono flex items-center gap-1 font-bold"
                >
                  <span>Technology Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>


        {/* ==================================================================== */}
        {/* 2. AQUA PULSE LABORATORY & HEALTH MONITORING                          */}
        {/* ==================================================================== */}
        <div className="mb-24">
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Scientific Diagnostics</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Aqua Pulse Laboratory Support</h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Lab Image Banner Card */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 min-h-[340px] flex flex-col justify-end p-6 sm:p-8 shadow-2xl">
              <Image
                src="/Real_Images/image_7.jpeg"
                alt="Aqua Pulse laboratory technician conducting water testing and titration diagnostics"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              <div className="relative z-10 space-y-3">
                <span className="inline-block px-3 py-1 rounded bg-cyan-950/90 text-cyan-300 text-xs font-semibold uppercase border border-cyan-800">
                  On-Farm &amp; Partner Diagnostics
                </span>
                <h4 className="text-xl font-bold text-white">
                  Routine Health &amp; Water Analysis
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Regular microscopic gut/gill monitoring and water chemistry testing prevent sudden mass mortalities by catching early pathogens and mineral imbalances.
                </p>
                <div className="p-3 rounded-lg bg-slate-950/90 border border-slate-800 text-[11px] text-slate-300 italic">
                  * Note: Laboratory testing services are verified and operated in coordination with Aqua Pulse Trader&apos;s laboratory facilities.
                </div>
              </div>
            </motion.div>

            {/* Lab Services List */}
            <motion.div {...fadeUp(0.2)} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-xl bg-[#112240] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm mb-3">01</div>
                  <h4 className="text-base font-bold text-white mb-2">Water Quality Parameter Testing</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Precision testing for pH, Salinity, Ammonia (TAN), Nitrite (NO2), Alkalinity, Hardness, and essential mineral balances (Ca, Mg).
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] text-cyan-400 font-semibold">Routine &amp; Crisis Diagnostics</span>
                  <Link
                    href="/services/water-quality-testing"
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 font-bold"
                  >
                    <span>Lab Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#112240] border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm mb-3">02</div>
                  <h4 className="text-base font-bold text-white mb-2">Microscopic &amp; Health Checks</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Microscopic observation of shrimp hepatopancreas, gut fullness ratio, gill filament cleanliness, and plankton dynamics.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] text-emerald-400 font-semibold">Optical Diagnostics</span>
                  <Link
                    href="/services/microscopic-shrimp-health-analysis"
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-mono flex items-center gap-1 font-bold"
                  >
                    <span>Health Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#112240] border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm mb-3">03</div>
                  <h4 className="text-base font-bold text-white mb-2">Microbiology &amp; Vibrio Testing</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    TCBS agar plating to count Total Vibrio, differentiating green colonies vs yellow colonies for bacterial load awareness.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] text-purple-400 font-semibold">Bacterial Monitoring</span>
                  <Link
                    href="/services/microbiology-vibrio-testing"
                    className="text-xs text-purple-400 hover:text-purple-300 font-mono flex items-center gap-1 font-bold"
                  >
                    <span>Vibrio Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#112240] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm mb-3">04</div>
                  <h4 className="text-base font-bold text-white mb-2">Periodic Farm Monitoring Support</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Regular pond observation visits, water parameter logging, shrimp behavior checks, and record reviews.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] text-amber-400 font-semibold">Preventative Advisory</span>
                  <Link
                    href="/services/periodic-farm-monitoring"
                    className="text-xs text-amber-400 hover:text-amber-300 font-mono flex items-center gap-1 font-bold"
                  >
                    <span>Monitoring Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
        </div>


        {/* ==================================================================== */}
        {/* 3. PRACTICAL AQUACULTURE TRAINING & ENTREPRENEURSHIP DEVELOPMENT     */}
        {/* ==================================================================== */}
        <div className="mb-24">
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Hands-On Learning</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Practical Learning (Developing) &amp; Exposure Programs</h3>
            </div>
          </motion.div>

          <div className="bg-[#112240] border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 shadow-2xl">
            <div className="max-w-3xl mb-10">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Learn Practical Aquaculture on a Working 30-Acre Farm
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most aquaculture training relies purely on classroom theory. At KE Aqua Farms, trainees step onto active pond dykes, handle water testing kits, observe feeding behaviors, and learn real operational decision-making under actual commercial conditions.
              </p>
            </div>

            {/* Training Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Tier 1</span>
                  <h5 className="text-base font-bold text-white mt-1 mb-2">1-Day Exposure Program</h5>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Guided 30-acre farm tour, basic water testing demo, and operational overview for beginners.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-900 text-xs text-slate-400 font-mono">
                  Duration: 1 Day
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Tier 2</span>
                  <h5 className="text-base font-bold text-white mt-1 mb-2">3-Day Technical Orientation</h5>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Water quality parameter management, basic feeding schedules, and health monitoring essentials.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-900 text-xs text-slate-400 font-mono">
                  Duration: 3 Days
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Tier 3</span>
                  <h5 className="text-base font-bold text-white mt-1 mb-2">7-Day Operator Workshop</h5>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Pond prep, seed stocking protocol, feeder setup, lab testing practice, and daily farm routines.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-900 text-xs text-slate-400 font-mono">
                  Duration: 7 Days
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Tier 4</span>
                  <h5 className="text-base font-bold text-white mt-1 mb-2">15-Day Management Course</h5>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    End-to-end farm management, bio-security setup, FCR optimization, disease response, harvesting.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-900 text-xs text-slate-400 font-mono">
                  Duration: 15 Days
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-700/60 hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide">Tier 5</span>
                  <h5 className="text-base font-bold text-white mt-1 mb-2">Full Crop Internship</h5>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Complete seasonal exposure from pre-stocking pond preparation through growout to harvest &amp; sales.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-emerald-900/60 text-xs text-emerald-300 font-mono font-bold">
                  Full Crop Duration
                </div>
              </div>

            </div>

            {/* Who Can Join Strip */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-200">
                <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>New Farmers &amp; Entrepreneurs</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Sprout className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Agriculture &amp; Fishery Graduates</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Farm Owners Modernizing Tech</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Farm Supervisors &amp; Technicians</span>
              </div>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/60 text-sm text-amber-200 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Disclaimer: Training programs provide technical skills and practical farm exposure. We do not advertise guaranteed financial returns or risk-free investments.</span>
              </span>
              <Link href="/contact" className="text-amber-300 hover:underline shrink-0 font-semibold hidden sm:inline-flex items-center gap-1 ml-4">
                View Details <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>


        {/* ==================================================================== */}
        {/* 4. FARM CONSULTANCY & SUPPORT SERVICES                                */}
        {/* ==================================================================== */}
        <div className="mb-20">
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Consultancy &amp; Advisory</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Aquaculture Farm Support</h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div {...fadeUp(0.1)} className="p-6 rounded-2xl bg-[#112240] border border-slate-800 hover:border-indigo-500/50 transition-all shadow-xl">
              <h4 className="text-lg font-bold text-white mb-2">Farm Site &amp; Layout Assessment</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Evaluating soil suitability, water source quality, pond depth requirements, inlet/outlet design, and electrical layout for new farm projects.
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Soil salinity &amp; seepage evaluation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Drainage &amp; central drain design</li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="p-6 rounded-2xl bg-[#112240] border border-slate-800 hover:border-indigo-500/50 transition-all shadow-xl">
              <h4 className="text-lg font-bold text-white mb-2">Seed Selection &amp; Screening Support</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Guidance on selecting healthy Post-Larvae (PL) seed, conducting stress tests, verifying PCR pathogen test reports, and acclimatization protocols.
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Microscopic PL gut/muscle check</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Salinity acclimation procedures</li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="p-6 rounded-2xl bg-[#112240] border border-slate-800 hover:border-indigo-500/50 transition-all shadow-xl">
              <h4 className="text-lg font-bold text-white mb-2">Biosecurity &amp; Crop Planning</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Structuring bird fencing, crab fencing, reservoir treatment protocols, stocking density calculations, and crop calendar optimization.
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Multi-barrier exclusion setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Seasonal stocking timing advice</li>
              </ul>
            </motion.div>
          </div>
        </div>


        {/* ==================================================================== */}
        {/* CTA BANNER                                                           */}
        {/* ==================================================================== */}
        <motion.div {...fadeUp(0.1)} className="rounded-3xl bg-gradient-to-r from-cyan-950 via-slate-900 to-emerald-950 border border-cyan-800/60 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Discuss Your Farm Requirements or Request Practical Learning (Developing) Details
            </h3>
            <p className="text-xs sm:text-base text-slate-200 leading-relaxed">
              Connect directly with our technical team to schedule a farm visit, discuss water testing options, or explore our practical learning initiatives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:bg-cyan-300 transition-all"
              >
                Send Farm Enquiry <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/practical-aquaculture-training"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                Explore Our Farm
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
