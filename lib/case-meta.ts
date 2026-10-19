export type Category = "ai" | "bots" | "web" | "desktop" | "content";

export type CaseMeta = {
  category: Category;
  featured?: boolean;
  /** Цифры берутся только из текста самого кейса, не придумываются отдельно. */
  metrics?: { value: string; ru: string; en: string }[];
};

export const categories: Category[] = ["ai", "bots", "web", "desktop", "content"];

export const caseMeta: Record<string, CaseMeta> = {
  debrief: {
    category: "ai",
    featured: true,
    metrics: [
      { value: "15 мс", ru: "дрейф дорожек за 12 с", en: "track drift over 12 s" },
      { value: "9.9×", ru: "быстрее реального времени", en: "faster than realtime" },
      { value: "35", ru: "тестов", en: "tests" },
    ],
  },
  pulse: {
    category: "ai",
    featured: true,
    metrics: [
      { value: "6", ru: "реальных адресов в проверке", en: "real addresses exercised" },
      { value: "40", ru: "тестов", en: "tests" },
      { value: "3.11–3.13", ru: "Python в CI", en: "Python in CI" },
    ],
  },
  leadradar: {
    category: "ai",
    featured: true,
    metrics: [
      { value: "2", ru: "очереди BullMQ", en: "BullMQ queues" },
      { value: "24 ч", ru: "TTL кэша оценок", en: "score cache TTL" },
    ],
  },
  "agent-farm": {
    category: "ai",
    featured: true,
    metrics: [
      { value: "5", ru: "стадий раскатки", en: "rollout stages" },
      { value: "0", ru: "shell-инструментов у модели", en: "shell tools given to the model" },
    ],
  },
  chronicles: {
    category: "ai",
    metrics: [
      { value: "500", ru: "партий на заглушках", en: "stubbed runs" },
      { value: "≈$0.24", ru: "стоимость партии", en: "cost per run" },
      { value: "46", ru: "тестов", en: "tests" },
    ],
  },
  "remote-jobs-hub": {
    category: "bots",
    metrics: [
      { value: "6", ru: "сервисов", en: "services" },
      { value: "5 + 2", ru: "приложений и пакета", en: "apps and packages" },
    ],
  },
  streamwidget: { category: "ai" },
  reporadar: { category: "bots" },
  "personal-ai-ops": { category: "ai" },
  "ai-video-pipeline": { category: "content" },
  antitck: { category: "bots" },
  "tr-dev": { category: "bots" },
  vibeide: { category: "ai" },
  "crypto-widget": { category: "desktop" },
  "ton-testnet": {
    category: "web",
    metrics: [
      { value: "78 → 347", ru: "тестов", en: "tests" },
      { value: "25", ru: "исправлений в аудите", en: "audit fixes" },
    ],
  },
  "wallet-dashboard": {
    category: "web",
    metrics: [{ value: "0 → 175", ru: "тестов", en: "tests" }],
  },
  "data-rooms": { category: "web" },
  "ai-integrator": { category: "web" },
  sporysh: { category: "web" },
};

export function getMeta(slug: string): CaseMeta {
  return caseMeta[slug] ?? { category: "web" };
}
