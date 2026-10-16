"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Target,
  FlaskConical,
  Cpu,
  Users,
  Lightbulb,
} from "lucide-react";

// 5 Visual Experience Cards strictly supported by the source
const experienceCards = [
  {
    id: "farm-exposure",
    number: "01",
    title: "Real Farm Exposure",
    tagline: "Commercial Pond-Side Learning",
    summary: "Learn in real commercial aquaculture conditions on an active 30-acre growout farm.",
    description:
      "Trainees and visiting farmers don't sit in isolated classrooms. You step onto active pond dykes, observe daily feeding routines, handle water quality testing kits, and see real operational decision-making under actual coastal weather stress.",
    icon: Compass,
    image: "/assets/svc-farm-ops.jpg",
    accentColor: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    keyTakeaways: [
      "Exposure to 30-acre active commercial growout ponds",
      "Real-time observation of weather, salinity, and temperature shifts",
      "Hands-on practice with daily farm management routines",
    ],
  },
  {
    id: "practical-decisions",
    number: "02",
    title: "Practical Decision Making",
    tagline: "The 5 Core Operational Principles",
    summary: "Understand what is done, why it is done, when it is done, what it costs, and what result it produces.",
    description:
      "Every farm action has a financial and biological impact. Our training structures every routine around five core questions: What action to take, Why it is necessary, When to execute, What inputs it consumes, and What empirical yield result it produces.",
    icon: Target,
    image: "/assets/svc-monitoring.jpg",
    accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    keyTakeaways: [
      "What action is needed under specific pond conditions",
      "Why it works biologically and what inputs it consumes",
      "What empirical FCR or water quality result it produces",
    ],
  },
  {
    id: "science-observation",
    number: "03",
    title: "Science + Observation",
    tagline: "Data-Backed Diagnostic Support",
    summary: "Understand water quality, shrimp health, feeding, and farm decisions through scientific monitoring.",
    description:
      "Replace traditional guesswork with laboratory diagnostics. Connect physical pond observations (water color, feeding behavior) with Aqua Pulse lab data (microscopic tissue screening, TCBS Vibrio counts, and chemical titration).",
    icon: FlaskConical,
    image: "/assets/svc-lab-bg.jpg",
    accentColor: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    keyTakeaways: [
      "Microscopic gut fullness & hepatopancreas inspection",
      "TCBS agar plating for Total Vibrio colony counting",
      "Daily chemical titration for pH, TAN, Nitrite & Alkalinity",
    ],
  },
  {
    id: "tech-in-practice",
    number: "04",
    title: "Technology in Practice",
    tagline: "Solving Real Field Problems",
    summary: "Understand technology by connecting it directly to actual commercial farm challenges.",
    description:
      "We don't evaluate technology as fancy gadgets. We test auto-feeders to solve FCR wastage, deploy paddlewheel aerators to prevent nighttime DO crashes, and evaluate IoT probes to catch sudden pH swings before mortality occurs.",
    icon: Cpu,
    image: "/assets/svc-tech-bg.jpg",
    accentColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    keyTakeaways: [
      "Auto-feeders deployed to regulate hourly ration broadcasting",
      "Aeration management designed to maintain stable DO > 4.5 ppm",
      "IoT sensor nodes logging parameter drift in real time",
    ],
  },
  {
    id: "entrepreneur-dev",
    number: "05",
    title: "Farmer & Entrepreneur Development",
    tagline: "Unlocking the Complete Value Chain",
    summary: "Understand the aquaculture value chain beyond simply owning a pond.",
    description:
      "Aquaculture is far more than owning a growout pond. We help aspiring entrepreneurs and farmers identify where they fit best across the complete value chain — from seed screening and lab services to farm technology, input supply, and seafood processing.",
    icon: Users,
    image: "/assets/svc-training-bg.jpg",
    accentColor: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    keyTakeaways: [
      "Understanding risks and opportunities before capital investment",
      "Identifying niche business roles across the 12 value-chain stages",
      "Building practical discipline for sustainable business growth",
    ],
  },
];

export function LearningPhilosophySection() {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const activeCard = experienceCards[activeCardIndex];

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev + 1) % experienceCards.length);
  };

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev - 1 + experienceCards.length) % experienceCards.length);
  };

  return (
    <section id="learning-philosophy" className="py-24 bg-[#0A192F] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ==================================================================== */}
        {/* SECTION HEADER                                                        */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Authentic Learning Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Trust Built on Commercial Substance
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We do not publish fabricated 5-star ratings or stock client testimonials. Instead, our reputation is built on <span className="text-cyan-400 font-semibold">real 30-acre commercial farming</span>, rigorous laboratory diagnostics, and hands-on practical learning.
          </p>
        </div>


        {/* ==================================================================== */}
        {/* EDITORIAL EXPERIENCE SHOWCASE (2-COLUMN CAROUSEL/FEATURE BLOCK)       */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: 5 Pillar Selector Navigation */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2 px-1">
                Explore The 5 Learning Pillars
              </span>
              {experienceCards.map((card, idx) => {
                const Icon = card.icon;
                const isActive = activeCardIndex === idx;
                return (
                  <button
                    key={card.id}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                      isActive
                        ? "bg-[#112240] border-cyan-400 shadow-xl shadow-cyan-950/40"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl border ${card.badgeColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 block">
                          Pillar {card.number}
                        </span>
                        <h4 className={`text-sm font-bold transition-colors ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                          {card.title}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-cyan-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"}`} />
                  </button>
                );
              })}
            </div>

            {/* Stepper controls for mobile/tablet */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-800 text-xs">
              <span className="text-slate-400 font-mono">Pillar {activeCardIndex + 1} of {experienceCards.length}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="Previous pillar"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="Next pillar"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Active Experience Card Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full rounded-3xl bg-[#112240] border border-slate-800 p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
              >
                {/* Featured Image Banner */}
                <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-700/80 mb-6 group">
                  <Image
                    src={activeCard.image}
                    alt={activeCard.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-lg backdrop-blur text-xs font-bold font-mono border ${activeCard.badgeColor}`}>
                      {activeCard.tagline}
                    </span>
                  </div>

                  {/* Summary overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/90 backdrop-blur border border-slate-800 text-xs text-slate-200">
                    <span className="font-bold text-cyan-400 block mb-0.5">Core Focus:</span>
                    {activeCard.summary}
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {activeCard.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeCard.description}
                  </p>
                </div>

                {/* Key Field Takeaways */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800 mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    What You Learn &amp; Experience:
                  </span>
                  {activeCard.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Action Button */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    Practical Learning Pillar #{activeCard.number}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    Explore Our Farm <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>


        {/* ==================================================================== */}
        {/* SUBSTANCE OVER FABRICATED REVIEWS TRUST BANNER                      */}
        {/* ==================================================================== */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/60 to-slate-900 border border-slate-800 p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 inline-flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Why We Don&apos;t Publish Manufactured Testimonials
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In commercial aquaculture, every pond, water source, and stocking season carries distinct biological variables. We believe farmers and entrepreneurs deserve real technical exposure, field data, and transparent risk management — not promotional marketing claims.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 30-Acre Working Farm
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Aqua Pulse Diagnostics
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero Guaranteed Claims
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
