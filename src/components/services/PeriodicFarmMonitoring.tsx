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
  CalendarCheck,
  ClipboardList,
  Wrench,
  DollarSign,
  Zap,
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
 * DATA — 10 MONITORING AREAS (Section 2)
 * ==================================================================== */
const monitoringAreas = [
  {
    id: "water-conditions",
    title: "1. Water Conditions",
    desc: "Observing water clarity, secchi disk transparency, water color shifts, temperature, and surface foam patterns.",
    icon: Waves,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "shrimp-behaviour",
    title: "2. Shrimp Behaviour",
    desc: "Watching for active swimming patterns, escape reflexes, perimeter crowding, or lethargic surface activity.",
    icon: Eye,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "feeding-response",
    title: "3. Feeding Response",
    desc: "Assessing check tray clearance speeds, feed consumption eagerness, and gut fullness during feeding times.",
    icon: Fish,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    id: "growth-sampling",
    title: "4. Growth & Sampling (MBW)",
    desc: "Reviewing weekly Mean Body Weight (MBW) logs, size distribution uniformity, and average daily gain (ADG).",
    icon: BarChart3,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    id: "mortality-checks",
    title: "5. Mortality Checks",
    desc: "Inspecting check tray bottoms, aerator zones, and shallow edges for any fresh mortalities or weak shrimp.",
    icon: ShieldCheck,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/30",
  },
  {
    id: "aeration-setup",
    title: "6. Aeration & Circulation",
    desc: "Evaluating aerator placement, paddlewheel alignment, subsurface circulation, and sludge movement to pond center.",
    icon: Wind,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    id: "equipment-status",
    title: "7. Equipment Readiness",
    desc: "Inspecting auto-feeder operation, digital probe calibration, generator backups, and electrical panel safety.",
    icon: Wrench,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    id: "biosecurity-checks",
    title: "8. Biosecurity Controls",
    desc: "Reviewing crab fencing integrity, bird netting barriers, footbaths, net sanitation, and water intake filtration.",
    icon: ShieldCheck,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/30",
  },
  {
    id: "farm-records",
    title: "9. Farm Records & Logbooks",
    desc: "Checking daily input logsheets for consistency, cumulative feed tracking, parameter logs, and cost documentation.",
    icon: FileSpreadsheet,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "crop-condition",
    title: "10. General Crop Condition",
    desc: "Synthesizing all visual and physical observations to assess overall pond ecosystem stability and harvest readiness.",
    icon: Activity,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
];

/* ====================================================================
 * DATA — MONITORING CYCLE (Section 3)
 * ==================================================================== */
const monitoringCycleSteps = [
  {
    step: "01",
    label: "VISIT",
    title: "Pond Side Walk",
    description: "Physical inspection of pond dykes, aerators, check trays, and water surface.",
    icon: CalendarCheck,
  },
  {
    step: "02",
    label: "OBSERVE",
    title: "Visual Observation",
    description: "Assessing shrimp vigor, feeding tray response, water clarity, and equipment status.",
    icon: Eye,
  },
  {
    step: "03",
    label: "TEST",
    title: "Test Where Applicable",
    description: "Field parameter checks or taking lab samples where specific testing is requested.",
    icon: FlaskConical,
  },
  {
    step: "04",
    label: "RECORD",
    title: "Log Data & Trends",
    description: "Entering parameter observations, MBW notes, and feed records into farm check sheets.",
    icon: FileSpreadsheet,
  },
  {
    step: "05",
    label: "DISCUSS",
    title: "Farmer Discussion",
    description: "Reviewing field findings directly with the farm owner, manager, or technician.",
    icon: MessageSquare,
  },
  {
    step: "06",
    label: "REVIEW",
    title: "Trend Review",
    description: "Comparing current observations against baseline logs from previous weeks.",
    icon: BarChart3,
  },
  {
    step: "07",
    label: "FOLLOW UP",
    title: "Next Check Follow-up",
    description: "Re-evaluating pond condition during subsequent visits to track response.",
    icon: Clock,
  },
];

/* ====================================================================
 * DATA — RELATED SERVICES (Section 4)
 * ==================================================================== */
const relatedServices = [
  {
    title: "Water Quality Testing",
    subtitle: "Chemical Parameter Analysis",
    description:
      "Precision laboratory testing for pH, alkalinity, hardness, TAN, nitrite, and salinity at Aqua Pulse Laboratory.",
    href: "/services/water-quality-testing",
    icon: FlaskConical,
    color: "text-cyan-400",
    border: "hover:border-cyan-500/40",
  },
  {
    title: "Microscopic Shrimp Health Analysis",
    subtitle: "Optical Organ & Tissue Inspection",
    description:
      "Microscopic evaluation of hepatopancreas, gut fullness ratio, gill filament cleanliness, and plankton.",
    href: "/services/microscopic-shrimp-health-analysis",
    icon: Microscope,
    color: "text-purple-400",
    border: "hover:border-purple-500/40",
  },
  {
    title: "Microbiology & Vibrio Testing",
    subtitle: "Bacterial Load & TCBS Monitoring",
    description:
      "Selective agar plating to count Total Vibrio and track bacterial population dynamics in water and tissue.",
    href: "/services/microbiology-vibrio-testing",
    icon: TestTube,
    color: "text-pink-400",
    border: "hover:border-pink-500/40",
  },
  {
    title: "Aquaculture Farm Consultancy",
    subtitle: "Commercial Farm Advisory Support",
    description:
      "Comprehensive advisory on pond setup, biosecurity, stocking density, and harvest planning grounded in commercial experience.",
    href: "/services/aquaculture-farm-consultancy",
    icon: Compass,
    color: "text-emerald-400",
    border: "hover:border-emerald-500/40",
  },
];

/* ====================================================================
 * DATA — RECORD-BASED MANAGEMENT (Section 5: 11 Metrics)
 * ==================================================================== */
const logbookMetrics = [
  { label: "Daily Feed Inputs", detail: "Ration weights per broadcast, tray clearance times, feed type", icon: Fish },
  { label: "Water Parameters", detail: "pH, DO, temperature, alkalinity, TAN, nitrite logs", icon: Waves },
  { label: "Growth Rates (ADG)", detail: "Weekly MBW sampling, average daily weight gain tracking", icon: TrendingUp },
  { label: "Shrimp Health Checks", detail: "Gut fill %, HP color observations, molt stage distribution", icon: Microscope },
  { label: "Mortality Tracking", detail: "Daily tray mortality counts, aerator zone checks", icon: ShieldCheck },
  { label: "Biomass Estimation", detail: "Estimated total pond biomass for accurate feed broadcasting", icon: BarChart3 },
  { label: "FCR Calculations", detail: "Feed Conversion Ratio trends evaluated against biomass gain", icon: Activity },
  { label: "Input Cost Logs", detail: "Lime, minerals, feed, power, and chemical input costs", icon: DollarSign },
  { label: "Equipment Status", detail: "Aerator servicing, generator run hours, auto-feeder checks", icon: Wrench },
  { label: "Power & Fuel Hours", detail: "Grid power uptime, diesel generator run hours, electricity costs", icon: Zap },
  { label: "Labour & Pond Routines", detail: "Technician shift duties, tray check times, biosecurity logs", icon: ClipboardList },
];

/* ====================================================================
 * DATA — WHO CAN ENQUIRE (Section 6)
 * ==================================================================== */
const targetAudiences = [
  {
    title: "Existing Shrimp Farmers",
    description:
      "Growers seeking regular, objective third-party observation checks to complement their daily pond-side routine.",
    icon: Users,
  },
  {
    title: "Farm Owners & Investors",
    description:
      "Farm owners managing remote or multi-pond sites who want structured field monitoring reports and record reviews.",
    icon: Layers,
  },
  {
    title: "Farm Managers & Technicians",
    description:
      "On-site supervisors wanting technical discussion, parameter trend evaluation, and diagnostic support.",
    icon: Target,
  },
];

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function PeriodicFarmMonitoringPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-cyan-900/20 via-blue-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1300px] left-0 w-96 h-96 bg-emerald-900/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2500px] right-0 w-96 h-96 bg-purple-900/15 blur-3xl pointer-events-none -z-10" />

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
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <Link href="/#services" className="hover:text-cyan-400 transition-colors">
              Capabilities
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="text-cyan-400 font-medium whitespace-nowrap">
              Periodic Farm Monitoring
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
                <CalendarCheck className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>KE AQUA FARMS • PERIODIC FIELD MONITORING</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Regular Observation. <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  Better Farm Awareness.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Aquaculture conditions evolve continuously from stocking to harvest. At <strong className="text-white font-semibold">KE Aqua Farms</strong>, periodic farm monitoring provides structured field observation, water quality tracking, shrimp behavior checks, and record reviews to help farmers adapt to changing pond conditions.
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "Pond Side Walks",
                  "Shrimp Vigor Checks",
                  "Check Tray Observations",
                  "Growth Sampling (MBW)",
                  "Aeration Reviews",
                  "Record Logging",
                ].map((chip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span className="truncate">{chip}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#contact-section"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all duration-200 group"
                >
                  <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>ENQUIRE ABOUT FARM MONITORING</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#monitoring-areas"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <Eye className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Explore Monitoring Areas</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/50 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/Real_Images/image_1.jpeg"
                    alt="Aqua Pulse specialist testing pond water salinity with optical refractometer during routine farm monitoring"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Overlaid Card Info */}
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide">
                      COMMERCIAL FIELD VISITS
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                      PERIODIC OBSERVATION
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    &ldquo;Periodic monitoring builds a continuous history of pond condition, helping growers catch subtle parameter shifts before they impact crop survival.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <CalendarCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">KE Aqua Farms Advisory</h4>
                      <p className="text-xs text-slate-400 font-mono">30-Acre Commercial Working Base</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: WHY PERIODIC MONITORING (OBSERVATION + RECORDS + DATA)
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>THE MONITORING FORMULA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Observation + Records + Data
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Single one-off observations capture only a snapshot in time. Periodic, repeated monitoring tracks parameter evolution across stocking days. By combining physical observation with daily record logbooks and verified data, farmers gain complete visibility into pond trends.
            </p>
          </motion.div>

          {/* 3 Formula Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.15)}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Physical Observation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pond walks to observe water surface activity, aerator placement, feed tray response, plankton blooms, and general shrimp vigor.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.25)}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Structured Records</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Logging daily feed broadcasts, water parameter readings, MBW growth sampling, and input applications into farm check sheets.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.35)}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Data Trend Analysis</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Evaluating parameter trends over consecutive weeks to identify gradual pH shifts, TAN increases, or feed conversion anomalies early.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: 10 MONITORING AREAS (CARDS GRID)
       * ==================================================================== */}
      <section id="monitoring-areas" className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div className="space-y-3 max-w-2xl" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>FIELD OBSERVATION SCOPE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                10 Key Farm Monitoring Areas
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Observation areas evaluated during periodic commercial farm visits and record reviews.
              </p>
            </motion.div>

            <motion.div className="flex-shrink-0" {...fadeUp(0.2)}>
              <a
                href="#contact-section"
                className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group"
              >
                <span>REQUEST MONITORING VISIT</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* 10 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {monitoringAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              return (
                <motion.div
                  key={area.id}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-3 flex flex-col justify-between"
                  {...fadeUp(0.1 + idx * 0.05)}
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-lg bg-slate-950 border ${area.bg} flex items-center justify-center ${area.color}`}>
                      <AreaIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white">{area.title}</h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Framing Note */}
          <div className="mt-8 text-center text-xs font-mono text-slate-400">
            * Note: These are field observation areas to guide farm management, not guaranteed deliverables or contractual outcome promises.
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: MONITORING CYCLE (VISUAL FLOW)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <CalendarCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>OBSERVATION CYCLE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Periodic Monitoring Workflow
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              How periodic farm visits translate into structured observation logs and practical farmer discussions.
            </p>
          </motion.div>

          {/* 7-Step Horizontal Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
            {monitoringCycleSteps.map((st, idx) => {
              const StepIcon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  className="relative p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
                  {...fadeUp(0.1 + idx * 0.05)}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                        {st.label}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{st.step}</span>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                      <StepIcon className="w-4 h-4" />
                    </div>

                    <h3 className="text-xs font-bold text-white leading-snug">{st.title}</h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 4: FARM + LAB INTEGRATION (RELATED SERVICES)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
              <span>LABORATORY DIAGNOSTIC SUPPORT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Connecting Field Monitoring with Laboratory Analysis
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Where field observations indicate parameter drift or health concerns, samples can be escalated to specialized laboratory testing at Aqua Pulse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((svc, idx) => {
              const SvcIcon = svc.icon;
              return (
                <motion.div
                  key={idx}
                  className={`p-6 rounded-2xl bg-slate-900/90 border border-slate-800 ${svc.border} transition-all duration-300 flex flex-col justify-between space-y-5 group`}
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center ${svc.color}`}>
                      <SvcIcon className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">{svc.subtitle}</p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <Link
                      href={svc.href}
                      className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                    >
                      <span>View Service Page</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400 font-mono">
            * Note: Laboratory testing services are conducted where requested and available. They are not automatically bundled into routine field visits.
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: RECORD-BASED MANAGEMENT (11 LOGBOOK METRICS)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
              <FileSpreadsheet className="w-3.5 h-3.5 text-purple-400" />
              <span>RECORD-BASED FARM MANAGEMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Essential Farm Logbook Metrics
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Structured record keeping forms the backbone of commercial aquaculture. Tracking key metrics across daily logbooks provides empirical data for farm decision making.
            </p>
          </div>

          {/* 11 Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {logbookMetrics.map((met, idx) => {
              const MetIcon = met.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2"
                  {...fadeUp(0.05 + idx * 0.04)}
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <MetIcon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-white">{met.label}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-9">
                    {met.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 6: WHO CAN ENQUIRE
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>SERVICE ENQUIRIES</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Who Can Enquire About Farm Monitoring
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetAudiences.map((aud, idx) => {
              const AudIcon = aud.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
                  {...fadeUp(0.1 + idx * 0.1)}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <AudIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{aud.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {aud.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 7: IMPORTANT DISCLAIMER NOTE
       * ==================================================================== */}
      <section className="py-12 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 flex items-start space-x-3 text-xs text-slate-300">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-white">Monitoring Scope Disclaimer:</span>
              <p className="leading-relaxed">
                Periodic monitoring services, visit arrangements, and scope are customized according to farm location, crop phase, and specific grower requirements. Specific laboratory tests are conducted where requested and available.
              </p>
            </div>
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
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>START A FARM MONITORING CONVERSATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Discuss Farm Monitoring Support for Your Operations
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you want to discuss periodic pond checks, water quality logging, or scheduling a technical visit to your farm, speak directly with the KE Aqua Farms team.
              </p>

              {/* Direct Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`tel:${CONTACT_CONFIG.phone.value}`}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Call</span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
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
                    <span className="text-xs font-mono text-slate-400 block">WhatsApp Enquiries</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Chat on WhatsApp
                    </span>
                  </div>
                </a>
              </div>

              {/* Operating Hours Box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">Working Hours &amp; Location:</p>
                  <p className="text-slate-300">
                    {CONTACT_CONFIG.operatingHours.days} • {CONTACT_CONFIG.operatingHours.time}
                  </p>
                  <p className="text-slate-400 text-xs font-mono">{CONTACT_CONFIG.location.fullAddress}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div className="lg:col-span-6" {...fadeUp(0.25)}>
              <div className="rounded-2xl p-7 bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white">Periodic Monitoring Enquiry Form</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Submit your farm monitoring enquiry below. Our team will contact you directly to discuss details.
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
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile number"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Primary Interest</label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors">
                        <option value="Periodic Farm Monitoring">Periodic Farm Monitoring &amp; Visits</option>
                        <option value="Water Quality Logging">Water Quality Logging Support</option>
                        <option value="Farm Record Management">Farm Record Logbook Review</option>
                        <option value="General Farm Support">General Farm Support Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Farm Location / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Share details about farm location, number of ponds, current crop stage, or specific monitoring questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>START FARM MONITORING CONVERSATION</span>
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
