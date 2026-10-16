import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Training Cancellation Refund | KE Aqua Farms",
  description: "Legal documentation and policies for KE Aqua Farms.",
  alternates: { canonical: 'https://keaquafarms.com/training-cancellation-refund' },
  robots: { index: false } // Prevent indexing of placeholder legal pages
};

export default function TrainingCancellationRefundPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0A192F]">
      <div className="container-width mb-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Training Cancellation Refund', href: '/training-cancellation-refund' }]} />
      </div>
      
      <PageHero 
        title="Training Cancellation Refund" 
        description="Legal Documentation & Policies"
      />
      
      <div className="container-width py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6">
            <span className="text-slate-500 font-mono text-xs">LEGAL</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">[CLIENT LEGAL COPY REQUIRED]</h3>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            This document is pending finalized and approved legal copy. It remains unpublished to the public index until final client confirmation is received.
          </p>
        </div>
      </div>
    </main>
  );
}
