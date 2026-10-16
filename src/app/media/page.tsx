import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Media & Press | KE Aqua Farms",
  description: "View our media appearances, farm demonstrations, farmer meetings, and industry exhibitions.",
  alternates: { canonical: 'https://keaquafarms.com/media' },
  openGraph: {
    title: "Media Gallery | KE Aqua Farms",
    description: "Our community engagement and industry outreach.",
    url: 'https://keaquafarms.com/media'
  }
};

const mediaCategories = [
  "TV Appearances", "Podcasts", "Farm Demonstrations", "Farmer Meetings", 
  "Training Sessions", "Industry Exhibitions", "College Programs", 
  "Community Awareness", "Press & Publications"
];

export default function MediaPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Media', href: '/media' }]} />
      </div>
      
      <PageHero 
        title="Media & Gallery" 
        description="Explore our community engagement, industry outreach, and public demonstrations."
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Outreach & Engagement" 
          subtitle="Media Coverage" 
          description="We actively participate in advancing the aquaculture sector through public outreach, education, and transparent media engagement." 
        />

        <div className="flex flex-wrap gap-3 mt-8 mb-16 justify-center">
          {mediaCategories.map((cat, i) => (
            <span key={i} className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-400">
              {cat}
            </span>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 lg:p-12 mb-20 text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6">
            <span className="text-slate-500 font-mono text-xs">MEDIA</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">[CLIENT CONTENT REQUIRED]</h3>
          <p className="text-slate-400 leading-relaxed">
            The media gallery is awaiting verified uploads. We only publish authentic photos and recordings of actual farm demonstrations, verified TV appearances, and confirmed industry exhibitions.
          </p>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold rounded-lg transition-colors">
            Media Inquiries &rarr;
          </Link>
        </div>
      </div>
      
      <CTASection />
    </main>
  );
}
