export type LocalServicePage = {
  benefits: string[];
  faqs: Array<{ answer: string; question: string }>;
  hero: string;
  included: string[];
  industries: string[];
  intro: string;
  metaDescription: string;
  metaTitle: string;
  overview: string[];
  process: string[];
  related: string[];
  slug: string;
  title: string;
};

function serviceFaqs(service: string, outcome: string, planning: string, support: string) {
  return [
    {
      question: `Do you provide ${service} in Jammu?`,
      answer: `Yes. Microware Communications supports ${service.toLowerCase()} requirements for organizations in Jammu and nearby areas, with planning, supply, deployment, and after-service support handled professionally.`
    },
    {
      question: `Can you inspect our site before suggesting ${service.toLowerCase()}?`,
      answer: `Yes. A site or requirement review helps the team understand current infrastructure, operating conditions, user count, security needs, and budget before recommending a practical solution.`
    },
    {
      question: "Do you work with businesses and government departments?",
      answer: "Yes. Microware works with business, government, defence, institutional, and industrial environments where reliability, documentation, and long-term service matter."
    },
    {
      question: "Will you recommend products or only install what we already have?",
      answer: `Both options are possible. The team can specify suitable hardware and software, or review existing equipment and integrate it where it is dependable enough for the required ${outcome}.`
    },
    {
      question: "How long does implementation usually take?",
      answer: `${planning} Smaller requirements can move quickly, while larger deployments need survey, approval, procurement, installation, testing, and handover stages.`
    },
    {
      question: "Can the solution be expanded later?",
      answer: "Yes. Recommendations are made with future expansion in mind, so organizations can add users, devices, storage, locations, or integrations without unnecessary rework."
    },
    {
      question: "Do you provide support after installation?",
      answer: `${support} Support can include troubleshooting, preventive checks, AMC coverage, documentation, and guidance for everyday operation.`
    },
    {
      question: "How do we start?",
      answer: "Use the contact form or call Microware Communications. Share your requirement, location, team size, and current setup so the next step can be planned clearly."
    }
  ];
}

export const localServices: LocalServicePage[] = [
  {
    slug: "computer-dealer-jammu",
    title: "Computer Dealer in Jammu",
    metaTitle: "Computer Dealer in Jammu | Microware Communications",
    metaDescription:
      "Microware Communications is a computer dealer in Jammu supplying laptops, desktops, workstations, accessories, setup, and IT support for organizations.",
    hero: "Reliable computers and workplace IT for serious business environments.",
    intro:
      "Microware Communications helps organizations in Jammu choose dependable computers, laptops, desktops, workstations, and accessories that match real operating needs rather than generic specifications.",
    overview: [
      "Computer procurement is not just about buying a machine. Businesses need the right configuration, warranty, compatibility, software readiness, and service support so daily work does not stop because of avoidable hardware decisions.",
      "With 25+ years of technology experience, Microware supports buyers with product selection, setup, networking readiness, peripheral planning, and ongoing service for offices, institutions, and operational teams."
    ],
    included: ["Business laptops and desktops", "Workstations for demanding users", "Monitors, UPS, keyboards, and accessories", "Operating system and software readiness", "Office setup and device installation", "Warranty and support coordination"],
    industries: ["Corporate offices", "Schools and colleges", "Government departments", "Healthcare administration", "Retail and service businesses"],
    process: ["Assess user roles and workload", "Recommend configurations and brands", "Plan accessories and power backup", "Supply and set up systems", "Connect printers, networks, and shared resources", "Provide after-sales support"],
    benefits: ["Right-sized machines for each role", "Reduced downtime from poor selection", "Single point of contact for supply and support", "Better lifecycle planning", "Support for future upgrades"],
    related: ["enterprise-it-solutions-jammu", "annual-maintenance-contract-jammu", "software-solutions-jammu"],
    faqs: serviceFaqs("computer dealership and supply", "workplace productivity", "Timelines depend on quantity, configuration, availability, and installation scope.", "Microware can support systems after supply through service visits or AMC plans.")
  },
  {
    slug: "cctv-installation-jammu",
    title: "CCTV Installation in Jammu",
    metaTitle: "CCTV Installation Jammu | Microware Communications",
    metaDescription:
      "Professional CCTV installation in Jammu for offices, institutions, shops, warehouses, and secure facilities with planning, setup, monitoring, and support.",
    hero: "Professionally planned CCTV systems for visibility, deterrence, and control.",
    intro:
      "Microware Communications designs and installs CCTV systems in Jammu for organizations that need clear coverage, dependable recording, secure access, and practical long-term service.",
    overview: [
      "A good CCTV deployment begins with camera placement, lighting, storage, network capacity, and monitoring expectations. Random camera installation often creates blind spots, weak footage, and service problems later.",
      "Microware brings practical surveillance experience across offices, institutions, shops, warehouses, public-facing areas, and controlled environments where evidence quality and uptime matter."
    ],
    included: ["Camera placement planning", "IP and analog CCTV systems", "NVR/DVR setup", "Remote viewing configuration", "Storage and backup planning", "Maintenance and troubleshooting"],
    industries: ["Retail stores", "Warehouses", "Schools and colleges", "Hotels and offices", "Government and defence environments"],
    process: ["Survey entry points and risk areas", "Mark camera positions", "Plan storage and network load", "Install cameras and recorders", "Configure viewing permissions", "Test footage, angles, and retention"],
    benefits: ["Reduced blind spots", "Clearer incident review", "Controlled remote access", "Better storage planning", "Professional support after installation"],
    related: ["access-control-systems-jammu", "biometric-attendance-jammu", "networking-solutions-jammu"],
    faqs: serviceFaqs("CCTV installation", "security visibility", "A small site may be completed quickly after approval; larger sites require survey, cabling, mounting, recorder setup, and testing.", "Post-installation support covers viewing issues, camera checks, recorder configuration, and maintenance guidance.")
  },
  {
    slug: "epabx-systems-jammu",
    title: "EPABX Systems in Jammu",
    metaTitle: "EPABX Systems Jammu | Microware Communications",
    metaDescription:
      "EPABX systems in Jammu for offices, institutions, hotels, and organizations needing structured internal calling and communication setup.",
    hero: "Organized voice communication for offices, departments, and multi-user facilities.",
    intro:
      "Microware Communications provides EPABX planning and setup for organizations in Jammu that need professional internal calling, extension management, and smoother front-desk communication.",
    overview: [
      "EPABX systems help teams route calls, manage extensions, connect departments, and reduce communication confusion in busy facilities. The right setup depends on users, floors, departments, cabling, and call flow.",
      "Microware approaches EPABX as part of the broader IT and infrastructure environment, making sure voice systems fit with cabling, network rooms, reception operations, and future expansion."
    ],
    included: ["Extension planning", "EPABX installation", "Telephone instrument setup", "Call routing configuration", "Cabling coordination", "User handover and support"],
    industries: ["Hotels", "Hospitals and clinics", "Schools", "Offices", "Government facilities"],
    process: ["Map departments and users", "Define call flow", "Plan extensions and cabling", "Install EPABX hardware", "Configure routing and testing", "Train reception or admin users"],
    benefits: ["Cleaner internal calling", "Better front-desk handling", "Department-wise extensions", "Reduced missed communication", "Expandable voice infrastructure"],
    related: ["structured-cabling-jammu", "enterprise-it-solutions-jammu", "annual-maintenance-contract-jammu"],
    faqs: serviceFaqs("EPABX systems", "office communication", "Implementation depends on extension count, cabling readiness, and call routing complexity.", "Support includes extension changes, troubleshooting, and configuration assistance.")
  },
  {
    slug: "networking-solutions-jammu",
    title: "Networking Solutions in Jammu",
    metaTitle: "Networking Solutions Jammu | Microware Communications",
    metaDescription:
      "Enterprise networking solutions in Jammu including routers, switches, LAN planning, structured connectivity, Wi-Fi integration, and support.",
    hero: "Stable networks that keep people, devices, cameras, and servers connected.",
    intro:
      "Microware Communications delivers networking solutions in Jammu for organizations that need dependable LAN, switching, routing, Wi-Fi, surveillance connectivity, and scalable infrastructure.",
    overview: [
      "Modern offices depend on network performance for internet, file sharing, cloud tools, CCTV, attendance, printers, servers, and collaboration systems. Weak network planning creates recurring downtime and slow work.",
      "Microware designs networks around actual device count, bandwidth needs, security expectations, cable quality, rack readiness, and future expansion so the setup remains manageable."
    ],
    included: ["LAN and switching design", "Router and firewall setup", "Network rack planning", "IP scheme planning", "CCTV and Wi-Fi integration", "Troubleshooting and optimization"],
    industries: ["Corporate offices", "Educational campuses", "Manufacturing units", "Government departments", "Healthcare and hospitality"],
    process: ["Audit devices and traffic needs", "Design topology", "Specify switches and routers", "Coordinate cabling and racks", "Configure and label network", "Test performance and document setup"],
    benefits: ["Reduced downtime", "Cleaner network management", "Better speed and stability", "Scalable architecture", "Improved supportability"],
    related: ["wireless-networking-jammu", "structured-cabling-jammu", "cyber-security-jammu"],
    faqs: serviceFaqs("networking solutions", "connectivity and uptime", "Timelines depend on number of nodes, rack condition, cabling, and configuration scope.", "Support can include troubleshooting, expansion, documentation, and AMC-based maintenance.")
  },
  {
    slug: "server-solutions-jammu",
    title: "Server Solutions in Jammu",
    metaTitle: "Server Solutions Jammu | Microware Communications",
    metaDescription:
      "Server solutions in Jammu for businesses and institutions, including planning, deployment, storage, backup readiness, and infrastructure support.",
    hero: "Server infrastructure planned for reliability, access, and business continuity.",
    intro:
      "Microware Communications helps Jammu organizations plan and deploy server solutions for file storage, applications, user access, backup readiness, and centralized operations.",
    overview: [
      "Servers sit at the center of many business workflows. Poor sizing, weak power planning, missing backups, or unmanaged access can create operational risk and expensive downtime.",
      "Microware supports server selection, installation environment, network readiness, storage planning, user access, and post-deployment service so the infrastructure remains dependable."
    ],
    included: ["Server selection and sizing", "Rack and power readiness", "Storage planning", "User and access setup", "Backup planning", "Monitoring and maintenance support"],
    industries: ["Business offices", "Educational institutions", "Healthcare facilities", "Manufacturing units", "Government offices"],
    process: ["Understand applications and users", "Size server and storage needs", "Check power and network readiness", "Install and configure hardware", "Set access and backup approach", "Document and support operations"],
    benefits: ["Centralized data access", "Better control over users", "Improved backup discipline", "Scalable infrastructure", "Reduced operational risk"],
    related: ["cloud-solutions-jammu", "networking-solutions-jammu", "annual-maintenance-contract-jammu"],
    faqs: serviceFaqs("server solutions", "centralized IT operations", "Timelines depend on hardware availability, data migration needs, and application complexity.", "Microware can provide ongoing checks, troubleshooting, and AMC-based infrastructure support.")
  },
  {
    slug: "wireless-networking-jammu",
    title: "Wireless Networking in Jammu",
    metaTitle: "Wireless Networking Jammu | Wi-Fi Solutions",
    metaDescription:
      "Wireless networking and Wi-Fi solutions in Jammu for offices, campuses, hotels, institutions, and enterprise environments.",
    hero: "Professional Wi-Fi coverage for teams, guests, devices, and operations.",
    intro:
      "Microware Communications plans wireless networking in Jammu for organizations that need stable coverage, controlled access, and dependable Wi-Fi performance across rooms, floors, or campuses.",
    overview: [
      "Wi-Fi performance depends on more than installing access points. Walls, floors, user density, roaming, bandwidth, interference, and security policies all affect the final experience.",
      "Microware approaches wireless networking with coverage planning, access point placement, network segmentation, and support readiness for business environments."
    ],
    included: ["Wi-Fi coverage planning", "Access point installation", "Guest network setup", "Roaming and SSID planning", "Bandwidth and security settings", "Performance troubleshooting"],
    industries: ["Hotels", "Schools and colleges", "Offices", "Retail locations", "Healthcare facilities"],
    process: ["Review coverage areas", "Estimate user density", "Plan access point positions", "Configure SSIDs and access rules", "Test roaming and speed", "Optimize after real use"],
    benefits: ["Better coverage", "Fewer dead zones", "Controlled guest access", "Improved user experience", "Scalable wireless design"],
    related: ["networking-solutions-jammu", "structured-cabling-jammu", "enterprise-it-solutions-jammu"],
    faqs: serviceFaqs("wireless networking", "Wi-Fi performance", "A basic installation can be quick; multi-floor or campus Wi-Fi needs coverage review and testing.", "Support includes access point checks, password changes, coverage improvements, and troubleshooting.")
  },
  {
    slug: "structured-cabling-jammu",
    title: "Structured Cabling in Jammu",
    metaTitle: "Structured Cabling Jammu | Microware Communications",
    metaDescription:
      "Structured cabling in Jammu for offices, CCTV, servers, Wi-Fi, voice, and enterprise network infrastructure.",
    hero: "Clean cabling that makes networks easier to manage, support, and expand.",
    intro:
      "Microware Communications provides structured cabling in Jammu for organizations that need neat, documented, and dependable connectivity for computers, cameras, Wi-Fi, servers, and voice systems.",
    overview: [
      "Cabling quality affects every connected system. Untidy or undocumented cabling makes troubleshooting slower, upgrades harder, and downtime more likely.",
      "Microware plans cable routes, termination points, racks, labeling, testing, and future capacity so the physical layer supports long-term reliability."
    ],
    included: ["LAN cabling", "CCTV cabling", "Rack dressing", "Patch panel termination", "Labeling and testing", "Cable route planning"],
    industries: ["Offices", "Educational institutions", "Retail chains", "Warehouses", "Government facilities"],
    process: ["Survey cable paths", "Map endpoints", "Plan rack and patching", "Install and terminate cables", "Label and test connections", "Handover organized layout"],
    benefits: ["Cleaner troubleshooting", "Lower downtime", "Easier expansion", "Professional rack organization", "Better long-term reliability"],
    related: ["networking-solutions-jammu", "wireless-networking-jammu", "epabx-systems-jammu"],
    faqs: serviceFaqs("structured cabling", "network reliability", "Timing depends on cable count, building access, ceiling routes, and termination requirements.", "Support can include fault tracing, cable replacement, rack cleanup, and expansion work.")
  },
  {
    slug: "biometric-attendance-jammu",
    title: "Biometric Attendance in Jammu",
    metaTitle: "Biometric Attendance Jammu | Microware Communications",
    metaDescription:
      "Biometric attendance systems in Jammu for offices, institutions, factories, and departments needing reliable staff attendance tracking.",
    hero: "Attendance systems that simplify daily workforce tracking and reporting.",
    intro:
      "Microware Communications deploys biometric attendance systems in Jammu for organizations that need reliable employee tracking, reporting, device setup, and support.",
    overview: [
      "Attendance systems must match shift patterns, user count, reporting requirements, and site conditions. A poorly configured device can create inaccurate records and administrative frustration.",
      "Microware supports device selection, installation, enrollment guidance, report configuration, and integration planning for practical attendance management."
    ],
    included: ["Biometric device supply", "Installation and setup", "Employee enrollment support", "Report configuration", "Network or standalone setup", "Troubleshooting and maintenance"],
    industries: ["Factories", "Schools", "Hospitals", "Offices", "Government departments"],
    process: ["Understand attendance rules", "Select device type", "Install at suitable access point", "Enroll users", "Configure reports", "Train admin users"],
    benefits: ["More accurate attendance records", "Reduced manual tracking", "Useful reports for admin teams", "Scalable user management", "Support for daily operations"],
    related: ["access-control-systems-jammu", "software-solutions-jammu", "annual-maintenance-contract-jammu"],
    faqs: serviceFaqs("biometric attendance", "attendance tracking", "Setup timing depends on user count, report needs, and whether the device is standalone or networked.", "Support includes device troubleshooting, enrollment help, report guidance, and maintenance.")
  },
  {
    slug: "access-control-systems-jammu",
    title: "Access Control Systems in Jammu",
    metaTitle: "Access Control Systems Jammu | Microware Communications",
    metaDescription:
      "Access control systems in Jammu for offices, restricted rooms, institutions, and secure environments needing controlled entry.",
    hero: "Controlled entry for rooms, departments, and sensitive operating areas.",
    intro:
      "Microware Communications provides access control systems in Jammu for organizations that need to manage who enters important spaces and when.",
    overview: [
      "Access control protects sensitive rooms, equipment areas, records, server spaces, and operational zones. The right system depends on door type, user levels, emergency needs, and administration workflow.",
      "Microware plans devices, locks, exit buttons, power, cabling, user permissions, and support so access control works smoothly in everyday use."
    ],
    included: ["Door access devices", "Locks and exit buttons", "User permission setup", "Admin handover", "Cabling and power coordination", "Maintenance support"],
    industries: ["Offices", "Server rooms", "Schools", "Healthcare facilities", "Government and defence environments"],
    process: ["Identify restricted areas", "Review door and power conditions", "Select device and lock type", "Install access hardware", "Configure user permissions", "Test safety and daily use"],
    benefits: ["Controlled entry", "Reduced unauthorized access", "Better audit discipline", "Flexible user permissions", "Professional support"],
    related: ["cctv-installation-jammu", "biometric-attendance-jammu", "structured-cabling-jammu"],
    faqs: serviceFaqs("access control systems", "controlled entry", "Implementation depends on door count, lock type, cabling, and permission requirements.", "Support includes user changes, troubleshooting, device checks, and maintenance.")
  },
  {
    slug: "cloud-solutions-jammu",
    title: "Cloud Solutions in Jammu",
    metaTitle: "Cloud Solutions Jammu | Microware Communications",
    metaDescription:
      "Cloud solutions in Jammu for businesses needing email, storage, backup, collaboration, migration support, and hybrid IT planning.",
    hero: "Cloud planning that keeps data accessible, protected, and easier to manage.",
    intro:
      "Microware Communications supports cloud solutions in Jammu for organizations that need better collaboration, data access, backup readiness, and practical migration guidance.",
    overview: [
      "Cloud adoption should be planned around users, data sensitivity, internet reliability, backup needs, and existing systems. Moving too quickly without structure can create access and security issues.",
      "Microware helps organizations choose practical cloud services, prepare users, migrate carefully, and maintain a balance between cloud and local infrastructure."
    ],
    included: ["Cloud readiness review", "Email and collaboration setup", "Cloud storage planning", "Backup approach", "User access configuration", "Hybrid infrastructure guidance"],
    industries: ["Small businesses", "Professional firms", "Schools", "Distributed teams", "Administrative offices"],
    process: ["Review current data and users", "Choose suitable cloud tools", "Plan access and migration", "Set up accounts and permissions", "Move data carefully", "Train and support users"],
    benefits: ["Better remote access", "Improved collaboration", "Cleaner backup planning", "Reduced local dependency", "Scalable user management"],
    related: ["server-solutions-jammu", "cyber-security-jammu", "enterprise-it-solutions-jammu"],
    faqs: serviceFaqs("cloud solutions", "digital accessibility", "Cloud timelines depend on mailbox count, data volume, internet readiness, and migration sensitivity.", "Support can include account setup, access issues, backup review, and user guidance.")
  },
  {
    slug: "cyber-security-jammu",
    title: "Cyber Security in Jammu",
    metaTitle: "Cyber Security Jammu | Microware Communications",
    metaDescription:
      "Cyber security solutions in Jammu for organizations needing safer networks, endpoint protection, access control, firewall planning, and practical security guidance.",
    hero: "Practical cyber security for everyday business networks and users.",
    intro:
      "Microware Communications helps organizations in Jammu strengthen cyber security through safer networks, endpoint protection, access discipline, and practical risk reduction.",
    overview: [
      "Security is not only a software product. It includes network design, user practices, passwords, backups, device hygiene, remote access, and the discipline to keep systems updated.",
      "Microware focuses on realistic security improvements that fit the organization’s size, infrastructure, and operational risk."
    ],
    included: ["Endpoint protection guidance", "Firewall and router planning", "Network segmentation", "Backup readiness review", "Access control practices", "Security troubleshooting"],
    industries: ["Offices", "Financial and professional firms", "Schools", "Healthcare administration", "Government departments"],
    process: ["Review current risks", "Check network and endpoints", "Recommend controls", "Configure security layers", "Improve backup and access practices", "Document and support changes"],
    benefits: ["Reduced security exposure", "Better access discipline", "Safer endpoints", "Improved backup awareness", "Practical protection without overcomplication"],
    related: ["networking-solutions-jammu", "cloud-solutions-jammu", "enterprise-it-solutions-jammu"],
    faqs: serviceFaqs("cyber security", "risk reduction", "Timing depends on existing infrastructure, number of systems, and the depth of review required.", "Support includes configuration help, endpoint guidance, network checks, and security improvement planning.")
  },
  {
    slug: "enterprise-it-solutions-jammu",
    title: "Enterprise IT Solutions in Jammu",
    metaTitle: "Enterprise IT Solutions Jammu | Microware Communications",
    metaDescription:
      "Enterprise IT solutions in Jammu covering computers, CCTV, networking, servers, software, websites, cloud, security, and AMC support.",
    hero: "A single technology partner for infrastructure, security, software, and support.",
    intro:
      "Microware Communications delivers enterprise IT solutions in Jammu for organizations that want dependable technology planning, supply, deployment, integration, and long-term support.",
    overview: [
      "Enterprise IT work often spans computers, networks, CCTV, servers, software, cloud, websites, access control, and maintenance. Managing each piece separately creates coordination problems.",
      "Microware brings 25+ years of practical experience to connect these requirements into a coherent technology environment."
    ],
    included: ["IT planning and consultation", "Hardware and infrastructure", "Networking and Wi-Fi", "CCTV and access systems", "Custom software and websites", "AMC and ongoing support"],
    industries: ["Government departments", "Corporate offices", "Education", "Manufacturing", "Healthcare and hospitality"],
    process: ["Understand business operations", "Audit current systems", "Prioritize requirements", "Design practical solution mix", "Deploy in phases", "Support and improve over time"],
    benefits: ["Single accountable partner", "Better coordination across systems", "Practical long-term planning", "Reduced vendor confusion", "Support for growth"],
    related: ["it-infrastructure-jammu", "software-solutions-jammu", "annual-maintenance-contract-jammu"],
    faqs: serviceFaqs("enterprise IT solutions", "technology continuity", "Larger environments are usually planned in phases after assessment and priority setting.", "Support can include AMC, troubleshooting, upgrades, documentation, and guidance.")
  },
  {
    slug: "software-solutions-jammu",
    title: "Software Solutions in Jammu",
    metaTitle: "Software Solutions Jammu | Custom Software & Websites",
    metaDescription:
      "Custom software and website solutions in Jammu for businesses needing workflow systems, reporting tools, business websites, and practical digital platforms.",
    hero: "Custom software and websites built around real business workflows.",
    intro:
      "Microware Communications provides software solutions in Jammu, including custom applications and professional websites for organizations that need practical digital systems.",
    overview: [
      "Good software should reduce manual work, improve reporting, support teams, and make information easier to manage. A website should communicate clearly, build trust, and generate useful enquiries.",
      "Microware treats software and websites as mainstream technology services, backed by long practical experience in understanding how organizations actually operate."
    ],
    included: ["Custom workflow software", "Reporting and admin systems", "Business websites", "Landing pages", "Maintenance and improvements", "Integration planning"],
    industries: ["Business offices", "Retail and service firms", "Educational institutions", "Professional practices", "Local enterprises"],
    process: ["Understand workflow and goals", "Define features and content", "Plan screens, data, and user roles", "Build and review iteratively", "Launch with testing", "Improve based on real use"],
    benefits: ["Better process control", "Less manual duplication", "Professional online presence", "Improved enquiry generation", "Systems designed around your operation"],
    related: ["enterprise-it-solutions-jammu", "cloud-solutions-jammu", "computer-dealer-jammu"],
    faqs: serviceFaqs("software solutions", "digital operations", "Timelines depend on feature depth, content readiness, approvals, and testing requirements.", "Support includes updates, fixes, content changes, enhancements, and guidance after launch.")
  },
  {
    slug: "annual-maintenance-contract-jammu",
    title: "Annual Maintenance Contract in Jammu",
    metaTitle: "Annual Maintenance Contract Jammu | IT AMC Services",
    metaDescription:
      "Annual maintenance contract services in Jammu for computers, networks, CCTV, servers, and IT infrastructure support.",
    hero: "Reliable AMC support to keep business technology running.",
    intro:
      "Microware Communications provides annual maintenance contract services in Jammu for organizations that want predictable support for computers, networks, CCTV, servers, and infrastructure.",
    overview: [
      "Technology needs regular care. Without preventive maintenance and a trusted support partner, small issues can become downtime, productivity loss, or security gaps.",
      "Microware structures AMC support around the customer environment, covering practical troubleshooting, checks, guidance, and continuity-focused service."
    ],
    included: ["Computer support", "Network troubleshooting", "CCTV checks", "Server and infrastructure assistance", "Preventive maintenance", "Priority service planning"],
    industries: ["Offices", "Schools", "Retail businesses", "Institutions", "Government departments"],
    process: ["Audit installed systems", "Define support scope", "Set response expectations", "Schedule preventive checks", "Resolve service issues", "Review recurring problems"],
    benefits: ["Predictable support", "Reduced downtime", "Better maintenance discipline", "Longer equipment life", "Single service partner"],
    related: ["computer-dealer-jammu", "networking-solutions-jammu", "it-infrastructure-jammu"],
    faqs: serviceFaqs("annual maintenance contracts", "technology continuity", "AMC starts after scope review, asset listing, and agreement on support terms.", "Support is the core of AMC and can be structured around the size and needs of the organization.")
  },
  {
    slug: "it-infrastructure-jammu",
    title: "IT Infrastructure in Jammu",
    metaTitle: "IT Infrastructure Jammu | Microware Communications",
    metaDescription:
      "IT infrastructure services in Jammu covering computers, networking, servers, cabling, Wi-Fi, CCTV, software, and ongoing support.",
    hero: "End-to-end IT infrastructure for organizations that need dependable operations.",
    intro:
      "Microware Communications plans and supports IT infrastructure in Jammu across computers, networking, servers, cabling, Wi-Fi, CCTV, software, websites, and maintenance.",
    overview: [
      "IT infrastructure is the foundation for daily work. It includes hardware, connectivity, security, software, storage, communication, and the support processes that keep everything usable.",
      "Microware helps organizations build infrastructure in a practical sequence, avoiding unnecessary complexity while keeping future growth in mind."
    ],
    included: ["Infrastructure assessment", "Computer and server planning", "LAN, Wi-Fi, and cabling", "CCTV and access systems", "Software and website support", "AMC and lifecycle planning"],
    industries: ["Enterprise offices", "Government departments", "Education", "Manufacturing", "Healthcare and hospitality"],
    process: ["Assess current environment", "Identify operational gaps", "Prioritize critical systems", "Design infrastructure roadmap", "Deploy and integrate", "Maintain and improve"],
    benefits: ["Stronger technology foundation", "Better coordination between systems", "Scalable planning", "Reduced downtime risk", "Experienced local support"],
    related: ["enterprise-it-solutions-jammu", "server-solutions-jammu", "structured-cabling-jammu"],
    faqs: serviceFaqs("IT infrastructure", "operational reliability", "Infrastructure work is usually phased according to urgency, budget, site readiness, and business continuity needs.", "Support can continue through AMC, upgrades, troubleshooting, and periodic reviews.")
  }
];

export const localServiceSlugs = localServices.map((service) => service.slug);

export function getLocalService(slug: string) {
  return localServices.find((service) => service.slug === slug);
}
