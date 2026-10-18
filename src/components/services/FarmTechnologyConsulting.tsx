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
  HelpCircle as QuestionMark,
  CheckSquare,
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
 * DATA — PHILOSOPHY FLOW (Section 1)
 * ==================================================================== */
const philosophyFlow = [
  {
    step: "01",
    label: "FARM PROBLEM",
    title: "Identify Challenge",
    desc: "Pinpointing specific farm operational challenges such as uneven feeding, nighttime DO drops, or high FCR costs.",
    icon: AlertCircle,
  },
  {
    step: "02",
    label: "TECHNOLOGY",
    title: "Evaluate Tool",
    desc: "Selecting appropriate hardware or instrumentation matching pond size, power infrastructure, and budget.",
    icon: Cpu,
  },
  {
    step: "03",
    label: "OUR PRACTICE",
    title: "Field Deployment",
    desc: "Testing equipment under commercial conditions on our 30-acre working farm before recommending to growers.",
    icon: Sprout,
  },
  {
    step: "04",
    label: "OBSERVATION",
    title: "Monitor Response",
    desc: "Tracking animal behavior, check tray clearance, water parameters, and daily maintenance needs.",
    icon: Eye,
  },
  {
    step: "05",
    label: "POTENTIAL BENEFIT",
    title: "Assess Outcome",
    desc: "Evaluating practical operational benefits, labour savings, and feed efficiency improvements.",
    icon: TrendingUp,
  },
];

/* ====================================================================
 * DATA — 8 TECHNOLOGY AREAS (Section 2)
 * ==================================================================== */
const techAreas = [
  {
    id: "auto-feeders",
    title: "1. Auto Feeders",
    desc: "Broadcasting feed on regulated hourly timers to match shrimp biomass demand, reducing bottom feed accumulation and FCR.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    id: "farm-monitoring",
    title: "2. Farm Monitoring Tools",
    desc: "Structured daily check sheets, pond side inspection routines, and record-keeping systems for multi-pond operations.",
    icon: Eye,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "water-monitoring",
    title: "3. Water-Quality Testing",
    desc: "Chemical parameter testing and sensor integration to track pH, alkalinity, hardness, TAN, and nitrite dynamics.",
    icon: Waves,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    id: "iot-sensors",
    title: "4. IoT & Digital Sensors",
    desc: "Continuous probe sensors reading pH, dissolved oxygen, temperature, and salinity to trigger early alert notifications.",
    icon: Cpu,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    id: "aeration-mgmt",
    title: "5. Aeration Management",
    desc: "Strategic positioning of paddlewheels, subsurface air injectors, and jet aerators to optimize DO distribution.",
    icon: Wind,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    id: "micro-nano-bubble",
    title: "6. Micro & Nano Bubble Tech",
    desc: "Evaluating fine-bubble oxygenation units for deep benthic aeration and organic sludge breakdown in nursery/growout ponds.",
    icon: Layers,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "lab-monitoring",
    title: "7. Laboratory Diagnostic Tools",
    desc: "Integrating Aqua Pulse laboratory testing for microscopic health checks, tissue observation, and TCBS agar Vibrio plating.",
    icon: Microscope,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/30",
  },
  {
    id: "farm-data-records",
    title: "8. Farm Data & Records",
    desc: "Systematic logbook tracking for biomass calculations, daily feed inputs, MBW growth sampling, and cost analysis.",
    icon: FileSpreadsheet,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/30",
  },
];

/* ====================================================================
 * DATA — 3-TIER MATRIX (Section 3)
 * ==================================================================== */
const progressionMatrix = [
  {
    tier: "TRADITIONAL",
    title: "Traditional Experience",
    subtitle: "Observation & Field Intuition",
    desc: "Groundwork based on daily pond walks, hand feeding broadcasts, conventional paddlewheel aeration, and visual check tray inspection.",
    icon: Compass,
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    points: [
      "Manual feed broadcasting by hand",
      "Fixed-schedule aerator operation",
      "Visual observation of water color",
      "Experience-backed pond adjustments",
    ],
  },
  {
    tier: "SCIENTIFIC",
    title: "Scientific Monitoring",
    subtitle: "Aqua Pulse Lab & Structured Records",
    desc: "Grounding field decisions in objective chemical parameters, microscopic organ health checks, biomass tracking, and daily logbook records.",
    icon: Microscope,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    points: [
      "Regular pH, TAN, and alkalinity testing",
      "Microscopic HP & gut fullness checks",
      "Weekly MBW sampling & ADG tracking",
      "Structured logbook data recording",
    ],
  },
  {
    tier: "ADVANCED",
    title: "Smart Technology",
    subtitle: "Automated Equipment & Digital Probes",
    desc: "Integrating auto feeders, digital continuous probes, subsurface aeration, and IoT alert systems to enhance farm efficiency.",
    icon: Cpu,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    points: [
      "Automated timer-based feed broadcasting",
      "Continuous digital pH/DO sensors",
      "Micro/Nano bubble oxygen injection",
      "Data-backed operational decisions",
    ],
  },
];

/* ====================================================================
 * DATA — 5 EVALUATION QUESTIONS (Section 4)
 * ==================================================================== */
const evaluationQuestions = [
  {
    num: "01",
    q: "What farm problem does this technology solve?",
    desc: "Does it address a specific operational bottleneck, such as labour availability, feeding inaccuracy, or nighttime oxygen drops?",
  },
  {
    num: "02",
    q: "Why is it relevant to your pond size and crop phase?",
    desc: "Will the technology deliver practical benefits for your specific pond dimensions, water depth, and stocking density?",
  },
  {
    num: "03",
    q: "How is it practically operated and maintained on-site?",
    desc: "Are your farm technicians trained to clean probes, service motors, and troubleshoot minor electrical issues?",
  },
  {
    num: "04",
    q: "What parameters and behaviors should be observed during use?",
    desc: "How does the equipment change check tray response, sludge accumulation, aerator placement, or water circulation?",
  },
  {
    num: "05",
    q: "What can be learned from the data to refine farm decisions?",
    desc: "How do historical feed logs or sensor readings help you adjust future crop management and reduce operational costs?",
  },
];

/* ====================================================================
 * DATA — RELATED SOLUTIONS (Section 6)
 * ==================================================================== */
const relatedSolutions = [
  {
    title: "Auto Feeder Solutions",
    subtitle: "FCR & Feed Management",
    desc: "Timer and broadcast units evaluated across 30 acres to optimize feeding frequency and protect pond bottoms.",
    href: "/#services",
    icon: Zap,
    color: "text-amber-400",
  },
  {
    title: "Aeration Management",
    subtitle: "DO Stability & Circulation",
    desc: "Paddlewheel, jet, and subsurface aerator positioning strategies to eliminate dead zones.",
    href: "/#services",
    icon: Wind,
    color: "text-blue-400",
  },
  {
    title: "IoT & Water Sensors",
    subtitle: "Continuous Parameter Reading",
    desc: "Digital probe installations providing real-time pH, DO, and temperature tracking.",
    href: "/#services",
    icon: Cpu,
    color: "text-purple-400",
  },
  {
    title: "Micro / Nano Bubble Tech",
    subtitle: "Deep Oxygen Injection",
    desc: "Evaluation of fine-bubble generators for benthic oxygenation and sludge reduction.",
    href: "/#services",
    icon: Layers,
    color: "text-emerald-400",
  },
  {
    title: "Periodic Farm Monitoring",
    subtitle: "Structured Field Support",
    desc: "Regular pond observation visits, water parameter logging, and record reviews.",
    href: "/services/periodic-farm-monitoring",
    icon: Activity,
    color: "text-cyan-400",
  },
];

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function FarmTechnologyConsultingPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* AMBIENT GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-cyan-900/20 via-blue-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1300px] right-0 w-96 h-96 bg-emerald-900/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2500px] left-0 w-96 h-96 bg-purple-900/15 blur-3xl pointer-events-none -z-10" />

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
              Farm Technology Consulting
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
                <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>KE AQUA FARMS • TECHNOLOGY ADVISORY</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Technology Should <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  Solve a Farm Problem
                </span>
              </h1>

              {/* Core Statement Banner */}
              <blockquote className="p-4 rounded-xl bg-slate-900/90 border-l-4 border-cyan-400 text-slate-200 text-sm sm:text-base font-serif italic">
                &ldquo;Technology should solve a farm problem — not just be equipment for the sake of it.&rdquo;
              </blockquote>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                At <strong className="text-white font-semibold">KE Aqua Farms</strong>, we do not operate as a machinery catalogue or equipment dealership. We evaluate aquaculture technology from real commercial farm needs—testing auto feeders, aeration setups, sensors, and micro-bubble units across our 30-acre working farm before advising growers.
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "Problem-First Approach",
                  "Auto Feeder Evaluation",
                  "Aeration Placement",
                  "Digital Sensors & IoT",
                  "Benthic Oxygenation",
                  "Logbook Data Integration",
                ].map((chip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{chip}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#contact-section"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all duration-200 group"
                >
                  <Cpu className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>DISCUSS FARM TECHNOLOGY</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#technology-areas"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <Eye className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Explore Technology Areas</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/50 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/assets/svc-technology.jpg"
                    alt="KE Aqua Farms - Smart Farm Technology Deployment"
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
                      COMMERCIAL FIELD TESTED
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                      30-ACRE FIELD BASE
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    &ldquo;Every technology must justify its presence by solving a specific farm challenge and improving daily operational control.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">KE Aqua Farms Advisory</h4>
                      <p className="text-xs text-slate-400 font-mono">Practical Equipment &amp; Advisory</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: TECHNOLOGY PHILOSOPHY (VISUAL FLOW)
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE EVALUATION METHODOLOGY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Our Technology Evaluation Philosophy
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We evaluate farm technology by purpose, pond conditions, ease of field operation, and observed outcomes—not catalog marketing claims.
            </p>
          </motion.div>

          {/* 5-Step Horizontal Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {philosophyFlow.map((st, idx) => {
              const StepIcon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  className="relative p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                        {st.label}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{st.step}</span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white">{st.title}</h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
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
       * SECTION 2: 8 TECHNOLOGY AREAS (GRID)
       * ==================================================================== */}
      <section id="technology-areas" className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div className="space-y-3 max-w-2xl" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>FIELD CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                8 Practical Technology Areas
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Key technology domains evaluated and integrated into commercial shrimp farm operations.
              </p>
            </motion.div>

            <motion.div className="flex-shrink-0" {...fadeUp(0.2)}>
              <a
                href="#contact-section"
                className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group"
              >
                <span>DISCUSS YOUR FARM NEEDS</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              return (
                <motion.div
                  key={area.id}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-3 flex flex-col justify-between"
                  {...fadeUp(0.05 + idx * 0.05)}
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
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: TRADITIONAL -> SCIENTIFIC -> ADVANCED (3-TIER MATRIX)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300">
              <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
              <span>THE FARM PROGRESSION MATRIX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Traditional → Scientific → Advanced
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Modern technology does not replace traditional experience—it builds upon it.
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

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {tier.desc}
                    </p>

                    <ul className="space-y-2 pt-3 border-t border-slate-800/80">
                      {tier.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${tier.color} flex-shrink-0`} />
                          <span className="">{pt}</span>
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
       * SECTION 4: 5 CORE TECHNOLOGY EVALUATION QUESTIONS
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <QuestionMark className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE 5 QUESTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              5 Questions Before Adopting Technology
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Before investing in new farm machinery or sensors, evaluate these five critical questions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {evaluationQuestions.map((item, idx) => (
              <motion.div
                key={item.num}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex items-start space-x-4"
                {...fadeUp(0.1 + idx * 0.08)}
              >
                <span className="text-2xl font-mono font-black text-cyan-400/50 flex-shrink-0 mt-0.5">
                  {item.num}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">{item.q}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: RESPONSIBLE ADOPTION STATEMENT
       * ==================================================================== */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Responsible Technology Adoption</h2>
          <blockquote className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-sm sm:text-base font-serif italic max-w-3xl mx-auto">
            &ldquo;Every technology may not suit every farm. Every practice should be evaluated based on purpose, cost and result.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 6: RELATED SOLUTIONS (CROSS-LINKS)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>EXPLORE CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Related Technology &amp; Monitoring Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {relatedSolutions.map((sol, idx) => {
              const SolIcon = sol.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                  {...fadeUp(0.05 + idx * 0.05)}
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                      <SolIcon className={`w-5 h-5 ${sol.color}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {sol.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">{sol.subtitle}</p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{sol.desc}</p>
                  </div>

                  <Link
                    href={sol.href}
                    className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold pt-2 border-t border-slate-800"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
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
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>DISCUSS YOUR FARM REQUIREMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Discuss Your Farm Technology Requirements
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you want to evaluate auto feeders for your growout ponds, optimize aeration positioning, or explore sensor monitoring, speak directly with the KE Aqua Farms team.
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
                  <h3 className="text-xl font-bold text-white">Technology Advisory Enquiry</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Submit your farm technology enquiry below. Our team will contact you directly to discuss your requirements.
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
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Technology Interest</label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors">
                        <option value="Auto Feeder Advisory">Auto Feeder Evaluation &amp; Setup</option>
                        <option value="Aeration Management">Aeration &amp; Circulation Setup</option>
                        <option value="IoT Probes & Sensors">IoT &amp; Sensor Monitoring Probes</option>
                        <option value="Micro Nano Bubble Tech">Micro / Nano Bubble Evaluation</option>
                        <option value="General Tech Advisory">General Farm Tech Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Farm Location / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your farm size, current equipment, specific operational problems, or tech questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Cpu className="w-4 h-4" />
                    <span>SUBMIT TECHNOLOGY ADVISORY REQUEST</span>
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
