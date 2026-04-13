export const C = {
  navy:    '#060d1f',
  navy2:   '#0a1628',
  navy3:   '#0d1f3c',
  cyan:    '#38bdf8',
  cyan2:   '#67e8f9',
  indigo:  '#818cf8',
  green:   '#34d399',
  pink:    '#f472b6',
  orange:  '#fb923c',
  purple:  '#a78bfa',
};

export const SERVICES_ALL = [
  { icon: '◈', title: 'Web Applications',    color: C.cyan,   tags: ['React','Next.js','Vue','TypeScript','Tailwind'],         desc: 'Blazing-fast SPAs, SSR apps, and progressive web apps built with React, Next.js, Vue, and Nuxt. We obsess over Core Web Vitals, accessibility, and pixel-perfect UI.' },
  { icon: '◉', title: 'Mobile Development',   color: C.indigo, tags: ['Flutter','React Native','Swift','Kotlin'],               desc: 'Native iOS and Android development alongside cross-platform Flutter and React Native apps that feel truly native on every device.' },
  { icon: '⬢', title: 'Cloud & DevOps',       color: C.green,  tags: ['AWS','GCP','Docker','Kubernetes','Terraform'],           desc: 'AWS, GCP, and Azure infrastructure designed for scale. CI/CD pipelines, container orchestration, and 99.9% uptime SLAs.' },
  { icon: '◎', title: 'AI & Automation',       color: C.pink,   tags: ['OpenAI','LangChain','RAG','Python','Zapier'],            desc: 'Custom LLM integrations, RAG pipelines, intelligent document processing, and workflow automation that saves thousands of hours.' },
  { icon: '⊕', title: 'E-Commerce Solutions', color: C.orange, tags: ['Shopify','WooCommerce','Stripe','Custom'],               desc: 'High-converting storefronts, custom marketplaces, and B2B portals engineered to maximise revenue and streamline operations.' },
  { icon: '◐', title: 'API & Integrations',   color: C.purple, tags: ['REST','GraphQL','Webhooks','OAuth'],                    desc: 'REST and GraphQL API design, third-party integrations, payment gateways, CRM connectors, and data pipelines.' },
  { icon: '◧', title: 'UI/UX Design',          color: '#f9a8d4',tags: ['Figma','Prototyping','Design Systems','Accessibility'], desc: 'User-centred design backed by research. Figma prototypes, usability testing, and design systems that scale across products.' },
  { icon: '◩', title: 'Maintenance & Support', color: '#86efac',tags: ['24/7 Support','SLA','Monitoring','Updates'],           desc: 'Ongoing technical support, performance monitoring, security patches, and feature evolution to keep your software elite.' },
];

export const PROJECTS = [
  { title: 'RetailEdge Platform',  category: 'E-Commerce',       color: C.cyan,   tags: ['Next.js','Node.js','PostgreSQL'],       year: 2024, desc: 'A full-stack B2B marketplace handling 10 K+ daily transactions with real-time inventory sync.' },
  { title: 'HealthTrack Mobile',   category: 'Mobile App',        color: C.pink,   tags: ['Flutter','TensorFlow Lite','Firebase'],  year: 2024, desc: 'Cross-platform health monitoring app with wearable integration and ML-based insights.' },
  { title: 'LogiFlow Automation',  category: 'AI & Automation',   color: C.green,  tags: ['Python','LangChain','AWS Lambda'],       year: 2023, desc: 'Intelligent document processing pipeline reducing manual ops by 70 % for a logistics firm.' },
  { title: 'FinDash Analytics',    category: 'Web App',           color: C.indigo, tags: ['React','D3.js','FastAPI'],               year: 2023, desc: 'Real-time financial analytics dashboard with customisable widgets and automated reporting.' },
  { title: 'EduPortal LMS',        category: 'Web App',           color: C.orange, tags: ['Vue','WebRTC','MongoDB'],                year: 2022, desc: 'White-label LMS supporting 50 K+ students with live classes, quizzes, and certifications.' },
  { title: 'SecureVault API',       category: 'Cloud & DevOps',   color: C.purple, tags: ['Go','AWS KMS','Kubernetes'],             year: 2022, desc: 'Enterprise-grade secrets management API with end-to-end encryption and audit logging.' },
];

export const STATS = [
  { label: 'Projects',  value: 120, suffix: '+' },
  { label: 'Clients',   value: 50,  suffix: '+' },
  { label: 'Years',     value: 7,   suffix: '+' },
  { label: 'Uptime',    value: 99,  suffix: '%' },
];

export const TEAM = [
  { name: 'Dinesh Perera',  role: 'CEO & Co-Founder',     color: C.cyan,   init: 'DP' },
  { name: 'Sasha Rodrigo',  role: 'CTO & Co-Founder',     color: C.indigo, init: 'SR' },
  { name: 'Nimal Fernando', role: 'Lead Designer',         color: C.pink,   init: 'NF' },
  { name: 'Kayla Mendis',   role: 'Head of Engineering',   color: C.green,  init: 'KM' },
];
