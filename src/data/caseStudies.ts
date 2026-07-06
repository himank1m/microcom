export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  industry: string;
  location: string;
  problem: string;
  solution: string;
  technologies: string[];
  timeline: string;
  outcome: string;
  metrics: string[];
  relatedServices: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "school-cctv-surveillance-jammu",
    title: "CCTV Surveillance Deployment for a School in Jammu",
    shortTitle: "School CCTV Surveillance",
    metaTitle: "School CCTV Surveillance Case Study Jammu | Microware Communications",
    metaDescription:
      "See how Microware Communications planned and deployed a practical CCTV surveillance system for a school environment in Jammu.",
    summary:
      "A school campus needed clearer visibility across entry points, corridors, outdoor movement areas, and administration zones without disrupting daily operations.",
    industry: "Education",
    location: "Jammu",
    problem:
      "The campus had limited camera coverage, inconsistent recording, and blind spots near common movement areas. The management team wanted a dependable system that could be monitored easily by authorized staff.",
    solution:
      "Microware Communications assessed the site, mapped camera positions, supplied network-ready surveillance equipment, configured recording, and organized monitoring access for the administration team.",
    technologies: ["IP CCTV cameras", "NVR recording", "PoE switching", "Structured cabling", "Remote viewing setup"],
    timeline: "2 weeks",
    outcome:
      "The school received more reliable campus visibility, better incident review capability, and a cleaner surveillance network designed for expansion.",
    metrics: ["Reduced blind spots across key areas", "Centralized video review", "Future-ready cabling layout"],
    relatedServices: ["cctv-installation-jammu", "structured-cabling-jammu", "networking-solutions-jammu"]
  },
  {
    slug: "corporate-office-networking-jammu",
    title: "Structured Networking for a Corporate Office",
    shortTitle: "Corporate Office Networking",
    metaTitle: "Corporate Office Networking Case Study Jammu | Microware Communications",
    metaDescription:
      "A corporate office networking case study covering structured cabling, switching, Wi-Fi planning, and reliable connectivity by Microware Communications.",
    summary:
      "A growing office required stable wired and wireless connectivity for workstations, printers, meeting rooms, and daily cloud-based operations.",
    industry: "Corporate Office",
    location: "Jammu",
    problem:
      "The office network had unmanaged cabling, inconsistent speeds, and recurring support issues whenever teams moved desks or added devices.",
    solution:
      "Microware Communications redesigned the network layout, separated core distribution from user access points, labeled cable runs, and configured switching for predictable office usage.",
    technologies: ["Structured CAT6 cabling", "Managed switches", "Patch panels", "Business Wi-Fi", "Rack organization"],
    timeline: "10 working days",
    outcome:
      "The office gained a cleaner, easier-to-maintain network with better coverage, faster troubleshooting, and room for additional users.",
    metrics: ["Organized rack and patching", "Improved Wi-Fi coverage", "Lower day-to-day network disruption"],
    relatedServices: ["networking-solutions-jammu", "structured-cabling-jammu", "wireless-networking-jammu"]
  },
  {
    slug: "hotel-epabx-installation-jammu",
    title: "EPABX Installation for a Hotel",
    shortTitle: "Hotel EPABX Installation",
    metaTitle: "Hotel EPABX Installation Case Study Jammu | Microware Communications",
    metaDescription:
      "A hospitality communication case study showing EPABX planning, extension setup, and guest-service calling for a hotel in Jammu.",
    summary:
      "A hotel needed smooth internal communication between reception, rooms, housekeeping, administration, and service areas.",
    industry: "Hospitality",
    location: "Jammu",
    problem:
      "Staff relied on scattered mobile calls and informal coordination, creating delays during guest requests and room-service handoffs.",
    solution:
      "Microware Communications planned the EPABX extension map, installed the communication system, configured department extensions, and trained staff on everyday call handling.",
    technologies: ["EPABX system", "Extension wiring", "Desk phones", "Call routing", "Numbering plan"],
    timeline: "1 week",
    outcome:
      "The hotel improved internal response time and gave teams a simpler way to coordinate guest-facing and back-office communication.",
    metrics: ["Clear department extensions", "Faster staff coordination", "Expandable room and office calling"],
    relatedServices: ["epabx-systems-jammu", "structured-cabling-jammu", "enterprise-it-solutions-jammu"]
  },
  {
    slug: "institution-biometric-attendance-jammu",
    title: "Biometric Attendance Setup for an Institution",
    shortTitle: "Institution Biometric Attendance",
    metaTitle: "Biometric Attendance Case Study Jammu | Microware Communications",
    metaDescription:
      "A biometric attendance case study for an institution in Jammu, covering devices, enrollment, reporting, and support.",
    summary:
      "An institution wanted a dependable attendance system that could reduce manual registers and make reporting easier for administration.",
    industry: "Institution",
    location: "Northern India",
    problem:
      "Manual attendance tracking took time, created reporting delays, and made it difficult to verify staff movement across working days.",
    solution:
      "Microware Communications supplied biometric attendance hardware, configured user enrollment, tested reports, and guided the administration team through daily usage.",
    technologies: ["Biometric attendance device", "Attendance software", "User enrollment", "Report configuration", "Network integration"],
    timeline: "4 days",
    outcome:
      "The institution moved to a cleaner attendance workflow with better records, quicker monthly reporting, and easier device management.",
    metrics: ["Reduced manual register dependency", "Faster reporting", "Clearer attendance records"],
    relatedServices: ["biometric-attendance-jammu", "access-control-systems-jammu", "enterprise-it-solutions-jammu"]
  },
  {
    slug: "business-server-backup-solution-jammu",
    title: "Server and Backup Solution for a Business",
    shortTitle: "Server and Backup Solution",
    metaTitle: "Server and Backup Solution Case Study Jammu | Microware Communications",
    metaDescription:
      "A Jammu business infrastructure case study covering server deployment, backup planning, and continuity-focused IT support.",
    summary:
      "A business needed a more dependable server and backup setup for shared files, user access, and operational continuity.",
    industry: "Business Services",
    location: "Jammu",
    problem:
      "Important working files were spread across individual systems, backups were inconsistent, and recovery expectations were unclear.",
    solution:
      "Microware Communications deployed a server-centered environment, organized access, configured backup routines, and documented the maintenance approach for the team.",
    technologies: ["Business server", "Network storage", "Backup scheduling", "User access controls", "UPS integration"],
    timeline: "2 weeks",
    outcome:
      "The business gained a more controlled data workflow, better backup discipline, and a clearer support path for infrastructure issues.",
    metrics: ["Centralized file access", "Scheduled backup process", "Improved continuity planning"],
    relatedServices: ["server-solutions-jammu", "cloud-solutions-jammu", "annual-maintenance-contract-jammu"]
  },
  {
    slug: "commercial-building-wifi-access-control-jammu",
    title: "Wi-Fi and Access Control Setup for a Commercial Building",
    shortTitle: "Commercial Wi-Fi and Access Control",
    metaTitle: "Wi-Fi and Access Control Case Study Jammu | Microware Communications",
    metaDescription:
      "A commercial building case study covering Wi-Fi coverage, access control, cabling, and secure network planning in Jammu.",
    summary:
      "A commercial property needed reliable wireless coverage and controlled entry for tenants, staff, and restricted utility areas.",
    industry: "Commercial Real Estate",
    location: "Jammu",
    problem:
      "Wireless signal quality varied between floors, and entry access was difficult to manage consistently across shared and restricted areas.",
    solution:
      "Microware Communications planned access point placement, installed controlled-entry hardware, organized cabling, and configured the network for smoother daily building operations.",
    technologies: ["Business Wi-Fi access points", "Access control devices", "Structured cabling", "PoE switching", "Network segmentation"],
    timeline: "3 weeks",
    outcome:
      "The building received improved wireless coverage, better access discipline, and infrastructure that can be expanded as occupancy grows.",
    metrics: ["Improved floor-wise Wi-Fi coverage", "Controlled access for restricted areas", "Expandable network foundation"],
    relatedServices: ["wireless-networking-jammu", "access-control-systems-jammu", "structured-cabling-jammu"]
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
