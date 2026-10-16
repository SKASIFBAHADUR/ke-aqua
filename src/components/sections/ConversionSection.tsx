"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  User,
  Compass,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Loader2,
  ExternalLink,
  Share2,
} from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

// Framer Motion entrance helper
function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  };
}

interface FormState {
  fullName: string;
  mobile: string;
  email: string;
  location: string;
  persona: string;
  interestedIn: string;
  message: string;
}

interface ErrorsState {
  fullName?: string;
  mobile?: string;
  email?: string;
  message?: string;
}

export function ConversionSection() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    mobile: "",
    email: "",
    location: "",
    persona: CONTACT_CONFIG.personas[0],
    interestedIn: CONTACT_CONFIG.enquiryIntents[0],
    message: "",
  });

  const [errors, setErrors] = useState<ErrorsState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Client-side Validation Logic
  const validateForm = (): boolean => {
    const newErrors: ErrorsState = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Phone validation (Min 10 digits, numbers/spaces/dashes allowed)
    const phoneClean = formData.mobile.replace(/\s+/g, "").replace(/-/g, "");
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9+]{10,15}$/.test(phoneClean)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    // Optional Email validation
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Message length check
    if (formData.message.trim() && formData.message.trim().length > 1000) {
      newErrors.message = "Message must not exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API network latency (800ms)
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
      setServerError("An unexpected error occurred. Please try again or connect via WhatsApp.");
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      location: "",
      persona: CONTACT_CONFIG.personas[0],
      interestedIn: CONTACT_CONFIG.enquiryIntents[0],
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
    setServerError(null);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A192F] text-slate-100 relative overflow-hidden border-t border-slate-800">
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ==================================================================== */}
        {/* SECTION HEADER                                                        */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Technical Connection
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Let’s Talk Aquaculture
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you are planning a farm visit, requesting laboratory water diagnostics, modernizing farm technology, or exploring our farm — our technical team is ready to assist.
          </motion.p>
        </div>


        {/* ==================================================================== */}
        {/* 2-COLUMN CONVERSION DISPLAY: CONTACT CARDS & VALIDATED FORM           */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Direct Contact Cards & Farm Location */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="rounded-3xl bg-[#112240] border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                  Connect Directly
                </span>
                <h3 className="text-xl font-bold text-white">Speak With Our Team</h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  No automated chatbots or sales pressure. Connect directly with active farm managers and technical advisors.
                </p>
              </div>

              <div className="space-y-3.5">
                {/* Phone Call */}
                <a
                  href={`tel:${CONTACT_CONFIG.phone.value}`}
                  className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all flex items-center justify-between group touch-manipulation min-h-[56px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">{CONTACT_CONFIG.phone.label}</span>
                      <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {CONTACT_CONFIG.phone.display}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Direct WhatsApp */}
                <a
                  href={CONTACT_CONFIG.whatsapp.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group touch-manipulation min-h-[56px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">WhatsApp Direct</span>
                      <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        Start WhatsApp Chat
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${CONTACT_CONFIG.email.value}`}
                  className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 transition-all flex items-center justify-between group touch-manipulation min-h-[56px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">{CONTACT_CONFIG.email.label}</span>
                      <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                        {CONTACT_CONFIG.email.display}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Working Hours Commitment */}
              <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white block mb-0.5">{CONTACT_CONFIG.operatingHours.days} ({CONTACT_CONFIG.operatingHours.time})</span>
                  <span>{CONTACT_CONFIG.operatingHours.responseCommitment}</span>
                </div>
              </div>
            </div>

            {/* Verified Location Card */}
            <div className="rounded-3xl bg-[#112240] border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-0.5">
                    Demonstration Farm Location
                  </span>
                  <h4 className="text-base font-bold text-white mb-1">KE Aqua Farms Facility</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                    {CONTACT_CONFIG.location.fullAddress}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 italic">
                    * {CONTACT_CONFIG.operatingHours.visitorNote}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CONTACT_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Accessible Validated Form */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-7">
            <div className="rounded-3xl bg-[#112240] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                        Direct Farm Enquiry
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Send Your Requirement
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        Fill out the form below to connect directly with our technical and advisory team. [CLIENT/BACKEND CONFIGURATION REQUIRED: Form submission backend is pending.]
                      </p>
                    </div>

                    {/* Server Error Alert */}
                    {serverError && (
                      <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-800/80 text-rose-200 text-xs flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Form Inputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="block text-xs font-bold text-slate-200">
                          Full Name <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                          <input
                            id="fullName"
                            type="text"
                            required
                            aria-required="true"
                            aria-invalid={!!errors.fullName}
                            aria-describedby={errors.fullName ? "fullName-error" : undefined}
                            placeholder="e.g. Ramesh Kumar"
                            value={formData.fullName}
                            onChange={(e) => {
                              setFormData({ ...formData, fullName: e.target.value });
                              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                            }}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all ${
                              errors.fullName ? "border-rose-500" : "border-slate-800 focus:border-cyan-400"
                            }`}
                          />
                        </div>
                        {errors.fullName && (
                          <p id="fullName-error" className="text-xs text-rose-400 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Mobile Number */}
                      <div className="space-y-1.5">
                        <label htmlFor="mobile" className="block text-xs font-bold text-slate-200">
                          Mobile Number <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                          <input
                            id="mobile"
                            type="tel"
                            required
                            aria-required="true"
                            aria-invalid={!!errors.mobile}
                            aria-describedby={errors.mobile ? "mobile-error" : undefined}
                            placeholder="+91 76619 66922"
                            value={formData.mobile}
                            onChange={(e) => {
                              setFormData({ ...formData, mobile: e.target.value });
                              if (errors.mobile) setErrors({ ...errors, mobile: undefined });
                            }}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all ${
                              errors.mobile ? "border-rose-500" : "border-slate-800 focus:border-cyan-400"
                            }`}
                          />
                        </div>
                        {errors.mobile && (
                          <p id="mobile-error" className="text-xs text-rose-400 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.mobile}
                          </p>
                        )}
                      </div>

                      {/* Email Address (Optional) */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-bold text-slate-200">
                          Email Address <span className="text-slate-500 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                          <input
                            id="email"
                            type="email"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: undefined });
                            }}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all ${
                              errors.email ? "border-rose-500" : "border-slate-800 focus:border-cyan-400"
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p id="email-error" className="text-xs text-rose-400 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Location / District */}
                      <div className="space-y-1.5">
                        <label htmlFor="location" className="block text-xs font-bold text-slate-200">
                          Location / District <span className="text-slate-500 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <Compass className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                          <input
                            id="location"
                            type="text"
                            placeholder="e.g. Bapatla, AP"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Persona Selector */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-200">
                        I am a:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {CONTACT_CONFIG.personas.map((p) => (
                          <button
                            type="button"
                            key={p}
                            onClick={() => setFormData({ ...formData, persona: p })}
                            className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all touch-manipulation ${
                              formData.persona === p
                                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Interested In Selector */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-200">
                        Interested In:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {CONTACT_CONFIG.enquiryIntents.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setFormData({ ...formData, interestedIn: opt })}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all touch-manipulation ${
                              formData.interestedIn === opt
                                ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-md"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-bold text-slate-200">
                        Message / Specific Requirement <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Share any specific details regarding your farm size, water testing needs, or farm visit..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all"
                      />
                    </div>

                    {/* Submit Button with Loading Spinner */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed touch-manipulation min-h-[52px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                          <span>Sending Your Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry to Our Team</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Your contact details are used strictly to respond to your enquiry.</span>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 px-4 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block font-mono">
                        Enquiry Successfully Submitted
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Thank You, {formData.fullName}!
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Your enquiry regarding <span className="text-cyan-400 font-semibold">{formData.interestedIn}</span> has been received. A member of our technical team will reach out to <span className="text-white font-bold">{formData.mobile}</span> shortly.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto">
                      Need immediate assistance? You can also click below to chat directly with us on WhatsApp.
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={CONTACT_CONFIG.whatsapp.directUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" /> Open WhatsApp Chat
                      </a>
                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>


        {/* ==================================================================== */}
        {/* GOOGLE MAPS LOCATION AREA & SOCIAL CHANNELS                          */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Map Location iFrame Container */}
          <div className="lg:col-span-8 rounded-3xl bg-[#112240] border border-slate-800 p-4 overflow-hidden relative min-h-[300px] flex flex-col justify-between shadow-xl">
            <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-800">
              <iframe
                src={CONTACT_CONFIG.location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "brightness(0.85) contrast(1.1) invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KE Aqua Farms Demonstration Facility Location Map"
                className="w-full h-full"
              />
              <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-slate-950/90 backdrop-blur border border-slate-800 text-xs text-slate-200">
                <span className="font-bold text-cyan-400">Pond Location:</span> {CONTACT_CONFIG.location.addressLine1}, {CONTACT_CONFIG.location.district}
              </div>
            </div>
          </div>

          {/* Social Channels & Contact Summary */}
          <div className="lg:col-span-4 rounded-3xl bg-[#112240] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                Official Channels
              </span>
              <h4 className="text-lg font-bold text-white mb-2">Connect With KE Aqua Group</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Follow our official social updates for field observation notes, seasonal pond advice, and farm updates.
              </p>

              <div className="space-y-3">
                {CONTACT_CONFIG.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between text-xs font-bold text-slate-200 hover:text-cyan-400 group"
                  >
                    <span className="flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-cyan-400" />
                      {social.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
              KE Aqua Farms • Krishna District, Andhra Pradesh
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
