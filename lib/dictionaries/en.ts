const en = {
  meta: {
    name: "Alex Fialko",
  },
  nav: {
    work: "Work",
    capabilities: "Capabilities",
    about: "About",
    notes: "Notes",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Prague · Full-Stack & AI Engineer",
    prompt: "$ whoami",
    headline: "Alex Fialko",
    sub: "I build AI agents, Telegram bots, and full-stack products that make it to production — not pilots, not demos for demo's sake.",
    ctaPrimary: "Message on Telegram",
    ctaSecondary: "See the work",
  },
  proof: {
    eyebrow: "Selected work",
    title: "What's been built",
    sub: "Every case has either browsable code or a live product running right now.",
    viewCase: "View case",
    liveDemo: "Live demo",
    repo: "Code",
    privateNote: "Private repository — showing the publicly agreed scope",
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Four lanes, one approach",
    items: [
      {
        title: "AI agents & automation",
        desc: "LLM integrations, multi-agent pipelines, monitoring and data processing without a human in the loop where that's justified.",
      },
      {
        title: "Telegram bots & Mini Apps",
        desc: "From a simple command bot to one with real AI logic, a database, and cron jobs running in production.",
      },
      {
        title: "Full-stack web products",
        desc: "Next.js/React on the front, Node or Python on the back, honest data handling and deployment.",
      },
      {
        title: "Turnkey product MVPs",
        desc: "From idea to a working version in the hands of first users — fast, without unnecessary layers of abstraction.",
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
        desc: "We figure out what actually needs solving — before the editor is even open.",
      },
      {
        number: "02",
        title: "Architecture",
        desc: "Stack and architecture chosen for the task, not out of habit. Decisions get written down, with the why.",
      },
      {
        number: "03",
        title: "Build",
        desc: "Iterative, with working intermediate versions — you see progress every week, not just at the end.",
      },
      {
        number: "04",
        title: "Deploy & iterate",
        desc: "Production isn't the finish line, it's the start. I monitor, fix, and improve based on real usage.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Short version",
    body: [
      "An engineer who ships things to production. A working system interests me more than a pretty prototype nobody launches.",
      "I use AI tools not because they're trendy, but because they genuinely shorten the path from idea to working code — if you understand what they're actually doing and where they can be wrong.",
      "Based in Prague. Open to partnerships and projects that need someone who sees the architecture through to the end, not someone who drops it halfway.",
    ],
  },
  playbooks: {
    eyebrow: "Future lab",
    title: "Playbooks",
    badge: "Coming soon",
    body: "Turning architectural decisions from real projects into playbooks — how to build AI agents, Vercel vs Railway, how to avoid the free-tier LLM rate-limit traps. Work in progress.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    body: "Partnerships, projects, consulting — reach out directly, no forms, no gatekeeping.",
    emailLabel: "Email",
    telegramLabel: "Telegram",
    githubLabel: "GitHub",
    newsletterTitle: "Subscribe to notes",
    newsletterBody: "Occasional writing on architecture and what didn't work the first time.",
    newsletterPlaceholder: "you@email.com",
    newsletterCta: "Subscribe",
  },
  footer: {
    rights: "Alex Fialko",
    tagline: "Built with Next.js, no unnecessary layers.",
  },
  themeToggle: {
    light: "Light",
    dark: "Dark",
  },
  langSwitch: {
    label: "RU",
  },
} as const;

export default en;
