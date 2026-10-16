"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  Phone,
  MessageSquare,
  Truck,
  HeartHandshake,
  Clock,
  HelpCircle,
  AlertTriangle,
  Leaf,
  Droplets,
  Sprout,
  Users,
  Compass,
  GraduationCap,
  FlaskConical,
  Activity,
  Award,
  Building,
  Info,
  Check,
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
 * FARMER SUPPORT PILLARS (Section 2)
 * ==================================================================== */
const supportPillars = [
  {
    title: "Quality Inputs Sourcing",
    desc: "Sourcing verified feeds, probiotics, minerals, and farm consumables to support sustainable pond management.",
    icon: Package,
  },
  {
    title: "Reliable Supply & Logistics",
    desc: "Ensuring inputs reach farms on schedule during critical stocking, grow-out, and weather transitions.",
    icon: Truck,
  },
  {
    title: "Technical Guidance & Observation",
    desc: "Connecting product usage with actual pond water conditions, biomass, and feeding responses for responsible use.",
    icon: Compass,
  },
  {
    title: "Responsible Input Training",
    desc: "Educating farmers on proper dosage, storage, biosecurity protocols, and antibiotic-free culture practices.",
    icon: GraduationCap,
  },
  {
    title: "Timely Availability",
    desc: "Maintaining local availability of essential crop inputs to avoid operational delays during critical crop phases.",
    icon: Clock,
  },
  {
    title: "After-Sales Field Support",
    desc: "Standing by farmers with technical advisory and field observation after product delivery.",
    icon: HeartHandshake,
  },
];

/* ====================================================================
 * PRODUCT CATEGORIES (Section 3 - Flexible Cards, No Invented Brands)
 * ==================================================================== */
const productCategories = [
  {
    id: "feed",
    title: "Formulated Feed & Nutrition",
    badge: "Feed Category",
    shortDesc: "High-grade feeds designed for larval, juvenile, and grow-out shrimp culture stages.",
    points: [
      "Pellet size and stability suited for automated & tray feeding.",
      "Nutritional formulations supporting growth & immune health.",
      "Guidance on feed ration management to reduce wastage.",
    ],
    icon: Layers,
    accent: "from-amber-500/20 to-emerald-500/20",
    borderColor: "border-amber-500/30",
  },
  {
    id: "health",
    title: "Aquaculture Health Support",
    badge: "Healthcare Category",
    shortDesc: "Water conditioners, soil treatment products, probiotics, and mineral supplements.",
    points: [
      "Soil & water probiotics for organic load management.",
      "Essential mineral mixtures for molting & shell strength.",
      "Biosecurity sanitizers & eco-friendly water conditioners.",
    ],
    icon: Sparkles,
    accent: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/30",
  },
  {
    id: "farm-inputs",
    title: "Essential Farm Inputs",
    badge: "Consumables Category",
    shortDesc: "Biosecurity consumables, sampling nets, testing reagents, and pond management accessories.",
    points: [
      "Pond preparation inputs and lime/mineral supplements.",
      "Water testing reagents for daily field parameter checks.",
      "Biosecurity mesh, crab fencing, and protective netting.",
    ],
    icon: Sprout,
    accent: "from-emerald-500/20 to-blue-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    id: "other",
    title: "Other Confirmed Products",
    badge: "Equipment & Accessories",
    shortDesc: "Aerator spare parts, auto-feeder accessories, and seasonal farm consumables.",
    points: [
      "Paddlewheel aerator impellers, gears, and motor covers.",
      "Auto-feeder spare components and power accessories.",
      "Contact Kamatham Enterprises for specific brand availability.",
    ],
    icon: Package,
    accent: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/30",
  },
];

/* ====================================================================
 * RESPONSIBLE USAGE PILLARS (Section 6)
 * ==================================================================== */
const responsibleUsageItems = [
  {
    title: "Responsible Input Sourcing",
    desc: "Recommending only quality-verified inputs suitable for eco-conscious aquaculture.",
    icon: Leaf,
  },
  {
    title: "Antibiotic Awareness",
    desc: "Strict adherence to antibiotic-free culture protocols to ensure food safety and export compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Food Safety & Consumer Trust",
    desc: "Supporting residue-free shrimp production that meets domestic and international market standards.",
    icon: Award,
  },
  {
    title: "Environmental Stewardship",
    desc: "Promoting pond inputs that protect soil fertility, water discharge quality, and surrounding ecosystems.",
    icon: Droplets,
  },
];

/* ====================================================================
 * INQUIRY FLOW STEPS (Section 8)
 * ==================================================================== */
const inquirySteps = [
  {
    num: "01",
    title: "Identify Requirement",
    text: "Determine your farm's current input needs—feed quantity, mineral support, or water treatment products.",
  },
  {
    num: "02",
    title: "Contact Kamatham Enterprises",
    text: "Reach out via our inquiry form or direct WhatsApp line to connect with our inputs team.",
  },
  {
    num: "03",
    title: "Discuss Availability & Guidance",
    text: "Discuss current product stock, recommended dosages based on pond conditions, and delivery schedules.",
  },
  {
    num: "04",
    title: "Receive Product Information",
    text: "Get clear product details, pricing availability, and field guidance directly from our team.",
  },
];

/* ====================================================================
 * MAIN COMPONENT
 * ==================================================================== */
export function AquacultureInputsProductsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    farmerType: "Shrimp Farmer",
    inputCategory: "Formulated Feed & Nutrition",
    location: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Kamatham Enterprises Team! I am enquiring about Aquaculture Inputs & Farmer Support.
- Name: ${formData.name}
- Phone: ${formData.phone}
- Category: ${formData.farmerType}
- Input Interest: ${formData.inputCategory}
- Location: ${formData.location || "Not specified"}
- Note: ${formData.message || "Please share current product availability and details."}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CONTACT_CONFIG.whatsapp.number}?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* ====================================================================
       * HERO SECTION
       * ==================================================================== */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-800/80">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-950 to-slate-950 -z-10" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-600/10 blur-[130px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-amber-600/10 blur-[110px] rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/#services" className="hover:text-emerald-400 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-emerald-400">Inputs &amp; Farmer Support</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                <Package className="w-3.5 h-3.5 text-emerald-400" />
                <span>KAMATHAM ENTERPRISES · INPUTS &amp; FARMER SUPPORT</span>
              </motion.div>

              <motion.h1 {...fadeUp(0.15)} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Supporting Farmers With the <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">Right Inputs</span> and Field Support
              </motion.h1>

              {/* Core Highlight Box */}
              <motion.div {...fadeUp(0.2)} className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-500 via-teal-400 to-amber-400" />
                <p className="text-lg sm:text-xl font-bold text-emerald-200 tracking-wide">
                  &ldquo;KAMATHAM ENTERPRISES — Feed | Health | Growth&rdquo;
                </p>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Aquaculture inputs, feed distribution, health support products, and farmer advisory offered through <strong className="text-white">Kamatham Enterprises</strong>, part of the wider KE Aqua ecosystem.
                </p>
              </motion.div>

              <motion.p {...fadeUp(0.25)} className="text-base sm:text-lg text-slate-300 leading-relaxed">
                We believe that reliable inputs must be paired with genuine farm observation, responsible dosage, and timely delivery to help farmers succeed.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#enquire-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ENQUIRE ABOUT AQUACULTURE INPUTS</span>
                </a>
                <a
                  href="#kamatham-brand"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300"
                >
                  <Building className="w-4 h-4 text-emerald-400" />
                  <span>ABOUT KAMATHAM ENTERPRISES</span>
                </a>
              </motion.div>
            </div>

            {/* Right Visual Image Card */}
            <motion.div {...fadeUp(0.35)} className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl space-y-4 p-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Kamatham Enterprises</h3>
                      <p className="text-xs text-emerald-400">Feed · Health · Growth</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    Input Vertical
                  </span>
                </div>

                <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-slate-800">
                  <Image
                    src="/assets/div-kamatham.png"
                    alt="Kamatham Enterprises - Feed Health Growth"
                    fill
                    className="object-contain bg-slate-950 p-4"
                    priority
                  />
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Farmer-Centric Advisory &amp; Supply</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Not an automated online store. We work directly with farmers to recommend appropriate inputs based on actual pond requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 1: KAMATHAM ENTERPRISES BRAND POSITIONING
       * ==================================================================== */}
      <section id="kamatham-brand" className="py-20 bg-slate-900/60 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <motion.div {...fadeUp(0)} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Building className="w-3.5 h-3.5" />
                <span>Ecosystem Vertical</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Kamatham Enterprises — Feed | Health | Growth
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Within the broader <strong className="text-white">KE Aqua ecosystem</strong>, <strong className="text-emerald-300">Kamatham Enterprises</strong> operates as the dedicated arm for aquaculture inputs, supply chain distribution, animal health support, and direct farmer assistance.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                While KE Aqua Farms focuses on practical farming, training, and operational research, Kamatham Enterprises ensures farmers have reliable access to high-quality feeds, minerals, probiotics, and farm consumables when they need them most.
              </p>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Legal &amp; Operational Clarity:</strong> Kamatham Enterprises is a distinct operational entity within the KE Aqua family. Product inquiries, supply arrangements, and billing are managed directly through Kamatham Enterprises.
                </span>
              </div>
            </motion.div>

            {/* Right Summary Card */}
            <motion.div {...fadeUp(0.15)} className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-emerald-500/30 shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-white">Core Commitments</h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {[
                    "Quality-checked input sourcing.",
                    "Transparent product guidance based on farm conditions.",
                    "No false medical or guaranteed performance claims.",
                    "Timely farm-side delivery schedules.",
                    "Dedicated after-sales technical advisory.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 2: FARMER SUPPORT PILLARS
       * ==================================================================== */}
      <section className="py-20 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Comprehensive Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              6 Pillars of Farmer Support
            </h2>
            <p className="text-slate-300 text-base">
              Providing more than just bags of feed—we deliver end-to-end support for responsible farming.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp(0.05 * idx)}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 3: PRODUCT CATEGORIES (Flexible Inquiry Cards)
       * ==================================================================== */}
      <section className="py-20 bg-slate-900/50 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Package className="w-3.5 h-3.5" />
              <span>Input Categories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Aquaculture Input Categories
            </h2>
            <p className="text-slate-300 text-base">
              Explore our core product verticals. Contact us directly for current brand availability, pack sizes, and technical recommendations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {productCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  {...fadeUp(0.05 * idx)}
                  className={`p-6 sm:p-8 rounded-2xl bg-slate-950 border ${cat.borderColor} relative overflow-hidden shadow-xl flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{cat.title}</h3>
                      </div>
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-300 border border-slate-700">
                        {cat.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {cat.shortDesc}
                    </p>

                    <ul className="space-y-2 text-xs text-slate-300 mb-6">
                      {cat.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Availability: Contact for current stock</span>
                    <a
                      href="#enquire-form"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      Enquire <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Availability Disclaimer Banner */}
          <motion.div {...fadeUp(0.2)} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-400 max-w-3xl mx-auto flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Product availability, specific formulations, and regional distribution vary by crop season. Contact Kamatham Enterprises directly for current catalog details and localized advice.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 4: FARMER-FIRST PHILOSOPHY & RESPONSIBLE USAGE
       * ==================================================================== */}
      <section className="py-20 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Philosophy */}
            <motion.div {...fadeUp(0)} className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Our Core Ethos</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                From Pond to Prosperity — We Stand With Our Farmers
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                We measure our success by the long-term sustainability and resilience of the farming community. We do not sell inputs based on aggressive marketing or unverified performance claims.
              </p>
              
              <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">The Responsible Formula</div>
                <div className="text-sm font-semibold text-white">
                  INPUTS + FARM CONDITIONS + TECHNICAL GUIDANCE + RESPONSIBLE USE
                </div>
                <p className="text-xs text-slate-300">
                  Combining good inputs with proper water management, aeration, and observation produces real, sustainable farm outcomes.
                </p>
              </div>
            </motion.div>

            {/* Right Responsible Usage Grid */}
            <motion.div {...fadeUp(0.15)} className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {responsibleUsageItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 5: WHO CAN ENQUIRE & HOW TO ENQUIRE (4 Steps)
       * ==================================================================== */}
      <section className="py-20 bg-slate-900/60 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Inquiry Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How to Enquire About Inputs
            </h2>
            <p className="text-slate-300 text-base">
              We operate through direct farmer consultation, not automated e-commerce carts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {inquirySteps.map((step, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(0.05 * idx)}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden group"
              >
                <div className="text-2xl font-mono font-bold text-emerald-500/40 group-hover:text-emerald-400 transition-colors mb-3">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-center text-xs text-amber-300 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>
              Disclaimer: No online payment or automated checkout. All orders and availability are confirmed directly via WhatsApp or phone consultation with Kamatham Enterprises.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 6: RELATED SERVICES CROSS-LINKS
       * ==================================================================== */}
      <section className="py-16 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white">Related Services in the KE Aqua Ecosystem</h3>
            <p className="text-xs text-slate-400 mt-1">Combine inputs with scientific diagnostic testing and practical consultancy.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Water Quality Testing", href: "/services/water-quality-testing", icon: Droplets, color: "text-cyan-400" },
              { title: "Periodic Farm Monitoring", href: "/services/periodic-farm-monitoring", icon: Activity, color: "text-blue-400" },
              { title: "Practical Aquaculture Training", href: "/services/practical-aquaculture-training", icon: GraduationCap, color: "text-emerald-400" },
              { title: "Aquaculture Farm Consultancy", href: "/services/aquaculture-farm-consultancy", icon: Compass, color: "text-amber-400" },
            ].map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={idx}
                  href={srv.href}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${srv.color}`} />
                    <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">{srv.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
       * SECTION 7: CTA & WHATSAPP FORM
       * ==================================================================== */}
      <section id="enquire-form" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left CTA Text */}
            <motion.div {...fadeUp(0)} className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Enquire With Kamatham Enterprises
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly with our team to inquire about current feed stocks, health support products, delivery timelines, and technical advice for your farm.
              </p>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="font-bold text-white flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-400" /> Kamatham Enterprises Support Team
                </div>
                <p>Location: Krishna District, Andhra Pradesh</p>
                <p>Direct Response Commitment: Within 24 business hours</p>
              </div>
            </motion.div>

            {/* Right Inquiry Form */}
            <motion.div {...fadeUp(0.15)} className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-emerald-500/30 shadow-2xl space-y-5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/10 blur-[80px] rounded-full pointer-events-none" />

                <h3 className="text-xl font-bold text-white mb-2">Input &amp; Support Inquiry Form</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 76619 66922"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">You Are A...</label>
                    <select
                      value={formData.farmerType}
                      onChange={(e) => setFormData({ ...formData, farmerType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Shrimp Farmer">Shrimp Farmer</option>
                      <option value="Fish Farmer">Fish Farmer</option>
                      <option value="Farm Operator / Manager">Farm Operator / Manager</option>
                      <option value="Input Dealer / Partner">Input Dealer / Partner</option>
                      <option value="Aquaculture Business">Aquaculture Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Input Category Interest</label>
                    <select
                      value={formData.inputCategory}
                      onChange={(e) => setFormData({ ...formData, inputCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Formulated Feed & Nutrition">Formulated Feed &amp; Nutrition</option>
                      <option value="Aquaculture Health Support">Aquaculture Health Support (Probiotics/Minerals)</option>
                      <option value="Essential Farm Inputs">Essential Farm Inputs (Testing/Consumables)</option>
                      <option value="Equipment & Spare Parts">Equipment &amp; Spare Parts</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Farm Location (Village / District)</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Koduru Mandal, Krishna District"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Specific Requirements or Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your pond requirement, biomass, or product query..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:to-amber-400 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>CONTACT KAMATHAM ENTERPRISES ON WHATSAPP</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
