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
  Truck,
  Scale,
  Building2,
  ShieldAlert,
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
 * DATA — 12 SCREENING AREAS (Section 2)
 * ==================================================================== */
const screeningAreas = [
  {
    id: "hatchery-eval",
    title: "1. Hatchery Evaluation",
    desc: "Evaluating hatchery track record, broodstock sourcing, biosecurity practices, and water quality protocols prior to seed reservation.",
    icon: Building2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "pl-quality",
    title: "2. PL Quality & Stage",
    desc: "Assessing Post-Larvae stage advancement (e.g. PL10–PL15), rostral spine count development, and tail fan formation.",
    icon: Sprout,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "activity-vigor",
    title: "3. Activity & Swimming Vigor",
    desc: "Observing swimming behavior against water currents in a basin, phototactic response, and active wall-holding tendency.",
    icon: Activity,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    id: "gut-condition",
    title: "4. Gut Fullness & Digestion",
    desc: "Checking gut fill percentage, active feed digestion, and presence of continuous gut content under light magnification.",
    icon: Fish,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    id: "stress-testing",
    title: "5. Stress Tolerance Testing",
    desc: "Evaluating PL stamina via controlled salinity drops or chemical stress challenge tests to assess batch resilience.",
    icon: ShieldAlert,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/30",
  },
  {
    id: "size-uniformity",
    title: "6. Size Uniformity (CV Check)",
    desc: "Measuring length variation across sample batches to ensure high uniformity and low Coefficient of Variation (CV).",
    icon: Scale,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    id: "physical-abnormalities",
    title: "7. Physical Abnormalities",
    desc: "Inspecting PL batches for tail deformities, bent rostrums, appendage necrosis, or external fouling deposits.",
    icon: Eye,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    id: "microscopic-screening",
    title: "8. Microscopic Screening",
    desc: "Optical inspection of hepatopancreas lipid droplets, muscle-to-gut ratio, and gill cleanliness under microscope.",
    icon: Microscope,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/30",
  },
  {
    id: "transportation-planning",
    title: "9. Transportation Planning",
    desc: "Advising on packing densities, oxygen levels, temperature regulation, and salinity matching during transit.",
    icon: Truck,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "acclimatization-proc",
    title: "10. Acclimatization Procedure",
    desc: "Gradual step-by-step equalization of temperature and salinity between transport bags and pond water prior to release.",
    icon: Thermometer,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "stocking-procedure",
    title: "11. Stocking Procedure",
    desc: "Timing pond release during cooler early morning hours, choosing sheltered stocking sites, and gentle bag release.",
    icon: CheckCircle2,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    id: "stocking-density",
    title: "12. Stocking Density Support",
    desc: "Calculating recommended stocking densities based on pond aeration horsepower, water depth, and target harvest size.",
    icon: Layers,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
];

/* ====================================================================
 * DATA — SELECTION PROCESS (Section 3: 9 Steps)
 * ==================================================================== */
const selectionProcessSteps = [
  {
    step: "01",
    label: "HATCHERY EVALUATION",
    title: "Hatchery Review",
    desc: "Assessing broodstock sourcing and hatchery production protocols.",
    icon: Building2,
  },
  {
    step: "02",
    label: "SEED OBSERVATION",
    title: "Visual PL Inspection",
    desc: "Evaluating swimming vigor, color, and rostral development.",
    icon: Eye,
  },
  {
    step: "03",
    label: "STRESS ASSESSMENT",
    title: "Salinity / Stress Check",
    desc: "Subjecting sample batch to standard challenge test.",
    icon: ShieldAlert,
  },
  {
    step: "04",
    label: "MICROSCOPIC SCREENING",
    title: "Optical Organ Scan",
    desc: "Inspecting HP lipid droplets, gut, and muscle-to-gut ratio.",
    icon: Microscope,
  },
  {
    step: "05",
    label: "REQUIRED SCREENING",
    title: "Diagnostic Confirmation",
    desc: "Verifying required lab certificates where applicable.",
    icon: FileCheck2,
  },
  {
    step: "06",
    label: "SELECTION",
    title: "Batch Selection",
    desc: "Selecting the healthiest PL batch for farm stocking.",
    icon: CheckCircle2,
  },
  {
    step: "07",
    label: "TRANSPORTATION",
    title: "Oxygen Packing & Transit",
    desc: "Ensuring proper packing density and temperature control.",
    icon: Truck,
  },
  {
    step: "08",
    label: "ACCLIMATIZATION",
    title: "Pond Parameter Matching",
    desc: "Equalizing bag temperature and salinity gradually.",
    icon: Thermometer,
  },
  {
    step: "09",
    label: "STOCKING",
    title: "Gentle Pond Release",
    desc: "Releasing PL into prepared growout pond during cool hours.",
    icon: Sprout,
  },
];

/* ====================================================================
 * DATA — PRACTICAL FARM METHODOLOGY (Section 5)
 * ==================================================================== */
const methodologyPillars = [
  {
    step: "SEE",
    title: "Observe Seed Quality",
    desc: "Visually observe PL behavior, swimming vigor, and gut fullness at the hatchery and farm side.",
    icon: Eye,
    color: "text-cyan-400",
  },
  {
    step: "LEARN",
    title: "Understand Indicators",
    desc: "Learn how stress test responses and microscopic organ clarity correlate with early survival.",
    icon: BookOpen,
    color: "text-emerald-400",
  },
  {
    step: "DO",
    title: "Execute Proper Stocking",
    desc: "Follow disciplined acclimatization protocols and release procedures into prepared pond water.",
    icon: CheckCircle2,
    color: "text-amber-400",
  },
  {
    step: "MEASURE",
    title: "Track Survival & MBW",
    desc: "Monitor post-stocking survival rates, early feeding tray response, and weekly growth sampling.",
    icon: BarChart3,
    color: "text-purple-400",
  },
  {
    step: "IMPROVE",
    title: "Refine Sourcing",
    desc: "Use historical crop records to refine hatchery preferences and stocking procedures for future crops.",
    icon: TrendingUp,
    color: "text-teal-400",
  },
];

/* ====================================================================
 * DATA — WHO CAN USE (Section 6)
 * ==================================================================== */
const targetAudiences = [
  {
    title: "Existing Shrimp Farmers",
    description:
      "Growers seeking third-party observation and screening support before purchasing seed for upcoming crops.",
    icon: Users,
  },
  {
    title: "New Shrimp Farmers",
    description:
      "First-time growers who want practical guidance through seed evaluation, transport, and acclimatization.",
    icon: Sprout,
  },
  {
    title: "Farm Managers",
    description:
      "Commercial supervisors managing multiple ponds who need standardized seed check procedures.",
    icon: Layers,
  },
  {
    title: "Aquaculture Entrepreneurs",
    description:
      "Entrepreneurs building farm operations who require structured stocking density and sourcing advisory.",
    icon: Target,
  },
];

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function SeedSelectionScreeningPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-emerald-900/20 via-cyan-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1300px] right-0 w-96 h-96 bg-cyan-900/15 blur-3xl pointer-events-none -z-10" />
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
            <span className="text-emerald-400 font-medium whitespace-nowrap">
              Seed Selection &amp; Screening Support
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider uppercase">
                <Sprout className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>KE AQUA FARMS • PRE-STOCKING ADVISORY</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                A Better Crop Starts <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Before Stocking
                </span>
              </h1>

              {/* Featured Quote */}
              <blockquote className="p-4 rounded-xl bg-slate-900/90 border-l-4 border-emerald-400 text-slate-200 text-sm sm:text-base font-serif italic">
                &ldquo;A successful crop starts before stocking.&rdquo;
              </blockquote>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Selecting high-quality Post-Larvae (PL) and conducting disciplined pre-stocking observation lays the foundation for a healthy crop cycle. At <strong className="text-white font-semibold">KE Aqua Farms</strong>, we provide practical seed selection, stress testing evaluation, acclimatization support, and stocking density advice grounded in commercial experience.
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "PL Vigor Checks",
                  "Gut Fullness Ratio",
                  "Stress Challenge Tests",
                  "Size Uniformity (CV)",
                  "Acclimatization Rules",
                  "Density Calculation",
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
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/20 transition-all duration-200 group"
                >
                  <Sprout className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>ENQUIRE ABOUT SEED SCREENING</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#screening-areas"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <Eye className="w-4 h-4 mr-2 text-emerald-400" />
                  <span>Explore Screening Areas</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-emerald-950/50 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/Real_Images/image_2.jpeg"
                    alt="Aqua Pulse technician conducting microscopic seed selection and post-larvae health screening"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Overlaid Card Info */}
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wide">
                      PRE-STOCKING ADVISORY
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                      SEED SCREENING
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    &ldquo;Good seed selection does not eliminate all crop risks, but it ensures you start your farming cycle with the healthiest possible foundation.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Sprout className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">KE Aqua Farms Operation</h4>
                      <p className="text-xs text-slate-400 font-mono">Commercial Seed Evaluation &amp; Stocking</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: WHY SEED SELECTION MATTERS
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE FOUNDATION OF AQUACULTURE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Why Pre-Stocking Seed Selection Matters
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Post-Larvae quality dictates early survival, feeding response, and stress resilience during the first 30 days of culture. Rigorous screening allows farmers to identify vigorous PL batches, avoid stunted or diseased seed, and match stocking density with pond aeration infrastructure.
            </p>
          </motion.div>

          {/* 3 Core Value Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.15)}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Vigor &amp; Stress Resilience</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Testing PL swimming behavior, phototactic response, and stress challenge endurance ensures the seed can withstand salinity and temperature shifts during stocking.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.25)}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Microscopic Health Check</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Evaluating organ clarity, hepatopancreas lipid droplets, gut fullness, and muscle-to-gut ratio provides optical confirmation of seed health.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.35)}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Disciplined Acclimatization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Following step-by-step parameter matching between packing bags and pond water prevents post-stocking osmotic shock and early mortality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: 12 SCREENING AREAS (GRID)
       * ==================================================================== */}
      <section id="screening-areas" className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div className="space-y-3 max-w-2xl" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                <span>PRE-STOCKING CHECKLIST</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                12 Seed Screening &amp; Stocking Areas
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Practical observation points evaluated prior to seed purchase, transit, and pond stocking.
              </p>
            </motion.div>

            <motion.div className="flex-shrink-0" {...fadeUp(0.2)}>
              <a
                href="#contact-section"
                className="inline-flex items-center text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold group"
              >
                <span>REQUEST SEED ADVISORY</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* 12 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screeningAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              return (
                <motion.div
                  key={area.id}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 space-y-3 flex flex-col justify-between"
                  {...fadeUp(0.05 + idx * 0.04)}
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
       * SECTION 3: SEED SELECTION PROCESS (9-STEP WORKFLOW)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>STEP-BY-STEP PROCEDURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Seed Selection &amp; Stocking Workflow
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              From initial hatchery evaluation to gentle pond release.
            </p>
          </motion.div>

          {/* 9-Step Horizontal Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3 relative">
            {selectionProcessSteps.map((st, idx) => {
              const StepIcon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  className="relative p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
                  {...fadeUp(0.05 + idx * 0.04)}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 truncate max-w-[80px]">
                        {st.label}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{st.step}</span>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                      <StepIcon className="w-4 h-4" />
                    </div>

                    <h3 className="text-xs font-bold text-white leading-snug">{st.title}</h3>

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
       * SECTION 4: SEED TO STOCKING INTEGRATION
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description */}
            <motion.div className="lg:col-span-6 space-y-6" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>INTEGRATED EARLY CROP CARE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Connecting Seed Quality with Pond Readiness
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                High-quality seed requires a well-prepared pond environment. Seed selection support at KE Aqua Farms connects seed screening directly with pre-stocking pond preparation, bloom stabilization, and acclimatization protocols.
              </p>

              <div className="space-y-3">
                {[
                  { title: "Pond Water Preparation", desc: "Verifying pH, alkalinity, and bloom stability before seed arrives." },
                  { title: "Salinity & Temp Matching", desc: "Equalizing transport water with pond water salinity to prevent osmotic shock." },
                  { title: "Stocking Density Alignment", desc: "Balancing stocking numbers with available aeration horsepower." },
                  { title: "Nursery / Early Feeding", desc: "Setting up nursery feeds and check trays for early DOC management." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div className="lg:col-span-6" {...fadeUp(0.25)}>
              <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 space-y-6 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Commercial Farming Practice</h3>
                    <p className="text-xs font-mono text-emerald-400">KE Aqua Farms 30-Acre Operations</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  On our commercial farm, every batch of PL undergoes standard stress testing, salinity acclimatization, and early DOC feeding management before being released into growout ponds.
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                    RECOMMENDED STOCKING HOURS
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Always stock early in the morning (5:00 AM – 8:00 AM) or late evening when water temperatures are stable and solar radiation is minimal.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: PRACTICAL FARM METHODOLOGY (SEE - LEARN - DO - MEASURE - IMPROVE)
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE KE AQUA METHODOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              SEE → LEARN → DO → MEASURE → IMPROVE
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Our core farming methodology applied to seed selection and pre-stocking management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {methodologyPillars.map((pil, idx) => {
              const PilIcon = pil.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                      {pil.step}
                    </span>
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
       * SECTION 6: WHO CAN USE THIS SERVICE
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>SERVICE ACCESSIBILITY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Who Can Use Seed Selection Support
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
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <AudIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{aud.title}</h3>
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
              <span className="font-semibold text-white">Pre-Stocking Risk Disclaimer:</span>
              <p className="leading-relaxed">
                Seed screening can support better-informed stocking decisions but cannot eliminate all farming risks. Final crop performance depends on continuous pond management, water quality, weather conditions, and biosecurity.
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
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>ENQUIRE ABOUT SEED SUPPORT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Talk to Our Team About Seed Selection &amp; Stocking
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Planning your next stocking cycle? Reach out to discuss PL quality evaluation, stress testing procedures, or stocking density calculations with the KE Aqua Farms team.
              </p>

              {/* Direct Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`tel:${CONTACT_CONFIG.phone.value}`}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 group flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Call</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
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
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
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
                  <h3 className="text-xl font-bold text-white">Seed Support Enquiry Form</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Submit your seed screening enquiry below. Our team will contact you directly.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for your seed support enquiry. The KE Aqua Farms team will contact you shortly.");
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
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile number"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Primary Interest</label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors">
                        <option value="Seed Selection & Screening">Seed Selection &amp; PL Screening</option>
                        <option value="Stress Test Advisory">Stress Test Evaluation</option>
                        <option value="Stocking Density Advisory">Stocking Density Advisory</option>
                        <option value="Acclimatization Support">Acclimatization &amp; Release Support</option>
                        <option value="General Seed Enquiry">General Seed Sourcing Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Farm Location / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your farm location, planned stocking date, target PL count, or specific hatchery questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Sprout className="w-4 h-4" />
                    <span>SUBMIT SEED SUPPORT REQUEST</span>
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
