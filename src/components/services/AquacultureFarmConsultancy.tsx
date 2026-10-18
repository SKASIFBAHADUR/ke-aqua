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
 * DATA — SUPPORT AREAS (Section 2)
 * ==================================================================== */
const supportAreas = [
  {
    icon: Layers,
    title: "Farm Planning & Preparation",
    description:
      "Considerations for pond setup, bottom preparation, liming, water filling, and pre-stocking condition assessment based on practical farm experience.",
    color: "cyan",
  },
  {
    icon: Sprout,
    title: "Seed & Stocking Considerations",
    description:
      "Guidance on PLstage selection, seed quality observation, biosecurity practices during stocking, and responsible stocking density decisions.",
    color: "emerald",
  },
  {
    icon: Fish,
    title: "Feeding & Farm Observation",
    description:
      "Understanding feeding schedules, feed tray monitoring, feeding behavior observation, and adjustments based on daily farm data.",
    color: "cyan",
  },
  {
    icon: Waves,
    title: "Water-Quality Management",
    description:
      "Practical understanding of water quality parameters, how to interpret them, and the relationship between water conditions and shrimp health.",
    color: "blue",
  },
  {
    icon: Microscope,
    title: "Shrimp Health Observation",
    description:
      "Visual health assessment, observation of behavioral changes, and understanding when to escalate concerns to laboratory-level diagnostics.",
    color: "purple",
  },
  {
    icon: Wind,
    title: "Aeration & Equipment Considerations",
    description:
      "Understanding aeration requirements, paddlewheel placement strategies, and equipment considerations for different pond sizes and stages.",
    color: "cyan",
  },
  {
    icon: BookOpen,
    title: "Farm Records & Crop Analysis",
    description:
      "Importance of daily records, data tracking, FCR monitoring, and using crop-level analysis to improve future management decisions.",
    color: "amber",
  },
  {
    icon: Cpu,
    title: "Technology Adoption",
    description:
      "Practical guidance on understanding and adopting farm technology — auto feeders, IoT sensors, micro/nano bubble systems — appropriate to farm scale.",
    color: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Biosecurity & Responsible Management",
    description:
      "Farm-entry protocols, water source management, pond isolation practices, and responsible animal health management through observation and records.",
    color: "emerald",
  },
];

const colorMap: Record<
  string,
  { icon: string; border: string; tag: string; dot: string }
> = {
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    tag: "bg-cyan-500/10 text-cyan-400",
    dot: "bg-cyan-400",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    tag: "bg-emerald-500/10 text-emerald-400",
    dot: "bg-emerald-400",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    border: "border-blue-500/20 hover:border-blue-500/40",
    tag: "bg-blue-500/10 text-blue-400",
    dot: "bg-blue-400",
  },
  purple: {
    icon: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    border: "border-purple-500/20 hover:border-purple-500/40",
    tag: "bg-purple-500/10 text-purple-400",
    dot: "bg-purple-400",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    border: "border-amber-500/20 hover:border-amber-500/40",
    tag: "bg-amber-500/10 text-amber-400",
    dot: "bg-amber-400",
  },
};

/* ====================================================================
 * DATA — APPROACH STEPS (Section 3)
 * ==================================================================== */
const approachSteps = [
  {
    step: "01",
    label: "OBSERVE",
    description:
      "Visit the farm, observe pond conditions, animal behavior, feeding response, and environmental context.",
    icon: Eye,
    color: "cyan",
  },
  {
    step: "02",
    label: "UNDERSTAND",
    description:
      "Understand the farm's current situation — water quality, feeding data, stocking history, and records.",
    icon: BookOpen,
    color: "blue",
  },
  {
    step: "03",
    label: "MEASURE",
    description:
      "Apply measurement — water testing, shrimp sampling, feed tray checks, and relevant diagnostic data.",
    icon: Activity,
    color: "purple",
  },
  {
    step: "04",
    label: "ASSESS",
    description:
      "Assess findings in context of farm goals, crop stage, environmental conditions, and available resources.",
    icon: BarChart3,
    color: "amber",
  },
  {
    step: "05",
    label: "ACT",
    description:
      "Support practical decisions — management adjustments, treatment considerations, and responsible interventions.",
    icon: Target,
    color: "emerald",
  },
  {
    step: "06",
    label: "REVIEW",
    description:
      "Review outcomes through updated records, follow-up observations, and data comparison.",
    icon: TrendingUp,
    color: "cyan",
  },
  {
    step: "07",
    label: "IMPROVE",
    description:
      "Each cycle creates a learning opportunity to refine farm practices and improve the next crop.",
    icon: Sprout,
    color: "emerald",
  },
];

/* ====================================================================
 * DATA — FARMING PROCESS (Section 4)
 * ==================================================================== */
const farmingProcess = [
  { label: "Plan", icon: BookOpen, desc: "Site assessment, pond layout, and crop planning" },
  { label: "Prepare", icon: Layers, desc: "Bottom prep, liming, fertilisation, water filling" },
  { label: "Screen Seed", icon: Sprout, desc: "PLstage, health screening, biosecurity protocol" },
  { label: "Stock", icon: Fish, desc: "Density decisions, stress reduction, acclimatisation" },
  { label: "Feed", icon: Leaf, desc: "Schedule, feed trays, FCR tracking, adjustments" },
  { label: "Monitor", icon: Eye, desc: "Daily observation, sampling, behavioral checks" },
  { label: "Test", icon: FlaskConical, desc: "Water parameters, shrimp health, Vibrio screening" },
  { label: "Manage", icon: ShieldCheck, desc: "Intervention decisions, treatment, biosecurity" },
  { label: "Harvest", icon: TrendingUp, desc: "Harvest planning, grading, weight records" },
  { label: "Analyse", icon: BarChart3, desc: "Crop analysis, records review, learnings captured" },
];

/* ====================================================================
 * DATA — ECOSYSTEM PILLARS (Section 5)
 * ==================================================================== */
const ecosystemPillars = [
  {
    title: "Commercial Farm",
    sub: "KE Aqua Farms",
    description:
      "30 acres of active commercial shrimp farming under real field conditions. Every crop is a learning cycle.",
    icon: Leaf,
    highlight: "Working Farm",
    color: "emerald",
    image: "/assets/hero-farm-pond.jpg",
  },
  {
    title: "Scientific Monitoring",
    sub: "Aqua Pulse Laboratory",
    description:
      "Water quality testing, microscopic tissue screening, and Vibrio plating for data-backed farm decisions.",
    icon: FlaskConical,
    highlight: "Lab Diagnostics",
    color: "cyan",
    image: "/Real_Images/image_5.jpeg",
  },
  {
    title: "Smart Technology",
    sub: "IoT & Automation",
    description:
      "Auto feeders, IoT sensor monitoring, micro/nano bubble aeration — technology in active commercial use.",
    icon: Cpu,
    highlight: "Technology",
    color: "blue",
    image: "/assets/svc-tech-bg.jpg",
  },
  {
    title: "Farmer Development",
    sub: "Practical Training & Guidance",
    description:
      "Knowledge sharing through practical exposure, farm visits, training programs, and direct advisory support.",
    icon: GraduationCap,
    highlight: "Training",
    color: "amber",
    image: "/Real_Images/image_8.jpeg",
  },
];

/* ====================================================================
 * DATA — WHO THIS IS FOR (Section 6)
 * ==================================================================== */
const personas = [
  {
    icon: Users,
    title: "Existing Shrimp Farmers",
    description:
      "Farmers already operating ponds who want to improve decision-making, understand their data better, or address specific challenges in their current crop cycle.",
  },
  {
    icon: Layers,
    title: "Farm Owners",
    description:
      "Owners managing or overseeing farm operations who want a stronger understanding of what is happening on their farm and why.",
  },
  {
    icon: Target,
    title: "Farm Managers & Supervisors",
    description:
      "Supervisors handling day-to-day farm operations who want structured practical guidance and better tools for observation and record-keeping.",
  },
  {
    icon: GraduationCap,
    title: "People Seeking Practical Farm Guidance",
    description:
      "Individuals exploring aquaculture who want to understand the practical realities of commercial farming before making investment or operational decisions.",
  },
];

/* ====================================================================
 * DATA — FARM EXPERIENCE ITEMS (Section 1 image grid)
 * ==================================================================== */
const farmExperienceItems = [
  { label: "Pond Preparation", image: "/assets/svc-pond.jpg" },
  { label: "Seed Screening", image: "/Real_Images/image_2.jpeg" },
  { label: "Water Management", image: "/Real_Images/image_1.jpeg" },
  { label: "Technology", image: "/assets/svc-tech-bg.jpg" },
  { label: "Health Monitoring", image: "/Real_Images/image_6.jpeg" },
  { label: "Harvest & Analysis", image: "/assets/svc-training-bg.jpg" },
];

/* ====================================================================
 * MAIN PAGE COMPONENT
 * ==================================================================== */
export function AquacultureFarmConsultancyPage() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);

  return (
    <div className="bg-[#0A192F] text-slate-100 min-h-screen">

      {/* ================================================================
       * HERO SECTION
       * ============================================================== */}
      <section className="relative min-h-[72vh] flex flex-col justify-end overflow-hidden">
        {/* Background Farm Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-farm-pond.jpg"
            alt="KE Aqua Farms 30-acre commercial aquaculture ponds with aerators"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Layered overlays for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-[#0A192F]/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/80 via-transparent to-transparent z-10" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-400">Services</span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-300">Farm Consultancy</span>
            </nav>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-wrap items-center gap-2.5 mb-5"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Aquaculture Farm Consultancy
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/8 text-white/80 border border-white/10 backdrop-blur-sm">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                Practical · Scientific · Technology
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6"
            >
              Practical Support for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-white">
                Better Farm Decisions
              </span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10"
            >
              KE Aqua Farms provides practical farm consultancy and support grounded in real commercial shrimp farming experience — combining daily farm observation, scientific water and health monitoring, responsible management practices, and technology adoption to help farmers make better-informed decisions at every stage of the crop cycle.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4" />
                Enquire About Farm Support
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#showcase"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/8 hover:bg-white/15 text-white border border-white/15 font-semibold text-sm backdrop-blur-sm transition-all active:scale-[0.98]"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                Explore Our Farming Approach
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A192F] to-transparent z-10 pointer-events-none" />
      </section>

      {/* ================================================================
       * SECTION 1 — FROM FARM EXPERIENCE TO FARM SUPPORT
       * ============================================================== */}
      <section className="py-24 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left — Text content */}
            <div>
              <motion.span {...fadeUp(0)} className="block text-xs font-bold uppercase tracking-wide text-cyan-400 mb-3">
                Why Experience Matters
              </motion.span>
              <motion.h2 {...fadeUp(0.05)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                From Farm Experience to Farm Support
              </motion.h2>
              <motion.p {...fadeUp(0.1)} className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                KE Aqua Farms operates a 30-acre commercial aquaculture facility in Krishna District, Andhra Pradesh — an active working farm, not a demonstration mock-up. Every pond cycle presents real challenges: variable water quality, unpredictable weather, biological risks, equipment decisions, and the daily pressure of commercial shrimp farming.
              </motion.p>
              <motion.p {...fadeUp(0.15)} className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                This practical, hands-on experience across the full crop cycle — from pond preparation and seed selection through to harvest records and crop analysis — is what informs the farm support we are able to provide. We understand these challenges because we work through them ourselves.
              </motion.p>

              {/* Key experience areas as tags */}
              <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-2">
                {[
                  "Pond Preparation", "Seed Selection", "Stocking",
                  "Feeding Management", "Water-Quality Monitoring", "Animal Health Observation",
                  "Aeration Management", "Smart Technology", "Biosecurity",
                  "Farm Records", "Harvest Management", "Crop Analysis",
                ].map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — Image mosaic */}
            <motion.div {...fadeIn(0.15)} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {farmExperienceItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp(i * 0.06 + 0.1)}
                  className="relative rounded-xl overflow-hidden aspect-square group"
                >
                  <Image
                    src={item.image}
                    alt={`KE Aqua Farms — ${item.label}`}
                    fill
                    sizes="(max-width: 768px) 45vw, (max-width: 1200px) 20vw, 180px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/30 to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[0.62rem] font-bold text-white uppercase tracking-wide leading-tight">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
       * SECTION 2 — WHAT FARM SUPPORT CAN COVER
       * ============================================================== */}
      <section className="py-24 bg-[#071526] border-t border-slate-800/60 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-emerald-500/4 blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="max-w-2xl mb-14">
            <motion.span {...fadeUp(0)} className="block text-xs font-bold uppercase tracking-wide text-emerald-400 mb-3">
              Areas of Practical Support
            </motion.span>
            <motion.h2 {...fadeUp(0.05)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              What Farm Support Can Cover
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-slate-400 text-base leading-relaxed">
              The following represent areas of practical support informed by real commercial farming experience. Each engagement is contextual — support is guided by actual farm conditions, crop stage, and specific challenges rather than a fixed package.
            </motion.p>
          </div>

          {/* 3-column card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportAreas.map((area, i) => {
              const Icon = area.icon;
              const c = colorMap[area.color];
              return (
                <motion.div
                  key={area.title}
                  {...fadeUp(i * 0.05 + 0.1)}
                  className={`group relative rounded-2xl bg-[#112240] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/60 ${c.border}`}
                >
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border mb-4 ${c.icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{area.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{area.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Disclaimer strip */}
          <motion.div {...fadeUp(0.3)} className="mt-10 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              <span className="text-slate-300 font-semibold">Important: </span>
              These areas represent the scope of practical knowledge and experience we can share. Support is contextual and varies based on farm conditions, crop stage, and available information. We do not guarantee specific outcomes, yield improvements, or disease prevention.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
       * SECTION 3 — THE KE AQUA APPROACH
       * ============================================================== */}
      <section className="py-24 border-t border-slate-800/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span {...fadeUp(0)} className="block text-xs font-bold uppercase tracking-wide text-cyan-400 mb-3">
              Our Practical Method
            </motion.span>
            <motion.h2 {...fadeUp(0.05)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              The KE Aqua Approach
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-slate-400 text-base leading-relaxed">
              Our approach to farm support follows the same practical loop we apply to our own commercial farming operations — built on observation, measurement, and continuous improvement.
            </motion.p>
          </div>

          {/* SEE → LEARN → DO philosophy banner */}
          <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {["SEE", "LEARN", "DO", "MEASURE", "IMPROVE"].map((step, i) => (
              <React.Fragment key={step}>
                <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-bold text-sm tracking-wide">
                  {step}
                </span>
                {i < 4 && <ArrowRight className="w-4 h-4 text-slate-400" />}
              </React.Fragment>
            ))}
          </motion.div>

          {/* 7-step approach grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {approachSteps.map((step, i) => {
              const Icon = step.icon;
              const c = colorMap[step.color];
              const isLast = i === approachSteps.length - 1;
              return (
                <motion.div
                  key={step.label}
                  {...fadeUp(i * 0.06 + 0.1)}
                  className={`relative rounded-2xl bg-[#112240] border border-slate-800/80 p-5 ${isLast ? "sm:col-span-2 lg:col-span-4 lg:max-w-md lg:mx-auto" : ""}`}
                >
                  {/* Step connector dot */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-slate-400">{step.step}</span>
                    <div className={`w-px flex-1 h-px ${c.dot} opacity-30`} />
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${c.icon} border`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-wide mb-2`}
                    style={{ color: step.color === "cyan" ? "#22d3ee" : step.color === "emerald" ? "#34d399" : step.color === "blue" ? "#60a5fa" : step.color === "purple" ? "#a78bfa" : "#fbbf24" }}>
                    {step.label}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
       * SECTION 4 — FARMING PROCESS
       * ============================================================== */}
      <section className="py-24 bg-[#071526] border-t border-slate-800/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="max-w-2xl mb-14">
            <motion.span {...fadeUp(0)} className="block text-xs font-bold uppercase tracking-wide text-emerald-400 mb-3">
              The Shrimp Farming Cycle
            </motion.span>
            <motion.h2 {...fadeUp(0.05)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              From Planning to Analysis
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-slate-400 text-base leading-relaxed">
              Commercial shrimp farming is a continuous, integrated process. Important decisions at each stage are supported by observation, farm records, and responsible management. Understanding this full cycle is central to our practical farm support approach.
            </motion.p>
          </div>

          {/* Interactive process steps */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-[3.25rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0 pointer-events-none" />

            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 relative z-10">
              {farmingProcess.map((step, i) => {
                const Icon = step.icon;
                const isActive = activeProcess === i;
                return (
                  <motion.button
                    key={step.label}
                    {...fadeUp(i * 0.04 + 0.1)}
                    onClick={() => setActiveProcess(isActive ? null : i)}
                    className={`group flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${ isActive ? "bg-cyan-500/15 border-cyan-500/50 shadow-lg shadow-cyan-500/10" : "bg-[#112240] border-slate-800 hover:border-cyan-500/30 hover:bg-cyan-500/5" }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${ isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-slate-400 group-hover:text-cyan-400" }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[0.6rem] font-bold uppercase tracking-wider leading-tight transition-colors ${ isActive ? "text-cyan-300" : "text-slate-400 group-hover:text-slate-200" }`}>
                      {step.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Expandable description */}
            <AnimatePresence>
              {activeProcess !== null && (
                <motion.div
                  key={activeProcess}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5 p-5 rounded-2xl bg-[#112240] border border-cyan-500/25 text-sm text-slate-300 leading-relaxed"
                >
                  <span className="text-cyan-400 font-bold">{farmingProcess[activeProcess].label}: </span>
                  {farmingProcess[activeProcess].desc}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Philosophy note */}
          <motion.div {...fadeUp(0.35)} className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-cyan-950/40 border border-emerald-800/30">
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="text-emerald-400 font-bold block mb-1">Important Farm Management Principle:</span>
              Every stage of the crop cycle should be supported by observation, data, and records. Decisions made without adequate information carry higher risk. Our farm support approach emphasises the importance of understanding what you are observing and why it matters — not just what to do, but when and why.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
       * SECTION 5 — SCIENCE + FARM EXPERIENCE
       * ============================================================== */}
      <section className="py-24 border-t border-slate-800/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0A192F] to-[#071526] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span {...fadeUp(0)} className="block text-xs font-bold uppercase tracking-wide text-cyan-400 mb-3">
              Integrated Capability
            </motion.span>
            <motion.h2 {...fadeUp(0.05)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Science + Farm Experience
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-slate-400 text-base leading-relaxed">
              KE Aqua Farms operates within a broader integrated ecosystem. Farm support may draw on capabilities from across the KE Aqua Group depending on the nature of the enquiry.
            </motion.p>
          </div>

          {/* 4-pillar cards with images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ecosystemPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  {...fadeUp(i * 0.07 + 0.1)}
                  className="group relative rounded-2xl overflow-hidden border border-slate-800/80 bg-[#112240] flex flex-col"
                >
                  {/* Image strip */}
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={`KE Aqua Farms — ${pillar.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-[#112240]/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5">
                    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg mb-3 ${colorMap[pillar.color].icon} border`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[0.62rem] font-bold uppercase tracking-wide block mb-1 ${ pillar.color === "cyan" ? "text-cyan-400" : pillar.color === "emerald" ? "text-emerald-400" : pillar.color === "blue" ? "text-blue-400" : "text-amber-400" }`}>
                      {pillar.highlight}
                    </span>
                    <h3 className="text-sm font-bold text-white mb-1 leading-snug">{pillar.title}</h3>
                    <p className="text-[0.7rem] text-slate-400 font-medium mb-3">{pillar.sub}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Integration note */}
          <motion.div {...fadeUp(0.3)} className="mt-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <span className="text-slate-300 font-semibold">Note: </span>
              Laboratory services, technology products, and training programs are each independent capabilities within the KE Aqua Group ecosystem. Availability and scope depend on the specific nature of each enquiry. Please contact us directly to understand what is relevant to your farm situation.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
       * SECTION 6 — WHO THIS IS FOR
       * ============================================================== */}
      <section className="py-24 bg-[#071526] border-t border-slate-800/60 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-purple-500/4 blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-14">
            <motion.span {...fadeUp(0)} className="block text-xs font-bold uppercase tracking-wide text-purple-400 mb-3">
              Who This Is For
            </motion.span>
            <motion.h2 {...fadeUp(0.05)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Farm Support for Real Farmers
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-slate-400 text-sm leading-relaxed">
              Our farm support and consultancy approach is designed for people working in or entering practical commercial aquaculture.
            </motion.p>
          </div>

          {/* Persona cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {personas.map((persona, i) => {
              const Icon = persona.icon;
              return (
                <motion.div
                  key={persona.title}
                  {...fadeUp(i * 0.07 + 0.1)}
                  className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-[#112240] border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0 h-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2 leading-snug">{persona.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{persona.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
       * SECTION 7 — WHY PRACTICAL EXPERIENCE MATTERS
       * ============================================================== */}
      <section className="py-24 border-t border-slate-800/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left — Image */}
            <motion.div {...fadeIn(0.1)} className="relative rounded-3xl overflow-hidden h-[420px] lg:h-[520px] order-2 lg:order-1">
              <Image
                src="/Real_Images/image_4.jpeg"
                alt="Aqua Pulse laboratory and technical diagnostic team inside the testing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />

              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0A192F]/90 backdrop-blur-sm border border-slate-800">
                <p className="text-xs text-cyan-400 font-mono font-bold mb-1 uppercase tracking-wider">Core Philosophy</p>
                <p className="text-sm text-white font-semibold leading-snug">
                  "We Practice. We Monitor. We Learn. We Share."
                </p>
                <p className="text-xs text-slate-400 mt-1.5">KE Aqua Group — From Farm to Future</p>
              </div>
            </motion.div>

            {/* Right — Text */}
            <div className="order-1 lg:order-2">
              <motion.span {...fadeUp(0)} className="block text-xs font-bold uppercase tracking-wide text-emerald-400 mb-3">
                Philosophy
              </motion.span>
              <motion.h2 {...fadeUp(0.05)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Why Practical Experience Matters
              </motion.h2>

              <motion.p {...fadeUp(0.1)} className="text-slate-300 text-base leading-relaxed mb-5">
                There is a significant difference between textbook aquaculture and field-level aquaculture. Real commercial farming operates under conditions that no classroom can fully replicate — variable coastal weather, irregular seed quality, equipment challenges, biological pressures, and market timing.
              </motion.p>
              <motion.p {...fadeUp(0.15)} className="text-slate-400 text-sm leading-relaxed mb-8">
                Our farm support platform is built from within this reality. KE Aqua Farms operates its own commercial farm, so the guidance we offer is derived from the same challenges our team manages every day — not from theory alone.
              </motion.p>

              {/* Core value statements */}
              <motion.div {...fadeUp(0.2)} className="space-y-3.5">
                {[
                  "Every crop is a learning opportunity — we document and apply that learning.",
                  "Every challenge should improve the system — not be repeated.",
                  "Every experience should create value for another farmer.",
                  "Farm support grounded in practice is more reliable than advice from theory alone.",
                ].map((statement) => (
                  <div key={statement} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">{statement}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
       * SECTION 8 — FINAL CTA
       * ============================================================== */}
      <section className="py-24 bg-[#071526] border-t border-slate-800/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-transparent to-emerald-950/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/8 blur-[160px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wide mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            Start the Conversation
          </motion.div>

          <motion.h2 {...fadeUp(0.05)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Let's Talk About Your Farm
          </motion.h2>

          <motion.p {...fadeUp(0.1)} className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you are managing an existing pond, planning a new operation, or looking for specific guidance on water quality, shrimp health, or technology — reach out directly to our team.
          </motion.p>

          {/* 3 CTA options */}
          <motion.div {...fadeUp(0.15)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/20 transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              Enquire About Farm Support
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={CONTACT_CONFIG.whatsapp.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Our Team
            </a>
            <a
              href={`tel:${CONTACT_CONFIG.phone.value}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              Call KE Aqua Farms
            </a>
          </motion.div>

          {/* Location and hours strip */}
          <motion.div {...fadeUp(0.25)} className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400 font-mono border-t border-slate-800/60 pt-10">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {CONTACT_CONFIG.operatingHours.days} · {CONTACT_CONFIG.operatingHours.time}
            </span>
            <span className="hidden sm:block text-slate-700">•</span>
            <span>{CONTACT_CONFIG.location.fullAddress}</span>
            <span className="hidden sm:block text-slate-700">•</span>
            <span className="text-cyan-400 font-semibold">The Key to Practical Aquaculture</span>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
