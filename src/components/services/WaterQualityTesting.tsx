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
  FlaskRound,
  TestTube,
  FileCheck2,
  Lightbulb,
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

function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-40px" } as const,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  };
}

/* ====================================================================
 * DATA — AVAILABLE LABORATORY PARAMETERS (Section 2)
 * ==================================================================== */
const availableParameters = [
  {
    id: "ph",
    name: "pH (Hydrogen Ion Concentration)",
    symbol: "pH",
    explanation:
      "Measures the acidity or alkalinity balance of pond water on a logarithmic scale.",
    whyMonitor:
      "Daily pH shifts indicate phytoplankton photosynthetic activity and carbon dioxide dynamics. Fluctuations affect shrimp gill health and molting condition.",
    color: "cyan",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    id: "alkalinity",
    name: "Alkalinity (Carbonate & Bicarbonate)",
    symbol: "HCO₃⁻ / CO₃²⁻",
    explanation:
      "Measures the buffering capacity of water to neutralize acids and resist sudden pH drops.",
    whyMonitor:
      "Adequate alkalinity stabilizes pH swings and provides essential inorganic carbon required for healthy exoskeleton formation during molting.",
    color: "teal",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    iconColor: "text-teal-400",
  },
  {
    id: "hardness",
    name: "Water Hardness (Calcium & Magnesium)",
    symbol: "Ca²⁺ / Mg²⁺",
    explanation:
      "Measures total concentration of dissolved divalent cations, primarily calcium and magnesium ions.",
    whyMonitor:
      "Calcium and magnesium are essential for carapace hardening post-molt, muscle function, and maintaining osmotic balance in brackish shrimp ponds.",
    color: "blue",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    id: "ammonia",
    name: "Ammonia (Total Ammonia Nitrogen / TAN)",
    symbol: "NH₃ / NH₄⁺",
    explanation:
      "Measures total nitrogenous waste resulting from unconsumed feed, shrimp excretion, and organic matter decay.",
    whyMonitor:
      "Un-ionized ammonia (NH₃) is toxic to shrimp even at low concentrations. Elevated TAN leads to lethargy, reduced feeding, and respiratory stress.",
    color: "amber",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    id: "nitrite-nitrate",
    name: "Nitrite & Nitrate (NO₂⁻ / NO₃⁻)",
    symbol: "NO₂⁻ / NO₃⁻",
    explanation:
      "Intermediate and end-products of aerobic biological nitrification by nitrifying bacteria.",
    whyMonitor:
      "Nitrite accumulates when biofiltration is incomplete, interfering with oxygen transport in shrimp hemolymph. Tracking nitrite reveals filter stability.",
    color: "purple",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    id: "salinity-do",
    name: "Salinity & Dissolved Oxygen (DO)",
    symbol: "ppt / mg/L",
    explanation:
      "Field-monitored physical parameters tracking salt concentration and oxygen saturation in water.",
    whyMonitor:
      "DO is the single most critical survival factor in intensive aquaculture. Salinity shifts influence osmoregulation energy demands and feed intake.",
    color: "emerald",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
];

/* ====================================================================
 * DATA — FROM SAMPLE TO INFORMATION (Section 3)
 * ==================================================================== */
const processSteps = [
  {
    step: "01",
    label: "SAMPLE",
    title: "Pond Sample Collection",
    description:
      "Water sample collected at recommended pond depth and location using clean, non-reactive sample containers.",
    icon: Droplets,
  },
  {
    step: "02",
    label: "TEST",
    title: "Laboratory Testing",
    description:
      "Chemical analysis performed at Aqua Pulse laboratory using standard reagent testing procedures.",
    icon: FlaskConical,
  },
  {
    step: "03",
    label: "ANALYSE",
    title: "Data Verification",
    description:
      "Testing values verified for accuracy and cross-referenced with historical pond logs.",
    icon: BarChart3,
  },
  {
    step: "04",
    label: "INTERPRET",
    title: "Contextual Review",
    description:
      "Parameter values evaluated alongside pond weather, stocking days, feeding rate, and molting phase.",
    icon: BookOpen,
  },
  {
    step: "05",
    label: "FARM DECISION",
    title: "Informed Management Action",
    description:
      "Farmer makes tailored adjustments to lime application, aeration schedules, or feeding rates.",
    icon: Lightbulb,
  },
];

/* ====================================================================
 * DATA — WATER + FARM MANAGEMENT CONNECTIVITY (Section 4)
 * ==================================================================== */
const managementPillars = [
  {
    title: "Water Visual Observation",
    desc: "Observing water color, secchi disc transparency, foam accumulation, and plankton bloom crashes alongside lab numbers.",
    icon: Eye,
    color: "cyan",
  },
  {
    title: "Farm Record Logging",
    desc: "Maintaining cumulative daily logs of parameters over the crop cycle to recognize normal baseline variations versus trend anomalies.",
    icon: FileSpreadsheet,
    color: "emerald",
  },
  {
    title: "Shrimp Health Check",
    desc: "Correlating water parameter shifts with shrimp check tray behavior, gut fullness, hepatopancreas color, and molting frequency.",
    icon: Microscope,
    color: "purple",
  },
  {
    title: "Feed Adjustment",
    desc: "Using TAN, pH, and DO trends to regulate feed rations responsibly, preventing feed degradation on the pond bottom.",
    icon: Fish,
    color: "amber",
  },
  {
    title: "Aeration Management",
    desc: "Adjusting nighttime aerator horsepower according to oxygen consumption trends and phytoplankton respiration load.",
    icon: Wind,
    color: "blue",
  },
  {
    title: "Responsible Management",
    desc: "Focusing on sustainable pond ecosystem balance rather than reactive chemical over-dosing.",
    icon: ShieldCheck,
    color: "teal",
  },
];

/* ====================================================================
 * DATA — TARGET AUDIENCES (Section 6)
 * ==================================================================== */
const targetAudiences = [
  {
    title: "Shrimp Farmers",
    description:
      "Seeking routine, dependable water parameter checks to maintain pond stability and prevent sudden water quality deterioration.",
    icon: Users,
  },
  {
    title: "Farm Managers",
    description:
      "Overseeing multiple growout ponds who require organized laboratory logs to benchmark performance across different ponds.",
    icon: Layers,
  },
  {
    title: "Aquaculture Operators",
    description:
      "Upgrading from basic drop-test kits to laboratory-supported chemical testing for critical crop stages.",
    icon: Target,
  },
];

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function WaterQualityTestingPage() {
  const [activeParam, setActiveParam] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* AMBIENT GLOWS & BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-cyan-900/20 via-blue-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1300px] right-0 w-96 h-96 bg-teal-900/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2500px] left-0 w-96 h-96 bg-cyan-900/15 blur-3xl pointer-events-none -z-10" />

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
            <span className="text-cyan-400 font-medium whitespace-nowrap">
              Water Quality Testing
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
                <FlaskRound className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>KE AQUA FARMS • AQUA PULSE LABORATORY</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Science for Better <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                  Water Management
                </span>
              </h1>

              {/* Featured Quote */}
              <blockquote className="p-4 rounded-xl bg-slate-900/90 border-l-4 border-cyan-400 text-slate-200 text-sm sm:text-base font-serif italic">
                &ldquo;Good farming decisions require timely information.&rdquo;
              </blockquote>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                Water quality testing at <strong className="text-white font-semibold">Aqua Pulse Laboratory</strong> provides objective chemical monitoring to support daily farm management. By combining accurate laboratory parameters with pond-side observation, farmers make informed, responsible decisions for crop stability.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "pH Balance",
                  "Alkalinity Buffering",
                  "Hardness Ions",
                  "Ammonia (TAN)",
                  "Nitrite & Nitrate",
                  "DO & Salinity",
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
                  <FlaskConical className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>REQUEST WATER TESTING</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#available-parameters"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <TestTube className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>View Available Parameters</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/60 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/assets/svc-lab-bg.jpg"
                    alt="Aqua Pulse Laboratory - Water Quality Testing for Aquaculture"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                </div>

                {/* Overlaid Brand Emblem Card */}
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/assets/div-aquapulse.png"
                        alt="Aqua Pulse Logo"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                      <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                        AQUA PULSE LABORATORY
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono">
                      LABORATORY TESTING
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    Scientific water quality testing integrated with KE Aqua Farms&apos; 30-acre commercial farming operations.
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <FlaskConical className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Aqua Pulse Testing Services</h4>
                      <p className="text-[11px] text-slate-400 font-mono">D. No. 17-129, Ismailbegpeta, Koduru</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: WHY WATER QUALITY MATTERS
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Droplets className="w-3.5 h-3.5 text-cyan-400" />
              <span>POND ECOSYSTEM DYNAMICS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Why Water Quality Monitoring Matters
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Water is the living medium for shrimp. Physical, chemical, and biological water parameters directly influence metabolic activity, molting cycles, stress resilience, and feed intake. Monitoring parameters systematically allows farmers to maintain a balanced environment before stress impacts the crop.
            </p>
          </motion.div>

          {/* 3 Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.15)}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Understanding Shifts Early</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Water quality parameters shift constantly due to weather, feeding intensity, and microalgae activity. Timely laboratory testing provides clear data before parameter drift causes crop distress.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.25)}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Objective Chemical Data</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Testing pH, alkalinity, hardness, TAN, and nitrite delivers reproducible quantitative numbers, removing guesswork from liming and mineral supplementation decisions.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.35)}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Supporting Responsible Farming</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Data-backed water management reduces unnecessary chemical additions, optimizes feed application, and promotes long-term pond soil and water health.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: AVAILABLE PARAMETERS (LAB GRID)
       * ==================================================================== */}
      <section id="available-parameters" className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div className="space-y-3 max-w-2xl" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <TestTube className="w-3.5 h-3.5 text-cyan-400" />
                <span>CONFIRMED LABORATORY CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Available Water Quality Parameters
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light">
                The core chemical parameters regularly tested and monitored at Aqua Pulse Laboratory for commercial aquaculture ponds.
              </p>
            </motion.div>

            <motion.div className="flex-shrink-0" {...fadeUp(0.2)}>
              <a
                href="#contact-section"
                className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group"
              >
                <span>REQUEST PARAMETER TEST</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Laboratory Parameter Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableParameters.map((param, idx) => (
              <motion.div
                key={param.id}
                className="group relative rounded-2xl p-7 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/40"
                {...fadeUp(0.1 + idx * 0.08)}
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                      {param.symbol.split(" ")[0]}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${param.badgeColor}`}>
                      TEST AVAILABLE
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {param.name}
                    </h3>
                  </div>

                  {/* Simple Explanation */}
                  <div className="space-y-1 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      WHAT IT MEASURES
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {param.explanation}
                    </p>
                  </div>

                  {/* Why Farmers Monitor It */}
                  <div className="space-y-1 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                      WHY FARMERS MONITOR IT
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {param.whyMonitor}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-5 mt-5 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => setActiveParam(activeParam === param.id ? null : param.id)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                  >
                    <span>{activeParam === param.id ? "Close Info" : "Learn More"}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeParam === param.id ? "rotate-90" : ""}`} />
                  </button>
                </div>

                {/* Expandable Detail Box */}
                <AnimatePresence>
                  {activeParam === param.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-slate-300 space-y-1.5 bg-slate-950 p-3 rounded-lg"
                    >
                      <p className="font-semibold text-cyan-300">Testing &amp; Sampling Note:</p>
                      <p className="text-slate-400 leading-relaxed font-light">
                        Samples should be collected in clean bottles away from aerator spray zones and brought to the laboratory promptly for reliable readings.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: FROM SAMPLE TO INFORMATION (VISUAL FLOW)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300">
              <FlaskConical className="w-3.5 h-3.5 text-teal-400" />
              <span>THE LABORATORY PROCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Sample to Information
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              How pond water samples are processed at Aqua Pulse to deliver practical insights for farm operations.
            </p>
          </motion.div>

          {/* 5-Step Visual Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {processSteps.map((st, idx) => {
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
                      <span className="text-xs font-mono text-slate-500">{st.step}</span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white">{st.title}</h3>

                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {st.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Important Scientific Disclaimer Box */}
          <motion.div
            className="mt-12 p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start space-x-4 max-w-4xl mx-auto"
            {...fadeUp(0.3)}
          >
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              <strong className="text-white font-semibold">Important Scientific Context:</strong> Water testing provides objective chemical parameters to support farm management. Testing alone does not diagnose every complex farm problem or guarantee specific crop survival outcomes. Laboratory data works best when combined with continuous daily pond observation and responsible farm practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 4: WATER + FARM MANAGEMENT INTEGRATION
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>HOLISTIC APPROACH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Connecting Testing with Farm Management
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              At KE Aqua Farms, water testing is never viewed as isolated numbers on a sheet. We connect laboratory measurements directly with field observation, record-keeping, and daily farm practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementPillars.map((pil, idx) => {
              const PilIcon = pil.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-3"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <PilIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{pil.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {pil.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: SCIENTIFIC MONITORING (AQUA PULSE IDENTITY)
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Brand Emblem & Copy */}
              <motion.div className="lg:col-span-8 space-y-6" {...fadeUp(0.1)}>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/assets/div-aquapulse.png"
                    alt="Aqua Pulse Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                      SCIENTIFIC &amp; LABORATORY IDENTITY
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Aqua Pulse Traders &amp; Laboratory
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  <strong className="text-white font-semibold">Aqua Pulse</strong> represents the scientific and laboratory service arm within the broader <strong className="text-white font-semibold">KE Aqua Farms</strong> ecosystem. Aqua Pulse supports testing, science, technical services, technology adoption, and practical farm consultancy.
                </p>

                {/* 4 Pillars Banner Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { label: "TESTING", icon: FlaskConical },
                    { label: "SCIENCE", icon: Microscope },
                    { label: "ADVISORY", icon: BookOpen },
                    { label: "SOLUTIONS", icon: Lightbulb },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                      >
                        <ItemIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Ecosystem Connection Box */}
              <motion.div className="lg:col-span-4" {...fadeUp(0.25)}>
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 text-center">
                  <Image
                    src="/assets/ke-aqua-farms-logo.png"
                    alt="KE Aqua Farms Logo"
                    width={160}
                    height={48}
                    className="mx-auto object-contain"
                  />
                  <div className="border-t border-slate-800 pt-3 text-xs text-slate-400 font-mono">
                    KE AQUA FARMS ECOSYSTEM
                  </div>
                  <p className="text-xs text-slate-300 font-light">
                    Practical Commercial Farm • Scientific Lab Support • Technical Advisory
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 6: WHO CAN USE THIS SERVICE
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>SERVICE ACCESSIBILITY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Who Can Request Water Testing
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
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
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
              <span className="font-semibold text-white">Laboratory Parameter Notice:</span>
              <p className="font-light leading-relaxed">
                Testing availability and parameters may vary according to actual laboratory capability. Please confirm the required test before submitting a request.
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
                <span>REQUEST WATER TESTING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Request Water Testing or Talk to Our Lab Team
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Whether you need routine chemical parameter testing or want to discuss sample collection procedures, our team is available to assist you.
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
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Call</span>
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
                    <span className="text-[11px] font-mono text-slate-400 block">WhatsApp Enquiries</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Chat on WhatsApp
                    </span>
                  </div>
                </a>
              </div>

              {/* Operating Hours Info */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">Laboratory Hours &amp; Location:</p>
                  <p className="text-slate-300 font-light">
                    {CONTACT_CONFIG.operatingHours.days} • {CONTACT_CONFIG.operatingHours.time}
                  </p>
                  <p className="text-slate-400 text-[11px] font-mono">{CONTACT_CONFIG.location.fullAddress}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Contact Form */}
            <motion.div className="lg:col-span-6" {...fadeUp(0.25)}>
              <div className="rounded-2xl p-7 bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white">Water Testing Enquiry Form</h3>
                  <p className="text-xs text-slate-400 mt-1 font-light">
                    Submit your water testing enquiry below. The Aqua Pulse laboratory team will respond promptly.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for your water testing enquiry. The Aqua Pulse team will contact you shortly.");
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
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Primary Test Needed</label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors">
                        <option value="Full Water Parameter Suite">Full Water Parameter Suite (pH, TAN, Alk, Hardness)</option>
                        <option value="pH & Alkalinity Check">pH &amp; Alkalinity Check</option>
                        <option value="Ammonia & Nitrite Check">Ammonia (TAN) &amp; Nitrite Check</option>
                        <option value="Hardness & Minerals">Calcium &amp; Magnesium Hardness</option>
                        <option value="Other Testing">Other Water Quality Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Pond Details / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Specify number of ponds, stocking age, or current water condition concerns..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <FlaskConical className="w-4 h-4" />
                    <span>SUBMIT WATER TESTING REQUEST</span>
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
