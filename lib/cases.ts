export type CaseLocaleCopy = {
  tagline: string;
  problem: string;
  system: string;
  role: string;
  outcome: string;
};

export type Case = {
  slug: string;
  title: string;
  isPrivateScope: boolean;
  stack: string[];
  links: { live?: string; repo?: string };
  ru: CaseLocaleCopy;
  en: CaseLocaleCopy;
};

export const cases: Case[] = [
  {
    slug: "vibeide",
    title: "VibeIDE",
    isPrivateScope: false,
    stack: [
      "React",
      "Vite",
      "Liveblocks",
      "Yjs",
      "Gemini 2.0 Flash",
      "Express",
      "PostgreSQL + pgvector",
      "NATS",
      "OpenTelemetry",
      "Clerk",
      "Railway",
    ],
    links: {
      live: "https://vibe-production-cd60.up.railway.app",
      repo: "https://github.com/MERSEI/Vibe",
    },
    ru: {
      tagline: "AI-среда разработки за 4 дня",
      problem:
        "Показать, что связка real-time коллаборации, мультиагентной оркестрации и полной observability — это не квартал командной работы, а дни одного инженера с правильным инструментом.",
      system:
        "Monaco-редактор с CRDT-синхронизацией текста (Liveblocks + Yjs, ручной биндинг после того, как y-monaco оказался несовместим), мультиагентный DAG-оркестратор с параллельным выполнением через топологическую сортировку, RAG-пайплайн на pgvector с гибридным поиском (BM25 + vector), OpenTelemetry-трейсинг с двойным экспортом в Grafana Tempo. Все внешние интеграции построены по паттерну «real API + mock fallback» — демо работает без единого ключа.",
      role: "Соло-разработка в паре с Claude Code.",
      outcome:
        "4 дня, 40+ коммитов, ~3500 строк React/JS + ~600 строк Express — задеплоено и работает.",
    },
    en: {
      tagline: "AI dev environment in 4 days",
      problem:
        "Prove that real-time collaboration, multi-agent orchestration, and full observability aren't a team-quarter of work — they're days for one engineer with the right tool.",
      system:
        "Monaco editor with CRDT text sync (Liveblocks + Yjs, hand-rolled binding after y-monaco proved incompatible), a multi-agent DAG orchestrator with parallel execution via topological sort, a pgvector RAG pipeline with hybrid BM25/vector search, and OpenTelemetry tracing dual-exported to Grafana Tempo. Every external integration follows a real-API-plus-mock-fallback pattern — the demo works with zero keys configured.",
      role: "Solo build, paired with Claude Code.",
      outcome:
        "4 days, 40+ commits, ~3,500 lines of React/JS plus ~600 lines of Express — deployed and running.",
    },
  },
  {
    slug: "taskzthreads",
    title: "TaskzThreads",
    isPrivateScope: true,
    stack: ["Headless browser (CDP)", "Gemini API", "Telegram Bot API"],
    links: {},
    ru: {
      tagline: "AI-мониторинг лидов в Threads",
      problem:
        "Вручную отслеживать релевантные упоминания и потенциальных клиентов в Threads не масштабируется — сигнал теряется в шуме.",
      system:
        "Headless-браузер скрапит целевые темы, Gemini оценивает релевантность каждого поста, отфильтрованные сигналы уходят в Telegram в реальном времени.",
      role: "Спроектировал и построил в одиночку — от скрапера до доставки в Telegram.",
      outcome:
        "Завершённый, рабочий проект — часть архитектуры переиспользована в других инструментах мониторинга.",
    },
    en: {
      tagline: "AI lead monitoring for Threads",
      problem:
        "Manually tracking relevant mentions and potential leads on Threads doesn't scale — signal gets lost in the noise.",
      system:
        "A headless browser scrapes target topics, Gemini scores each post's relevance, and filtered signals are pushed to Telegram in real time.",
      role: "Designed and built solo — from the scraper to Telegram delivery.",
      outcome:
        "Completed, working project — parts of the architecture reused in other monitoring tools.",
    },
  },
  {
    slug: "skillcoachbot",
    title: "SkillCoachBot",
    isPrivateScope: true,
    stack: [
      "Node.js",
      "Telegraf",
      "SQLite",
      "Gemini 2.0 Flash",
      "node-canvas",
      "node-cron",
      "Railway",
    ],
    links: {},
    ru: {
      tagline: "Telegram AI-коуч по навыкам",
      problem:
        "Разработчику легко забросить прокачку навыков без структуры и внешнего напоминания.",
      system:
        "Telegram-бот на Telegraf с SQLite в WAL-режиме (крон и обработчики команд читают/пишут параллельно без блокировок), Gemini генерирует три прогрессивных задания на основе истории выполненного, ежедневные крон-напоминания с изоляцией ошибок на каждого пользователя, PNG-график прогресса через node-canvas.",
      role: "Соло-разработка.",
      outcome:
        "Рабочий бот с webhook/polling режимами и persistent volume для базы на Railway.",
    },
    en: {
      tagline: "Telegram AI skill coach",
      problem:
        "It's easy for a developer to drop skill-building without structure and outside nudging.",
      system:
        "A Telegraf bot on SQLite in WAL mode (cron and command handlers read/write concurrently without blocking each other), Gemini generates three progressive tasks from completion history, daily cron reminders with per-user error isolation, and PNG progress charts via node-canvas.",
      role: "Solo build.",
      outcome:
        "Working bot with webhook/polling dual mode and a persistent volume for the database on Railway.",
    },
  },
  {
    slug: "ofdashboard",
    title: "OFDashboard",
    isPrivateScope: false,
    stack: ["Python", "Streamlit", "PostgreSQL", "WebSockets", "Railway"],
    links: {
      live: "https://ofdashboard-production.up.railway.app",
      repo: "https://github.com/MERSEI/OFDashboard",
    },
    ru: {
      tagline: "Операторский дашборд для контент-платформ",
      problem:
        "Управлять несколькими OnlyFans-аккаунтами вручную — чаты, контент, аналитика — не масштабируется без единого интерфейса и AI-помощи в переписке.",
      system:
        "Streamlit-дашборд поверх кастомного клиента к OnlyFans: чаты в реальном времени в едином интерфейсе, AI-ассистированные ответы, аналитика по контенту и выручке, поддержка нескольких аккаунтов одновременно.",
      role: "Соло-разработка.",
      outcome: "Рабочий продакшн-инструмент.",
    },
    en: {
      tagline: "Operator dashboard for content platforms",
      problem:
        "Managing multiple OnlyFans accounts by hand — chats, content, analytics — doesn't scale without one unified interface and AI-assisted messaging.",
      system:
        "A Streamlit dashboard on top of a custom OnlyFans client: real-time chats in one interface, AI-assisted replies, content and revenue analytics, multi-account support.",
      role: "Solo build.",
      outcome: "Working production tool.",
    },
  },
  {
    slug: "ai-integrator",
    title: "AI Integrator Landing",
    isPrivateScope: false,
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini API", "Vercel"],
    links: {
      live: "https://ai-integrator-landing.vercel.app",
      repo: "https://github.com/MERSEI/ai-integrator-landing",
    },
    ru: {
      tagline: "AI-маркетплейс инструментов для продаж",
      problem:
        "Показать сразу несколько работающих LLM-инструментов на одной площадке, вместо того чтобы растягивать их по отдельным продуктам.",
      system:
        "Next.js-лендинг с несколькими живыми AI-инструментами (персонализация холодных писем, обработка возражений и другие) поверх Gemini API, с rate-limiting и честным демо-режимом для инструментов, которым нужен живой скрапинг, недоступный в serverless.",
      role: "Спроектировал и построил в одиночку, включая дизайн-систему.",
      outcome: "Задеплоено и работает, несколько инструментов в проде.",
    },
    en: {
      tagline: "AI tools marketplace for sales",
      problem:
        "Showcase several working LLM tools on one platform instead of spreading them across separate products.",
      system:
        "A Next.js landing page with several live AI tools (cold-email personalization, objection handling, and more) on top of the Gemini API, with rate limiting and an honest demo mode for tools that need live scraping unavailable in serverless.",
      role: "Designed and built solo, including the design system.",
      outcome: "Deployed and live, several tools in production.",
    },
  },
  {
    slug: "sporysh",
    title: "Sporysh",
    isPrivateScope: false,
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    links: {
      live: "https://sporysh.vercel.app",
    },
    ru: {
      tagline: "B2B-редизайн для поставщика сырья",
      problem:
        "У украинского B2B-поставщика растительного сырья не было сайта, который бы продавал международным закупщикам.",
      system:
        "Редизайн и разработка сайта на EN/UA под B2B-аудиторию — с акцентом на доверие и понятную презентацию продукта для закупщиков, которые видят сайт один раз перед звонком.",
      role: "Клиентский проект, разработка от макета до деплоя.",
      outcome: "Задеплоено, живое.",
    },
    en: {
      tagline: "B2B redesign for a raw-materials supplier",
      problem:
        "A Ukrainian B2B supplier of plant-based raw materials had no site that actually sold to international buyers.",
      system:
        "Website redesign and build in EN/UA for a B2B audience — focused on trust signals and a clear product presentation for buyers who see the site once before a call.",
      role: "Client project, built from design to deploy.",
      outcome: "Deployed, live.",
    },
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
