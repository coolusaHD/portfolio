import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export const contact = {
  email: 'info@philippalber.de',
  github: 'https://github.com/coolusaHD',
  linkedin: 'https://www.linkedin.com/in/philippalber',
  website: 'https://philippalber.de',
};

export interface TimelineItem {
  title: Localized;
  organization: Localized;
  organizationLink: string | null;
  location: Localized;
  period: Localized;
  current: boolean;
  description: Localized;
  tags: string[];
}

export const career: TimelineItem[] = [
  {
    title: { de: 'Consultant Cyber Defense & Resilience', en: 'Consultant Cyber Defense & Resilience' },
    organization: { de: 'Deloitte', en: 'Deloitte' },
    organizationLink: 'https://www.deloitte.com/de/de.html',
    location: { de: 'Stuttgart (remote)', en: 'Stuttgart (remote)' },
    period: { de: 'Okt 2025 – heute', en: 'Oct 2025 – present' },
    current: true,
    description: {
      de: 'Vollzeit als Cyber Security Pentester: Penetrationstests und Sicherheitsbewertungen für verschiedene Kunden, Konfigurations- und Code-Reviews zur Identifizierung von Schwachstellen sowie Forschung und Entwicklung zur KI-gestützten Automatisierung von Penetrationstests.',
      en: 'Full-time cyber security pentester: penetration tests and security assessments for various clients, configuration and code reviews to identify vulnerabilities, plus research and development on AI-supported automation of penetration testing.',
    },
    tags: ['Pentesting', 'Code Reviews', 'AI Automation'],
  },
  {
    title: { de: 'Werkstudent Risk Advisory — Cyber & Strategic Risk', en: 'Working Student Risk Advisory — Cyber & Strategic Risk' },
    organization: { de: 'Deloitte', en: 'Deloitte' },
    organizationLink: 'https://www.deloitte.com/de/de.html',
    location: { de: 'Stuttgart (remote)', en: 'Stuttgart (remote)' },
    period: { de: 'Okt 2024 – Sep 2025', en: 'Oct 2024 – Sep 2025' },
    current: false,
    description: {
      de: 'Unterstützung des Defense-&-Response-Teams bei Penetrationstests und des Cyber-Strategie-Teams bei der Einführung von Risikomanagement-Lösungen. Implementierung einer CLI zur Kennzeichnung veralteter Wissensbasisartikel in Confluence.',
      en: 'Supported the Defense & Response team on penetration tests and the cyber strategy team on introducing risk management solutions for clients. Implemented a CLI for flagging deprecated knowledge base articles in Confluence.',
    },
    tags: ['Pentesting', 'Cyber Strategy', 'CLI Tooling'],
  },
  {
    title: { de: 'Gründer & Freelancer', en: 'Founder & Freelancer' },
    organization: { de: 'PA IT Solutions', en: 'PA IT Solutions' },
    organizationLink: 'https://pa-it-solutions.de',
    location: { de: 'Renquishausen', en: 'Renquishausen' },
    period: { de: '2023 – 2025', en: '2023 – 2025' },
    current: false,
    description: {
      de: 'Gründung meines eigenen Unternehmens: Websites und Web-Apps für verschiedene Kunden, dazu Design von Social-Media-Posts und Werbematerialien.',
      en: 'Founded my own company: websites and web apps for various clients, plus social media post design and promotional materials.',
    },
    tags: ['Web-Apps', 'Design', 'Consulting'],
  },
  {
    title: { de: 'Full-Stack Werkstudent Softwareentwicklung', en: 'Full-Stack Working Student Software Development' },
    organization: { de: 'elunic AG', en: 'elunic AG' },
    organizationLink: 'https://www.elunic.com',
    location: { de: 'München (remote)', en: 'Munich (remote)' },
    period: { de: 'Okt 2023 – Sep 2024', en: 'Oct 2023 – Sep 2024' },
    current: false,
    description: {
      de: 'Implementierung von Features für die IIoT-Software shopfloor.io.',
      en: 'Implemented features for the IIoT software shopfloor.io.',
    },
    tags: ['IIoT', 'Full-Stack'],
  },
  {
    title: {
      de: 'Full-Stack Werkstudent Softwareentwicklung (Team Integration)',
      en: 'Full-Stack Working Student Software Development (Team Integration)',
    },
    organization: { de: 'itdesign GmbH', en: 'itdesign GmbH' },
    organizationLink: 'https://www.itdesign.de',
    location: { de: 'Tübingen (hybrid)', en: 'Tübingen (hybrid)' },
    period: { de: 'Mär 2022 – Apr 2023', en: 'Mar 2022 – Apr 2023' },
    current: false,
    description: {
      de: 'Migration der End-to-End-Tests auf Playwright (20 % kürzere Testlaufzeit, Ablösung von NightwatchJS), Einführung von Dependabot, Refactoring der SaaS-Anwendung Meisterplan sowie Prototyp einer Webhook-Infrastruktur auf AWS (Bachelorthesis).',
      en: 'Migrated the end-to-end tests to Playwright (20% faster test runs, replacing NightwatchJS), introduced Dependabot, refactored the SaaS application Meisterplan and prototyped a webhook infrastructure on AWS (bachelor thesis).',
    },
    tags: ['Playwright', 'AWS', 'Meisterplan'],
  },
  {
    title: { de: 'Tutor', en: 'Tutor' },
    organization: { de: 'Lehrstuhl Eingebettete Systeme, Uni Tübingen', en: 'Chair of Embedded Systems, University of Tübingen' },
    organizationLink: 'https://uni-tuebingen.de/',
    location: { de: 'Tübingen', en: 'Tübingen' },
    period: { de: 'Okt 2021 – Okt 2022', en: 'Oct 2021 – Oct 2022' },
    current: false,
    description: {
      de: 'Betreuung von Studierenden im Basispraktikum (Mikrocomputer) Informatik: Grundlagen analoger und digitaler Schaltungstechnik sowie Mikrocontroller-Programmierung in C mit Sensoren.',
      en: 'Supervised students in the basic practical course (microcomputer) computer science: fundamentals of analogue and digital circuit technology and microcontroller programming in C with sensors.',
    },
    tags: ['C', 'Microcontrollers', 'Teaching'],
  },
];

export const education: TimelineItem[] = [
  {
    title: { de: 'PhD Informatik', en: 'PhD Computer Science' },
    organization: { de: 'Hochschule Reutlingen & Promotionsverband BW', en: 'Hochschule Reutlingen & Promotionsverband BW' },
    organizationLink: 'https://www.reutlingen-university.de',
    location: { de: 'Reutlingen', en: 'Reutlingen' },
    period: { de: 'seit Okt 2025', en: 'since Oct 2025' },
    current: true,
    description: {
      de: 'Promotion mit dem Arbeitstitel „Die Zukunft der offensiven Sicherheitstests: Eine Analyse des Wandels der Cybersicherheitsmethoden durch Automatisierung und KI-Integration".',
      en: 'Doctoral research with the working title "The Future of Offensive Security Testing: An Analysis of the Transformation of Cybersecurity Methods through Automation and AI Integration".',
    },
    tags: ['Offensive Security', 'AI', 'Research'],
  },
  {
    title: { de: 'M.Sc. Informatik', en: 'M.Sc. Computer Science' },
    organization: { de: 'Eberhard Karls Universität Tübingen', en: 'Eberhard Karls Universität Tübingen' },
    organizationLink: 'https://uni-tuebingen.de/',
    location: { de: 'Tübingen', en: 'Tübingen' },
    period: { de: 'Apr 2023 – Nov 2025', en: 'Apr 2023 – Nov 2025' },
    current: false,
    description: {
      de: 'Masterthesis: Untersuchung und Anwendung des OWASP-ASVS-Standards im Rahmen externer Sicherheitsüberprüfungen. Außerdem Entwicklung einer Suchmaschine mit Python und MySQL („Modern Search Engines").',
      en: 'Master\'s thesis: investigation and application of the OWASP ASVS standard in the context of external security assessments. Also built a search engine with Python and MySQL ("Modern Search Engines").',
    },
    tags: ['OWASP ASVS', 'Python', 'MySQL'],
  },
  {
    title: { de: 'B.Sc. Informatik', en: 'B.Sc. Computer Science' },
    organization: { de: 'Eberhard Karls Universität Tübingen', en: 'Eberhard Karls Universität Tübingen' },
    organizationLink: 'https://uni-tuebingen.de/',
    location: { de: 'Tübingen', en: 'Tübingen' },
    period: { de: 'Okt 2019 – Apr 2023', en: 'Oct 2019 – Apr 2023' },
    current: false,
    description: {
      de: 'Bachelorthesis: Untersuchung von AWS-Cloud-Services zur Ausarbeitung einer Webhook-Infrastruktur für die SaaS-Anwendung Meisterplan. Daneben u. a. Entwicklung eines DNS-Servers und einer Schach-KI in Python.',
      en: "Bachelor's thesis: evaluation of AWS cloud services to devise a webhook infrastructure for the SaaS application Meisterplan. Also built a DNS server and a chess AI in Python, among other projects.",
    },
    tags: ['AWS', 'Python'],
  },
  {
    title: { de: 'Abitur', en: 'Abitur' },
    organization: { de: 'Otto-Hahn-Gymnasium', en: 'Otto-Hahn-Gymnasium' },
    organizationLink: null,
    location: { de: 'Tuttlingen', en: 'Tuttlingen' },
    period: { de: '2011 – 2019', en: '2011 – 2019' },
    current: false,
    description: {
      de: 'Geschäftsführer der Schülerfirma adiuserv — ausgezeichnet mit dem Aesculap-Preis für außergewöhnliches Engagement.',
      en: 'Managing director of the student company adiuserv — honoured with the Aesculap Prize for exceptional commitment.',
    },
    tags: ['adiuserv', 'Aesculap-Preis'],
  },
];

export interface Project {
  title: string;
  date: string;
  description: Localized;
  link: string | null;
  repoLink: string | null;
  isPrivate: boolean;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: 'Basic-HR',
    date: '2025 –',
    description: {
      de: 'Software zur Bewerbungsverwaltung mit Microservice-Architektur: Stellenausschreibungen, Bewerbungen und Bewerberdaten mit Multi-Tenant-Authentifizierung, Multi-Stage-Deployment, REST API und Admin-Dashboard.',
      en: 'Application management software with a microservice architecture: job postings, applications and applicant data with multi-tenant authentication, multi-stage deployment, REST API and admin dashboard.',
    },
    link: 'https://basic-hr.de',
    repoLink: null,
    isPrivate: true,
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Docker', 'AWS'],
  },
  {
    title: 'Heuberger Live App',
    date: '2024',
    description: {
      de: 'Liveticker-App mit Turnierleitungssoftware für den Heuberg Wanderpokal: Live-Ticker, Echtzeit-Nachrichten und Gruppenergebnisse mit Blitztabelle. 3800+ Downloads, 4,7-Sterne-Bewertung und 300 % mehr Sponsorenverträge.',
      en: 'Live ticker app and tournament management software for the Heuberg Wanderpokal: live ticker, real-time news and group results with flash table. 3800+ downloads, a 4.7-star rating and a 300% increase in sponsorships.',
    },
    link: 'https://heuberger.app',
    repoLink: null,
    isPrivate: true,
    tech: ['Flutter', 'Supabase', 'React', 'Firebase'],
  },
  {
    title: 'Order Butler',
    date: '2022',
    description: {
      de: 'Web-App für eine Sammelkarten-Plattform mit Authentifizierung, Sammelkarten-Verwaltung, Shopsystem und Bewertungssystem — inklusive digitalem Laufzettel per QR-Code.',
      en: 'Web app for a trading card platform with authentication, trading card management, a shop system and a rating system — including a digital routing slip via QR code.',
    },
    link: null,
    repoLink: null,
    isPrivate: true,
    tech: ['React', 'JavaScript', 'Docker', 'MongoDB'],
  },
  {
    title: 'Portfolio',
    date: '2022 –',
    description: {
      de: 'Diese Website: ein interaktives Portfolio als moderne Ergänzung zum klassischen Lebenslauf — migriert von React auf Astro für maximale Performance.',
      en: 'This website: an interactive portfolio as a modern companion to the classic CV — migrated from React to Astro for maximum performance.',
    },
    link: 'https://philippalber.de',
    repoLink: 'https://github.com/coolusaHD/portfolio',
    isPrivate: false,
    tech: ['Astro', 'TypeScript'],
  },
  {
    title: 'Pollen Bot',
    date: '2021',
    description: {
      de: 'Discord-Bot, der Pollenflug-Informationen über die API des DWD einholt, verarbeitet und täglich in einem Discord-Channel anzeigt.',
      en: 'Discord bot that fetches pollen forecast data from the German Weather Service (DWD) API, processes it and posts it daily to a Discord channel.',
    },
    link: 'https://coolusahd.github.io/pollen-discord-bot/',
    repoLink: 'https://github.com/coolusaHD/pollen-discord-bot',
    isPrivate: false,
    tech: ['Discord.js', 'Node.js'],
  },
  {
    title: 'React Vite TS Template',
    date: '2023',
    description: {
      de: 'Template für Frontend-Anwendungen mit React, Vite und Playwright — inklusive CI-Pipeline mit automatischem Deployment.',
      en: 'Template for frontend applications with React, Vite and Playwright — including a CI pipeline with automatic deployment.',
    },
    link: null,
    repoLink: 'https://github.com/coolusaHD/react-vite-ts-template',
    isPrivate: false,
    tech: ['React', 'Vite', 'Playwright'],
  },
  {
    title: 'json-from-env',
    date: '2023',
    description: {
      de: 'GitHub Action, die aus Umgebungsvariablen eine JSON-Datei generiert — praktisch für Build-Zeit-Konfiguration in CI-Pipelines.',
      en: 'GitHub Action that generates a JSON file from environment variables — handy for build-time configuration in CI pipelines.',
    },
    link: null,
    repoLink: 'https://github.com/coolusaHD/json-from-env',
    isPrivate: false,
    tech: ['TypeScript', 'GitHub Actions'],
  },
];

export const skills: { key: 'security' | 'languages' | 'frameworks' | 'devops'; items: string[] }[] = [
  {
    key: 'security',
    items: ['Penetration Testing', 'Security Assessments', 'Code Reviews', 'OWASP ASVS', 'AI Automation'],
  },
  {
    key: 'languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'PHP', 'HTML', 'CSS'],
  },
  {
    key: 'frameworks',
    items: ['React', 'Next.js', 'Astro', 'Flutter', 'React Native', 'Angular', 'Tailwind CSS', 'Playwright', 'Supabase'],
  },
  {
    key: 'devops',
    items: ['Docker', 'AWS (SAM)', 'GitHub Actions', 'Git', 'Turbopack', 'Jira'],
  },
];
