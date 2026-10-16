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
  Wrench,
  Gauge,
  RotateCw,
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
 * DATA — 8 KEY CONSIDERATIONS (Section 2)
 * ==================================================================== */
const aerationConsiderations = [
  {
    id: "aeration-planning",
    title: "1. Aeration Planning",
    desc: "Matching total aerator horsepower (HP) with pond surface area, water depth, and target stocking biomass.",
    icon: Wind,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    id: "oxygen-management",
    title: "2. Oxygen Management",
    desc: "Managing oxygen demand shifts caused by nighttime phytoplankton respiration and organic sediment degradation.",
    icon: Activity,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "aerator-observation",
    title: "3. Aerator Observation",
    desc: "Inspecting paddlewheel splash, subsurface water throw, motor amp load, and gearbox oil levels during daily pond walks.",
    icon: Eye,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "farm-conditions",
    title: "4. Pond Shape & Circulation",
    desc: "Positioning aerators to generate a continuous circular water current that concentrates sludge into the central pond drain.",
    icon: RotateCw,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    id: "water-conditions",
    title: "5. Water Parameter Dynamics",
    desc: "Correlating aeration run times with water temperature, salinity drops, rain events, and microalgae bloom density.",
    icon: Waves,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    id: "shrimp-behaviour",
    title: "6. Shrimp Behaviour Checks",
    desc: "Observing shrimp distribution along dyke edges, surface swimming, or stress reflexes following aeration shifts.",
    icon: Fish,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    id: "feeding-response",
    title: "7. Feeding Response Correlation",
    desc: "Ensuring adequate dissolved oxygen levels around auto-feeder broadcast zones to support active feeding vigor.",
    icon: CheckCircle2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "equipment-operation",
    title: "8. Electrical & Equipment Safety",
    desc: "Monitoring electrical panels, phase correctors, generator switchovers, and emergency backup power readiness.",
    icon: Wrench,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/30",
  },
];

/* ====================================================================
 * DATA — WORKFLOW (Section 3: 6 Steps)
 * ==================================================================== */
const aerationWorkflowSteps = [
  {
    step: "01",
    label: "FARM CONDITION",
    title: "Assess Pond Environment",
    desc: "Evaluating pond area, depth, stocking density, and prevailing wind direction.",
    icon: Waves,
  },
  {
    step: "02",
    label: "OBSERVE",
    title: "Daily Aeration Checks",
    desc: "Inspecting aerator current patterns, motor sounds, and water circulation.",
    icon: Eye,
  },
  {
    step: "03",
    label: "ASSESS",
    title: "Oxygen Demand Review",
    desc: "Cross-referencing biomass growth with night respiration and weather shifts.",
    icon: BarChart3,
  },
  {
    step: "04",
    label: "AERATION PLAN",
    title: "Positioning & Run Schedule",
    desc: "Configuring daytime vs nighttime aerator horsepower rotation.",
    icon: Wind,
  },
  {
    step: "05",
    label: "MONITOR",
    title: "Parameter & Behavior Check",
    desc: "Monitoring DO readings, feed tray clearance, and shrimp activity.",
    icon: Activity,
  },
  {
    step: "06",
    label: "REVIEW",
    title: "Logbook & Equipment Log",
    desc: "Recording generator run hours, grid power stability, and maintenance logs.",
    icon: FileSpreadsheet,
  },
];

/* ====================================================================
 * DATA — PROGRESSION MATRIX (Section 4)
 * ==================================================================== */
const progressionMatrix = [
  {
    tier: "CONVENTIONAL",
    title: "Conventional Aeration",
    subtitle: "Experience & Fixed Schedules",
    desc: "Standard paddlewheel aerators operated on fixed day/night time schedules based on traditional farming experience.",
    icon: Compass,
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    points: [
      "Manual paddlewheel switch operation",
      "Fixed day/night run schedules",
      "Surface water splash observation",
      "Experience-based aeration adjustments",
    ],
  },
  {
    tier: "SCIENTIFIC",
    title: "Scientific Monitoring",
    subtitle: "Aqua Pulse DO & Biomass Testing",
    desc: "Correlating aerator run times with laboratory dissolved oxygen testing, biomass calculations, and plankton density.",
    icon: Microscope,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    points: [
      "Regular chemical DO titration checks",
      "Biomass-to-HP ratio calculations",
      "Plankton respiration load review",
      "Structured logbook aeration records",
    ],
  },
  {
    tier: "ADVANCED",
    title: "Technology Assisted",
    subtitle: "Digital Probes & Subsurface Injection",
    desc: "Integrating continuous digital DO sensors, subsurface air injectors, micro-bubble evaluation, and automatic generator switchovers.",
    icon: Cpu,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    points: [
      "Continuous digital probe DO monitoring",
      "Subsurface & jet aeration deployment",
      "Micro/Nano bubble benthic injection",
      "Automated generator transfer switches",
    ],
  },
];

/* ====================================================================
 * DATA — RELATED SERVICES (Section 5)
 * ==================================================================== */
const relatedServices = [
  {
    title: "Farm Technology Consulting",
    subtitle: "Hardware & Equipment Evaluation",
    desc: "Evaluating aquaculture equipment, auto feeders, sensors, and aeration based on practical farm needs.",
    href: "/services/farm-technology-consulting",
    icon: Cpu,
    color: "text-cyan-400",
  },
  {
    title: "Auto Feeder Solutions",
    subtitle: "Automated Feed Broadcasting",
    desc: "Timer and broadcast units evaluated across 30 acres to optimize feeding frequency.",
    href: "/services/auto-feeder-solutions",
    icon: Zap,
    color: "text-amber-400",
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
    title: "Periodic Farm Monitoring",
    subtitle: "Field Observation Visits",
    desc: "Structured pond observation visits, water parameter logging, and record reviews.",
    href: "/services/periodic-farm-monitoring",
    icon: Activity,
    color: "text-emerald-400",
  },
];

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function AerationManagementPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-900/20 via-cyan-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1300px] right-0 w-96 h-96 bg-teal-900/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2500px] left-0 w-96 h-96 bg-blue-900/15 blur-3xl pointer-events-none -z-10" />

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
            <span className="text-blue-400 font-medium whitespace-nowrap">
              Aeration Management
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono tracking-wider uppercase">
                <Wind className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>KE AQUA FARMS • OXYGEN MANAGEMENT</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Practical Oxygen Management <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-cyan-400">
                  for Real Farm Conditions
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                Aeration is the single most vital operational infrastructure in intensive aquaculture. At <strong className="text-white font-semibold">KE Aqua Farms</strong>, aeration management balances aerator placement, water depth, central sludge movement, and nighttime oxygen demand across our 30-acre commercial working farm.
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "Paddlewheel Alignment",
                  "Central Sludge Circulation",
                  "Night Oxygen Management",
                  "Subsurface Jet Injectors",
                  "Generator Backup Protocols",
                  "DO Sensor Integration",
                ].map((chip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span className="truncate">{chip}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#contact-section"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 transition-all duration-200 group"
                >
                  <Wind className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>ENQUIRE ABOUT AERATION</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#aeration-considerations"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <Eye className="w-4 h-4 mr-2 text-blue-400" />
                  <span>Explore Aeration Considerations</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-blue-950/50 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/assets/pond-aerators-aerial.jpg"
                    alt="KE Aqua Farms - Aerial View of Paddlewheel Aerators in Growout Pond"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Overlaid Card Info */}
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                      COMMERCIAL INFRASTRUCTURE
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[11px] font-mono">
                      AERATION SETUP
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    &ldquo;Proper aerator positioning creates a continuous circular flow that moves bottom sludge to the central drain while maintaining oxygen saturation across the feeding zone.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Wind className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">KE Aqua Farms Operation</h4>
                      <p className="text-[11px] text-slate-400 font-mono">4-HP &amp; 8-HP Aerator Configurations</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: AERATION IN FARM MANAGEMENT
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Wind className="w-3.5 h-3.5 text-blue-400" />
              <span>CORE FARM INFRASTRUCTURE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Aeration as Oxygen &amp; Water Management Infrastructure
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Aeration does far more than inject oxygen into water. Mechanical aerators drive pond circulation, break thermal stratification, increase gas exchange at the surface, and sweep organic waste into central sludge collection zones.
            </p>
          </motion.div>

          {/* 3 Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.15)}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Oxygenation &amp; Gas Exchange</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Agitating water surfaces increases oxygen absorption from air and accelerates the release of toxic dissolved carbon dioxide and excess gases.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.25)}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <RotateCw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Pond Water Circulation</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Strategic aerator angling generates uniform circular currents, sweeping unconsumed feed, molt shells, and fecal waste into central sludge cones.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.35)}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Night Respiration Support</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Phytoplankton and pond sediment consume oxygen heavily during darkness. Operating full aeration horsepower at night prevents severe morning DO drops.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: 8 KEY CONSIDERATIONS (GRID)
       * ==================================================================== */}
      <section id="aeration-considerations" className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div className="space-y-3 max-w-2xl" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300">
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span>TECHNICAL CONSIDERATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                8 Key Aeration Considerations
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light">
                Practical elements evaluated when configuring pond aeration and oxygen support infrastructure.
              </p>
            </motion.div>

            <motion.div className="flex-shrink-0" {...fadeUp(0.2)}>
              <a
                href="#contact-section"
                className="inline-flex items-center text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold group"
              >
                <span>REQUEST AERATION ADVISORY</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aerationConsiderations.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 space-y-3 flex flex-col justify-between"
                  {...fadeUp(0.05 + idx * 0.05)}
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-lg bg-slate-950 border ${item.bg} flex items-center justify-center ${item.color}`}>
                      <ItemIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white">{item.title}</h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: AERATION + OBSERVATION WORKFLOW (6 STEPS)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>THE AERATION WORKFLOW</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Aeration Planning &amp; Monitoring Workflow
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              How pond conditions lead to tailored aeration planning, daily monitoring, and logbook reviews.
            </p>
          </motion.div>

          {/* 6-Step Horizontal Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {aerationWorkflowSteps.map((st, idx) => {
              const StepIcon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  className="relative p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300">
                        {st.label}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{st.step}</span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
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
       * SECTION 4: TRADITIONAL -> ADVANCED (PROGRESSION MATRIX)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE AERATION PROGRESSION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Conventional → Scientific → Technology Assisted
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              How aeration practices evolve from experience-based schedules to lab-monitored and sensor-assisted oxygen management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {progressionMatrix.map((tier, idx) => {
              const TierIcon = tier.icon;
              return (
                <motion.div
                  key={tier.tier}
                  className={`p-7 rounded-2xl bg-slate-950 ${tier.bg} border ${tier.border} space-y-5 flex flex-col justify-between`}
                  {...fadeUp(0.1 + idx * 0.1)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${tier.border} ${tier.color}`}>
                        {tier.tier}
                      </span>
                      <TierIcon className={`w-5 h-5 ${tier.color}`} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">{tier.title}</h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">{tier.subtitle}</p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {tier.desc}
                    </p>

                    <ul className="space-y-2 pt-3 border-t border-slate-800/80">
                      {tier.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${tier.color} flex-shrink-0`} />
                          <span className="font-light">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: RELATED TECHNOLOGY (CROSS-LINKS)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
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
                  className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                  {...fadeUp(0.05 + idx * 0.05)}
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <SvcIcon className={`w-5 h-5 ${svc.color}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">{svc.subtitle}</p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">{svc.desc}</p>
                  </div>

                  <Link
                    href={svc.href}
                    className="inline-flex items-center text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold pt-3 border-t border-slate-800"
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
       * SECTION 6: RESPONSIBLE MANAGEMENT STATEMENT
       * ==================================================================== */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Responsible Aeration Management</h2>
          <blockquote className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 text-sm sm:text-base font-serif italic max-w-3xl mx-auto">
            &ldquo;Aeration planning should be evaluated based on real pond conditions, stocking biomass, oxygen demand, and equipment reliability—never on unrealistic energy-saving promises.&rdquo;
          </blockquote>
          <p className="text-xs text-slate-400 font-light max-w-2xl mx-auto">
            We provide practical, experience-backed aeration placement and horsepower planning tailored to your specific farm layout.
          </p>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 7: FINAL CTA & CONVERSION FORM
       * ==================================================================== */}
      <section id="contact-section" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Messaging */}
            <motion.div className="lg:col-span-6 space-y-6" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                <span>DISCUSS AERATION MANAGEMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Discuss Aeration Planning for Your Farm
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Whether you want to evaluate aerator horsepower requirements for growout ponds, optimize paddlewheel placement for central sludge movement, or explore subsurface aeration, speak directly with the KE Aqua Farms team.
              </p>

              {/* Direct Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`tel:${CONTACT_CONFIG.phone.value}`}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all duration-200 group flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Call</span>
                    <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
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
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
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
                  <h3 className="text-xl font-bold text-white">Aeration Management Enquiry Form</h3>
                  <p className="text-xs text-slate-400 mt-1 font-light">
                    Submit your aeration planning enquiry below. Our team will contact you directly to discuss details.
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
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile number"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Aeration Interest</label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors">
                        <option value="Aerator Placement & Layout">Aerator Placement &amp; Pond Circulation</option>
                        <option value="Horsepower Calculation">HP &amp; Biomass Aeration Planning</option>
                        <option value="Subsurface Aeration Evaluation">Subsurface / Jet Aeration Evaluation</option>
                        <option value="Night Oxygen Management">Night Dissolved Oxygen Management</option>
                        <option value="General Aeration Enquiry">General Aeration Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Farm Location / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your farm layout, pond sizes, current aerator HP, stocking density, or specific questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Wind className="w-4 h-4" />
                    <span>SUBMIT AERATION ENQUIRY</span>
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
