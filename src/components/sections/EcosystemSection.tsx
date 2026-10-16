"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, FlaskConical, Cpu, GraduationCap, Fish } from "lucide-react";

const ecosystemNodes = [
  {
    step: "01",
    id: "farming",
    division: "KE Aqua Farms",
    tagline: "Scientific Farming | Training | Solutions",
    role: "Working Farm",
    description:
      "30-acre commercial aquaculture farm operating under real field conditions. Practical crop management, pond preparation, water quality and animal health monitoring.",
    logo: "/assets/div-keaquafarms.png",
    icon: Leaf,
    color: "green" as const,
    tags: ["Pond Operations", "Crop Management", "Demonstration"],
  },
  {
    step: "02",
    id: "science",
    division: "Aqua Pulse Trader's",
    tagline: "Testing | Technology | Advisory | Solutions",
    role: "Science & Laboratory",
    description:
      "Water quality, soil testing and microscopic shrimp health monitoring. Practical scientific support for farming decisions. Driving Growth Through Shrimp Science.",
    logo: "/assets/div-aquapulse.png",
    icon: FlaskConical,
    color: "aqua" as const,
    tags: ["Water Testing", "Microbiology Lab", "Technical Advisory"],
  },
  {
    step: "03",
    id: "inputs",
    division: "Kamatham Enterprises",
    tagline: "Feed | Health | Growth",
    role: "Inputs & Farmer Support",
    description:
      "Authorised dealer for leading aquaculture brands. Quality feeds, aqua healthcare, technical guidance and farmer support. From pond to prosperity.",
    logo: "/assets/div-kamatham.png",
    icon: Cpu,
    color: "primary" as const,
    tags: ["Quality Feeds", "Aqua Healthcare", "Farm Support"],
  },
  {
    step: "04",
    id: "training",
    division: "KE Aqua Farms",
    tagline: "Learn Practically. Farm Scientifically. Grow Profitably.",
    role: "Farmer Development Initiative",
    description:
      "Developing farmer-development initiatives focused on practical exposure.. Hands-on learning at a working commercial farm for farmers and entrepreneurs.",
    logo: "/assets/div-keaquafarms.png",
    icon: GraduationCap,
    color: "green" as const,
    tags: ["Farm Exposure", "Startup Farmer Program", "Technology Demo"],
  },
  {
    step: "05",
    id: "seafood",
    division: "KE Coastal",
    tagline: "Processing | Exports | Better Seafood",
    role: "Seafood & Value Chain",
    description:
      "From our coast to your table. Fresh seafood, frozen seafood and processed products. Supporting fishermen, strengthening communities.",
    logo: "/assets/div-kecoastal.png",
    icon: Fish,
    color: "aqua" as const,
    tags: ["Fresh Seafood", "Frozen Products", "Coastal Goodness"],
  },
];

const colorMap = {
  green: {
    bg: "bg-green/8",
    border: "border-green/20",
    icon: "bg-green/10 text-green",
    step: "text-green",
    tag: "bg-green/8 text-green border-green/15",
    connector: "bg-green/30",
  },
  aqua: {
    bg: "bg-aqua/8",
    border: "border-aqua/20",
    icon: "bg-aqua/10 text-aqua",
    step: "text-aqua",
    tag: "bg-aqua/8 text-aqua border-aqua/15",
    connector: "bg-aqua/30",
  },
  primary: {
    bg: "bg-primary/5",
    border: "border-primary/15",
    icon: "bg-primary/10 text-primary",
    step: "text-primary",
    tag: "bg-primary/5 text-primary border-primary/12",
    connector: "bg-primary/20",
  },
};

export function EcosystemSection() {
  return (
    <section className="section-spacing bg-background border-b border-border">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-widest text-aqua font-bold mb-3 block">
            Our Integrated Structure
          </span>
          <h2 className="text-primary font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
            An Integrated Aquaculture Ecosystem
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            KE Aqua Group brings together complementary businesses across the aquaculture value chain — from farm science to seafood value. Each division serves a distinct and purposeful role.
          </p>
          <p className="mt-3 text-sm text-text-muted italic">
            From Farm Science to Seafood Value.
          </p>
        </motion.div>

        {/* Flow Strip — Desktop Horizontal, Mobile Vertical */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <div
            className="hidden xl:block absolute top-[4.5rem] left-0 right-0 h-px bg-gradient-to-r from-green/20 via-aqua/30 to-aqua/20 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 relative z-10">
            {ecosystemNodes.map((node, index) => {
              const c = colorMap[node.color];
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  className="group relative"
                >
                  {/* Arrow connector (mobile/tablet between cards) */}
                  {index < ecosystemNodes.length - 1 && (
                    <div
                      className="xl:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-4 h-4 text-border rotate-90" />
                    </div>
                  )}

                  {/* Card */}
                  <div
                    className={`
                      relative flex flex-col h-full
                      bg-surface border rounded-xl p-5
                      transition-all duration-300 ease-out
                      hover:shadow-card hover:-translate-y-1
                      ${c.border}
                    `}
                  >
                    {/* Step indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold tracking-widest uppercase ${c.step}`}>
                        {node.step}
                      </span>
                      <div className={`p-2 rounded-lg ${c.icon} transition-colors`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Division Logo */}
                    <div className="mb-4 h-12 flex items-center">
                      <img
                        src={node.logo}
                        alt={`${node.division} logo`}
                        className="h-full w-auto object-contain object-left max-w-[120px]"
                      />
                    </div>

                    {/* Role Label */}
                    <p className="text-[0.68rem] uppercase tracking-wider font-semibold text-text-muted mb-1">
                      {node.role}
                    </p>

                    {/* Tagline */}
                    <p className={`text-xs font-medium mb-3 ${c.step}`}>
                      {node.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-text-muted leading-relaxed mb-4 flex-1">
                      {node.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {node.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[0.62rem] font-medium px-2 py-0.5 rounded-full border ${c.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Group Philosophy Strip — directly from source */}
        <motion.div
          className="mt-14 rounded-xl border border-border bg-surface overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left — Group brand */}
            <div className="lg:w-64 bg-primary flex flex-col items-center justify-center p-8 shrink-0">
              <img
                src="/assets/ke-logo-emblem.png"
                alt="KE Aqua Group emblem"
                className="w-16 h-16 object-contain mb-4 brightness-200"
              />
              <p className="text-white font-display font-bold text-center text-base leading-tight">
                KE Aqua Group
              </p>
              <p className="text-aqua-light text-xs font-medium tracking-wider text-center mt-1">
                From Farm to Future
              </p>
            </div>

            {/* Right — Pillars */}
            <div className="flex-1 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-5">
                Group Philosophy
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    heading: "We Practice. We Monitor. We Learn. We Share.",
                    body: "Every crop at KE Aqua Farms is a learning opportunity. Real outcomes from the farm inform the knowledge we share through training, technical guidance, and laboratory support.",
                  },
                  {
                    heading: "People | Science | Sustainability | Prosperity",
                    body: "Our group pillars reflect a commitment to the people who farm, the science that guides decisions, sustainability of coastal ecosystems, and long-term prosperity for farming communities.",
                  },
                  {
                    heading: "Healthy Waters · Thriving Communities",
                    body: "From clean ponds to safer seafood — our integrated approach connects responsible farming practice to broader community and food-safety outcomes.",
                  },
                  {
                    heading: "Farmers | Nature | Food | Future",
                    body: "KE Aqua Group operates as a unit, ensuring each division contributes toward a complete, responsible, and economically viable aquaculture value chain.",
                  },
                ].map((item) => (
                  <div key={item.heading} className="flex gap-3">
                    <div className="w-1 rounded-full bg-aqua/40 shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-primary leading-snug mb-1">
                        {item.heading}
                      </p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
