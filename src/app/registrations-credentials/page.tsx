import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import { ShieldCheck, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: "Registrations & Credentials | KE Aqua Farms",
  description: "Official registrations and verified operational credentials for KE Aqua Farms and its subsidiaries.",
  alternates: { canonical: 'https://keaquafarms.com/registrations-credentials' },
  openGraph: {
    title: "Registrations & Credentials",
    description: "Verified operational credentials.",
    url: 'https://keaquafarms.com/registrations-credentials'
  }
};

const credentials = [
  {
    entity: "Kamatham Enterprises",
    type: "Tax Registration",
    number: "37AAXFK5839J1ZE",
    source: "GSTIN",
    status: "Active",
    display: "Public"
  },
  {
    entity: "Aqua Pulse",
    type: "Tax Registration",
    number: "37BMXPD4551K1ZH",
    source: "GSTIN",
    status: "Active",
    display: "Public"
  },
  {
    entity: "KE Aqua Farms",
    type: "National Fisheries Development Board",
    number: "AP510227344729 / AP510215036760",
    source: "NFDP Database",
    status: "Verified",
    display: "Public"
  },
  {
    entity: "KE Aqua Farms",
    type: "Traceability Registration",
    number: "AP053041 / AP053156 / AP053432",
    source: "Aqua Trace",
    status: "Verified",
    display: "Public"
  }
];

export default function RegistrationsCredentialsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Registrations & Credentials', href: '/registrations-credentials' }]} />
      </div>
      
      <PageHero 
        title="Registrations & Credentials" 
        description="Transparency is fundamental to our operations. View the officially verified registrations for the KE Aqua Group ecosystem."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Verified Credentials" 
          subtitle="Corporate Compliance" 
          description="We only publish registrations that have been explicitly verified and approved for public display." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-16">
          {credentials.map((cred, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-1">{cred.entity}</span>
                  <h3 className="text-white font-bold text-lg">{cred.type}</h3>
                </div>
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              
              <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800/50 mb-4">
                <span className="text-slate-400 text-xs block mb-1">Registration Number</span>
                <span className="text-slate-200 font-mono text-sm break-all">{cred.number}</span>
              </div>
              
              <div className="flex gap-4 text-xs font-mono">
                <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded">Source: {cred.source}</span>
                <span className="bg-emerald-950/30 text-emerald-400 border border-emerald-900/50 px-3 py-1 rounded">Status: {cred.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cyan-950/30 border border-cyan-900/50 rounded-xl p-6 flex gap-4 max-w-4xl mx-auto">
          <Info className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-cyan-400 font-bold mb-2">Certification Notice</h4>
            <p className="text-cyan-100 text-sm leading-relaxed">
              Additional operational certifications (e.g., ASC, BAP) and export registrations remain unpublished pending final client confirmation and strict verification of their current active status. We do not make unverified claims regarding international certifications.
            </p>
          </div>
        </div>
      </div>
      
      <CTASection />
    </main>
  );
}
