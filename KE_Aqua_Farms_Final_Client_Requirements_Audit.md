# FINAL CLIENT REQUIREMENTS AUDIT

## A. MUST GET FROM CLIENT BEFORE FINAL APPROVAL
Only genuinely required items.

| ID | Page/Area | Requirement | Why Needed | Client Must Provide/Confirm | Priority |
|---|---|---|---|---|---|
| A1 | Global Brand | Master Brand Hierarchy | The logo and primary identity conflict between KE AQUA GROUP and KE AQUA FARMS. | Confirm exactly which name is the overarching brand and which is the division. | P0 |
| A2 | /services/* | Commercial Status of Services | 16 capabilities are listed as services (e.g., Water Quality Testing). | We must know if these are actually sold to farmers or just internal practices, to avoid false advertising. | P0 |
| A3 | Contact | Lead Destination / Form Backend | The contact forms currently have no backend and only log to the console. | An email address, WhatsApp number, or CRM webhook where enquiries should be sent. | P0 |
| A4 | Legal Pages | Privacy Policy, Terms, Disclaimers | Required to protect the business and currently entirely placeholder text. | Approved legal text for Privacy Policy, Terms, and Training/Lab Disclaimers. | P0 |

## B. CLIENT CONFIRMATIONS REQUIRED
Questions/decisions requiring explicit yes/no confirmation.

| ID | Page/Area | Requirement | Why Needed | Client Must Provide/Confirm | Priority |
|---|---|---|---|---|---|
| B1 | Knowledge Hub | CMS Requirement | Determine how articles/updates will be published. | Yes/No: Do you need a CMS (like Sanity/Strapi) or will a developer update it manually? | P1 |
| B2 | Training | Booking Engine | Determine if users pay/book online or just enquire. | Yes/No: Do you need a booking/payment gateway for training? | P1 |
| B3 | Aqua Pulse | Online Lab Reports | Determine if farmers can download test reports online. | Yes/No: Do we need a login portal for lab reports? | P2 |
| B4 | Certifications | ASC Certification Status | The blueprint mentions ASC but warns not to claim it until issued. | Yes/No: Is the farm currently ASC Certified? | P1 |

## C. CONTENT REQUIRED
Exact missing content.

| ID | Page/Area | Requirement | Why Needed | Client Must Provide/Confirm | Priority |
|---|---|---|---|---|---|
| C1 | /founder | Founder Biography | Mandated by blueprint; currently missing. | Full biography, philosophy, and background of Kamatham Emmanuel. | P1 |
| C2 | /our-businesses | Division Descriptions | Need exact descriptions for KE Aqua Farms, Kamatham Enterprises, Aqua Pulse, and KE Coastal. | Paragraph descriptions of each division's role. | P1 |
| C3 | /case-studies | Verified Farm Cases | Essential for trust; currently missing entirely. | Documented metrics (farm, dates, feed, survival, production) for past crops. | P1 |
| C4 | /practical-training | Training Logistics | Users need to know what they are signing up for. | Program names, exact duration, fees, dates, and eligibility. | P1 |
| C5 | Homepage | 13 Missing Sections | Currently only has Hero and Ecosystem. | Content for Who We Are, Farms, Lab, Training, Tech, Seed, Responsible Aqua, Case Studies, Hub, Founder, Media. | P0 |

## D. IMAGES / VIDEOS / DOCUMENTS REQUIRED
Exact assets required.

| ID | Page/Area | Requirement | Why Needed | Client Must Provide/Confirm | Priority |
|---|---|---|---|---|---|
| D1 | Global | Official Logos | High-res versions of all entity logos needed for header/footer. | SVG or high-res PNG logos for KE Aqua Group, KE Aqua Farms, Aqua Pulse, etc. | P0 |
| D2 | /our-farms | Real Farm Photos | Blueprint forbids stock photos; requires real 30-acre farm visuals. | High-quality photos of ponds, aerators, feeders, harvest. | P1 |
| D3 | /aqua-pulse | Lab/Microscopy Photos | To prove the capability of the lab. | Photos of microscopes, water testing, lab technicians. | P1 |
| D4 | /founder | Founder Photos | Needed for the Founder page. | Professional photos of Kamatham Emmanuel on the farm. | P1 |
| D5 | /media | Media Appearances | Blueprint mentions TV, podcasts, training. | Links to videos, photos of events, press clippings. | P2 |

## E. LEGAL / CREDENTIALS REQUIRED
Exact confirmations/documents.

| ID | Page/Area | Requirement | Why Needed | Client Must Provide/Confirm | Priority |
|---|---|---|---|---|---|
| E1 | /credentials | Registration Numbers | Blueprint mandates displaying GST, NFDP, Aqua Trace. | Exact numbers and certificates (PDF/Images) to display. | P1 |
| E2 | /services/lab | Laboratory Disclaimer | To protect against legal liability for test results. | Approved disclaimer text. | P1 |
| E3 | /training | Cancellation/Refund Policy | Required if training is a paid service. | Approved policy text. | P1 |

## F. CONTACT / FORM / COMMUNICATION DETAILS
Exact production details required.

| ID | Page/Area | Requirement | Why Needed | Client Must Provide/Confirm | Priority |
|---|---|---|---|---|---|
| F1 | Contact/Footer | Phone Numbers | Currently placeholders (+91 XXXXX). | Official business phone and WhatsApp numbers. | P0 |
| F2 | Contact/Footer | Email Addresses | Currently placeholders. | Official enquiry email addresses. | P0 |
| F3 | Contact/Footer | Physical Address | Needed for map and footer. | Exact physical address of the farm and lab. | P1 |
| F4 | Footer | Social Media Links | Currently placeholders. | URLs for LinkedIn, YouTube, Facebook (or confirm which to hide). | P1 |

## G. DOMAIN / HOSTING / THIRD-PARTY ACCESS
Exact launch requirements.

| ID | Page/Area | Requirement | Why Needed | Client Must Provide/Confirm | Priority |
|---|---|---|---|---|---|
| G1 | Deployment | Domain Name & DNS | Required to put the site live. | The target domain (e.g., keaquafarms.com) and access to its DNS records. | P0 |
| G2 | Deployment | Hosting Environment | Where will the Next.js app be deployed? | Vercel, AWS, or other hosting provider access. | P0 |

## H. CLAIMS REQUIRING VERIFICATION
Page + claim + required action.

| ID | Page/Area | Requirement | Why Needed | Client Must Provide/Confirm | Priority |
|---|---|---|---|---|---|
| H1 | All Pages | 30-Acre Commercial Farm | Used in PracticeShowcaseSection and LearningPhilosophySection. | KEEP / REMOVE / CLIENT CONFIRMATION REQUIRED. | P1 |
| H2 | All Pages | ASC Certification | Mentioned in blueprint as "do not publish until issued". | KEEP / REMOVE / CLIENT CONFIRMATION REQUIRED. | P1 |

## I. DEVELOPER WORK STILL REQUIRED
Separate from client requirements.

| ID | Page/Area | Requirement | Why Needed | Client Must Provide/Confirm | Priority |
|---|---|---|---|---|---|
| I1 | /app | Create Missing Pages | Blueprint requires ~10 distinct pages that currently don't exist. | Developer task (N/A). | P0 |
| I2 | /services/* | Restructure Service Pages | Blueprint mandates a strict Problem -> Practice flow, currently missing. | Developer task (N/A). | P1 |
| I3 | SEO | Unique Meta Tags | Currently service pages inherit global titles. | Developer task (N/A). | P1 |
| I4 | Codebase | Image Optimization | Refactor `<img>` to `next/image` for performance. | Developer task (N/A). | P2 |

## J. OPTIONAL / POST-LAUNCH ITEMS
Do not mix these with blockers.

| ID | Page/Area | Requirement | Why Needed | Client Must Provide/Confirm | Priority |
|---|---|---|---|---|---|
| J1 | /ke-coastal | KE Coastal Content | Blueprint notes "when operational and documented". | Wait until the processing division is active. | P3 |
| J2 | Blog/Hub | CMS Integration | If client wants to self-manage articles. | Can be added post-launch if static pages suffice for v1. | P3 |

## K. FINAL CLIENT QUESTION LIST
Convert all unresolved client requirements into short, direct questions I can ask during the call.

FINAL SUMMARY:
- Total P0: 10
- Total P1: 17
- Total P2: 2
- Total P3: 2
- Number of client decisions: 4
- Number of assets required: 5
- Number of legal/credential items: 3
- Number of developer tasks: 4

### TOP 20 QUESTIONS FOR THE FINAL CLIENT CALL

1. Is the master digital brand "KE Aqua Group" or "KE Aqua Farms"? Which logo should be primary?
2. Of the 16 capabilities listed (e.g., Water Quality Testing, Auto Feeders), which are actually commercial services you sell to other farmers, and which are just internal practices?
3. Where should the contact forms send enquiries? (Provide email, WhatsApp number, or CRM info).
4. Do you have the approved legal text for Privacy Policy, Terms, and Disclaimers ready?
5. Do you need a booking and payment gateway for training, or just an enquiry form?
6. What are the exact program names, durations, fees, and dates for the practical training?
7. Do farmers need to be able to download lab reports from the website?
8. Are you currently ASC Certified, or should we withhold that claim?
9. Can you provide the biography and professional photos for Founder Kamatham Emmanuel?
10. Can you provide documented metrics (survival, production, feed) for past crops to build the Case Studies?
11. We need authentic, high-quality photos of the 30-acre farm, lab, and equipment. Do you have these ready?
12. Can you provide high-resolution SVG or PNG files for all entity logos?
13. What are the official phone numbers and email addresses for public contact?
14. What are the exact URLs for your official social media profiles (LinkedIn, YouTube, Facebook)?
15. What is the exact physical address for the farm and lab?
16. What domain name will we be launching on, and do you have access to its DNS settings?
17. Who will be hosting the website, or should we deploy it on our infrastructure (e.g., Vercel)?
18. Can we confirm the farm is exactly 30 acres as mentioned in the current copy?
19. Do you need a CMS (Content Management System) to update the Knowledge Hub yourself, or will you send updates to a developer?
20. Will KE Coastal (processing) be part of the initial launch, or added later when operational?

### FINAL VERDICT

Answer:
1. **What MUST be obtained from the client today?** Brand hierarchy, commercial status of services, form destination (email/WhatsApp), official contact details, domain/hosting access, and legal copy.
2. **What can be completed without the client?** Creating the missing page routes, updating SEO meta tags, restructuring service page layouts to match the blueprint, and image optimization.
3. **What should NOT be published until confirmed?** Any claims about ASC certification, pricing/dates for training, lab testing services if not commercially available, and placeholder legal documents.
4. **What could block production launch?** Lack of domain/hosting access, missing legal/privacy policies, no form backend, missing homepage content sections, and unresolved brand identity.
5. **Is the website currently ready for client approval?** NO. The homepage is missing 85% of its required sections, and multiple standalone pages mandated by the blueprint do not exist.
6. **Is it currently ready for production launch?** NO. It contains placeholders, lacks backend form integration, is missing legal copy, and fails to implement the required Information Architecture.
