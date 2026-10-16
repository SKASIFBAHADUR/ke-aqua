"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Compass,
  Cpu,
  Eye,
  Fish,
  FlaskConical,
  GraduationCap,
  Layers,
  Leaf,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sprout,
  Target,
  TrendingUp,
  Users,
  Waves,
  Activity,
  BookOpen,
  AlertCircle,
  BarChart3,
  Thermometer,
  Wind,
  Microscope,
  FileSpreadsheet,
  Clock,
  HelpCircle,
  Sparkles,
  Droplets,
  TestTube,
  FileCheck2,
  Lightbulb,
  Zap,
  RotateCw,
  Scale,
} from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

/* ====================================================================
 * MOTION HELPERS
 * ==================================================================== */
function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  };
}

/* ====================================================================
 * DATA — 9 PRACTICAL FEEDING CARDS (Section 2)
 * ==================================================================== */
const feedingPractices = [
  {
    id: "feed-distribution",
    title: "1. Feed Distribution",
    desc: "Regulated 360-degree feed broadcasting radii ensuring even pellet dispersion across active feeding zones.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    id: "feeding-schedules",
    title: "2. Feeding Schedules",
    desc: "Hourly regulated broadcast intervals matching shrimp metabolic activity cycles throughout daylight hours.",
    icon: Clock,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "feeding-behaviour",
    title: "3. Feeding Behaviour",
    desc: "Observing shrimp response during feeder broadcasts to ensure active feeding eagerness and swimming vigor.",
    icon: Eye,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "check-trays",
    title: "4. Feed Tray Inspection",
    desc: "Manual check tray monitoring placed near auto-feeder broadcast zones to verify clearance speeds and gut fill.",
    icon: CheckCircle2,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    id: "biomass-feeding",
    title: "5. Biomass-Based Feeding",
    desc: "Calculating daily feed allowances derived from weekly Mean Body Weight (MBW) sampling and estimated survival.",
    icon: Scale,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    id: "feed-adjustment",
    title: "6. Feed Adjustment",
    desc: "Promptly reducing feed broadcasting rates during rain events, low dissolved oxygen periods, or molting phases.",
    icon: RotateCw,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    id: "wastage-control",
    title: "7. Wastage & Sludge Control",
    desc: "Preventing heavy unconsumed feed accumulation on pond bottoms to protect water quality and benthic soil health.",
    icon: ShieldCheck,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/30",
  },
  {
    id: "fcr-awareness",
    title: "8. FCR Trend Awareness",
    desc: "Tracking cumulative feed inputs against biomass gain to evaluate Feed Conversion Ratio efficiency.",
    icon: TrendingUp,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/30",
  },
  {
    id: "practice-monitoring",
    title: "9. Feeding Practice Monitoring",
    desc: "Technician routine maintenance, hopper refilling schedules, and electrical safety checks across all feeding stations.",
    icon: Activity,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
];

/* ====================================================================
 * DATA — PRACTICAL WORKFLOW (Section 3: 6 Steps)
 * ==================================================================== */
const workflowSteps = [
  {
    step: "01",
    label: "FARM REQUIREMENT",
    title: "Assess Feeding Needs",
    desc: "Identifying feeding challenges, pond size, labor availability, and stocking density.",
    icon: AlertCircle,
  },
  {
    step: "02",
    label: "FEEDING OBJECTIVE",
    title: "Define Goals",
    desc: "Setting clear targets for regulated hourly feeding, tray check routines, and waste control.",
    icon: Target,
  },
  {
    step: "03",
    label: "TECHNOLOGY",
    title: "Select Feeder Hardware",
    desc: "Choosing reliable broadcast units, timer controls, and solar/power backup systems.",
    icon: Zap,
  },
  {
    step: "04",
    label: "FARM PRACTICE",
    title: "Field Installation",
    desc: "Positioning auto feeders in optimal water depth with proper aeration circulation.",
    icon: Sprout,
  },
  {
    step: "05",
    label: "OBSERVATION",
    title: "Daily Tray & behavior Check",
    desc: "Inspecting check trays, monitoring gut fullness, and adjusting timer intervals.",
    icon: Eye,
  },
  {
    step: "06",
    label: "REVIEW",
    title: "Logbook & FCR Review",
    desc: "Comparing feed inputs with growth sampling logs to refine daily feed allowances.",
    icon: BarChart3,
  },
];

/* ====================================================================
 * DATA — RELATED SERVICES (Section 7)
 * ==================================================================== */
const relatedServices = [
  {
    title: "Farm Technology Consulting",
    subtitle: "Problem-First Tech Evaluation",
    desc: "Evaluating aquaculture equipment, auto feeders, sensors, and aeration based on practical farm needs.",
    href: "/services/farm-technology-consulting",
    icon: Cpu,
    color: "text-cyan-400",
  },
  {
    title: "Periodic Farm Monitoring",
    subtitle: "Regular Field Visits",
    desc: "Structured pond observation visits, water parameter logging, shrimp behavior checks, and record reviews.",
    href: "/services/periodic-farm-monitoring",
    icon: Activity,
    color: "text-emerald-400",
  },
  {
    title: "Water Quality Testing",
    subtitle: "Aqua Pulse Chemical Analysis",
    desc: "Precision testing for pH, alkalinity, hardness, TAN, nitrite, and salinity.",
    href: "/services/water-quality-testing",
    icon: FlaskConical,
    color: "text-blue-400",
  },
  {
    title: "Microscopic Shrimp Health Analysis",
    subtitle: "Organ & Plankton Checks",
    desc: "Microscopic evaluation of hepatopancreas, gut fullness ratio, gill filaments, and plankton.",
    href: "/services/microscopic-shrimp-health-analysis",
    icon: Microscope,
    color: "text-purple-400",
  },
];

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function AutoFeederSolutionsPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-amber-900/20 via-cyan-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1300px] right-0 w-96 h-96 bg-cyan-900/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2500px] left-0 w-96 h-96 bg-emerald-900/15 blur-3xl pointer-events-none -z-10" />

      {/* ====================================================================
       * BREADCRUMB & HERO SECTION
       * ==================================================================== */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-slate-800/80 bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-8 overflow-x-auto pb-2">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <Link href="/#services" className="hover:text-cyan-400 transition-colors">
              Capabilities
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <span className="text-amber-400 font-medium whitespace-nowrap">
              Auto Feeder Solutions
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wider uppercase">
                <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>KE AQUA FARMS • AUTO FEEDER SOLUTIONS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Smarter Feeding Starts <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-teal-300 to-cyan-400">
                  With Better Observation
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                Automated feeding systems distribute pellets evenly across regulated hourly intervals, reducing large single-feed dumps and protecting pond bottom quality. At <strong className="text-white font-semibold">KE Aqua Farms</strong>, auto feeders are integrated with daily check tray inspection, biomass calculations, and water parameter monitoring across our 30-acre working farm.
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "Regulated Hourly Broadcasts",
                  "360° Feed Dispersion",
                  "Check Tray Observation",
                  "Bottom Sludge Reduction",
                  "Biomass Calculations",
                  "FCR Trend Tracking",
                ].map((chip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="truncate">{chip}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#contact-section"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all duration-200 group"
                >
                  <Zap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>ENQUIRE ABOUT AUTO FEEDERS</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#feeding-practices"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <Eye className="w-4 h-4 mr-2 text-amber-400" />
                  <span>Explore Feeding Practices</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-amber-950/40 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/assets/svc-tech-bg.jpg"
                    alt="KE Aqua Farms - Auto Feeder Deployment in Growout Pond"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Overlaid Card Info */}
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                      COMMERCIAL FIELD FEEDING
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-mono">
                      AUTO FEEDERS
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    &ldquo;Auto feeders are powerful tools for continuous feed distribution, but human check tray inspection remains indispensable for observing shrimp response.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">KE Aqua Farms Advisory</h4>
                      <p className="text-[11px] text-slate-400 font-mono">Auto Feeder Setup &amp; Advisory</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: WHY AUTO FEEDING
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>THE PURPOSE OF AUTOMATED FEEDING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Why Auto Feeding in Modern Aquaculture
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Traditional hand feeding distributes large feed volumes 3 to 4 times a day, often leading to temporary feed over-accumulation on the pond bottom. Auto feeders broadcast small pellet quantities continuously over hourly intervals, matching natural shrimp foraging behavior and protecting water quality.
            </p>
          </motion.div>

          {/* 3 Core Value Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.15)}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Regulated Hourly Broadcasts</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Distributing feed in small, frequent increments allows shrimp to consume fresh pellets continuously without leaving uneaten feed to decay on the pond substrate.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.25)}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Protecting Pond Bottom Soil</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Reducing unconsumed feed accumulation minimizes anaerobic sludge zones, TAN spikes, and toxic hydrogen sulfide formation near aerator dead spots.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.35)}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Supporting FCR Optimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Combining automated broadcasting with check tray inspection helps farm managers track feed consumption patterns and optimize feed conversion efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: AUTO FEEDING IN PRACTICE (9 CARDS GRID)
       * ==================================================================== */}
      <section id="feeding-practices" className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div className="space-y-3 max-w-2xl" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>PRACTICAL FEEDING DOMAINS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                9 Key Auto Feeding Practices
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light">
                Core practical elements evaluated and managed during auto feeder operations.
              </p>
            </motion.div>

            <motion.div className="flex-shrink-0" {...fadeUp(0.2)}>
              <a
                href="#contact-section"
                className="inline-flex items-center text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold group"
              >
                <span>REQUEST AUTO FEEDER ADVISORY</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* 9 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feedingPractices.map((practice, idx) => {
              const PracIcon = practice.icon;
              return (
                <motion.div
                  key={practice.id}
                  className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 space-y-3 flex flex-col justify-between"
                  {...fadeUp(0.05 + idx * 0.05)}
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-lg bg-slate-950 border ${practice.bg} flex items-center justify-center ${practice.color}`}>
                      <PracIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white">{practice.title}</h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {practice.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: PRACTICAL WORKFLOW (6-STEP FLOW)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>THE ADOPTION WORKFLOW</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Auto Feeder Practical Workflow
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              From defining farm feeding objectives to daily tray inspection and logbook reviews.
            </p>
          </motion.div>

          {/* 6-Step Horizontal Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {workflowSteps.map((st, idx) => {
              const StepIcon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  className="relative p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                        {st.label}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{st.step}</span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white">{st.title}</h3>

                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {st.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 4: AUTO FEEDER + MONITORING (CONNECTED SYSTEM)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Messaging */}
            <motion.div className="lg:col-span-6 space-y-6" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>CONNECTED FEEDING SYSTEM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Automation Does Not Replace Human Observation
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                An auto feeder is a feed broadcasting tool—it cannot see shrimp gut fullness, feel weather shifts, or observe check trays. At KE Aqua Farms, automated feeding is always paired with human observation, check tray reviews, growth sampling, and water quality data.
              </p>

              <div className="space-y-3">
                {[
                  { title: "Feed Broadcasting + Check Trays", desc: "Placing check trays within the broadcast radius to observe pellet clearance times." },
                  { title: "Feed Allocation + Growth Sampling", desc: "Adjusting daily feed allowances based on weekly MBW sampling and biomass calculations." },
                  { title: "Weather Shifts + Feeder Timers", desc: "Manually pausing or reducing feeder timers during heavy rain or low DO events." },
                  { title: "Logbook Records + FCR Analysis", desc: "Recording cumulative feed broadcast totals against biomass gain to track FCR." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div className="lg:col-span-6" {...fadeUp(0.25)}>
              <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 space-y-6 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">KE Aqua Farms Operation</h3>
                    <p className="text-xs font-mono text-amber-400">30-Acre Growout Feeder Practice</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  On our commercial farm, dual auto feeders are installed per growout pond, operated on hourly broadcast timers, and supported by daily 4-times check tray inspections by farm technicians.
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block font-bold">
                    COMMERCIAL FIELD PRINCIPLE
                  </span>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Never leave auto feeders running unmonitored. Check trays must be lifted and inspected at regular intervals to adjust feeder timer broadcast duration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: TECHNOLOGY PHILOSOPHY STATEMENT
       * ==================================================================== */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
            <Cpu className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Technology Philosophy</h2>
          <blockquote className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-sm sm:text-base font-serif italic max-w-3xl mx-auto">
            &ldquo;Technology should solve a farm problem.&rdquo;
          </blockquote>
          <p className="text-xs text-slate-400 font-light max-w-2xl mx-auto">
            Auto feeders should be evaluated by farm need, feeding purpose, daily check tray observation, and observed FCR trends—not as a substitute for diligent management.
          </p>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 6: WHO MAY ENQUIRE
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>SERVICE ENQUIRIES</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Who Can Enquire About Auto Feeder Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Shrimp Farmers",
                desc: "Growers seeking practical auto feeder broadcast setup and timer calibration advice for growout ponds.",
                icon: Users,
              },
              {
                title: "Farm Managers",
                desc: "Supervisors managing multiple growout ponds who want structured feeder maintenance and check tray logging routines.",
                icon: Layers,
              },
              {
                title: "Operators Considering Tech",
                desc: "Farm owners evaluating automated feeding hardware investments and seeking field-tested commercial recommendations.",
                icon: Target,
              },
            ].map((aud, idx) => {
              const AudIcon = aud.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
                  {...fadeUp(0.1 + idx * 0.1)}
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <AudIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{aud.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {aud.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 7: RELATED SERVICES (CROSS-LINKS)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>RELATED CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Related Technology &amp; Monitoring Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((svc, idx) => {
              const SvcIcon = svc.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                  {...fadeUp(0.05 + idx * 0.05)}
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <SvcIcon className={`w-5 h-5 ${svc.color}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">{svc.subtitle}</p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">{svc.desc}</p>
                  </div>

                  <Link
                    href={svc.href}
                    className="inline-flex items-center text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold pt-3 border-t border-slate-800"
                  >
                    <span>View Service Page</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 8: FINAL CTA & CONVERSION FORM
       * ==================================================================== */}
      <section id="contact-section" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Messaging */}
            <motion.div className="lg:col-span-6 space-y-6" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>DISCUSS AUTO FEEDING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Discuss Auto Feeder Setup &amp; Advisory
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Whether you want to discuss auto feeder broadcast positioning, timer calibration, or check tray monitoring routines, speak directly with the KE Aqua Farms team.
              </p>

              {/* Direct Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`tel:${CONTACT_CONFIG.phone.value}`}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all duration-200 group flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Call</span>
                    <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {CONTACT_CONFIG.phone.display}
                    </span>
                  </div>
                </a>

                <a
                  href={CONTACT_CONFIG.whatsapp.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 group flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">WhatsApp Enquiries</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Chat on WhatsApp
                    </span>
                  </div>
                </a>
              </div>

              {/* Operating Hours Box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">Working Hours &amp; Location:</p>
                  <p className="text-slate-300 font-light">
                    {CONTACT_CONFIG.operatingHours.days} • {CONTACT_CONFIG.operatingHours.time}
                  </p>
                  <p className="text-slate-400 text-[11px] font-mono">{CONTACT_CONFIG.location.fullAddress}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div className="lg:col-span-6" {...fadeUp(0.25)}>
              <div className="rounded-2xl p-7 bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white">Auto Feeder Enquiry Form</h3>
                  <p className="text-xs text-slate-400 mt-1 font-light">
                    Submit your auto feeder enquiry below. Our team will contact you directly to discuss setup and practices.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for your enquiry. The KE Aqua Farms team will contact you shortly.");
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile number"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Primary Interest</label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors">
                        <option value="Auto Feeder Setup & Advisory">Auto Feeder Setup &amp; Calibration</option>
                        <option value="Check Tray Routine Advisory">Check Tray &amp; Feeding Routine</option>
                        <option value="FCR Tracking Support">FCR Tracking &amp; Biomass Advisory</option>
                        <option value="General Feeding Enquiry">General Feeding Practice Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Farm Location / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your farm size, current feeding method, number of growout ponds, or specific feeder questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-teal-500 hover:from-amber-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>SUBMIT AUTO FEEDER ENQUIRY</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
