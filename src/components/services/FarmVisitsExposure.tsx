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
  AlertTriangle,
  BarChart3,
  Wind,
  Microscope,
  FileSpreadsheet,
  Clock,
  Lightbulb,
  Zap,
  MapPin,
  RefreshCw,
  Calendar,
  Award,
  Binoculars,
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
 * DATA — WHAT YOU CAN EXPERIENCE (Section 1)
 * ==================================================================== */
const experienceAreas = [
  {
    id: "farm-layout",
    title: "Farm Layout & Infrastructure",
    desc: "Walk the dykes of a 30-acre commercial shrimp farm and understand how ponds, reservoirs, inlet/outlet channels, and operational zones are arranged.",
    icon: MapPin,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "pond-infra",
    title: "Pond Infrastructure",
    desc: "See pond construction, lining, central drain systems, sluice gates and how individual ponds are designed to support biosecurity and water management.",
    icon: Waves,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "aeration",
    title: "Aeration Systems",
    desc: "Observe paddlewheel aerators in operation — how they are positioned, how they create circular water flow, and how aeration management supports the crop.",
    icon: Wind,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    id: "auto-feeders",
    title: "Auto Feeder Technology",
    desc: "See auto feeder units deployed across growout ponds — understanding how broadcast feeding schedules and feed tray checking work in daily farm operations.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    id: "water-testing",
    title: "Water Testing Introduction",
    desc: "Observe water sampling and basic parameter testing through Aqua Pulse — understanding what water quality monitoring means in practice on a working farm.",
    icon: FlaskConical,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    id: "shrimp-sampling",
    title: "Shrimp Sampling & Observation",
    desc: "See live shrimp sampling and observation — how ABW is estimated, what healthy shrimp behaviour looks like, and what farm staff observe during daily checks.",
    icon: Fish,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    id: "biosecurity",
    title: "Biosecurity Practices",
    desc: "Understand biosecurity infrastructure — entry protocols, bird and crab fencing, reservoir treatment, and how biosecurity is maintained across a commercial farm.",
    icon: ShieldCheck,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/30",
  },
  {
    id: "farm-records",
    title: "Farm Records Overview",
    desc: "See how daily farm records are maintained — feeding logs, water parameter records, sampling data, cost tracking and how records inform management decisions.",
    icon: FileSpreadsheet,
    color: "text-slate-400",
    bg: "bg-slate-500/10 border-slate-500/30",
  },
  {
    id: "harvest",
    title: "Harvest Overview",
    desc: "Learn about the harvest process — preparation, catch methods, grading, weight, procurement and how harvest connects to the seafood value chain.",
    icon: Award,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/30",
  },
];

/* ====================================================================
 * DATA — EXPOSURE FLOW (Section 3)
 * ==================================================================== */
const exposureFlow = [
  {
    step: "01",
    label: "ARRIVE",
    title: "Welcome & Safety Brief",
    desc: "Arrival at KE Aqua Farms, welcome orientation, farm safety guidelines and overview of the day's program.",
    icon: MapPin,
  },
  {
    step: "02",
    label: "ORIENTATION",
    title: "Farm Overview",
    desc: "Introduction to KE Aqua Group — farm history, current operation, pond layout, crop stages and overall infrastructure.",
    icon: Compass,
  },
  {
    step: "03",
    label: "POND WALK",
    title: "Live Farm Walk",
    desc: "Guided walk across pond dykes — observing aeration, water colour, shrimp activity, feeding zones and pond circulation in real time.",
    icon: Eye,
  },
  {
    step: "04",
    label: "TECHNOLOGY",
    title: "Technology Demonstration",
    desc: "Live demonstration of auto feeders, aerator controls, feed tray checking and any currently deployed sensor or monitoring technology.",
    icon: Cpu,
  },
  {
    step: "05",
    label: "WATER / LAB",
    title: "Water & Lab Introduction",
    desc: "Introduction to water sampling, basic parameter testing and Aqua Pulse laboratory monitoring — understanding the science behind farm decisions.",
    icon: FlaskConical,
  },
  {
    step: "06",
    label: "SHRIMP OBS.",
    title: "Shrimp Observation",
    desc: "Hands-on introduction to shrimp sampling, observation of gut condition, activity, and basic health indicators used in daily farm management.",
    icon: Microscope,
  },
  {
    step: "07",
    label: "FARM RECORDS",
    title: "Records & Data Discussion",
    desc: "Overview of how farm records, feeding logs, water test data and cost tracking are maintained and used in management decisions.",
    icon: FileSpreadsheet,
  },
  {
    step: "08",
    label: "Q&A",
    title: "Open Discussion",
    desc: "Open session to ask questions about farm operations, challenges, investment considerations, training programs and next steps.",
    icon: MessageSquare,
  },
];

/* ====================================================================
 * DATA — WHO CAN VISIT (Section 4)
 * ==================================================================== */
const visitorProfiles = [
  {
    title: "Aspiring Aqua Entrepreneurs",
    desc: "Individuals considering starting a shrimp farm who want realistic exposure before committing capital or time.",
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    title: "Existing Farmers",
    desc: "Farmers from other sectors or regions looking to understand commercial aquaculture operations before diversifying.",
    icon: Sprout,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    title: "Students & Graduates",
    desc: "Fisheries, agriculture, and engineering students wanting real farm exposure to complement academic knowledge.",
    icon: GraduationCap,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    title: "Aquaculture Professionals",
    desc: "Feed, equipment and healthcare suppliers, consultants or technicians seeking direct farm understanding.",
    icon: Layers,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    title: "Farm Managers & Supervisors",
    desc: "Farm management staff from other operations wanting to see how a modern 30-acre facility is structured and operated.",
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    title: "Women Interested in Aquaculture",
    desc: "Women exploring aquaculture as a livelihood, business or professional pathway who want real, practical farm exposure.",
    icon: Award,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/30",
  },
  {
    title: "Business Explorers",
    desc: "Entrepreneurs, dealers and business operators exploring the aquaculture sector who want operational context before decisions.",
    icon: Compass,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    title: "Investors",
    desc: "Investors seeking practical, on-the-ground understanding of aquaculture operations, challenges and realities before financial commitment.",
    icon: BarChart3,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/30",
  },
];

/* ====================================================================
 * DATA — RELATED PROGRAMS (Section 6)
 * ==================================================================== */
const relatedPrograms = [
  {
    title: "Practical Aquaculture Training",
    subtitle: "1-Day to 3-Month Programs",
    desc: "Structured practical training tiers from a 1-day farm exposure through to a full crop-cycle internship.",
    href: "/services/practical-aquaculture-training",
    icon: GraduationCap,
    color: "text-emerald-400",
  },
  {
    title: "Aquaculture Farm Consultancy",
    subtitle: "Farm Planning & Operations Support",
    desc: "Practical farm consultancy drawn from real commercial shrimp farming operations and hands-on experience.",
    href: "/services/aquaculture-farm-consultancy",
    icon: Compass,
    color: "text-cyan-400",
  },
  {
    title: "Periodic Farm Monitoring",
    subtitle: "Ongoing Observation & Monitoring",
    desc: "Regular farm observation visits supporting ongoing awareness of farm and shrimp conditions.",
    href: "/services/periodic-farm-monitoring",
    icon: Activity,
    color: "text-teal-400",
  },
  {
    title: "Water Quality Testing",
    subtitle: "Aqua Pulse Laboratory Services",
    desc: "Laboratory water parameter testing supporting informed farm decisions through Aqua Pulse monitoring.",
    href: "/services/water-quality-testing",
    icon: FlaskConical,
    color: "text-blue-400",
  },
  {
    title: "Farm Technology Consulting",
    subtitle: "Practical Technology Evaluation",
    desc: "Technology evaluation from actual farm needs — auto feeders, sensors, aeration and advanced systems.",
    href: "/services/farm-technology-consulting",
    icon: Cpu,
    color: "text-purple-400",
  },
];

/* ====================================================================
 * CONTACT FORM STATE TYPE
 * ==================================================================== */
interface FormState {
  name: string;
  phone: string;
  location: string;
  background: string;
  message: string;
}

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function FarmVisitsExposurePage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    location: "",
    background: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Farm Visit / Exposure Programme Enquiry\n\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nBackground: ${formData.background}\nMessage: ${formData.message}`
    );
    window.open(
      `https://wa.me/${CONTACT_CONFIG.whatsapp.number}?text=${msg}`,
      "_blank"
    );
    setSubmitted(true);
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* AMBIENT GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-gradient-to-b from-emerald-900/15 via-teal-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1800px] right-0 w-[500px] h-96 bg-cyan-900/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[3600px] left-0 w-96 h-96 bg-teal-900/10 blur-3xl pointer-events-none -z-10" />

      {/* ====================================================================
       * HERO SECTION — full background image
       * ==================================================================== */}
      <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 border-b border-slate-800/80 overflow-hidden">
        {/* Background farm image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/svc-farm-ops.jpg"
            alt="KE Aqua Farms — 30-acre commercial shrimp farm aerial view"
            fill
            className="object-cover object-center opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/75 to-slate-950" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-10 overflow-x-auto pb-2">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <Link href="/#services" className="hover:text-emerald-400 transition-colors">
              Capabilities
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <span className="text-emerald-400 font-medium whitespace-nowrap">
              Farm Visits & Exposure
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <motion.div className="lg:col-span-7 space-y-7" {...fadeUp(0.1)}>
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider uppercase">
                <Eye className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>KE AQUA FARMS • FARM VISITS & EXPOSURE</span>
              </div>

              {/* Core Positioning */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 text-sm font-semibold italic">
                &ldquo;Learn Before You Invest. Practice Before You Decide.&rdquo;
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                See a Working Aquaculture Farm{" "}
                <br className="hidden md:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Before You Decide
                </span>
              </h1>

              {/* Supporting text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-2xl">
                A farm visit at KE Aqua Farms is a structured practical exposure —
                not a tour. Walk active ponds, see technology in operation, observe
                water testing and shrimp sampling, and gain a realistic understanding
                of what commercial shrimp farming looks like in practice.
              </p>

              {/* Not-a-tour qualifier */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                <Eye className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <p className="text-xs text-slate-300 font-light">
                  <strong className="text-white font-semibold">Farm Exposure, Not Tourism.</strong>{" "}
                  Every visit is structured around practical observation, demonstration and
                  genuine learning — designed to give you honest, realistic insight into
                  commercial aquaculture operations.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/25 transition-all duration-200 group"
                >
                  <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>CONTACT US</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#exposure-flow"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4 mr-1 text-emerald-400" />
                  <span>See What a Visit Covers</span>
                </a>
              </div>
            </motion.div>

            {/* Right — stats card */}
            <motion.div className="lg:col-span-5" {...fadeUp(0.2)}>
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl shadow-emerald-950/40">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src="/assets/svc-farm-ops.jpg"
                    alt="KE Aqua Farms commercial shrimp ponds"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-emerald-500/90 text-slate-950 text-[11px] font-bold font-mono uppercase">
                    30-Acre Working Farm
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Commercial Farm", value: "30 Acres", icon: MapPin, color: "text-emerald-400" },
                      { label: "Exposure Duration", value: "1 Day", icon: Calendar, color: "text-cyan-400" },
                      { label: "Learning Model", value: "Practical", icon: Eye, color: "text-teal-400" },
                      { label: "Lab Access", value: "Aqua Pulse", icon: Microscope, color: "text-blue-400" },
                    ].map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={idx} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
                          <ItemIcon className={`w-3.5 h-3.5 ${item.color} mb-1`} />
                          <p className="text-sm font-extrabold text-white">{item.value}</p>
                          <p className="text-[10px] text-slate-400 font-mono">{item.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-700/30">
                    <p className="text-[11px] text-amber-200 font-light leading-relaxed">
                      <strong className="text-amber-300">Note:</strong> Farm visits are structured
                      practical exposure programs. Outcomes depend on farm conditions, crop
                      stage and operational activity on the day of visit.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: WHAT YOU CAN EXPERIENCE
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>WHAT YOU CAN EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              9 Areas of Practical Farm Exposure
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Each area of observation is designed to give you realistic insight into
              what running a commercial shrimp farm actually involves — not an idealised
              or curated version.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              return (
                <motion.div
                  key={area.id}
                  className={`p-6 rounded-2xl bg-slate-900/90 border ${area.bg} hover:shadow-xl transition-all duration-300 space-y-4 group`}
                  {...fadeUp(0.05 + idx * 0.05)}
                >
                  <div className={`w-11 h-11 rounded-xl ${area.bg} flex items-center justify-center ${area.color} group-hover:scale-105 transition-transform`}>
                    <AreaIcon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-base font-bold ${area.color}`}>{area.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{area.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: GENERAL FARM EXPOSURE HIGHLIGHT
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left image */}
            <motion.div className="relative" {...fadeUp(0.1)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/assets/svc-farm-ops.jpg"
                    alt="KE Aqua Farms — General Farm Exposure Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/90 text-slate-950 text-[11px] font-bold font-mono uppercase">
                    Farm Exposure
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg leading-tight">
                    See a Real Commercial Farm in Operation
                  </p>
                  <p className="text-slate-300 text-xs mt-1 font-light">
                    KE Aqua Farms — D. No. 17-129, Ismailbegpeta, Koduru, Krishna District
                  </p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -right-4 sm:-right-8 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 shadow-xl">
                <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-3">
                  Exposure Covers
                </p>
                {["Ponds", "Technology", "Lab", "Sampling", "Records", "Q&A"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span className="text-[11px] text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right content */}
            <motion.div className="space-y-7" {...fadeUp(0.2)}>
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GENERAL FARM EXPOSURE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  One Day. A Working Farm. Real Understanding.
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  The General Farm Exposure is designed specifically for beginners and those
                  considering aquaculture as a business or career. The purpose is simple —
                  give you a clear, honest, unfiltered picture of how a commercial shrimp
                  farm actually operates before you make any decisions.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  You will walk the farm, observe active ponds, see the technology deployed,
                  watch water testing and shrimp sampling in practice, review farm records,
                  and have time to ask open questions — all in one structured day.
                </p>
              </div>

              {/* What makes it different */}
              <div className="space-y-3">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  What Makes This Different
                </p>
                {[
                  { point: "Active commercial farm — not a demonstration facility", icon: CheckCircle2 },
                  { point: "Real crop in progress — actual shrimp, real conditions", icon: CheckCircle2 },
                  { point: "Honest discussion of challenges, not just successes", icon: CheckCircle2 },
                  { point: "Aqua Pulse laboratory exposure included", icon: CheckCircle2 },
                  { point: "Technology deployed across working ponds", icon: CheckCircle2 },
                  { point: "Open Q&A — ask what you actually want to know", icon: CheckCircle2 },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                      <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <p className="text-xs text-slate-300 font-light">{item.point}</p>
                    </div>
                  );
                })}
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/20 transition-all duration-200 group"
              >
                <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                CONTACT US
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: EXPOSURE FLOW — 8 STEPS
       * ==================================================================== */}
      <section
        id="exposure-flow"
        className="py-24 border-b border-slate-800/80 bg-slate-900/50 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>EXPOSURE FLOW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Arrive → Orientation → Ponds → Technology → Lab → Shrimp → Records → Q&A
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Each step of the exposure program is designed to build realistic understanding
              — progressing from farm overview to hands-on practical observation.
            </p>
          </motion.div>

          {/* 8-step grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {exposureFlow.map((st, idx) => {
              const StepIcon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  className="relative p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 space-y-3 flex flex-col"
                  {...fadeUp(0.06 + idx * 0.05)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/30 text-teal-300">
                      {st.label}
                    </span>
                    <span className="text-xs font-mono text-slate-600">{st.step}</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400">
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{st.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{st.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Conditions note */}
          <motion.div
            className="mt-10 p-5 rounded-2xl bg-amber-950/20 border border-amber-700/30 flex items-start space-x-4"
            {...fadeUp(0.35)}
          >
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200 leading-relaxed font-light">
              <strong className="font-semibold text-amber-300">Practical Note:</strong>{" "}
              The specific activities and sequence of the exposure program may vary
              depending on farm conditions, crop stage, weather and operational activity
              on the day of your visit. The program is structured around live farm operations —
              not a fixed scripted demonstration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 4: WHO CAN VISIT
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>WHO CAN VISIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Open to Anyone With a Genuine Interest in Aquaculture
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Farm visits are for anyone who wants realistic, practical understanding
              of commercial aquaculture — regardless of background or experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visitorProfiles.map((profile, idx) => {
              const ProfileIcon = profile.icon;
              return (
                <motion.div
                  key={idx}
                  className={`p-6 rounded-2xl bg-slate-900 border ${profile.bg} space-y-4 hover:shadow-xl transition-all duration-300`}
                  {...fadeUp(0.05 + idx * 0.04)}
                >
                  <div className={`w-11 h-11 rounded-xl ${profile.bg} flex items-center justify-center ${profile.color}`}>
                    <ProfileIcon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-sm font-bold ${profile.color}`}>{profile.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{profile.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: LEARNING, NOT PROMISES
       * ==================================================================== */}
      <section className="py-16 border-b border-slate-800/80 bg-slate-900/50 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What exposure helps with */}
            <motion.div
              className="p-7 rounded-2xl bg-emerald-950/30 border border-emerald-700/30 space-y-5"
              {...fadeUp(0.1)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">What Farm Exposure Helps With</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Understanding how a real commercial shrimp farm operates",
                  "Seeing infrastructure, technology and daily operations firsthand",
                  "Building realistic expectations about challenges and demands",
                  "Making a more informed decision about entering aquaculture",
                  "Identifying what questions to ask before investing",
                  "Understanding what further training or support you may need",
                ].map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What it does not guarantee */}
            <motion.div
              className="p-7 rounded-2xl bg-slate-900 border border-amber-700/30 space-y-5"
              {...fadeUp(0.2)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">What It Does Not Guarantee</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Farming success, shrimp survival or production outcomes",
                  "Business viability, profitability or investment returns",
                  "Employment, partnership or business referral",
                  "Technical expertise — exposure supplements, not replaces, training",
                  "Any certification, qualification or official credential",
                  "Guaranteed access to specific farm activities on the visit day",
                ].map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 font-light">
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] text-amber-400 font-bold">
                      ✕
                    </div>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 6: RELATED PROGRAMS
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center space-y-4 mb-16" {...fadeUp(0.1)}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>RELATED PROGRAMS & SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              After Your Farm Visit, Take the Next Step
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              A farm visit is often the first step. If you want to go deeper, KE Aqua
              offers structured training programs, technical support and monitoring services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPrograms.map((prog, idx) => {
              const ProgIcon = prog.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                  {...fadeUp(0.06 + idx * 0.06)}
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                      <ProgIcon className={`w-5 h-5 ${prog.color}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">{prog.subtitle}</p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">{prog.desc}</p>
                  </div>
                  <Link
                    href={prog.href}
                    className="inline-flex items-center text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold pt-3 border-t border-slate-800"
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
       * FINAL CTA & CONTACT FORM
       * ==================================================================== */}
      <section id="contact-section" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left */}
            <motion.div className="lg:col-span-6 space-y-6" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>CONTACT US</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Contact KE Aqua Farms to Arrange Your Visit
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Farm visits are arranged directly through our team. Contact us to discuss
                availability, your background and what you hope to understand from the
                visit — and we will guide you from there.
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`tel:${CONTACT_CONFIG.phone.value}`}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 group flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Call</span>
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
                    <span className="text-[11px] font-mono text-slate-400 block">WhatsApp</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Chat on WhatsApp
                    </span>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">Working Hours & Farm Location:</p>
                  <p className="text-slate-300 font-light">
                    {CONTACT_CONFIG.operatingHours.days} • {CONTACT_CONFIG.operatingHours.time}
                  </p>
                  <p className="text-slate-400 text-[11px] font-mono">
                    {CONTACT_CONFIG.location.fullAddress}
                  </p>
                </div>
              </div>

              {/* Disclaimer note */}
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-700/30 space-y-2">
                <p className="text-[11px] font-bold text-amber-300">Please Note:</p>
                <p className="text-[11px] text-amber-200 font-light leading-relaxed">
                  Farm visits are practical farm-exposure programs. We do not offer
                  online booking, automated scheduling or guaranteed activity calendars.
                  All visits are arranged directly with our team based on farm availability.
                </p>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div className="lg:col-span-6" {...fadeUp(0.25)}>
              <div className="rounded-2xl p-7 bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white">Farm Visit Enquiry</h3>
                  <p className="text-xs text-slate-400 mt-1 font-light">
                    Tell us about yourself and your interest in visiting — we&apos;ll be
                    in touch directly to discuss availability.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-10 text-center space-y-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Enquiry Sent</h4>
                      <p className="text-sm text-slate-300 font-light">
                        Your farm visit enquiry has been forwarded via WhatsApp.
                        Our team will be in touch to discuss availability and arrangements.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="visit-name" className="text-xs font-mono text-slate-400">
                            Full Name *
                          </label>
                          <input
                            id="visit-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="visit-phone" className="text-xs font-mono text-slate-400">
                            Phone / WhatsApp *
                          </label>
                          <input
                            id="visit-phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="visit-location" className="text-xs font-mono text-slate-400">
                          Your Location
                        </label>
                        <input
                          id="visit-location"
                          name="location"
                          type="text"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="City / District / State"
                          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="visit-background" className="text-xs font-mono text-slate-400">
                          Your Background / Interest
                        </label>
                        <select
                          id="visit-background"
                          name="background"
                          value={formData.background}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                        >
                          <option value="" className="bg-slate-950">Select your background...</option>
                          <option value="Aspiring Entrepreneur" className="bg-slate-950">Aspiring Aquaculture Entrepreneur</option>
                          <option value="Existing Farmer" className="bg-slate-950">Existing Farmer (Other Sector)</option>
                          <option value="Student / Graduate" className="bg-slate-950">Student / Fresh Graduate</option>
                          <option value="Aquaculture Professional" className="bg-slate-950">Aquaculture Professional / Supplier</option>
                          <option value="Farm Manager / Supervisor" className="bg-slate-950">Farm Manager / Supervisor</option>
                          <option value="Investor" className="bg-slate-950">Investor / Business Explorer</option>
                          <option value="Other" className="bg-slate-950">Other — will explain below</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="visit-message" className="text-xs font-mono text-slate-400">
                          What Would You Like to Understand?
                        </label>
                        <textarea
                          id="visit-message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us what you hope to understand from the farm visit and any specific areas of interest..."
                          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/20 transition-all duration-200 flex items-center justify-center space-x-2 group"
                      >
                        <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>CONTACT US</span>
                      </button>

                      <p className="text-[11px] text-center text-slate-500 font-light">
                        Your enquiry will be forwarded via WhatsApp for a direct response from our team.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Bottom strip */}
          <motion.div
            className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-slate-700 text-center space-y-5"
            {...fadeUp(0.2)}
          >
            <h3 className="text-2xl font-extrabold text-white">
              Ready for Practical Training? Explore the Full Programs
            </h3>
            <p className="text-sm text-slate-300 font-light max-w-xl mx-auto">
              A farm visit is a starting point. For deeper, structured practical skill
              development — explore KE Aqua&apos;s training programs from 3-day to 3-month tiers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services/practical-aquaculture-training"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
              >
                <GraduationCap className="w-4 h-4" />
                EXPLORE TRAINING PROGRAMS
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Contact KE Aqua Farms
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
