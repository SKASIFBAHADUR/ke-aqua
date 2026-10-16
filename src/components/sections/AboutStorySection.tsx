"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye,
  BookOpen,
  CheckSquare,
  BarChart3,
  TrendingUp,
  HelpCircle,
  ShieldAlert,
  ArrowRight,
  Layers,
  Sparkles,
  ChevronRight,
  Quote,
  Compass,
} from "lucide-react";

// Framer Motion helper
function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  };
}

// Philosophy Diagram Steps
const philosophySteps = [
  {
    step: "01",
    title: "SEE",
    subtitle: "Field Observation",
    icon: Eye,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    desc: "Observe crops, water behavior, feeding responses, and environmental cues daily on active pond dykes.",
  },
  {
    step: "02",
    title: "LEARN",
    subtitle: "Scientific Analysis",
    icon: BookOpen,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    desc: "Combine physical observations with Aqua Pulse lab diagnostics, water chemistry, and microscopic findings.",
  },
  {
    step: "03",
    title: "DO",
    subtitle: "Practical Execution",
    icon: CheckSquare,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    desc: "Implement field-tested feeding, aeration, biosecurity, and water treatment protocols under real conditions.",
  },
  {
    step: "04",
    title: "MEASURE",
    subtitle: "Empirical Tracking",
    icon: BarChart3,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    desc: "Track Feed Conversion Ratio (FCR), Average Daily Growth (ADG), water stability, and operational input costs.",
  },
  {
    step: "05",
    title: "IMPROVE",
    subtitle: "System Refinement",
    icon: TrendingUp,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    desc: "Refine standard operating procedures and share field insights directly with farmers and trainees.",
  },
];

// Practical Learning Loop 5 Questions
const learningLoopQuestions = [
  {
    q: "What are we doing?",
    a: "Operating 30 acres of active commercial growout ponds, testing automated feeders, mechanical aeration, and IoT sensors under real field stress.",
    tag: "Field Infrastructure",
  },
  {
    q: "Why are we doing it?",
    a: "To replace theoretical claims with verified empirical data on what actually improves FCR, water stability, and crop survival under coastal conditions.",
    tag: "Empirical Validation",
  },
  {
    q: "When should it be done?",
    a: "Continuously throughout the culture period — from pre-stocking reservoir treatment through mid-crop feeding adjustments to harvest.",
    tag: "Culture Timeline",
  },
  {
    q: "What does it cost?",
    a: "Tracking true operational inputs — feed, electrical energy, lab reagents, minerals, and labor — to provide realistic economic baselines.",
    tag: "Economic Transparency",
  },
  {
    q: "What result does it produce?",
    a: "Measurable improvements in FCR, stable dissolved oxygen levels, higher crop survival, and repeatable management protocols.",
    tag: "Tangible Outcomes",
  },
];

// Seed to Seafood Value Chain Steps
const valueChainSteps = [
  { name: "Seed (PL)", desc: "Hatchery Screening" },
  { name: "Pond Prep", desc: "Soil & Water Sanitize" },
  { name: "Water Quality", desc: "Lab Monitoring" },
  { name: "Feed Mgmt", desc: "FCR Optimization" },
  { name: "Health Check", desc: "Microscopic Diagnosis" },
  { name: "Farm Operations", desc: "24/7 Field Routines" },
  { name: "Smart Tech", desc: "Auto-Feeders & Sensors" },
  { name: "Financial Ctrl", desc: "Input Cost Tracking" },
  { name: "Harvesting", desc: "Biomass Sampling" },
  { name: "Procurement", desc: "Quality Grading" },
  { name: "Processing", desc: "Cold Chain Value" },
  { name: "Market / Export", desc: "Consumer Value" },
];

export function AboutStorySection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="about" className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ==================================================================== */}
        {/* SECTION HEADER                                                        */}
        {/* ==================================================================== */}
        <div className="max-w-3xl mb-16">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            Our Origin &amp; Brand Story
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            From the Pond to Progress
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Kamatham Enterprises began its aquaculture journey with a strong focus on farmer relationships, practical field support, and responsible business. As our experience developed, we moved deeper into commercial shrimp farming ourselves — understanding aquaculture from the farmer&apos;s side, where every decision has a direct financial and biological impact.
          </motion.p>
        </div>


        {/* ==================================================================== */}
        {/* EDITORIAL NARRATIVE & AUTHENTIC FARM PHOTOGRAPHY                      */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Narrative Story Columns */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Central Idea</span>
              <h3 className="text-2xl font-bold text-white">
                “We Don&apos;t Teach Only From Theory. We Practice It at the Farm.”
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our approach starts directly from commercial farming. We continuously observe crops, monitor water and animal health, evaluate feeding practices, utilize laboratory support, and adopt suitable technologies under active weather and biological conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-cyan-400 block mb-1">Pillar 1: Inputs &amp; Field Support</span>
                <p className="text-slate-300 leading-relaxed">
                  Started with Kamatham Enterprises, building trusted relationships with coastal farmers through quality feeds and healthcare products.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-emerald-400 block mb-1">Pillar 2: Direct Farming</span>
                <p className="text-slate-300 leading-relaxed">
                  Expanded into operating 30 acres of commercial growout ponds, experiencing crop decisions firsthand from pond prep to harvest.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-purple-400 block mb-1">Pillar 3: Lab Diagnostics</span>
                <p className="text-slate-300 leading-relaxed">
                  Established Aqua Pulse Trader&apos;s laboratory to ground farming choices in microbiology, water chemistry, and microscopic diagnostics.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-amber-400 block mb-1">Pillar 4: Integrated Platform</span>
                <p className="text-slate-300 leading-relaxed">
                  KE Aqua Farms unites farming, science, technology, and practical training into an ecosystem for farmer development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Large Authentic Farm Image & Stat Callout */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-5 space-y-4">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              <Image
                src="/assets/pond_to_progress_home.png"
                alt="KE Aqua Farms 30-acre growout pond facility"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur border border-slate-800">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-0.5">Commercial Field Facility</span>
                <p className="text-xs text-slate-200 font-semibold">30-Acre Practical Demonstration Farm · Krishna District, AP</p>
              </div>
            </div>

            {/* Supporting Highlight Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-800/40 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                What we learn from the farm becomes real knowledge shared with farmers, students, and aspiring entrepreneurs.
              </p>
            </div>
          </motion.div>

        </div>


        {/* ==================================================================== */}
        {/* CORE PHILOSOPHY DIAGRAM: SEE → LEARN → DO → MEASURE → IMPROVE         */}
        {/* ==================================================================== */}
        <div className="mb-24">
          <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
              Operational Framework
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Our Core Philosophy in Practice
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              A continuous, data-backed feedback loop that connects field observation to measurable farm improvements.
            </p>
          </motion.div>

          {/* 5-Step Horizontal / Vertical Stepper */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {philosophySteps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  {...fadeUp(0.1 + idx * 0.08)}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between relative group"
                >
                  {/* Step Connector Arrow for Desktop */}
                  {idx < philosophySteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <ChevronRight className="w-5 h-5 text-slate-600" />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold tracking-widest font-mono text-slate-500">{s.step}</span>
                      <div className={`p-2 rounded-lg ${s.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-0.5">{s.title}</h4>
                    <span className="text-[11px] font-semibold text-cyan-400 block mb-2">{s.subtitle}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Training Decision Chain Callout */}
          <motion.div {...fadeUp(0.2)} className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase block">
                Decision Sequence: SEE → LEARN → PRACTICE → UNDERSTAND → DECIDE
              </span>
              <p className="text-sm font-medium text-slate-200">
                “First understand aquaculture. Then understand the risk. Then identify your opportunity. Only then make your investment decision.”
              </p>
            </div>
            <Link
              href="/#learning-philosophy"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors shrink-0 flex items-center gap-1.5"
            >
              Learn From Our Experience <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>


        {/* ==================================================================== */}
        {/* THE PRACTICAL LEARNING LOOP (5 CORE QUESTIONS)                      */}
        {/* ==================================================================== */}
        <div className="mb-24">
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Practical Learning Loop</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">5 Core Operational Questions We Answer</h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {learningLoopQuestions.map((item, idx) => (
              <motion.div
                key={item.q}
                {...fadeUp(0.1 + idx * 0.08)}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider font-mono block mb-2">
                    {item.tag}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">{item.q}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.a}</p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-850 flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                  <span>Question 0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* ==================================================================== */}
        {/* FROM SEED TO SEAFOOD VALUE CHAIN STRIP                              */}
        {/* ==================================================================== */}
        <div className="mb-24">
          <motion.div {...fadeUp(0)} className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Complete Value Chain</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">From Seed to Seafood</h3>
              </div>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline-block">Scroll or explore the 12-stage aquaculture chain</span>
          </motion.div>

          {/* Interactive Stepper Cards */}
          <motion.div {...fadeUp(0.1)} className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
              {valueChainSteps.map((step, idx) => (
                <button
                  key={step.name}
                  onClick={() => setActiveTab(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeTab === idx
                      ? "bg-cyan-500/20 border-cyan-400 text-white shadow-lg"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold block opacity-60 mb-0.5">
                    Stage {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-xs font-bold block truncate">{step.name}</span>
                </button>
              ))}
            </div>

            {/* Active Stage Description Banner */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  Stage {activeTab + 1}: {valueChainSteps[activeTab].name}
                </span>
                <h4 className="text-base font-bold text-white">
                  {valueChainSteps[activeTab].desc} — Key Focus in the Value Chain
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Understanding where individual skills, capital, or business models fit best within aquaculture.
                </p>
              </div>
              <div className="text-xs text-slate-400 italic bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 shrink-0">
                “You don&apos;t necessarily need to own a pond to become an aquaculture entrepreneur.”
              </div>
            </div>
          </motion.div>
        </div>


        {/* ==================================================================== */}
        {/* CORE PHILOSOPHY QUOTE BLOCK & STRICT DISCLAIMERS                    */}
        {/* ==================================================================== */}
        <motion.div {...fadeUp(0.1)} className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 inline-block">
                <Quote className="w-6 h-6" />
              </div>
              <blockquote className="text-xl sm:text-2xl font-bold text-white leading-snug">
                “Every crop is a learning opportunity.<br className="hidden sm:inline" />
                Every challenge should improve the system.<br className="hidden sm:inline" />
                Every experience should create value for another farmer.”
              </blockquote>
              <p className="text-xs text-slate-400 font-mono">
                — The KE Aqua Group Founding Principle
              </p>
            </div>

            {/* Strict Non-Guarantee Disclaimer Card */}
            <div className="lg:w-96 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shrink-0">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" /> Responsible Disclosure
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                KE Aqua Farms provides practical technical training, field support, and laboratory diagnostics based on actual operational experience. We do not advertise guaranteed returns, risk-free investments, or guaranteed disease prevention.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
