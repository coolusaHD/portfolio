import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export const contact = {
  email: 'info@philippalber.de',
  github: 'https://github.com/coolusaHD',
  linkedin: 'https://www.linkedin.com/in/philippalber',
  website: 'https://philippalber.de',
};

export interface ExperienceItem {
  title: Localized;
  organization: string;
  organizationLink: string | null;
  period: Localized;
  current: boolean;
  description: Localized;
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: {
      de: 'Cyber Security Consultant & Full-Stack Developer',
      en: 'Cyber Security Consultant & Full-Stack Developer',
    },
    organization: 'Deloitte',
    organizationLink: 'https://www.deloitte.com/de/de.html',
    period: { de: 'seit 2023', en: 'since 2023' },
    current: true,
    description: {
      de: 'Penetration Testing von Web-Anwendungen und Infrastruktur sowie Entwicklung interner Full-Stack-Tools im Bereich Cyber Security.',
      en: 'Penetration testing of web applications and infrastructure, plus development of internal full-stack tooling in the cyber security practice.',
    },
    tags: ['Pentesting', 'Web Security', 'React', 'Node.js'],
  },
  {
    title: { de: 'Gründer & Freelancer', en: 'Founder & Freelancer' },
    organization: 'PA IT Solutions',
    organizationLink: null,
    period: { de: 'nebenberuflich', en: 'freelance' },
    current: true,
    description: {
      de: 'IT-Dienstleistungen für regionale Kunden: individuelle Web-Anwendungen, Beratung und Betrieb — von der Idee bis zum laufenden System.',
      en: 'IT services for regional clients: custom web applications, consulting and operations — from idea to running system.',
    },
    tags: ['Full-Stack', 'Consulting', 'Hosting'],
  },
  {
    title: { de: 'M.Sc. Informatik', en: 'M.Sc. Computer Science' },
    organization: 'Eberhard Karls Universität Tübingen',
    organizationLink: 'https://uni-tuebingen.de/',
    period: { de: 'laufend', en: 'ongoing' },
    current: true,
    description: {
      de: 'Masterstudium mit Schwerpunkt auf IT-Sicherheit und Software Engineering.',
      en: 'Graduate studies focusing on IT security and software engineering.',
    },
    tags: ['IT-Security', 'Software Engineering'],
  },
  {
    title: { de: 'B.Sc. Informatik', en: 'B.Sc. Computer Science' },
    organization: 'Eberhard Karls Universität Tübingen',
    organizationLink: 'https://uni-tuebingen.de/',
    period: { de: 'abgeschlossen', en: 'completed' },
    current: false,
    description: {
      de: 'Bachelorstudium der Informatik — Grundlagen von Algorithmen über Datenbanken bis zu verteilten Systemen.',
      en: 'Undergraduate studies in computer science — from algorithms and databases to distributed systems.',
    },
    tags: ['Informatik'],
  },
];

export interface Project {
  title: string;
  description: Localized;
  link: string | null;
  repoLink: string | null;
  isPrivate: boolean;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: 'OrderButler',
    description: {
      de: 'Software zur Unterstützung interner Betriebsabläufe beim Bewerten von Pokémon-Karten — mit digitalem Laufzettel, der per QR-Code mit der Bestellung verknüpft ist.',
      en: 'Software supporting internal operations for grading Pokémon cards — featuring a digital routing slip linked to each order via QR code.',
    },
    link: null,
    repoLink: null,
    isPrivate: true,
    tech: ['React', 'Express', 'MongoDB'],
  },
  {
    title: 'Heuberger Live Ticker & Manager',
    description: {
      de: 'Live-Ticker-App für das lokale Fußballturnier auf dem Heuberg. Der Manager dient als Turnierleitungssoftware und verwaltet alle Daten, die Gäste über die App abrufen.',
      en: 'Live ticker app for the local football tournament on the Heuberg. The manager acts as tournament control software and handles all data guests access through the app.',
    },
    link: 'https://heuberger.app',
    repoLink: null,
    isPrivate: true,
    tech: ['React', 'Flutter', 'Supabase'],
  },
  {
    title: 'Portfolio',
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

export const skills: { key: 'security' | 'frontend' | 'backend' | 'devops'; items: string[] }[] = [
  {
    key: 'security',
    items: ['Penetration Testing', 'Web Security', 'OWASP', 'Burp Suite', 'Network Security'],
  },
  {
    key: 'frontend',
    items: ['TypeScript', 'React', 'React Native', 'Astro', 'Vite', 'MUI', 'HTML5', 'CSS3'],
  },
  {
    key: 'backend',
    items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    key: 'devops',
    items: ['Docker', 'GitHub Actions', 'Git', 'Apache', 'Raspberry Pi', 'Jira'],
  },
];
