import React from "react";
import { Metadata } from "next";
import { ConversionSection } from "@/components/sections/ConversionSection";

export const metadata: Metadata = {
  title: "Contact Us & Farm Enquiry | KE Aqua Farms",
  description:
    "Connect directly with the KE Aqua Farms technical team for farm visits, water quality lab testing, technology consulting, or practical aquaculture training programs in Krishna District, AP.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <ConversionSection />
    </main>
  );
}
