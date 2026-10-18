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
 * DATA — WHAT WE OBSERVE (Section 2)
 * ==================================================================== */
const observationCards = [
  {
    id: "water-quality",
    icon: Waves,
    title: "Water Quality Parameters",
    subtitle: "Daily & Periodic Water Dynamics",
    description:
      "Tracking essential water parameters—such as pH, salinity, dissolved oxygen, alkalinity, and nitrogenous compounds—to understand pond dynamics and maintain stability.",
    color: "cyan",
    points: [
      "Daily pH, temperature, and dissolved oxygen monitoring",
      "Alkalinity & hardness balancing considerations",
      "Ammonia & nitrite trend tracking (linked to Aqua Pulse testing)",
      "Pond water color, transparency & plankton bloom observation",
    ],
    bgGradient: "from-cyan-950/40 via-slate-900/60 to-slate-950",
    borderColor: "group-hover:border-cyan-500/40",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    id: "feeding-behavior",
    icon: Fish,
    title: "Feeding Behavior & Tray Observation",
    subtitle: "Nutritional Management & Waste Reduction",
    description:
      "Observing check tray consumption rates, gut fullness, and feeding activity to prevent feed wastage, optimize growth, and maintain pond bottom health.",
    color: "emerald",
    points: [
      "Check tray consumption rate timing and analysis",
      "Gut fullness & gut color inspection during feeding",
      "Adjusting feed ration based on weather, DO, and shrimp activity",
      "Prevention of overfeeding to protect pond bottom condition",
    ],
    bgGradient: "from-emerald-950/40 via-slate-900/60 to-slate-950",
    borderColor: "group-hover:border-emerald-500/40",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    id: "shrimp-health",
    icon: Microscope,
    title: "Shrimp Health & Growth Observation",
    subtitle: "Visual Diagnostic & Sampling Logs",
    description:
      "Regular weekly sampling to assess mean body weight (MBW), hepatopancreas condition, shell hardness, antenna integrity, and early stress indicators.",
    color: "purple",
    points: [
      "Visual check of hepatopancreas (HP) size, color, and texture",
      "Shell condition, molting stage, and antenna length observation",
      "Weekly growth sampling (MBW) and average daily gain (ADG)",
      "Prompt escalation to Aqua Pulse laboratory for microscopic/PCR tests",
    ],
    bgGradient: "from-purple-950/40 via-slate-900/60 to-slate-950",
    borderColor: "group-hover:border-purple-500/40",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    id: "pond-environment",
    icon: Wind,
    title: "Pond Bottom & Environmental Conditions",
    subtitle: "Substrate & Aeration Efficiency",
    description:
      "Assessing organic sludge build-up, sludge accumulation zones, aerator placement efficiency, and dissolved oxygen distribution across depth zones.",
    color: "blue",
    points: [
      "Sludge cone accumulation checks and bottom soil observation",
      "Aerator positioning for optimal circulation and central sludge movement",
      "Nighttime DO monitoring and aeration power management",
      "Weather change adaptation (rain, cloudy days, temperature drops)",
    ],
    bgGradient: "from-blue-950/40 via-slate-900/60 to-slate-950",
    borderColor: "group-hover:border-blue-500/40",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    id: "records-data",
    icon: FileSpreadsheet,
    title: "Farm Records & Data Logging",
    subtitle: "Structured Documentation & Trend Analysis",
    description:
      "Maintaining daily farm logbooks and electronic records for feed conversion ratio (FCR), survival estimates, cumulative inputs, and crop history.",
    color: "amber",
    points: [
      "Daily feed, input, and water parameter record keeping",
      "FCR calculation and historical crop data comparison",
      "Cost tracking per kilogram of biomass produced",
      "Pre-harvest decision support based on growth rates and market size",
    ],
    bgGradient: "from-amber-950/40 via-slate-900/60 to-slate-950",
    borderColor: "group-hover:border-amber-500/40",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    iconColor: "text-amber-400",
  },
];

/* ====================================================================
 * DATA — MONITORING WORKFLOW (Section 3)
 * ==================================================================== */
const workflowSteps = [
  {
    step: "01",
    title: "Daily Pond-side Observation",
    subtitle: "Field Checks & Physical Inspection",
    description:
      "Morning and evening pond walks to observe water clarity, aerator performance, surface activity, and check tray responses.",
    icon: Eye,
  },
  {
    step: "02",
    title: "Record Logging & Trend Tracking",
    subtitle: "Data Entry & Historical Benchmarking",
    description:
      "Recording parameter values, feed quantities, MBW measurements, and weather observations into structured daily logbooks.",
    icon: FileSpreadsheet,
  },
  {
    step: "03",
    title: "Data Interpretation & Review",
    subtitle: "Evaluating Trends & Identifying Anomalies",
    description:
      "Analyzing parameter fluctuations—such as pH shifts or drop in feed intake—to catch potential stress factors early.",
    icon: BarChart3,
  },
  {
    step: "04",
    title: "Action & Lab Escalation",
    subtitle: "Adjustments or Aqua Pulse Testing",
    description:
      "Making informed adjustments to aeration, lime, or feeding, or escalating samples to Aqua Pulse laboratory for diagnostic testing.",
    icon: FlaskConical,
  },
];

/* ====================================================================
 * DATA — 3 PILLARS (Section 4)
 * ==================================================================== */
const pillars = [
  {
    title: "Traditional Knowledge",
    subtitle: "Field Intuition & Experience",
    description:
      "Decades of hands-on shrimp farming experience inform our understanding of weather impacts, pond behavior, and subtle animal signs.",
    icon: Compass,
    accent: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
  },
  {
    title: "Scientific Monitoring",
    subtitle: "Aqua Pulse Diagnostic Support",
    description:
      "Water chemistry testing, microbial counts, and microscopic health checks provide objective scientific data to guide farm decisions.",
    icon: Microscope,
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
  },
  {
    title: "Smart Technology",
    subtitle: "Modern Farm Instrumentation",
    description:
      "Integrating automated feeding, acoustic monitoring, digital sensors, and modern aeration to improve efficiency and record precision.",
    icon: Cpu,
    accent: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
  },
];

/* ====================================================================
 * DATA — RESPONSIBLE SUPPORT COMPARISON (Section 5)
 * ==================================================================== */
const comparisonPoints = [
  {
    whatItIs: "Practical, observation-based guidance from a working 30-acre commercial farm operation.",
    whatItIsNot: "A generic academic lecture or theoretical paper with no real field testing.",
  },
  {
    whatItIs: "Data logging and trend analysis to support day-to-day decision making.",
    whatItIsNot: "A guaranteed outcome or miracle cure that eliminates all farming risks.",
  },
  {
    whatItIs: "Objective water quality and health observation linked with Aqua Pulse testing.",
    whatItIsNot: "A replacement for continuous daily on-site farm management by the farmer.",
  },
  {
    whatItIs: "Responsible farm management recommendations tailored to local field conditions.",
    whatItIsNot: "Commercial sales pitching of unnecessary chemicals or additives.",
  },
];

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function FarmMonitoringPage() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* BACKGROUND GRAPHICS & AMBIENT GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-cyan-900/20 via-blue-900/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1200px] left-0 w-96 h-96 bg-emerald-900/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2400px] right-0 w-96 h-96 bg-purple-900/15 blur-3xl pointer-events-none -z-10" />

      {/* ====================================================================
       * BREADCRUMB & HERO SECTION
       * ==================================================================== */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-slate-800/80 bg-slate-950/80">
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
              Farm Monitoring & Technical Support
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>KE AQUA FARMS • TECHNICAL SUPPORT</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Monitor the Farm. <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  Understand the Crop.
                </span>{" "}
                <br className="hidden sm:inline" />
                Make Better Decisions.
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                At <strong className="text-white font-semibold">KE Aqua Farms</strong>, farm monitoring and technical support are rooted in daily commercial experience. We combine continuous pond-side observation, water quality tracking, feeding logs, and scientific laboratory insights to support responsible, data-backed farm management.
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "Pond Observation",
                  "Water Quality Tracking",
                  "Feeding Logs & FCR",
                  "Health Diagnostics",
                  "Aqua Pulse Lab",
                  "Responsible Farming",
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

              {/* CTA Action Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#contact-section"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all duration-200 group"
                >
                  <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>ENQUIRE ABOUT FARM SUPPORT</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#what-we-observe"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <Eye className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Explore What We Observe</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/50 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/Real_Images/image_1.jpeg"
                    alt="Aqua Pulse technical specialist testing pond water salinity with optical refractometer"
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
                      COMMERCIAL FIELD MONITORING
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                      ACTIVE POND DATA
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    &ldquo;Monitoring is not just recording numbers; it is understanding what the pond is communicating before stress impacts the crop.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">KE Aqua Farms Operation</h4>
                      <p className="text-xs text-slate-400 font-mono">30-Acre Commercial Farm Base</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: WHY FARM MONITORING MATTERS
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>THE CORE PHILOSOPHY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Why Continuous Farm Monitoring Matters
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In intensive shrimp aquaculture, water quality and animal health change continuously. Waiting for visible signs of distress often means acting too late. Structured observation and daily record-keeping allow farmers to detect subtle shifts early and make proactive adjustments.
            </p>
          </motion.div>

          {/* 3 Core Value Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.15)}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Observation Before Action</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Understanding check trays, water clarity, plankton shifts, and shrimp feeding vigor allows farm managers to adjust inputs based on real pond demand rather than fixed schedules.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.25)}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Records & Trend Analysis</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tracking pH swings, alkalinity levels, and daily feeding rates provides a historical log. Patterns emerge across crop cycles, revealing optimal operating windows for your specific farm.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.35)}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Scientific Lab Integration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Field observations are reinforced by chemical and microbiological analysis at <strong className="text-white">Aqua Pulse Laboratory</strong>, grounding field decisions in verified laboratory data.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: WHAT WE OBSERVE (5 CORE CARDS)
       * ==================================================================== */}
      <section id="what-we-observe" className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div className="space-y-3 max-w-2xl" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>PRACTICAL FIELD OBSERVATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                What We Observe &amp; Monitor
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                On a working commercial shrimp farm, effective technical monitoring covers five interconnected pillars of pond health and performance.
              </p>
            </motion.div>

            <motion.div className="flex-shrink-0" {...fadeUp(0.2)}>
              <a
                href="#contact-section"
                className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group"
              >
                <span>REQUEST MONITORING CHECKLIST</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {observationCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  className={`group relative rounded-2xl p-7 bg-gradient-to-b ${card.bgGradient} border border-slate-800/90 ${card.borderColor} transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/30`}
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="space-y-5">
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center ${card.iconColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-2.5 py-1 rounded-md text-xs font-mono border ${card.badgeColor}`}>
                        0{idx + 1} • OBSERVE
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">{card.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Points Bullet List */}
                    <ul className="space-y-2.5 pt-2 border-t border-slate-800/80">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${card.iconColor}`} />
                          <span className="leading-tight">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Button */}
                  <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArea(selectedArea === card.id ? null : card.id)}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                    >
                      <span>{selectedArea === card.id ? "Hide Details" : "View Observation Details"}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${selectedArea === card.id ? "rotate-90" : ""}`} />
                    </button>
                  </div>

                  {/* Expandable Detail Panel */}
                  <AnimatePresence>
                    {selectedArea === card.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-cyan-500/20 text-xs text-slate-300 space-y-2 bg-slate-900/90 p-4 rounded-xl"
                      >
                        <p className="font-semibold text-cyan-300">Field Monitoring Approach:</p>
                        <p className="text-slate-400 leading-relaxed">
                          Observations are logged daily into standardized farm check sheets. Where parameter trends indicate deviation from optimal ranges, samples are collected and sent to Aqua Pulse Laboratory for precise testing.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: PRACTICAL MONITORING WORKFLOW
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE DAILY CYCLE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Practical Monitoring Workflow
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              How daily observations translate into informed farm management decisions.
            </p>
          </motion.div>

          {/* Workflow Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  className="relative p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-all duration-300"
                  {...fadeUp(0.1 + idx * 0.1)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-emerald-400/40 font-mono">{step.step}</span>
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-xs font-mono text-emerald-400/80 mt-0.5">{step.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 4: THE 3 PILLARS AT KE AQUA FARMS
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description */}
            <motion.div className="lg:col-span-5 space-y-6" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>INTEGRATED SYSTEM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Traditional Knowledge + Science + Smart Tech
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                KE Aqua Farms does not rely on a single approach. Effective farm monitoring brings together three complementary strengths: experienced field judgment, precise scientific diagnostic data from Aqua Pulse, and modern smart technology.
              </p>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider font-mono">
                  Synergy in Practice
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A sensor measures dissolved oxygen, traditional experience interprets shrimp response to weather changes, and laboratory testing verifies bacterial counts. Together, they provide complete farm visibility.
                </p>
              </div>
            </motion.div>

            {/* Right 3 Cards */}
            <motion.div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6" {...fadeUp(0.25)}>
              {pillars.map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl bg-slate-900 ${pillar.bg} border ${pillar.border} space-y-4 flex flex-col justify-between`}
                  >
                    <div className="space-y-3">
                      <div className={`w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center ${pillar.accent}`}>
                        <PillarIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                      <p className="text-xs font-mono text-slate-400">{pillar.subtitle}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: RESPONSIBLE FARM MANAGEMENT / WHAT MONITORING IS NOT
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/30 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center space-y-4 mb-14" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>RESPONSIBLE TRANSPARENCY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              What Farm Technical Support Is — and Is Not
            </h2>

            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              We maintain complete honesty regarding what farm monitoring and technical advisory can achieve.
            </p>
          </motion.div>

          <div className="space-y-4">
            {comparisonPoints.map((pt, idx) => (
              <motion.div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-xl bg-slate-950 border border-slate-800"
                {...fadeUp(0.1 + idx * 0.08)}
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                      WHAT IT IS
                    </span>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">{pt.whatItIs}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-4">
                  <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                      WHAT IT IS NOT
                    </span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{pt.whatItIsNot}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 6: CONVERSION / DIRECT CONTACT CTA
       * ==================================================================== */}
      <section id="contact-section" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Contact Messaging */}
            <motion.div className="lg:col-span-6 space-y-6" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>LET&apos;S TALK AQUACULTURE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Discuss Farm Technical Support with Our Team
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you want to discuss water quality tracking, feeding logs, or scheduling a practical farm technical visit, we welcome direct conversation. Speak directly with experienced aquaculture professionals from KE Aqua Farms.
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

              {/* Operating Hours Info Box */}
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

            {/* Right Simple Contact Form */}
            <motion.div className="lg:col-span-6" {...fadeUp(0.25)}>
              <div className="rounded-2xl p-7 bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white">Send a Technical Enquiry</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Select your interest area and share your details. Our technical team will reach out directly.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for your enquiry. The KE Aqua Farms technical team will contact you shortly.");
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
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Enquiry Category</label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors">
                        <option value="Farm Technical Support">Farm Technical Support</option>
                        <option value="Water Quality & Lab">Water Quality &amp; Lab (Aqua Pulse)</option>
                        <option value="Pond Visit & Exposure">Pond Visit &amp; Exposure</option>
                        <option value="Training Program">Practical Training Program</option>
                        <option value="Other">Other Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Farm Location / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your farm size, current crop, or specific technical support questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>SUBMIT TECHNICAL ENQUIRY</span>
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
