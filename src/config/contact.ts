/**
 * KE Aqua Farms Centralized Contact & Location Configuration
 * 
 * NOTE: Contact details use source-supported location (Ramakrishnapuram, Koduru Mandal, Krishna District).
 * Client phone/email placeholders are clearly marked and configurable here.
 */

export const CONTACT_CONFIG = {
  companyName: "KE Aqua Farms",
  parentGroup: "KE Aqua Group",
  tagline: "The Key to Practical Aquaculture",

  // Verified Location Address
  location: {
    addressLine1: "D. No. 17-129, Ismailbegpeta, Koduru",
    district: "Krishna District",
    state: "Andhra Pradesh",
    pincode: "521328",
    country: "India",
    fullAddress: "D. No. 17-129, Ismailbegpeta, Koduru, Krishna District, Andhra Pradesh – 521328",
    mapEmbedUrl: "https://maps.google.com/maps?q=Ismailbegpeta,%20Koduru,%20Krishna%20District,%20Andhra%20Pradesh%20521328&t=&z=13&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ismailbegpeta,+Koduru,+Krishna+District,+Andhra+Pradesh+521328",
  },

  // Contact Channels (Configurable Placeholders)
  phone: {
    display: "+91 76619 66922",
    value: "+917661966922",
    isPlaceholder: false, // Updated with client number
    label: "Farm Technical Helpline",
  },

  whatsapp: {
    display: "+91 76619 66922",
    number: "917661966922",
    isPlaceholder: false,
    defaultMessage: "Hello KE Aqua Farms team, I would like to enquire about your farm practices and experiences.",
    directUrl: "https://wa.me/917661966922?text=Hello%20KE%20Aqua%20Farms%20team,%20I%20would%20like%20to%20enquire%20about%20your%20farm%20practices%20and%20experiences.",
  },

  email: {
    display: "keaquafarms@gmail.com",
    value: "keaquafarms@gmail.com",
    isPlaceholder: false,
    label: "Technical & Advisory Email",
  },

  // Working Hours
  operatingHours: {
    days: "Monday – Saturday",
    time: "8:00 AM – 6:00 PM IST",
    responseCommitment: "Direct response within 24 business hours",
    visitorNote: "General farm visits by prior arrangement.",
  },

  // Social Links (Placeholders for client verification)
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/company/ke-aqua-farms", isPlaceholder: true },
    { name: "YouTube", url: "https://youtube.com/@keaquafarms", isPlaceholder: true },
    { name: "Facebook", url: "https://facebook.com/keaquafarms", isPlaceholder: true },
  ],

  // Enquiry Intent Categories (Source-Derived)
  enquiryIntents: [
    "Farm Practice & Exposure",
    "Laboratory & Health Diagnostics",
    "Aquaculture Farm Support",
    "Smart Technology Consulting",
    "Entrepreneurship Guidance",
    "General Enquiry",
  ],

  // Personas (Source-Derived)
  personas: [
    "Farmer",
    "Student / Graduate",
    "Entrepreneur",
    "Aquaculture Professional",
    "Investor",
    "Other",
  ],
};
