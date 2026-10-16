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
  FlaskConical,
  Layers,
  MessageSquare,
  Phone,
  ShieldCheck,
  Target,
  TrendingUp,
  Waves,
  Activity,
  BarChart3,
  Wind,
  Microscope,
  Clock,
  Droplets,
  Lightbulb,
  Zap,
  Signal,
  Database,
  BookOpen,
  AlertTriangle,
  Users,
  Wrench,
  Gauge,
  Fish,
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
 * DATA — TECHNOLOGY EVALUATION CRITERIA (Section 1)
 * ==================================================================== */
const evaluationCriteria = [
  {
    id: "farm-requirement",
    title: "Farm Requirement",
    desc: "What specific farm challenge or operational gap is the technology intended to address? Technology that solves no real farm problem adds no real value.",
    icon: Target,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    id: "purpose",
    title: "Purpose",
    desc: "Understanding the intended function of the technology in the context of actual pond conditions, stocking density, and farm management practice.",
    icon: Lightbulb,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "practical-use",
    title: "Practical Use",
    desc: "How the technology is implemented and operated in day-to-day farm management, including maintenance, power requirements, and integration with existing setup.",
    icon: Wrench,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "observation",
    title: "Observation",
    desc: "What is actually observed during field trials and demonstration on the KE Aqua working farm — without extrapolation or unsupported performance claims.",
    icon: Eye,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    id: "cost",
    title: "Cost",
    desc: "Capital outlay, running costs, maintenance, and whether the practical application justifies the investment for a specific farm scale and operation.",
    icon: BarChart3,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    id: "result",
    title: "Observed Result",
    desc: "What is documented and observed in field practice — presented honestly, without invented efficiency figures, guaranteed outcomes, or unverified claims.",
    icon: BookOpen,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
];

/* ====================================================================
 * DATA — EVALUATION WORKFLOW (Section 3: 5 Steps)
 * ==================================================================== */
const evaluationSteps = [
  {
    step: "01",
    label: "FARM REQUIREMENT",
    title: "Identify the Farm Need",
    desc: "Understanding the specific pond management challenge the technology is being considered for.",
    icon: Target,
  },
  {
    step: "02",
    label: "TECHNOLOGY",
    title: "Understand the Technology",
    desc: "Reviewing how the technology is designed to function and whether it is appropriate for the farm conditions.",
    icon: Layers,
  },
  {
    step: "03",
    label: "IMPLEMENTATION",
    title: "Demonstration & Setup",
    desc: "Practical demonstration and setup within KE Aqua's 30-acre working farm according to actual conditions.",
    icon: Wrench,
  },
  {
    step: "04",
    label: "OBSERVATION",
    title: "Field Observation",
    desc: "Observing and recording what actually happens in the pond environment during and after application.",
    icon: Eye,
  },
  {
    step: "05",
    label: "EVALUATION",
    title: "Honest Assessment",
    desc: "Evaluating observed outcomes against farm requirements and costs — without invented metrics or guaranteed claims.",
    icon: Gauge,
  },
];

/* ====================================================================
 * DATA — FARM CONNECTION AREAS (Section 4)
 * ==================================================================== */
const farmConnectionAreas = [
  {
    title: "Water Monitoring",
    desc: "Assessing water parameter conditions before and during technology application as part of responsible evaluation.",
    icon: Droplets,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    title: "Aeration Management",
    desc: "Understanding how technology-assisted oxygenation approaches relate to existing pond aeration infrastructure and planning.",
    icon: Wind,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    title: "Farm Conditions",
    desc: "Technology application is always evaluated in relation to specific pond conditions, stocking phase, biomass, and operational context.",
    icon: Waves,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    title: "Technology Adoption",
    desc: "Supporting farmers in evaluating technology decisions based on practical farm benefit rather than product marketing.",
    icon: Cpu,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    title: "Farm Records",
    desc: "Documenting field observations during demonstration periods to build an honest record of what is observed under actual conditions.",
    icon: BookOpen,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
];

/* ====================================================================
 * DATA — ADVANCED TECHNOLOGY ECOSYSTEM (Section 5)
 * ==================================================================== */
const advancedTechServices = [
  {
    title: "Auto Feeder Solutions",
    subtitle: "Technology-Assisted Feed Distribution",
    desc: "Auto feeders evaluated within KE Aqua's practical approach to feed distribution, feeding schedules, and farm observation.",
    href: "/services/auto-feeder-solutions",
    icon: Zap,
    color: "text-amber-400",
  },
  {
    title: "IoT & Sensor Monitoring",
    subtitle: "Farm Data & Parameter Logging",
    desc: "Sensor-based monitoring supporting data collection to complement farm observation and management awareness.",
    href: "/services/iot-sensor-monitoring",
    icon: Signal,
    color: "text-purple-400",
  },
  {
    title: "Aeration Management",
    subtitle: "Practical Oxygen Support Planning",
    desc: "Aeration planning based on farm conditions, pond circulation, observation and responsible equipment management.",
    href: "/services/aeration-management",
    icon: Wind,
    color: "text-blue-400",
  },
  {
    title: "Water Quality Testing",
    subtitle: "Aqua Pulse Chemical Analysis",
    desc: "Laboratory water parameter testing supporting informed farm decisions through Aqua Pulse monitoring.",
    href: "/services/water-quality-testing",
    icon: FlaskConical,
    color: "text-cyan-400",
  },
  {
    title: "Farm Technology Consulting",
    subtitle: "Practical Technology Evaluation",
    desc: "Technology evaluation from farm need — not as a product catalogue. Every recommendation is grounded in field practice.",
    href: "/services/farm-technology-consulting",
    icon: Cpu,
    color: "text-emerald-400",
  },
];

/* ====================================================================
 * DATA — WHO CAN ENQUIRE (Section 6)
 * ==================================================================== */
const enquiryProfiles = [
  {
    title: "Existing Shrimp Farmers",
    desc: "Farmers actively operating shrimp ponds who want to evaluate whether technology-assisted oxygenation approaches are suited to their farm conditions.",
    icon: Fish,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    title: "Farm Managers",
    desc: "Technical farm managers responsible for aeration, water quality and operational infrastructure who want to assess advanced technology options.",
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    title: "Aquaculture Operators",
    desc: "Commercial aquaculture operators interested in evaluating new technology areas alongside existing farm management practices.",
    icon: Activity,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
];

/* ====================================================================
 * CONTACT FORM STATE TYPE
 * ==================================================================== */
interface FormState {
  name: string;
  phone: string;
  farmLocation: string;
  farmSize: string;
  message: string;
}

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function MicroNanoBubblePage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    farmLocation: "",
    farmSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Micro/Nano Bubble Technology Enquiry\n\nName: ${formData.name}\nPhone: ${formData.phone}\nFarm Location: ${formData.farmLocation}\nFarm Size: ${formData.farmSize}\nMessage: ${formData.message}`
    );
    window.open(
      `https://wa.me/${CONTACT_CONFIG.whatsapp.number}?text=${msg}`,
      "_blank"
    );
    setSubmitted(true);
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-teal-900/20 via-cyan-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1400px] right-0 w-96 h-96 bg-cyan-900/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2800px] left-0 w-96 h-96 bg-teal-900/10 blur-3xl pointer-events-none -z-10" />

      {/* ====================================================================
       * BREADCRUMB & HERO SECTION
       * ==================================================================== */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-slate-800/80 bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-8 overflow-x-auto pb-2">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <Link
              href="/#services"
              className="hover:text-cyan-400 transition-colors"
            >
              Capabilities
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <span className="text-teal-400 font-medium whitespace-nowrap">
              Micro/Nano Bubble Technology
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono tracking-wider uppercase">
                <Droplets className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
                <span>KE AQUA FARMS • MICRO/NANO BUBBLE TECHNOLOGY</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Exploring Advanced Technology{" "}
                <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400">
                  Through Practical Farm Experience
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                At{" "}
                <strong className="text-white font-semibold">KE Aqua Farms</strong>,
                technology adoption begins with a farm problem—not a product brochure.
                Micro and nano bubble technology is evaluated and demonstrated on our
                30-acre working farm to understand practical application, relevant
                conditions, and honest observed outcomes before any recommendation is made.
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "Farm Problem First",
                  "Practical Demonstration",
                  "Honest Evaluation",
                  "Field Observation",
                  "No Invented Claims",
                  "Farmer-Centred",
                ].map((chip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    <span className="truncate">{chip}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#contact-section"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-teal-500/20 transition-all duration-200 group"
                >
                  <Droplets className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>ENQUIRE ABOUT THE TECHNOLOGY</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#technology-purpose"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <Eye className="w-4 h-4 mr-2 text-teal-400" />
                  <span>Explore Technology Approach</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-teal-950/50 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/assets/svc-tech-bg.jpg"
                    alt="KE Aqua Farms — Advanced Aquaculture Technology Demonstration"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Overlaid Card Info */}
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">
                      ADVANCED TECHNOLOGY
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-[11px] font-mono">
                      FIELD EVALUATION
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    &ldquo;Technology should solve a farm problem. We evaluate micro/nano
                    bubble technology through practical demonstration—not through
                    invented specifications or guaranteed performance claims.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        KE Aqua Farms Practice
                      </h4>
                      <p className="text-[11px] text-slate-400 font-mono">
                        Practical Evaluation — 30-Acre Working Farm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: TECHNOLOGY WITH PURPOSE
       * ==================================================================== */}
      <section
        id="technology-purpose"
        className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-4 mb-14"
            {...fadeUp(0.1)}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Target className="w-3.5 h-3.5 text-teal-400" />
              <span>TECHNOLOGY WITH PURPOSE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Technology Should Solve a Farm Problem
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              KE Aqua evaluates micro and nano bubble technology by the same
              standard applied to every other technology on our farm. Before
              recommending any technology, we assess six practical dimensions
              grounded in real farm conditions—not product specifications.
            </p>
          </motion.div>

          {/* 6 Evaluation Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluationCriteria.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/30 transition-all duration-300 space-y-4"
                  {...fadeUp(0.05 + idx * 0.06)}
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-slate-950 border ${item.bg} flex items-center justify-center ${item.color}`}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Core Principle Statement */}
          <motion.div
            className="mt-12 p-6 rounded-2xl bg-teal-950/30 border border-teal-700/40 text-center space-y-3"
            {...fadeUp(0.35)}
          >
            <p className="text-teal-300 font-mono text-xs uppercase tracking-widest">
              KE Aqua Technology Evaluation Principle
            </p>
            <blockquote className="text-white text-base sm:text-lg font-semibold italic">
              &ldquo;Farm Requirement → Purpose → Practical Use → Observation → Cost → Observed Result&rdquo;
            </blockquote>
            <p className="text-slate-400 text-xs font-light">
              Applied to every technology evaluated on our 30-acre working farm before any guidance is shared.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: PRACTICAL APPLICATION
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div className="space-y-8" {...fadeUp(0.1)}>
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PRACTICAL APPLICATION</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  An Advanced Aquaculture Technology Area Under Practical Evaluation
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Micro and nano bubble technology represents an advanced area of aquaculture
                  pond management. KE Aqua presents this technology as an area of practical
                  exploration and field demonstration—evaluated on our working farm according
                  to actual conditions and honest observation.
                </p>

                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  We do not publish invented oxygen efficiency figures, guaranteed survival
                  improvements, growth enhancement claims, or disease reduction guarantees.
                  What we offer is honest field exploration and the opportunity to discuss
                  what has been observed in practice.
                </p>
              </div>

              {/* Honest Approach Points */}
              <div className="space-y-3">
                {[
                  "Presented as a technology area for practical demonstration and evaluation",
                  "No fabricated mechanism claims or unverified performance specifications",
                  "Evaluated on KE Aqua's 30-acre commercial working farm",
                  "Discussed in the context of actual farm conditions and requirements",
                  "Technology selection guided by farm need, not product promotion",
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Honest Disclaimer Card */}
            <motion.div className="space-y-6" {...fadeUp(0.2)}>
              {/* Scope Card */}
              <div className="p-7 rounded-2xl bg-slate-900 border border-teal-500/20 space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    What KE Aqua Provides
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      label: "Practical Demonstration",
                      desc: "Field demonstration of the technology on KE Aqua's working farm ponds",
                      ok: true,
                    },
                    {
                      label: "Farm-Specific Discussion",
                      desc: "Discussion of whether the technology is relevant to your farm conditions",
                      ok: true,
                    },
                    {
                      label: "Honest Field Observation",
                      desc: "Sharing what has been observed in practice without exaggeration",
                      ok: true,
                    },
                    {
                      label: "Technology Evaluation Support",
                      desc: "Guidance on evaluating the technology against your actual farm requirements",
                      ok: true,
                    },
                    {
                      label: "Guaranteed Performance Outcomes",
                      desc: "We do not make performance guarantees or invent efficiency figures",
                      ok: false,
                    },
                    {
                      label: "Disease or Mortality Claims",
                      desc: "We make no claims about disease reduction, survival rates, or production increases",
                      ok: false,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start space-x-3 p-3 rounded-lg border ${
                        item.ok
                          ? "bg-teal-950/20 border-teal-700/30"
                          : "bg-red-950/10 border-red-900/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold ${
                          item.ok
                            ? "bg-teal-500/20 text-teal-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {item.ok ? "✓" : "✕"}
                      </div>
                      <div>
                        <p
                          className={`text-xs font-bold ${
                            item.ok ? "text-teal-300" : "text-red-400"
                          }`}
                        >
                          {item.label}
                        </p>
                        <p className="text-[11px] text-slate-400 font-light mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: EVALUATION WORKFLOW (5 STEPS)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center space-y-4 mb-16"
            {...fadeUp(0.1)}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>EVALUATION FRAMEWORK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Farm Requirement → Technology → Implementation → Observation → Evaluation
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              How KE Aqua approaches every technology evaluation—from identifying
              a real farm need through to honest field-observed assessment.
            </p>
          </motion.div>

          {/* 5-Step Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {evaluationSteps.map((st, idx) => {
              const StepIcon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  className="relative p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between"
                  {...fadeUp(0.1 + idx * 0.08)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/30 text-teal-300">
                        {st.label}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {st.step}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400">
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white">{st.title}</h3>

                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {st.desc}
                    </p>
                  </div>

                  {idx < evaluationSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-slate-600" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 4: FARM CONNECTION
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-4 mb-16"
            {...fadeUp(0.1)}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Waves className="w-3.5 h-3.5 text-cyan-400" />
              <span>FARM CONNECTION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technology in the Context of Farm Management
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              Micro and nano bubble technology does not operate in isolation. Its evaluation
              and potential application is connected conceptually with broader farm
              monitoring, aeration management, and operational practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {farmConnectionAreas.map((area, idx) => {
              const AreaIcon = area.icon;
              return (
                <motion.div
                  key={idx}
                  className={`p-6 rounded-2xl bg-slate-900/90 border ${area.bg} transition-all duration-300 space-y-4`}
                  {...fadeUp(0.07 + idx * 0.06)}
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${area.bg} flex items-center justify-center ${area.color}`}
                  >
                    <AreaIcon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-base font-bold ${area.color}`}>
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {area.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Disclaimer Note */}
          <motion.div
            className="mt-10 p-5 rounded-2xl bg-amber-950/20 border border-amber-700/30 flex items-start space-x-4"
            {...fadeUp(0.3)}
          >
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200 leading-relaxed font-light">
              <strong className="font-semibold text-amber-300">Important:</strong>{" "}
              No guaranteed outcomes are claimed for dissolved oxygen improvement, shrimp
              growth, survival rates, disease reduction, or production increases. Technology
              application and any potential benefits depend on actual farm conditions and
              responsible management practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: ADVANCED AQUACULTURE ECOSYSTEM
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>ADVANCED AQUACULTURE TECHNOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technology Evaluated Alongside Other Advanced Farm Systems
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              Micro/nano bubble technology is one area within KE Aqua&apos;s broader
              practical approach to smart aquaculture technology evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedTechServices.map((svc, idx) => {
              const SvcIcon = svc.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                  {...fadeUp(0.05 + idx * 0.06)}
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <SvcIcon className={`w-5 h-5 ${svc.color}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {svc.subtitle}
                      </p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {svc.desc}
                    </p>
                  </div>

                  <Link
                    href={svc.href}
                    className="inline-flex items-center text-xs font-mono text-teal-400 hover:text-teal-300 font-semibold pt-3 border-t border-slate-800"
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
       * SECTION 6: WHO CAN ENQUIRE
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-4 mb-16"
            {...fadeUp(0.1)}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Users className="w-3.5 h-3.5 text-teal-400" />
              <span>WHO CAN ENQUIRE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              For Farmers, Managers & Operators Interested in Advanced Technology
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light">
              Technology discussions are most useful for those already operating farms
              and looking to evaluate whether advanced technology approaches suit their
              specific conditions and management practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {enquiryProfiles.map((profile, idx) => {
              const ProfileIcon = profile.icon;
              return (
                <motion.div
                  key={idx}
                  className={`p-7 rounded-2xl bg-slate-900 border ${profile.bg} space-y-5 text-center`}
                  {...fadeUp(0.1 + idx * 0.1)}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${profile.bg} flex items-center justify-center ${profile.color} mx-auto`}
                  >
                    <ProfileIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${profile.color}`}>
                      {profile.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {profile.desc}
                  </p>
                  <a
                    href="#contact-section"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-teal-500/40 text-white font-semibold text-xs transition-all duration-200 group"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * RESPONSIBLE STATEMENT
       * ==================================================================== */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Responsible Technology Presentation
          </h2>
          <blockquote className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 text-sm sm:text-base font-serif italic max-w-3xl mx-auto">
            &ldquo;We present micro and nano bubble technology as a practical demonstration
            and evaluation area. We do not publish fabricated specifications, invented
            efficiency percentages, or guaranteed production or health outcomes.
            Our approach is grounded in what is actually observed on the farm.&rdquo;
          </blockquote>
          <p className="text-xs text-slate-400 font-light max-w-2xl mx-auto">
            KE Aqua Farms — The Key to Practical Aquaculture. Technology evaluated by
            farm need, demonstrated in practice, and shared honestly.
          </p>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 7: FINAL CTA & CONTACT FORM
       * ==================================================================== */}
      <section id="contact-section" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Messaging */}
            <motion.div className="lg:col-span-6 space-y-6" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-teal-400" />
                <span>DISCUSS MICRO/NANO BUBBLE TECHNOLOGY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Discuss Advanced Technology for Your Farm
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Whether you want to understand how micro and nano bubble technology
                might relate to your farm conditions, arrange a practical demonstration
                at KE Aqua Farms, or discuss your overall technology approach—speak
                directly with our team.
              </p>

              {/* Direct Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`tel:${CONTACT_CONFIG.phone.value}`}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 transition-all duration-200 group flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Direct Call
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
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
                    <span className="text-[11px] font-mono text-slate-400 block">
                      WhatsApp Enquiries
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Chat on WhatsApp
                    </span>
                  </div>
                </a>
              </div>

              {/* Location Strip */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                <Clock className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">
                    Working Hours & Location:
                  </p>
                  <p className="text-slate-300 font-light">
                    {CONTACT_CONFIG.operatingHours.days} •{" "}
                    {CONTACT_CONFIG.operatingHours.time}
                  </p>
                  <p className="text-slate-400 text-[11px] font-mono">
                    {CONTACT_CONFIG.location.fullAddress}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div className="lg:col-span-6" {...fadeUp(0.25)}>
              <div className="rounded-2xl p-7 bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white">
                    Micro/Nano Bubble Technology Enquiry
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-light">
                    Submit your enquiry below. Our team will contact you directly
                    to discuss your farm&apos;s conditions and technology interests.
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
                      <div className="w-14 h-14 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-7 h-7 text-teal-400" />
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        Enquiry Submitted
                      </h4>
                      <p className="text-sm text-slate-300 font-light">
                        Your message has been forwarded via WhatsApp. Our team
                        will be in touch shortly to discuss your technology
                        enquiry.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="mnb-name"
                            className="text-xs font-mono text-slate-400"
                          >
                            Full Name *
                          </label>
                          <input
                            id="mnb-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label
                            htmlFor="mnb-phone"
                            className="text-xs font-mono text-slate-400"
                          >
                            Phone / WhatsApp *
                          </label>
                          <input
                            id="mnb-phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="mnb-location"
                            className="text-xs font-mono text-slate-400"
                          >
                            Farm Location / District
                          </label>
                          <input
                            id="mnb-location"
                            name="farmLocation"
                            type="text"
                            value={formData.farmLocation}
                            onChange={handleChange}
                            placeholder="District / State"
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label
                            htmlFor="mnb-size"
                            className="text-xs font-mono text-slate-400"
                          >
                            Farm Size (Approx.)
                          </label>
                          <input
                            id="mnb-size"
                            name="farmSize"
                            type="text"
                            value={formData.farmSize}
                            onChange={handleChange}
                            placeholder="e.g. 5 acres, 10 ponds"
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="mnb-message"
                          className="text-xs font-mono text-slate-400"
                        >
                          What would you like to discuss?
                        </label>
                        <textarea
                          id="mnb-message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your farm setup, current aeration approach, and your interest in micro/nano bubble technology..."
                          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-teal-500/20 transition-all duration-200 flex items-center justify-center space-x-2 group"
                      >
                        <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>DISCUSS MICRO/NANO BUBBLE TECHNOLOGY</span>
                      </button>

                      <p className="text-[11px] text-center text-slate-500 font-light">
                        Your enquiry will be sent via WhatsApp for a direct
                        response from our technical team.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Bottom Strip */}
          <motion.div
            className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-cyan-950/60 border border-slate-700 text-center space-y-5"
            {...fadeUp(0.2)}
          >
            <h3 className="text-2xl font-extrabold text-white">
              Contact KE Aqua Farms
            </h3>
            <p className="text-sm text-slate-300 font-light max-w-xl mx-auto">
              For farm visits, technology demonstrations, or general aquaculture
              enquiries—reach our team directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                CONTACT KE AQUA FARMS
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/farm-technology-consulting"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                Farm Technology Consulting
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
