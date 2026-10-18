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
  Layers,
  MessageSquare,
  Phone,
  ShieldCheck,
  Target,
  TrendingUp,
  Waves,
  Activity,
  BookOpen,
  BarChart3,
  Thermometer,
  Wind,
  Microscope,
  FileSpreadsheet,
  Clock,
  HelpCircle,
  Droplets,
  Lightbulb,
  Zap,
  Wrench,
  Gauge,
  Radio,
  Database,
  Signal,
  ScanLine,
  AlertTriangle,
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
 * DATA — MONITORING AREAS (Section 2)
 * ==================================================================== */
const monitoringAreas = [
  {
    id: "water-quality",
    title: "Water-Quality Monitoring",
    desc: "Sensor systems can support the measurement and logging of water parameters such as pH, dissolved oxygen, temperature, and salinity across pond environments.",
    icon: Droplets,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "farm-monitoring",
    title: "Farm Monitoring",
    desc: "Technology-assisted observation can support ongoing awareness of pond and farm conditions as a complement to direct daily observation by farm staff.",
    icon: Eye,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "aeration-observation",
    title: "Aeration Observation",
    desc: "Sensor integration can assist in tracking aerator operation periods and supporting data-informed aeration planning alongside physical equipment checks.",
    icon: Wind,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    id: "farm-data-records",
    title: "Farm Data & Records",
    desc: "Digital logging of sensor readings supports structured farm recordkeeping and provides a basis for reviewing trends over time in support of management decisions.",
    icon: Database,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
];

/* ====================================================================
 * DATA — TECHNOLOGY FRAMEWORK (Section 3: 5 Steps)
 * ==================================================================== */
const technologyFrameworkSteps = [
  {
    step: "01",
    label: "FARM PROBLEM",
    title: "Identify the Farm Need",
    desc: "Understanding what farm challenge or information gap the technology is intended to address.",
    icon: Target,
  },
  {
    step: "02",
    label: "TECHNOLOGY",
    title: "Evaluate Technology Options",
    desc: "Assessing available sensor systems and monitoring tools according to actual farm suitability and confirmed capability.",
    icon: Cpu,
  },
  {
    step: "03",
    label: "OUR PRACTICE",
    title: "Field Application",
    desc: "Deploying technology within the context of KE Aqua's 30-acre working farm and observed operational conditions.",
    icon: Activity,
  },
  {
    step: "04",
    label: "OBSERVATION",
    title: "Farmer Judgment Remains Central",
    desc: "Technology-generated data is assessed alongside direct farm observation—sensors complement, not replace, experienced farmer awareness.",
    icon: Eye,
  },
  {
    step: "05",
    label: "POTENTIAL BENEFIT",
    title: "Better-Informed Management",
    desc: "Data and observation together support more informed farm decisions. Outcomes depend on actual farm conditions and consistent management.",
    icon: TrendingUp,
  },
];

/* ====================================================================
 * DATA — PROGRESSION MATRIX (Section 5)
 * ==================================================================== */
const progressionMatrix = [
  {
    tier: "TRADITIONAL",
    title: "Manual Observation",
    subtitle: "Experience-Driven Field Practice",
    desc: "Farm management driven by direct observation, hands-on monitoring, and accumulated practical experience. The foundation of all good aquaculture.",
    icon: Compass,
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    points: [
      "Daily pond walks and visual checks",
      "Manual water parameter measurement",
      "Experience-based feeding adjustments",
      "Handwritten farm logbook records",
    ],
  },
  {
    tier: "SCIENTIFIC",
    title: "Laboratory Monitoring",
    subtitle: "Aqua Pulse Water & Health Testing",
    desc: "Regular water-quality laboratory testing, microscopic shrimp health observation, and structured recordkeeping for informed farm decisions.",
    icon: Microscope,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    points: [
      "Regular chemical water parameter testing",
      "Microscopic shrimp health observation",
      "Structured farm data and trend records",
      "Lab-supported management adjustments",
    ],
  },
  {
    tier: "ADVANCED",
    title: "Sensor-Assisted Monitoring",
    subtitle: "Technology Supporting Farm Awareness",
    desc: "Digital sensor systems supporting additional data collection alongside existing observation and laboratory practice. Technology evaluated for actual farm benefit.",
    icon: Signal,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    points: [
      "Digital probes supporting parameter logging",
      "Sensor data reviewed alongside observation",
      "Technology applied to confirmed farm needs",
      "Farmer judgment remains central to decisions",
    ],
  },
];

/* ====================================================================
 * DATA — RELATED SERVICES (Section 6)
 * ==================================================================== */
const relatedServices = [
  {
    title: "Farm Technology Consulting",
    subtitle: "Practical Technology Evaluation",
    desc: "Evaluating aquaculture technology from actual farm needs—not as a product catalogue. Technology should solve a farm problem.",
    href: "/services/farm-technology-consulting",
    icon: Cpu,
    color: "text-cyan-400",
  },
  {
    title: "Water Quality Testing",
    subtitle: "Aqua Pulse Chemical Analysis",
    desc: "Laboratory testing supporting water parameter awareness for better-informed farm management decisions.",
    href: "/services/water-quality-testing",
    icon: FlaskConical,
    color: "text-blue-400",
  },
  {
    title: "Periodic Farm Monitoring",
    subtitle: "Structured Field Observation Visits",
    desc: "Regular pond observation visits supporting ongoing awareness of farm and shrimp conditions.",
    href: "/services/periodic-farm-monitoring",
    icon: Activity,
    color: "text-emerald-400",
  },
  {
    title: "Aeration Management",
    subtitle: "Practical Oxygen Support Planning",
    desc: "Aeration planning based on farm conditions, observation and responsible equipment management.",
    href: "/services/aeration-management",
    icon: Wind,
    color: "text-purple-400",
  },
  {
    title: "Auto Feeder Solutions",
    subtitle: "Technology-Assisted Feed Distribution",
    desc: "Auto feeders evaluated within KE Aqua's practical approach to feeding management and farm observation.",
    href: "/services/auto-feeder-solutions",
    icon: Zap,
    color: "text-amber-400",
  },
];

/* ====================================================================
 * CONTACT FORM STATE TYPE
 * ==================================================================== */
interface FormState {
  name: string;
  phone: string;
  farmLocation: string;
  message: string;
}

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function IoTSensorMonitoringPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    farmLocation: "",
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
      `IoT/Sensor Monitoring Enquiry\n\nName: ${formData.name}\nPhone: ${formData.phone}\nFarm Location: ${formData.farmLocation}\nMessage: ${formData.message}`
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-900/15 via-cyan-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1300px] right-0 w-96 h-96 bg-cyan-900/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2600px] left-0 w-96 h-96 bg-purple-900/15 blur-3xl pointer-events-none -z-10" />

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
            <Link
              href="/#services"
              className="hover:text-cyan-400 transition-colors"
            >
              Capabilities
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="text-purple-400 font-medium whitespace-nowrap">
              IoT & Sensor Monitoring
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp(0.1)}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase">
                <Signal className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                <span>KE AQUA FARMS • IoT & SENSOR MONITORING</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Turning Farm Conditions{" "}
                <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-emerald-400">
                  Into Useful Information
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Smart aquaculture begins with better information.{" "}
                <strong className="text-white font-semibold">KE Aqua Farms</strong>{" "}
                evaluates and applies sensor-based monitoring technologies within our
                30-acre working farm to understand how technology can assist farm
                observation, data collection, and management awareness—always
                complementing, never replacing, the farmer's own judgment.
              </p>

              {/* Quick Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "Water Parameter Sensing",
                  "Farm Data Logging",
                  "Aeration Observation",
                  "Farmer-Centred Approach",
                  "Technology Evaluation",
                  "Practical Farm Application",
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
                  <Signal className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>DISCUSS SENSOR MONITORING</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#monitoring-areas"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all duration-200"
                >
                  <Eye className="w-4 h-4 mr-2 text-purple-400" />
                  <span>Explore Monitoring Areas</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div className="lg:col-span-5 relative" {...fadeUp(0.25)}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-purple-950/50 group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/assets/svc-tech-bg.jpg"
                    alt="KE Aqua Farms — Sensor and Technology-Assisted Farm Monitoring"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Overlaid Card Info */}
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wide">
                      TECHNOLOGY-ASSISTED MONITORING
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono">
                      IoT & SENSORS
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    &ldquo;Technology options and sensor capabilities should be confirmed
                    according to the actual systems available and demonstrated by
                    KE Aqua.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <Signal className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        KE Aqua Farms Practice
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Smart Aquaculture — 30-Acre Working Farm
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
       * SECTION 1: WHY SENSOR MONITORING
       * ==================================================================== */}
      <section className="py-20 border-b border-slate-800/80 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-4"
            {...fadeUp(0.1)}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <Signal className="w-3.5 h-3.5 text-purple-400" />
              <span>TECHNOLOGY-ASSISTED INFORMATION COLLECTION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Why Sensor Monitoring Matters in Aquaculture
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Aquaculture farm management depends on timely, reliable information.
              Water conditions, shrimp behaviour, feeding response, and aeration
              performance are all subject to change—often rapidly and sometimes during
              periods when direct manual observation is less frequent, such as at night.
            </p>
          </motion.div>

          {/* 3 Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.15)}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Technology-Assisted Data Collection
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sensor systems can assist in collecting parameter data that complements
                regular laboratory testing and direct farm observation. The value of
                this data depends on how it is interpreted and applied in farm management.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.25)}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Complementing Farmer Observation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Technology does not replace the farmer's direct observation, experience,
                and judgment. Sensor data is most valuable when reviewed alongside
                physical pond checks and an understanding of overall farm conditions.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 space-y-4"
              {...fadeUp(0.35)}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Supporting Better-Informed Decisions
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Collected data, interpreted in context with farm experience and
                observation, can support more consistent and informed management
                decisions. Outcomes depend on actual conditions and consistent application.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: MONITORING AREAS (GRID)
       * ==================================================================== */}
      <section
        id="monitoring-areas"
        className="py-24 border-b border-slate-800/80 bg-slate-950 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div className="space-y-3 max-w-2xl" {...fadeUp(0.1)}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
                <ScanLine className="w-3.5 h-3.5 text-purple-400" />
                <span>MONITORING AREAS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Key Areas of Sensor-Assisted Monitoring
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Areas where sensor-based technology can complement farm monitoring
                practices, subject to confirmed available systems.
              </p>
            </motion.div>

            <motion.div className="flex-shrink-0" {...fadeUp(0.2)}>
              <a
                href="#contact-section"
                className="inline-flex items-center text-xs font-mono text-purple-400 hover:text-purple-300 font-semibold group"
              >
                <span>DISCUSS SENSOR MONITORING</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitoringAreas.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 space-y-3 flex flex-col justify-between"
                  {...fadeUp(0.05 + idx * 0.07)}
                >
                  <div className="space-y-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-slate-950 border ${item.bg} flex items-center justify-center ${item.color}`}
                    >
                      <ItemIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Availability Note */}
          <motion.div
            className="mt-10 p-5 rounded-2xl bg-amber-950/20 border border-amber-700/30 flex items-start space-x-4"
            {...fadeUp(0.3)}
          >
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200 leading-relaxed">
              <strong className="font-semibold text-amber-300">Note:</strong>{" "}
              Technology options and sensor capabilities should be confirmed according to
              the actual systems available and demonstrated by KE Aqua. We do not
              publish fabricated hardware specifications, accuracy figures, or
              automation guarantees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: TECHNOLOGY FRAMEWORK (5 STEPS)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center space-y-4 mb-16"
            {...fadeUp(0.1)}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>TECHNOLOGY FRAMEWORK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Farm Problem → Technology → Practice → Observation → Benefit
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              How KE Aqua evaluates and applies sensor technology within the context
              of real farm needs and practical observation.
            </p>
          </motion.div>

          {/* 5-Step Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {technologyFrameworkSteps.map((st, idx) => {
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
                      <span className="text-xs font-mono text-slate-400">
                        {st.step}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400">
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white">{st.title}</h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  {/* Connector arrow (not on last) */}
                  {idx < technologyFrameworkSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 4: DATA + DECISIONS
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-4 mb-16"
            {...fadeUp(0.1)}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>DATA + DECISIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technology Supports Decisions — It Does Not Replace Farmer Judgment
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Sensor data is one input among many. Better farm decisions come from
              combining multiple sources of information with experience and context.
            </p>
          </motion.div>

          {/* Equation Visual */}
          <motion.div
            className="max-w-5xl mx-auto"
            {...fadeUp(0.15)}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              {[
                {
                  label: "DATA",
                  sub: "Sensor readings & parameter logs",
                  icon: Database,
                  color: "text-purple-400",
                  bg: "bg-purple-500/10 border-purple-500/30",
                },
                {
                  label: "OBSERVATION",
                  sub: "Direct pond & shrimp inspection",
                  icon: Eye,
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10 border-cyan-500/30",
                },
                {
                  label: "RECORDS",
                  sub: "Logbooks & historical farm data",
                  icon: BookOpen,
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10 border-emerald-500/30",
                },
                {
                  label: "FARM EXPERIENCE",
                  sub: "Accumulated practical knowledge",
                  icon: Compass,
                  color: "text-amber-400",
                  bg: "bg-amber-500/10 border-amber-500/30",
                },
              ].map((item, idx, arr) => {
                const ItemIcon = item.icon;
                return (
                  <React.Fragment key={item.label}>
                    <motion.div
                      className={`p-5 rounded-2xl bg-slate-900 border ${item.bg} space-y-3 text-center`}
                      {...fadeUp(0.1 + idx * 0.08)}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mx-auto`}
                      >
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <p
                        className={`text-sm font-bold font-mono ${item.color}`}
                      >
                        {item.label}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.sub}
                      </p>
                    </motion.div>

                    {idx < arr.length - 1 && (
                      <div className="hidden md:flex items-center justify-center text-slate-400 font-bold text-xl col-span-0">
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Equals Result */}
            <motion.div
              className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-950/50 via-slate-900 to-emerald-950/50 border border-slate-700 text-center space-y-3"
              {...fadeUp(0.35)}
            >
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                Combined together
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                = Better-Informed Farm Management
              </h3>
              <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed">
                No single element guarantees better outcomes. The combination of
                good data, consistent observation, detailed records and practical
                farm experience supports more informed decisions—and better decisions
                generally lead to better farm management over time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: TRADITIONAL + SCIENTIFIC + ADVANCED PROGRESSION
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-900/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>MONITORING APPROACHES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Traditional + Scientific + Advanced Monitoring
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Sensors complement rather than replace conventional observation and
              laboratory practice. Each approach has its place in a well-managed farm.
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
                      <span
                        className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${tier.border} ${tier.color}`}
                      >
                        {tier.tier}
                      </span>
                      <TierIcon className={`w-5 h-5 ${tier.color}`} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {tier.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {tier.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {tier.desc}
                    </p>

                    <ul className="space-y-2 pt-3 border-t border-slate-800/80">
                      {tier.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-center space-x-2 text-xs text-slate-300"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 ${tier.color} flex-shrink-0`}
                          />
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
       * SECTION 6: RELATED SERVICES (CROSS-LINKS)
       * ==================================================================== */}
      <section className="py-24 border-b border-slate-800/80 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>RELATED CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Connected Services & Technology Areas
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              IoT and sensor monitoring works alongside other KE Aqua capabilities
              and service areas within a broader farm management approach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((svc, idx) => {
              const SvcIcon = svc.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                  {...fadeUp(0.05 + idx * 0.05)}
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                      <SvcIcon className={`w-5 h-5 ${svc.color}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        {svc.subtitle}
                      </p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <Link
                    href={svc.href}
                    className="inline-flex items-center text-xs font-mono text-purple-400 hover:text-purple-300 font-semibold pt-3 border-t border-slate-800"
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
       * RESPONSIBLE STATEMENT
       * ==================================================================== */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Responsible Technology Adoption
          </h2>
          <blockquote className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 text-sm sm:text-base font-serif italic max-w-3xl mx-auto">
            &ldquo;Technology options and sensor capabilities should be confirmed
            according to the actual systems available and demonstrated by KE Aqua.
            We do not publish fabricated hardware specifications, accuracy figures,
            or automation claims.&rdquo;
          </blockquote>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto">
            KE Aqua evaluates technology from the perspective of practical farm
            benefit—not as a product catalogue. Every technology we discuss is
            evaluated on our own 30-acre working farm before any recommendation is made.
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
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                <span>DISCUSS FARM MONITORING TECHNOLOGY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Discuss IoT & Sensor Monitoring for Your Farm
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you want to understand how sensor technology might support
                your farm monitoring practice, evaluate specific technology for your
                farm conditions, or discuss how data and observation work together—
                speak directly with the KE Aqua Farms team.
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
                    <span className="text-xs font-mono text-slate-400 block">
                      Direct Call
                    </span>
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
                    <span className="text-xs font-mono text-slate-400 block">
                      WhatsApp Enquiries
                    </span>
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
                  <p className="font-semibold text-white">
                    Working Hours & Location:
                  </p>
                  <p className="text-slate-300">
                    {CONTACT_CONFIG.operatingHours.days} •{" "}
                    {CONTACT_CONFIG.operatingHours.time}
                  </p>
                  <p className="text-slate-400 text-xs font-mono">
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
                    IoT / Sensor Monitoring Enquiry
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Submit your enquiry below. Our team will contact you directly to discuss your farm&apos;s monitoring needs.
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
                      <h4 className="text-lg font-bold text-white">
                        Enquiry Submitted
                      </h4>
                      <p className="text-sm text-slate-300">
                        Your message has been forwarded via WhatsApp. Our team
                        will be in touch shortly to discuss your farm&apos;s
                        monitoring needs.
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
                            htmlFor="iot-name"
                            className="text-xs font-mono text-slate-400"
                          >
                            Full Name *
                          </label>
                          <input
                            id="iot-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label
                            htmlFor="iot-phone"
                            className="text-xs font-mono text-slate-400"
                          >
                            Phone / WhatsApp *
                          </label>
                          <input
                            id="iot-phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="iot-location"
                          className="text-xs font-mono text-slate-400"
                        >
                          Farm Location / District
                        </label>
                        <input
                          id="iot-location"
                          name="farmLocation"
                          type="text"
                          value={formData.farmLocation}
                          onChange={handleChange}
                          placeholder="District / State"
                          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="iot-message"
                          className="text-xs font-mono text-slate-400"
                        >
                          What would you like to discuss?
                        </label>
                        <textarea
                          id="iot-message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your farm monitoring needs, current setup, or specific questions about sensor technology..."
                          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-purple-500/20 transition-all duration-200 flex items-center justify-center space-x-2 group"
                      >
                        <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>DISCUSS FARM MONITORING TECHNOLOGY</span>
                      </button>

                      <p className="text-xs text-center text-slate-400 font-normal">
                        Your enquiry will be sent via WhatsApp for a direct response
                        from our technical team.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA Strip */}
          <motion.div
            className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-cyan-950/60 border border-slate-700 text-center space-y-5"
            {...fadeUp(0.2)}
          >
            <h3 className="text-2xl font-extrabold text-white">
              Contact KE Aqua Farms
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              For farm visits, detailed technology discussions, or general aquaculture
              enquiries—reach our team directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-sm shadow-lg shadow-purple-500/20 transition-all"
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
