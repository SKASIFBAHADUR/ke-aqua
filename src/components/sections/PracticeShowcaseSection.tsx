"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Microscope,
  Cpu,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
  Info,
} from "lucide-react";

// Tab 1 Data: OUR FARM
const farmPractices = [
  {
    id: "farming-ops",
    title: "Commercial Aquaculture Farming",
    subtitle: "30-Acre Commercial Growout Facility",
    image: "/Real_Images/image_1.jpeg",
    tag: "Field Infrastructure",
    description:
      "Operating 30 acres of commercial growout ponds under active coastal weather and biological conditions in Andhra Pradesh. Real crop management, water management, and daily pond operations.",
    details: [
      "Active growout ponds operating under commercial stocking densities",
      "Real-world coastal weather, salinity fluctuations, and temperature stress",
      "Daily operational routines executed by experienced farm technicians",
    ],
  },
  {
    id: "pond-infra",
    title: "Pond Infrastructure & Design",
    subtitle: "Central Drains & High Dyke Engineering",
    image: "/Real_Images/image_4.jpeg",
    tag: "Infrastructure",
    description:
      "Earthen pond design optimized for efficient water circulation, sludge accumulation towards central drains, and solar-assisted monitoring stations on dykes.",
    details: [
      "Central drain systems for regular bottom sludge siphoning",
      "High dyke compaction to prevent seepage and erosion",
      "Solar-assisted energy units for remote monitoring stations",
    ],
  },
  {
    id: "pond-prep",
    title: "Pond Preparation Protocols",
    subtitle: "Soil Desilting & Natural Plankton Blooms",
    image: "/Real_Images/image_5.jpeg",
    tag: "Pre-Stocking",
    description:
      "Thorough sun-drying, soil desilting, agricultural liming, reservoir water treatment, and natural beneficial plankton bloom establishment before PL stocking.",
    details: [
      "Soil pH correction using agricultural lime and dolomite",
      "Chlorination/bleaching in reservoir ponds for biosecurity",
      "Establishing healthy initial diatom blooms before seed arrival",
    ],
  },
  {
    id: "seed-select",
    title: "Seed Selection & Screening",
    subtitle: "PL Quality & Pathogen Verification",
    image: "/Real_Images/image_2.jpeg",
    tag: "Seed Quality",
    description:
      "Microscopic screening of Post-Larvae (PL) for gut fullness, muscle-to-gut ratio, stress test survival, and cross-verification of PCR pathogen test reports.",
    details: [
      "Salinity & formalin stress testing for seed vigor assessment",
      "Microscopic observation of hepatopancreas and gill development",
      "PCR report verification for WSSV, EHP, and IHHNV screening",
    ],
  },
  {
    id: "stocking",
    title: "Controlled Stocking Protocol",
    subtitle: "Acclimatization & Carrying Capacity",
    image: "/Real_Images/image_2.jpeg",
    tag: "Stocking",
    description:
      "Gradual temperature and salinity acclimation on pond dykes before seed release, maintaining optimal stocking densities aligned with aeration capacity.",
    details: [
      "Slow water mixing over 2-3 hours to match pond salinity & pH",
      "Early morning stocking to minimize temperature stress",
      "Density calculation matched strictly to total HP aeration available",
    ],
  },
  {
    id: "feeding",
    title: "Regulated Feeding & Check Trays",
    subtitle: "Check-Tray Monitoring & FCR Control",
    image: "/Real_Images/image_4.jpeg",
    tag: "Feed Management",
    description:
      "Four-ration daily feeding schedules combined with regular check-tray inspections to monitor appetite, prevent overfeeding, and optimize Feed Conversion Ratio (FCR).",
    details: [
      "Pond check-tray monitoring 2 hours post-feeding",
      "Ration adjustment based on water temperature and dissolved oxygen",
      "High-protein starter feeds transitioning to growout formulations",
    ],
  },
  {
    id: "auto-feeding",
    title: "Automated Feeding Systems",
    subtitle: "Broadcasting Units for Growth Uniformity",
    image: "/Real_Images/image_5.jpeg",
    tag: "Automation",
    description:
      "Deployment of electric auto-feeders with timer controls and adjustable broadcasting radii, ensuring continuous small-ration feeding across growout ponds.",
    details: [
      "Regulated hourly broadcasting to prevent bottom feed accumulation",
      "Improved size uniformity across harvested shrimp biomass",
      "Reduced labor requirement and lower overall feed wastage",
    ],
  },
  {
    id: "aeration",
    title: "Aeration Management & DO Control",
    subtitle: "Paddlewheels & Subsurface Air Injectors",
    image: "/Real_Images/image_1.jpeg",
    tag: "Oxygenation",
    description:
      "Strategic arrangement of 4-HP paddlewheel aerators and subsurface jet aerators to maintain dissolved oxygen levels above 4.5 ppm continuously.",
    details: [
      "24/7 aeration rotation matching biomass weight and light conditions",
      "Circular water current creation to drive organic waste to central drain",
      "Emergency aerator backup power for nighttime DO dips",
    ],
  },
  {
    id: "water-mgmt",
    title: "Water Management & Minerals",
    subtitle: "Salinity, pH & Mineral Balance Tracking",
    image: "/Real_Images/image_7.jpeg",
    tag: "Water Chemistry",
    description:
      "Daily parameter logging of pH, salinity, alkalinity, hardness, and calcium-magnesium ratios to support regular molting cycles and water stability.",
    details: [
      "Dolomite and mineral supplementation during peak molting periods",
      "Zero-discharge water recycling using treated settlement reservoirs",
      "Probiotic dosing to maintain beneficial heterotrophic bacterial balance",
    ],
  },
  {
    id: "health-monitor",
    title: "Animal Health Monitoring",
    subtitle: "Routine Sampling & Gut Checks",
    image: "/Real_Images/image_6.jpeg",
    tag: "Health Screening",
    description:
      "Weekly cast-net sampling to observe shrimp weight gain (ADG), shell hardness, gut fullness, hepatopancreas color, and check for gill fouling or lethargy.",
    details: [
      "Weekly Average Daily Growth (ADG) calculations from cast-net samples",
      "Hepatopancreas color and lipid droplet microscopic evaluation",
      "Early symptom identification before disease outbreaks occur",
    ],
  },
  {
    id: "biosecurity",
    title: "Biosecurity Systems",
    subtitle: "Multi-Barrier Protection Protocols",
    image: "/Real_Images/image_5.jpeg",
    tag: "Biosecurity",
    description:
      "Physical exclusion barriers including bird netting, crab fencing, tire disinfestation baths, and restricted visitor entry protocols to protect growout ponds.",
    details: [
      "Top bird netting to prevent avian pathogen transmission",
      "Peripheral crab fencing around all active pond dykes",
      "Disinfectant footbaths and dedicated pond netting equipment",
    ],
  },
  {
    id: "harvest",
    title: "Harvest Operations",
    subtitle: "Partial & Final Net Harvests",
    image: "/Real_Images/image_4.jpeg",
    tag: "Harvest",
    description:
      "Organized partial or complete harvests using specialized drag nets, immediate ice chilling on dykes, and rapid size grading for market dispatch.",
    details: [
      "Night harvest execution to maintain cool temperatures and shrimp quality",
      "Slurry ice bath dipping immediately upon net retrieval",
      "Counts-per-kg size sorting and quick transport to processing buyers",
    ],
  },
  {
    id: "crop-analysis",
    title: "Farm Records & Crop Analysis",
    subtitle: "Data-Driven Production Logging",
    image: "/Real_Images/image_8.jpeg",
    tag: "Data Logging",
    description:
      "Detailed record-keeping covering daily feed consumption, water parameters, energy usage, total survival rate, FCR, and crop financial analysis.",
    details: [
      "Comprehensive digital logs for every culture pond cycle",
      "FCR and cost-per-kg harvest calculations",
      "Seasonal comparative analysis to refine standard operating procedures",
    ],
  },
];

// Tab 2 Data: AQUA PULSE / LABORATORY
const labPractices = [
  {
    id: "lab-water",
    title: "Water Quality Parameter Monitoring",
    subtitle: "Chemical Titration & Spectrophotometry",
    image: "/Real_Images/image_7.jpeg",
    tag: "Lab Diagnostics",
    description:
      "Precision testing for key water parameters including pH, Salinity, Total Ammonia Nitrogen (TAN), Toxic Nitrite (NO2), Alkalinity, Hardness, Calcium, and Magnesium.",
    details: [
      "Spectrophotometric & titration methods for precise chemical values",
      "Daily tracking of ammonia and nitrite accumulation trends",
      "Magnesium-to-Calcium ratio verification for shrimp molting support",
    ],
  },
  {
    id: "lab-microscope",
    title: "Microscopic Tissue Observation",
    subtitle: "Gill, Gut & Muscle Tissue Screening",
    image: "/Real_Images/image_6.jpeg",
    tag: "Microscopy",
    description:
      "High-magnification microscopic examination of live shrimp tissue to check gill filament cleanliness, gut fullness percentage, muscle clarity, and parasite presence.",
    details: [
      "Screening for Zoothamnium and protozoan gill fouling",
      "Evaluation of muscle necrosis and opacity in stressed shrimp",
      "Direct wet-mount slide preparation from fresh field samples",
    ],
  },
  {
    id: "lab-health",
    title: "Shrimp Health & Hepatopancreas Inspection",
    subtitle: "Lipid Droplet & Organ Integrity Analysis",
    image: "/Real_Images/image_6.jpeg",
    tag: "Organ Screening",
    description:
      "Microscopic analysis of the hepatopancreas structure, observing lipid droplet density, tubule integrity, and early signs of cellular tubule atrophy.",
    details: [
      "Assessment of hepatopancreas lipid storage levels",
      "Early detection of gut inflammation or melanization",
      "Diagnostic support for early-stage EMS/AHPND symptoms",
    ],
  },
  {
    id: "lab-plankton",
    title: "Plankton & Microalgae Observation",
    subtitle: "Diatom vs Cyanobacteria Colony Counting",
    image: "/Real_Images/image_6.jpeg",
    tag: "Algal Ecology",
    description:
      "Microscopic identification and counting of beneficial diatoms vs harmful blue-green algae (cyanobacteria) to guide pond water treatment decisions.",
    details: [
      "Identification of Chaetoceros, Skeletonema, and beneficial diatoms",
      "Detection of Microcystis or Oscillatoria bloom risks",
      "Guidance on carbohydrate dosing for bio-floc balance",
    ],
  },
  {
    id: "lab-vibrio",
    title: "Microbiology & Vibrio Plating",
    subtitle: "TCBS Agar Plating & Colony Differentiation",
    image: "/Real_Images/image_3.jpeg",
    tag: "Microbiology",
    description:
      "Culture plating on TCBS agar media to quantify Total Vibrio counts in pond water and shrimp gut samples, differentiating green (pathogenic) vs yellow colonies.",
    details: [
      "24-hour incubation of water and tissue samples on TCBS agar",
      "Counting Green Vibrio (V. parahaemolyticus/harveyi) vs Yellow Vibrio",
      "Threshold monitoring to trigger biological or probiotic intervention",
    ],
  },
];

// Tab 3 Data: SMART TECHNOLOGY
const techPractices = [
  {
    id: "tech-feeders",
    title: "Automated Feeding Technology",
    subtitle: "Timer-Based Feed Broadcasting",
    image: "/Real_Images/image_5.jpeg",
    tag: "Smart Hardware",
    description:
      "Automated feed broadcasting units installed across growout ponds to disperse feed evenly, reducing labor costs and preventing bottom sludge buildup.",
    details: [
      "Configurable feeding intervals and dispersion distance",
      "Eliminates localized feed pileup on pond bottoms",
      "Demonstrated FCR reduction across commercial culture cycles",
    ],
  },
  {
    id: "tech-station",
    title: "Solar-Powered Dyke Monitoring",
    subtitle: "24/7 Dyke Security & Data Nodes",
    image: "/Real_Images/image_1.jpeg",
    tag: "Solar Tech",
    description:
      "Off-grid solar power stations deployed on pond dykes to power continuous sensor arrays, night security lighting, and wireless data transmission nodes.",
    details: [
      "Independent solar PV panels with lithium battery storage",
      "Continuous power supply for dyke monitoring equipment",
      "Reduced dependency on grid electricity for peripheral monitoring",
    ],
  },
  {
    id: "tech-sensors",
    title: "IoT Water Quality Probes",
    subtitle: "Continuous pH, DO & Temperature Sensors",
    image: "/Real_Images/image_7.jpeg",
    tag: "Digital Probes",
    description:
      "Digital probe sensor arrays suspended in active ponds for real-time tracking of dissolved oxygen, pH, temperature, and electrical conductivity.",
    details: [
      "Real-time data logging with automated threshold alert triggers",
      "Continuous monitoring during critical 2:00 AM – 6:00 AM DO low points",
      "Reduces manual testing frequency for routine baseline parameters",
    ],
  },
  {
    id: "tech-aeration",
    title: "Aeration Management Systems",
    subtitle: "Paddlewheel & Jet Aeration Synchronization",
    image: "/Real_Images/image_1.jpeg",
    tag: "Aeration Tech",
    description:
      "Synchronized aeration systems combining high-efficiency paddlewheel aerators with directional jet injectors to maximize gas transfer and water movement.",
    details: [
      "Energy-optimized motor positioning for maximum water circulation",
      "Subsurface air injection to supplement paddlewheels during low-light hours",
      "Maintenance routines logged to preserve equipment efficiency",
    ],
  },
  {
    id: "tech-nanobubble",
    title: "Micro & Nano Bubble Technology",
    subtitle: "Deep Benthic Gas Dissolution",
    image: "/Real_Images/image_4.jpeg",
    tag: "Advanced Oxygenation",
    description:
      "Evaluation of micro and nano bubble generator units designed to increase oxygen residence time in pond water and prevent anaerobic sludge zones.",
    details: [
      "Ultra-fine bubble generation for deep benthic oxygenation",
      "Suppression of anaerobic hydrogen sulfide (H2S) formation",
      "Tested in target nursery and growout zones for sludge reduction",
    ],
  },
  {
    id: "tech-records",
    title: "Digital Farm Data & Records",
    subtitle: "Centralized Crop Parameter Tracking",
    image: "/Real_Images/image_8.jpeg",
    tag: "Data Software",
    description:
      "Centralized digital logging of daily feeding rates, water test results, chemical dosages, harvest counts, and overall pond economic performance.",
    details: [
      "Historical crop comparison across multiple harvest cycles",
      "Accurate Feed Conversion Ratio (FCR) and cost tracking",
      "Standardized data records shared for practical farmer training",
    ],
  },
];

export function PracticeShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"farm" | "lab" | "tech">("farm");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Get current dataset based on active tab
  const getCurrentData = () => {
    switch (activeTab) {
      case "farm":
        return farmPractices;
      case "lab":
        return labPractices;
      case "tech":
        return techPractices;
      default:
        return farmPractices;
    }
  };

  const currentData = getCurrentData();
  const activeItem = currentData[selectedIndex] || currentData[0];

  // Handle Tab Switch (reset selected index)
  const handleTabChange = (tab: "farm" | "lab" | "tech") => {
    setActiveTab(tab);
    setSelectedIndex(0);
  };

  return (
    <section id="showcase" className="py-24 bg-[#0A192F] text-slate-100 relative overflow-hidden border-t border-slate-800">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ==================================================================== */}
        {/* SECTION HEADER                                                        */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Explore Our Practice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Field-Tested Farming, Diagnostics &amp; Technology
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We don&apos;t showcase fictional client projects or invented metrics. Below is an interactive look at the exact operational practices, laboratory routines, and technologies implemented directly across our <span className="text-cyan-400 font-semibold">30-acre commercial farm</span>.
          </p>
        </div>


        {/* ==================================================================== */}
        {/* CATEGORY TAB SELECTOR (3 MAIN CATEGORIES)                            */}
        {/* ==================================================================== */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 gap-1 sm:gap-2 max-w-full overflow-x-auto no-scrollbar">
            
            <button
              onClick={() => handleTabChange("farm")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
                activeTab === "farm"
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-850"
              }`}
            >
              <Leaf className="w-4 h-4" />
              <span>Our Farm ({farmPractices.length})</span>
            </button>

            <button
              onClick={() => handleTabChange("lab")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
                activeTab === "lab"
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-850"
              }`}
            >
              <Microscope className="w-4 h-4" />
              <span>Aqua Pulse / Lab ({labPractices.length})</span>
            </button>

            <button
              onClick={() => handleTabChange("tech")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
                activeTab === "tech"
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-850"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Smart Tech ({techPractices.length})</span>
            </button>

          </div>
        </div>


        {/* ==================================================================== */}
        {/* HORIZONTALLY SCROLLABLE SUB-ITEM PILL SELECTOR                        */}
        {/* ==================================================================== */}
        <div className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar">
            {currentData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 border ${
                  selectedIndex === idx
                    ? "bg-slate-800 border-cyan-400 text-cyan-300 shadow-md"
                    : "bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
              >
                <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>


        {/* ==================================================================== */}
        {/* MAIN FEATURED SHOWCASE DISPLAY (2-COLUMN INTERACTIVE CARD)           */}
        {/* ==================================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${activeItem.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl bg-[#112240] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Featured Image with Hover Scale */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl group">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-950/90 backdrop-blur border border-slate-800 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                      {activeItem.tag}
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/90 backdrop-blur border border-slate-800 z-10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-300 uppercase tracking-wide block">Operational Area</span>
                      <p className="text-sm font-bold text-white truncate max-w-[240px] sm:max-w-none">{activeItem.subtitle}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800">
                      {selectedIndex + 1} / {currentData.length}
                    </span>
                  </div>
                </div>

                {/* Quick Item Stepper Navigation Buttons */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    disabled={selectedIndex === 0}
                    onClick={() => setSelectedIndex((prev) => Math.max(0, prev - 1))}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous Practice
                  </button>
                  <button
                    disabled={selectedIndex === currentData.length - 1}
                    onClick={() => setSelectedIndex((prev) => Math.min(currentData.length - 1, prev + 1))}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    Next Practice <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Detailed Practice Narrative & Operational Checkpoints */}
              <div className="lg:col-span-6 space-y-6">
                
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span>Active Practice #{selectedIndex + 1}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    {activeItem.title}
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                {/* Practice Checkpoints List */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Operational Field Routines &amp; Verification:
                  </span>
                  {activeItem.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200 leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Authentic Practice Banner */}
                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-sm text-cyan-200 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Verified practice implemented under real commercial farm conditions at KE Aqua Farms.</span>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>


        {/* ==================================================================== */}
        {/* BOTTOM AUTHENTIC PRACTICE DISCLOSURE STRIP                          */}
        {/* ==================================================================== */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-slate-300">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Demonstration reflects our internal farming operations, lab capabilities, and equipment testing.</span>
          </div>
          <span className="font-mono text-xs text-slate-300">
            KE Aqua Farms · 30-Acre Commercial Facility
          </span>
        </div>

      </div>
    </section>
  );
}
