import type ru from "./ru";

// Структура обязана совпадать с ru: тип выводится из русского словаря.
type Shape<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Shape<U>[]
    : T extends object
      ? { [K in keyof T]: Shape<T[K]> }
      : T;

const en: Shape<typeof ru> = {
  meta: {
    name: "Alex Fialko",
  },
  a11y: {
    menu: "Menu",
    navigation: "Navigation",
    mainNav: "Main navigation",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    langName: "Переключить на русский",
  },
  nav: {
    work: "Work",
    capabilities: "What I do",
    about: "About",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Prague · Full-Stack & AI Engineer",
    status: "Open to projects",
    headlineLead: "AI systems, bots and products that",
    headlineAccent: "actually reach production",
    sub: "I'm Alex Fialko. I build AI agents, Telegram bots and full-stack products — from architecture to deploy, on my own. Not pilots, not demos for the sake of demos.",
    ctaPrimary: "Message on Telegram",
    ctaSecondary: "See the work",
    stats: {
      projects: "projects with the decisions explained",
      live: "with a live version",
      private: "in private repos — architecture shown",
    },
  },
  proof: {
    eyebrow: "Work",
    title: "What I've built",
    sub: "Not a list of technologies: for each project — the problem, the solution, and what happened in practice, including what broke.",
    featured: "Featured",
    more: "More projects",
    viewCase: "View case",
    liveDemo: "Live demo",
    repo: "Code",
    privateNote: "Private repository — the publicly agreed part is shown",
    filterLabel: "Filter by area",
    filterAll: "All",
    categories: {
      ai: "AI systems",
      bots: "Bots",
      web: "Web",
      desktop: "Desktop",
      content: "AI content",
    },
  },
  casePage: {
    problem: "Problem",
    system: "System",
    role: "Role",
    outcome: "Outcome",
    back: "All work",
    next: "Next case",
    prev: "Previous case",
    metrics: "By the numbers",
  },
  capabilities: {
    eyebrow: "What I do",
    title: "Four areas, one approach",
    items: [
      {
        title: "AI agents & automation",
        desc: "LLM integrations, multi-agent pipelines, monitoring and data processing with no human in the loop where that's justified.",
      },
      {
        title: "Telegram bots & Mini Apps",
        desc: "From a simple command bot to one with AI logic, a database and cron jobs in production.",
      },
      {
        title: "Full-stack web products",
        desc: "Next.js/React on the front, Node or Python on the back, honest work with data and deployment.",
      },
      {
        title: "Turnkey product MVPs",
        desc: "From idea to a working version in the hands of first users — fast, without extra layers of abstraction.",
      },
    ],
  },
  howIWork: {
    eyebrow: "How I work",
    title: "No surprises in the process",
    steps: [
      {
        number: "01",
        title: "Discovery",
        desc: "We work out what actually needs solving — before the code editor opens.",
      },
      {
        number: "02",
        title: "Architecture",
        desc: "I pick the stack and architecture for the task, not out of habit. Decisions and their reasons are written down.",
      },
      {
        number: "03",
        title: "Build",
        desc: "Iteratively, with working intermediate versions — progress is visible every week, not at the end.",
      },
      {
        number: "04",
        title: "Deploy & iterate",
        desc: "Production isn't the finish line, it's the start. I monitor, fix and refine based on real use.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "An engineer, not just a “vibe coder”",
    body: [
      "Based in Prague, building systems where LLMs meet ordinary engineering. Every project on this page was built by me alone: architecture, code, tests, deployment.",
      "I use AI tools not because it's fashionable but because they really shorten the path from idea to working code — provided you understand what they do and where they can lie.",
    ],
    principlesTitle: "Principles you can see in the cases",
    principles: [
      {
        title: "A deterministic core around the model",
        desc: "The dice roll, the alerting, the limits of authority live in code you can test. The model explains; it doesn't decide.",
      },
      {
        title: "Checked on real hardware",
        desc: "Tests didn't reveal that WASAPI goes silent without sound. A live run did. I look for those places before the client does.",
      },
      {
        title: "Hard limits on autonomy",
        desc: "No auto-publishing, no outbound messages behind a human's back, no shell for the model — as an invariant, not a setting.",
      },
    ],
    availability: "Open to partnerships and projects that need someone who will carry the architecture through to the end, not drop it halfway.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell me what needs building",
    body: "Projects, partnerships, consulting — write directly, no forms, no approvals. I reply fast.",
    emailLabel: "Email",
    telegramLabel: "Telegram",
    githubLabel: "GitHub",
  },
  footer: {
    rights: "Alex Fialko",
    tagline: "Prague · Built with Next.js",
    top: "Back to top",
  },
  themeToggle: {
    light: "Light",
    dark: "Dark",
  },
  langSwitch: {
    label: "RU",
  },
};

export default en;
