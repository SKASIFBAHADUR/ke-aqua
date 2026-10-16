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
  Search,
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

/* ====================================================================
 * DATA — OBSERVATION AREAS (Section 2)
 * ==================================================================== */
const observationAreas = [
  {
    id: "plankton",
    title: "Plankton & Microalgae Observation",
    subtitle: "Water Sample Microscopic Scan",
    description:
      "Observing phytoplankton species composition, diatom ratios, dinoflagellate presence, and bloom density in pond water samples under laboratory magnification.",
    icon: Droplets,
    color: "cyan",
    points: [
      "Diatom vs green algae bloom ratio checks",
      "Identification of dominant microalgae groups",
      "Observing plankton crash or die-off signs early",
      "Water clarity correlation with biological density",
    ],
    bgGradient: "from-cyan-950/40 via-slate-900/60 to-slate-950",
    borderColor: "group-hover:border-cyan-500/40",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    id: "shrimp-health",
    title: "Shrimp External Health Check",
    subtitle: "Carapace & Appendage Inspection",
    description:
      "Microscopic and visual evaluation of carapace cleanliness, gill filament condition, antenna integrity, and external appendage discoloration.",
    icon: Microscope,
    color: "emerald",
    points: [
      "Gill filament inspection for debris, fouling, or discoloration",
      "Shell hardness, molting stage, and carapace integrity",
      "Antenna length and tip erosion checks",
      "Appendage necrosis and surface fouling observations",
    ],
    bgGradient: "from-emerald-950/40 via-slate-900/60 to-slate-950",
    borderColor: "group-hover:border-emerald-500/40",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    id: "gut-condition",
    title: "Gut Condition & Feed Continuity",
    subtitle: "Digestive Tract Microscopic Review",
    description:
      "Examining gut fullness ratio, feed continuity along the digestive tract, and sloughed epithelial cells during routine sample checks.",
    icon: Fish,
    color: "amber",
    points: [
      "Gut fullness percentage observation during feeding times",
      "Checking for empty gut segments or broken feed lines",
      "Color of gut content relative to feed formulation",
      "Observation of digestive tract movement and peristalsis",
    ],
    bgGradient: "from-amber-950/40 via-slate-900/60 to-slate-950",
    borderColor: "group-hover:border-amber-500/40",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    id: "hepatopancreas",
    title: "Hepatopancreas (HP) Observation",
    subtitle: "Digestive Gland Visual Check",
    description:
      "Assessing hepatopancreas size, color, lipid droplet density, and tubule structure integrity under optical magnification.",
    icon: Search,
    color: "purple",
    points: [
      "Visual check of HP pigmentation and size proportion",
      "Microscopic evaluation of lipid droplet abundance in HP tubules",
      "Observing tubule membrane clarity and structural symmetry",
      "Correlating HP appearance with recent feed intake and water trends",
    ],
    bgGradient: "from-purple-950/40 via-slate-900/60 to-slate-950",
    borderColor: "group-hover:border-purple-500/40",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    iconColor: "text-purple-400",
  },
];

/* ====================================================================
 * DATA — SHRIMP HEALTH OBSERVATIONS (Section 3: 7 Visual Cards)
 * ==================================================================== */
const healthObservationPoints = [
  {
    title: "1. Activity & Vigour",
    desc: "Observing shrimp movement, active jump response during sampling, and escape reflex strength.",
    icon: Activity,
  },
  {
    title: "2. Feeding Response",
    desc: "Tracking check tray clearance times and feeding eagerness in response to daily ration broadcasts.",
    icon: Fish,
  },
  {
    title: "3. Swimming Behaviour",
    desc: "Watching for abnormal surface swimming, perimeter grouping, or sluggish movement along pond edges.",
    icon: Waves,
  },
  {
    title: "4. Gut Condition",
    desc: "Checking gut fill percentage, uniform feed color, and absence of pale or empty intestinal tracts.",
    icon: Eye,
  },
  {
    title: "5. Stress Indicators",
    desc: "Identifying muscle opacity, body redness, cramping, or flared gill covers following environmental changes.",
    icon: AlertCircle,
  },
  {
    title: "6. Mortality Observation",
    desc: "Monitoring feed tray bottoms and aerator zones for any fresh mortalities or weak individuals.",
    icon: ShieldCheck,
  },
  {
    title: "7. Growth & Sampling (MBW)",
    desc: "Recording weekly Mean Body Weight (MBW), size distribution uniformity, and Average Daily Gain (ADG).",
    icon: BarChart3,
  },
];

/* ====================================================================
 * DATA — FARM TO LAB WORKFLOW (Section 4)
 * ==================================================================== */
const workflowSteps = [
  {
    step: "01",
    label: "FARM OBSERVATION",
    title: "Pond Side Inspection",
    description:
      "Routine morning or evening field checks notice unusual feed tray responses or water clarity shifts.",
    icon: Eye,
  },
  {
    step: "02",
    label: "SAMPLE / OBSERVE",
    title: "Sample Collection",
    description:
      "Representative shrimp and water samples collected from multiple pond points following clean protocols.",
    icon: Droplets,
  },
  {
    step: "03",
    label: "MICROSCOPIC EXAMINATION",
    title: "Laboratory Magnification",
    description:
      "Microscopic scan of gut, gills, HP tissue, and plankton at Aqua Pulse laboratory.",
    icon: Microscope,
  },
  {
    step: "04",
    label: "UNDERSTAND FINDINGS",
    title: "Data Interpretation",
    description:
      "Cross-referencing microscopic observations with recent water parameters and feeding records.",
    icon: BookOpen,
  },
  {
    step: "05",
    label: "INFORM FARM MANAGEMENT",
    title: "Practical Action",
    description:
      "Farmer receives observational findings to guide decisions on feeding, lime, or water adjustments.",
    icon: Lightbulb,
  },
];

/* ====================================================================
 * DATA — TARGET AUDIENCES (Section 6)
 * ==================================================================== */
const targetAudiences = [
  {
    title: "Shrimp Farmers",
    description:
      "Seeking additional observational visibility into shrimp health and pond plankton balance during key crop phases.",
    icon: Users,
  },
  {
    title: "Farm Managers",
    description:
      "Overseeing commercial ponds who want routine microscopic health logs to complement daily water quality data.",
    icon: Layers,
  },
  {
    title: "Aquaculture Operators",
    description:
      "Upgrading from basic field observation to laboratory-supported microscopic health checks.",
    icon: Target,
  },
  {
    title: "Farmers Seeking Extra Checks",
    description:
      "Farmers experiencing unexplained feed drops or weather changes who want prompt observational review.",
    icon: Search,
  },
];

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function MicroscopicHealthAnalysisPage() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* AMBIENT GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-900/20 via-slate-900/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1300px] left-0 w-96 h-96 bg-cyan-900/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2500px] right-0 w-96 h-96 bg-emerald-900/15 blur-3xl pointer-events-none -z-10" />

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
            <span className="text-purple-400 font-medium whitespace-nowrap">
              Microscopic Shrimp Health Analysis
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase">
                <Microscope className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                <span>KE AQUA FARMS • AQUA PULSE DIAGNOSTICS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Look Closer. <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">
                  Understand Shrimp Health.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                Microscopic observation provides vital visual insights into shrimp hepatopancreas condition, gut fullness, gill filament cleanliness, and pond microalgae dynamics. As part of <strong className="text-white font-semibold">Aqua Pulse Laboratory</strong> and <strong className="text-white font-semibold">KE Aqua Farms</strong>, microscopic checks complement daily field monitoring for informed farm management.
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "Plankton Observation",
                  "Gill Filament Checks",
                  "Gut Fullness Ratio",
                  "Hepatopancreas Review",
                  "Stress Indicator Checks",
                  "Sampling Records",
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
                  <Microscope className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>ENQUIRE ABOUT HEALTH ANALYSIS</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#observation-areas"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <Search className="w-4 h-4 mr-2 text-purple-400" />
                  <span>Explore Observation Areas</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-purple-950/50 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/assets/svc-lab-bg.jpg"
                    alt="Aqua Pulse Technician - Microscopic Shrimp Observation"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Overlaid Card Info */}
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                      OPTICAL DIAGNOSTIC SCAN
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[11px] font-mono">
                      MICROSCOPIC LAB
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    &ldquo;Visual and microscopic observation allows farm managers to see subtle physiological signs before stress impacts feeding or growth.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <Microscope className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Aqua Pulse Laboratory</h4>
                      <p className="text-[11px] text-slate-400 font-mono">Microscopic Health &amp; Plankton Check</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: WHY MICROSCOPIC OBSERVATION MATTERS
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Eye className="w-3.5 h-3.5 text-purple-400" />
              <span>THE VALUE OF MAGNIFICATION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Why Microscopic Observation Matters
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Macro visual inspection of shrimp on check trays gives a quick impression, but optical magnification under the microscope reveals details that cannot be seen with the naked eye. Microscopic checks support overall shrimp health assessment alongside daily water parameter logs and feeding records.
            </p>
          </motion.div>

          {/* 3 Core Value Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.15)}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Deeper Visual Visibility</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Inspecting gill filaments for silt accumulation, checking HP lipid droplet abundance, and examining gut continuity provide clear observational indicators of shrimp physiological state.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.25)}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Plankton Bloom Dynamics</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Microscopic water sample scans reveal phytoplankton species diversity. Identifying shift trends helps farm technicians anticipate potential plankton die-offs or crash risks.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.35)}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Supporting Farm Decisions</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Microscopic observations inform practical farm management decisions such as adjusting aeration, lime additions, feeding rates, or scheduling deeper water quality testing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: OBSERVATION AREAS (4 CONFIRMED CARDS)
       * ==================================================================== */}
      <section id="observation-areas" className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div className="space-y-3 max-w-2xl" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
                <Microscope className="w-3.5 h-3.5 text-purple-400" />
                <span>CONFIRMED OBSERVATION CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Core Microscopic Observation Areas
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light">
                Specific areas of visual and microscopic examination conducted at Aqua Pulse Laboratory.
              </p>
            </motion.div>

            <motion.div className="flex-shrink-0" {...fadeUp(0.2)}>
              <a
                href="#contact-section"
                className="inline-flex items-center text-xs font-mono text-purple-400 hover:text-purple-300 font-semibold group"
              >
                <span>REQUEST OBSERVATION CHECK</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {observationAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              return (
                <motion.div
                  key={area.id}
                  className={`group relative rounded-2xl p-7 bg-gradient-to-b ${area.bgGradient} border border-slate-800/90 ${area.borderColor} transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-purple-950/40`}
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center ${area.iconColor}`}>
                        <AreaIcon className="w-6 h-6" />
                      </div>
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${area.badgeColor}`}>
                        0{idx + 1} • MICROSCOPIC
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">{area.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {area.description}
                    </p>

                    {/* Points List */}
                    <ul className="space-y-2.5 pt-2 border-t border-slate-800/80">
                      {area.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${area.iconColor}`} />
                          <span className="leading-tight font-light">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                      className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center space-x-1"
                    >
                      <span>{selectedArea === area.id ? "Hide Details" : "View Observation Details"}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${selectedArea === area.id ? "rotate-90" : ""}`} />
                    </button>
                  </div>

                  {/* Expandable Detail Panel */}
                  <AnimatePresence>
                    {selectedArea === area.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-purple-500/20 text-xs text-slate-300 space-y-2 bg-slate-900/90 p-4 rounded-xl"
                      >
                        <p className="font-semibold text-purple-300">Observational Purpose:</p>
                        <p className="text-slate-400 leading-relaxed font-light">
                          Microscopic findings are logged into structured check sheets alongside water quality parameter logs to track shifts across the crop cycle.
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
       * SECTION 3: SHRIMP HEALTH OBSERVATION (7 VISUAL CARDS)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>FIELD &amp; LAB HEALTH CHECKS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              7 Key Shrimp Health Observations
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              Routine visual and physical observations conducted during sampling and laboratory checks.
            </p>
          </motion.div>

          {/* 7 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthObservationPoints.map((pt, idx) => {
              const PtIcon = pt.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 hover:border-purple-500/40 transition-all duration-300"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <PtIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{pt.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {pt.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Critical Framing Alert */}
          <motion.div
            className="mt-12 p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start space-x-4 max-w-4xl mx-auto"
            {...fadeUp(0.3)}
          >
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              <strong className="text-white font-semibold">Observational Note:</strong> The parameters listed above are physical and microscopic field observations. They provide valuable diagnostic indicators for farm management but are <strong className="text-white font-semibold">NOT definitive disease diagnoses</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 4: FARM TO LAB WORKFLOW
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE OBSERVATION PROCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Farm Observation to Decision Workflow
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              How field observations lead to laboratory verification and actionable farm decisions.
            </p>
          </motion.div>

          {/* 5-Step Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {workflowSteps.map((st, idx) => {
              const StepIcon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  className="relative p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300">
                        {st.label}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{st.step}</span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-purple-400">
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
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: SCIENTIFIC FARMING INTEGRATION
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>BALANCED APPROACH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Scientific Observation + Traditional Experience
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              Microscopic checks are one part of KE Aqua Farms&apos; integrated methodology. We combine field intuition with objective laboratory observation and daily logbooks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Traditional Knowledge",
                desc: "Decades of hands-on commercial experience interpreting shrimp behavior and weather impacts.",
                icon: Compass,
                color: "text-amber-400",
              },
              {
                title: "Scientific Observation",
                desc: "Microscopic scans and water chemistry testing at Aqua Pulse Laboratory.",
                icon: Microscope,
                color: "text-purple-400",
              },
              {
                title: "Farm Records & Data",
                desc: "Structured daily logbooks tracking inputs, MBW, parameter trends, and FCR.",
                icon: FileSpreadsheet,
                color: "text-cyan-400",
              },
              {
                title: "Responsible Management",
                desc: "Sustainable farm practices prioritizing pond bottom health and biosecurity.",
                icon: ShieldCheck,
                color: "text-emerald-400",
              },
            ].map((pillar, idx) => {
              const PilIcon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className={`w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center ${pillar.color}`}>
                    <PilIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 6: WHO MAY NEED THIS
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Users className="w-3.5 h-3.5 text-purple-400" />
              <span>TARGET AUDIENCE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Who Can Benefit From Health Analysis
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((aud, idx) => {
              const AudIcon = aud.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <AudIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{aud.title}</h3>
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
       * SECTION 7: DISCLAIMER NOTE
       * ==================================================================== */}
      <section className="py-12 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 flex items-start space-x-3 text-xs text-slate-300">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-white">Laboratory Scope Disclaimer:</span>
              <p className="font-light leading-relaxed">
                Microscopic observation is part of broader shrimp-health and farm assessment. Actual observations and laboratory capabilities depend on the available facility and sample.
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
                <span>REQUEST HEALTH ANALYSIS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Enquire About Microscopic Shrimp Health Analysis
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Discuss your microscopic observation requirements, sample collection procedures, or schedule a health check visit with the Aqua Pulse / KE Aqua Farms technical team.
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
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Call</span>
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
                    <span className="text-[11px] font-mono text-slate-400 block">WhatsApp Enquiries</span>
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
                  <h3 className="text-xl font-bold text-white">Health Analysis Request Form</h3>
                  <p className="text-xs text-slate-400 mt-1 font-light">
                    Submit your sample check enquiry below. Our technical team will reach out directly.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for your enquiry. The Aqua Pulse technical team will contact you shortly.");
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
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Observation Interest</label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors">
                        <option value="Microscopic Shrimp Health Check">Microscopic Shrimp Health Check</option>
                        <option value="Hepatopancreas & Gut Review">Hepatopancreas &amp; Gut Review</option>
                        <option value="Plankton Microalgae Scan">Plankton Microalgae Scan</option>
                        <option value="Gill Filament Check">Gill Filament Check</option>
                        <option value="General Health Enquiry">General Health Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Farm Location / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Share details about crop age (DOC), current feeding behavior, or specific observation questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-purple-500/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Microscope className="w-4 h-4" />
                    <span>SUBMIT HEALTH ANALYSIS ENQUIRY</span>
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
