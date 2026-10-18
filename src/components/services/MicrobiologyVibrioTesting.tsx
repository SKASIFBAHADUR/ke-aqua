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
  ShieldAlert,
  Biohazard,
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
 * DATA — VIBRIO MONITORING CARDS (Section 2)
 * ==================================================================== */
const vibrioCapabilities = [
  {
    id: "tcbs-plating",
    title: "TCBS Agar Plating & Colony Observation",
    subtitle: "Selective Medium Bacterial Tracking",
    description:
      "Plating water, sediment, or tissue samples onto Thiosulfate-Citrate-Bile Salts-Sucrose (TCBS) agar to observe bacterial colony development.",
    color: "purple",
    points: [
      "Total Vibrio colony counting on selective TCBS agar",
      "Differentiating green colonies vs yellow sucrose-fermenting colonies",
      "Tracking bacterial density trends over the crop cycle",
      "Correlating colony counts with pond organic load and aeration",
    ],
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    id: "water-microbiology",
    title: "Water & Sediment Microbial Monitoring",
    subtitle: "Pond Environment Bacterial Baseline",
    description:
      "Monitoring bacterial population trends in pond water and bottom substrate to track environmental stability across stocking days.",
    color: "cyan",
    points: [
      "Pond water total bacterial load estimation",
      "Bottom sludge microbial density trend tracking",
      "Evaluating water exchange or probiotic input response",
      "Seasonal and weather-driven bacterial shift observation",
    ],
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    id: "tissue-microbiology",
    title: "Shrimp Tissue Microbial Observation",
    subtitle: "Hepatopancreas & Hemolymph Checks",
    description:
      "Observational microbiological check of shrimp hepatopancreas tissue and hemolymph samples during routine health assessments.",
    color: "emerald",
    points: [
      "Hepatopancreas tissue bacterial plating observation",
      "Hemolymph clarity check and bacterial presence tracking",
      "Monitoring stress-induced bacterial population shifts",
      "Escalating findings to broader technical management reviews",
    ],
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
];

/* ====================================================================
 * DATA — LAB PROCESS (Section 3)
 * ==================================================================== */
const labProcessSteps = [
  {
    step: "01",
    label: "SAMPLE COLLECTION",
    title: "Clean Field Sampling",
    description:
      "Pond water or shrimp samples collected using sterile containers following clean sampling protocols.",
    icon: Droplets,
  },
  {
    step: "02",
    label: "LAB ANALYSIS",
    title: "Selective Plating & Incubation",
    description:
      "Samples inoculated onto agar media and incubated under controlled laboratory conditions.",
    icon: FlaskConical,
  },
  {
    step: "03",
    label: "OBSERVATION / RESULT",
    title: "Colony Count & Morphology",
    description:
      "Colony formation observed, counted, and categorized by color and morphological characteristics.",
    icon: Eye,
  },
  {
    step: "04",
    label: "TECHNICAL INTERPRETATION",
    title: "Data Contextualization",
    description:
      "Bacterial counts evaluated alongside recent water parameters, feed input rates, and pond weather.",
    icon: BookOpen,
  },
  {
    step: "05",
    label: "FARM DECISION",
    title: "Informed Management Action",
    description:
      "Farmer receives observational reports to guide decisions on feeding, aeration, or biosecurity.",
    icon: Lightbulb,
  },
];

/* ====================================================================
 * DATA — RELATED MONITORING SERVICES (Section 4)
 * ==================================================================== */
const relatedServices = [
  {
    title: "Water Quality Testing",
    subtitle: "Chemical Parameter Analysis",
    description:
      "Precision testing for pH, alkalinity, hardness, TAN, nitrite, and salinity at Aqua Pulse Laboratory.",
    href: "/services/water-quality-testing",
    icon: FlaskConical,
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-500/40",
  },
  {
    title: "Microscopic Shrimp Health Analysis",
    subtitle: "Optical Organ & Tissue Inspection",
    description:
      "Microscopic evaluation of hepatopancreas, gut fullness ratio, gill filament cleanliness, and plankton.",
    href: "/services/microscopic-shrimp-health-analysis",
    icon: Microscope,
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/40",
  },
  {
    title: "Farm Monitoring & Technical Support",
    subtitle: "30-Acre Commercial Field Support",
    description:
      "Practical technical assistance based on daily pond observations, records, and commercial farm experience.",
    href: "/services/farm-monitoring-technical-support",
    icon: Activity,
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/40",
  },
];

/* ====================================================================
 * DATA — RESPONSIBLE FARMING (Section 5)
 * ==================================================================== */
const responsiblePillars = [
  {
    title: "Biosecurity Management",
    desc: "Implementing strict water filtration, crab fencing, equipment sanitation, and visitor controls to minimize pathogen entry.",
    icon: ShieldCheck,
    color: "text-emerald-400",
  },
  {
    title: "Responsible Input Usage",
    desc: "Applying liming agents, minerals, and water conditioners based on verified test parameters rather than routine over-dosing.",
    icon: Sprout,
    color: "text-cyan-400",
  },
  {
    title: "Antibiotic Awareness",
    desc: "Promoting responsible, non-antibiotic farming practices that prioritize water quality, aeration, and natural pond balance.",
    icon: Leaf,
    color: "text-teal-400",
  },
  {
    title: "Food Safety Focus",
    desc: "Ensuring harvested shrimp comply with international export standards and food safety regulations.",
    icon: CheckCircle2,
    color: "text-amber-400",
  },
  {
    title: "Environmental Responsibility",
    desc: "Managing pond discharge water, protecting surrounding coastal ecosystems, and operating sustainably.",
    icon: Waves,
    color: "text-blue-400",
  },
];

/* ====================================================================
 * DATA — TARGET AUDIENCE (Section 6)
 * ==================================================================== */
const targetAudiences = [
  {
    title: "Shrimp Farmers",
    description:
      "Seeking routine bacterial load monitoring to understand pond environment balance across the crop cycle.",
    icon: Users,
  },
  {
    title: "Farm Managers",
    description:
      "Managing multi-pond operations who require structured microbiological logbooks to correlate with water data.",
    icon: Layers,
  },
  {
    title: "Aquaculture Operators",
    description:
      "Focusing on biosecurity and responsible management who want laboratory-supported microbial observation.",
    icon: Target,
  },
];

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function MicrobiologyVibrioTestingPage() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-900/20 via-cyan-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1300px] right-0 w-96 h-96 bg-teal-900/15 blur-3xl pointer-events-none -z-10" />
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
            <span className="text-purple-400 font-medium whitespace-nowrap">
              Microbiology &amp; Vibrio Testing
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase">
                <Biohazard className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                <span>KE AQUA FARMS • AQUA PULSE MICROBIOLOGY</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Scientific Monitoring for <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">
                  Better Farm Awareness
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Microbiological and Vibrio monitoring at <strong className="text-white font-semibold">Aqua Pulse Laboratory</strong> provides objective observation of bacterial population dynamics in pond water, soil, and shrimp samples. Connected with <strong className="text-white font-semibold">KE Aqua Farms</strong>, microbial tracking supports responsible farm management without fear-based claims.
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "TCBS Agar Plating",
                  "Green vs Yellow Vibrio",
                  "Water Bacterial Density",
                  "Sediment Load Tracking",
                  "Tissue Microbial Checks",
                  "Biosecurity Support",
                ].map((chip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                    <span className="truncate">{chip}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#contact-section"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-purple-500/20 transition-all duration-200 group"
                >
                  <FlaskConical className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>ENQUIRE ABOUT MICROBIOLOGY TESTING</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#related-monitoring"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <Activity className="w-4 h-4 mr-2 text-purple-400" />
                  <span>Explore Related Monitoring</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-purple-950/50 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/Real_Images/image_9.jpeg"
                    alt="Aqua Pulse laboratory technician dispensing sample with precision pipette for microbiological and diagnostic analysis"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Overlaid Info Card */}
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wide">
                      BACTERIAL MONITORING
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono">
                      MICROBIOLOGY LAB
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    &ldquo;Microbial tracking is not about chasing zero bacteria; it is about understanding population dynamics and keeping your pond balanced.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <Microscope className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Aqua Pulse Laboratory</h4>
                      <p className="text-xs text-slate-400 font-mono">TCBS Plating &amp; Bacterial Load Tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: ROLE OF MICROBIOLOGY IN AQUACULTURE
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Microscope className="w-3.5 h-3.5 text-purple-400" />
              <span>THE ROLE OF MICROBIOLOGY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Understanding the Pond Bacterial Ecosystem
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Bacteria are a natural and necessary part of every aquaculture pond. Beneficial bacteria break down organic waste and drive nitrification. Microbial monitoring helps farmers observe bacterial population shifts early, allowing proactive pond management without resorting to fear-based marketing or unnecessary chemical treatments.
            </p>
          </motion.div>

          {/* 3 Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.15)}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Tracking Population Dynamics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Monitoring bacterial counts over consecutive weeks reveals whether bacterial density is stable, rising, or shifting following weather changes or feed increases.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.25)}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Supporting Biosecurity</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Microbial data reinforces biosecurity protocols by evaluating the effectiveness of water preparation, sanitization timing, and water exchange practices.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.35)}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Responsible Management</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Understanding bacterial trends encourages natural pond ecosystem management, proper aeration, and zero-antibiotic farming practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: VIBRIO MONITORING & CAPABILITIES
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div className="space-y-3 max-w-2xl" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
                <TestTube className="w-3.5 h-3.5 text-purple-400" />
                <span>CONFIRMED MONITORING CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Vibrio &amp; Microbial Monitoring Capabilities
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Observational microbiological monitoring capabilities available at Aqua Pulse Laboratory, subject to facility and sample availability.
              </p>
            </motion.div>

            <motion.div className="flex-shrink-0" {...fadeUp(0.2)}>
              <a
                href="#contact-section"
                className="inline-flex items-center text-xs font-mono text-purple-400 hover:text-purple-300 font-semibold group"
              >
                <span>REQUEST MICROBIOLOGY CHECK</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vibrioCapabilities.map((card, idx) => (
              <motion.div
                key={card.id}
                className="group relative rounded-2xl p-7 bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-purple-950/40"
                {...fadeUp(0.1 + idx * 0.08)}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-mono font-bold text-xs text-purple-400">
                      0{idx + 1}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono border ${card.badgeColor}`}>
                      LAB CAPABILITY
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">{card.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-slate-800/80">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${card.iconColor}`} />
                        <span className="leading-tight">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
                    className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center space-x-1"
                  >
                    <span>{selectedCard === card.id ? "Hide Info" : "View Monitoring Details"}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${selectedCard === card.id ? "rotate-90" : ""}`} />
                  </button>
                </div>

                <AnimatePresence>
                  {selectedCard === card.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-purple-500/20 text-xs text-slate-300 space-y-2 bg-slate-950 p-4 rounded-xl"
                    >
                      <p className="font-semibold text-purple-300">Technical Context:</p>
                      <p className="text-slate-400 leading-relaxed">
                        Microbiological observation tracks colony formation on selective media. Colony counts provide comparative baseline trends to inform ongoing farm management decisions.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Scientific Disclaimer Box */}
          <motion.div
            className="mt-12 p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start space-x-4 max-w-4xl mx-auto"
            {...fadeUp(0.3)}
          >
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">Responsible Scientific Framing:</strong> Vibrio monitoring provides observational data regarding bacterial colony counts. We never claim &ldquo;Vibrio-free&rdquo; or &ldquo;disease-free&rdquo; outcomes. All natural aquaculture ponds contain microbial populations; the goal of monitoring is to maintain healthy ecological balance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: LAB PROCESS (5-STEP WORKFLOW)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300">
              <FlaskConical className="w-3.5 h-3.5 text-teal-400" />
              <span>THE MONITORING WORKFLOW</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Microbiology Laboratory Process
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              A standard, observation-driven procedure from sample intake to technical review.
            </p>
          </motion.div>

          {/* 5-Step Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {labProcessSteps.map((st, idx) => {
              const StepIcon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  className="relative p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300">
                        {st.label}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{st.step}</span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400">
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white">{st.title}</h3>

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
       * SECTION 4: RELATED MONITORING SERVICES
       * ==================================================================== */}
      <section id="related-monitoring" className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>ECOSYSTEM INTEGRATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Related Farm Monitoring Capabilities
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Microbiology testing works hand-in-hand with our other specialized monitoring services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((svc, idx) => {
              const SvcIcon = svc.icon;
              return (
                <motion.div
                  key={idx}
                  className={`p-7 rounded-2xl bg-slate-900/90 border border-slate-800 ${svc.borderColor} transition-all duration-300 flex flex-col justify-between space-y-6 group`}
                  {...fadeUp(0.1 + idx * 0.1)}
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center ${svc.color}`}>
                      <SvcIcon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">{svc.subtitle}</p>
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
                      <span>Explore Service Page</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: RESPONSIBLE FARMING PILLARS
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RESPONSIBLE AQUACULTURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              5 Pillars of Responsible Farm Management
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Scientific monitoring serves a larger goal: promoting sustainable, biosecure, and responsible shrimp aquaculture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {responsiblePillars.map((pil, idx) => {
              const PilIcon = pil.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <PilIcon className={`w-5 h-5 ${pil.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white">{pil.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pil.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 6: WHO IT SUPPORTS
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Users className="w-3.5 h-3.5 text-purple-400" />
              <span>TARGET AUDIENCE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Who Microbiology Monitoring Supports
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
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
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
       * SECTION 7: DISCLAIMER NOTE
       * ==================================================================== */}
      <section className="py-12 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 flex items-start space-x-3 text-xs text-slate-300">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-white">Capability Disclaimer:</span>
              <p className="leading-relaxed">
                Specific tests, methods and availability depend on the laboratory&apos;s current capability. Please confirm the required analysis before submitting a request.
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
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                <span>REQUEST MICROBIOLOGY SUPPORT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Request Microbiology Support or Talk to Our Lab Team
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Discuss your microbiology testing requirements, sample collection procedures, or schedule a technical review with the Aqua Pulse / KE Aqua Farms team.
              </p>

              {/* Direct Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`tel:${CONTACT_CONFIG.phone.value}`}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-all duration-200 group flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Call</span>
                    <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
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
                <Clock className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">Laboratory Hours &amp; Location:</p>
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
                  <h3 className="text-xl font-bold text-white">Microbiology Enquiry Form</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Submit your microbiology analysis enquiry below. The Aqua Pulse team will respond promptly.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for your enquiry. The Aqua Pulse team will contact you shortly.");
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
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile number"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Testing Category</label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors">
                        <option value="TCBS Vibrio Plating">TCBS Vibrio Plating &amp; Count</option>
                        <option value="Water Bacterial Density">Water Bacterial Density Check</option>
                        <option value="Sediment Microbial Monitoring">Sediment Microbial Monitoring</option>
                        <option value="Tissue Microbial Check">Shrimp Tissue Microbial Check</option>
                        <option value="General Microbiology Enquiry">General Microbiology Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Farm Location / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your farm location, current crop DOC, or specific microbiology questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-purple-500/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <FlaskConical className="w-4 h-4" />
                    <span>SUBMIT MICROBIOLOGY ENQUIRY</span>
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
