"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Compass, GraduationCap, PhoneCall, ShieldCheck, Waves, Cpu, Award } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-primary text-secondary">
      {/* Background Media with Real Farm Imagery */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="relative w-full h-full"
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.08 }}
          animate={shouldReduceMotion ? { scale: 1 } : { scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
        >
          {/* Real Farm Photography / Video Background */}
          <video
            autoPlay
            muted
            playsInline
            onEnded={(e) => {
              const video = e.currentTarget;
              const currentSrc = video.getAttribute("src");
              const nextSrc = currentSrc === "/videos/home_hero_1.MP4" ? "/videos/home_hero_2.MP4" : "/videos/home_hero_1.MP4";
              video.setAttribute("src", nextSrc);
              video.play();
            }}
            src="/videos/home_hero_1.MP4"
            className="w-full h-full object-cover object-center lg:object-right"
          />
        </motion.div>

        {/* Cinematic Directional Overlays Removed to keep video fully visible */}
        {/* Soft bottom vignette into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content Area */}
      <div className="container-width relative z-20 pt-10 pb-12 md:pt-16 md:pb-16 flex-1 flex flex-col justify-center items-center text-center">
        <motion.div
          className="max-w-3xl mx-auto flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow / Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-aqua/20 text-aqua-light border border-aqua/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
              30-Acre Working Aquaculture Farm
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-surface/10 text-white/90 border border-white/10 backdrop-blur-md">
              <Waves className="w-3.5 h-3.5 text-aqua-light" />
              From Seed to Seafood
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-surface/10 text-white/90 border border-white/10 backdrop-blur-md">
              <Cpu className="w-3.5 h-3.5 text-green-light" />
              Smart Technology & IoT
            </span>
          </motion.div>

          {/* Core Branding */}
          <motion.div variants={itemVariants} className="mb-3">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-aqua-light">
              KE Aqua Farms • The Key to Practical Aquaculture
            </p>
          </motion.div>

          {/* Primary Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-white font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-5"
          >
            PRACTICAL AQUACULTURE.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-light via-teal-200 to-white">
              SCIENTIFIC APPROACH.
            </span>
            <br />
            SUSTAINABLE GROWTH.
          </motion.h1>

          {/* Supporting Master Brief Message */}
          <motion.p
            variants={itemVariants}
            className="text-white/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8"
          >
            At KE Aqua Farms, we combine real commercial farming experience, scientific monitoring, smart farm technology, and practical training to help build stronger farmers and responsible aquaculture entrepreneurs.
          </motion.p>



          {/* Source Tagline Sub-strip */}
          <motion.div
            variants={itemVariants}
            className="pt-4 border-t border-white/15 w-full flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-white/75 font-medium"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-light shrink-0" />
              Traditional Knowledge
            </span>
            <span className="text-white/30 hidden xs:inline">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-aqua-light shrink-0" />
              Scientific Farming
            </span>
            <span className="text-white/30 hidden xs:inline">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-aqua shrink-0" />
              Advanced Technology
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Credibility / Positioning Strip Beneath the Hero */}
      <div className="relative z-20 border-t border-white/15 bg-primary-light/95 backdrop-blur-md">
        <div className="container-width py-4 sm:py-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Source Slogan */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-aqua/15 text-aqua border border-aqua/30">
                <Award className="w-5 h-5 text-aqua-light" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-aqua-light font-semibold">
                  Farmer Development Initiative (Developing)
                </p>
                <p className="text-xs sm:text-sm font-display font-medium text-white/90">
                  Learn Practically. Farm Scientifically. Grow Profitably.
                </p>
              </div>
            </div>

            {/* Quick Farm Capabilities Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full lg:w-auto text-center">
              <div className="bg-white/5 border border-white/10 rounded-md px-3 py-2">
                <span className="block text-base sm:text-lg font-bold text-white font-display">30 Acres</span>
                <span className="block text-[0.68rem] text-white/70 uppercase tracking-wider">Working Farm</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-md px-3 py-2">
                <span className="block text-base sm:text-lg font-bold text-white font-display">Aqua Pulse</span>
                <span className="block text-[0.68rem] text-white/70 uppercase tracking-wider">Water & Soil Lab</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-md px-3 py-2">
                <span className="block text-base sm:text-lg font-bold text-white font-display">IoT & Auto</span>
                <span className="block text-[0.68rem] text-white/70 uppercase tracking-wider">Smart Feeders</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-md px-3 py-2">
                <span className="block text-base sm:text-lg font-bold text-white font-display">AP Coast</span>
                <span className="block text-[0.68rem] text-white/70 uppercase tracking-wider">Krishna District</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
