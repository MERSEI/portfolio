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
    slug: "remote-jobs-hub",
    title: "Remote Jobs Hub",
    isPrivateScope: false,
    stack: [
      "Python",
      "FastAPI",
      "Telethon (MTProto)",
      "ARQ",
      "PostgreSQL + pgvector",
      "Alembic",
      "aiogram 3",
      "Next.js",
      "Docker Compose",
    ],
    links: {
      repo: "https://github.com/MERSEI/remote-jobs-hub",
    },
    ru: {
      tagline: "Агрегатор удалённых вакансий из Telegram",
      problem:
        "Вакансии и заказы живут в десятках Telegram-каналов вперемешку с шумом, дублями и перепостами одного и того же оффера в пяти местах. Читать это вручную — час в день ради двух релевантных строк.",
      system:
        "Шесть сервисов в одном compose: MTProto-коллектор на Telethon читает только whitelisted-источники, rule-based префильтр отсекает очевидный шум до LLM, экстрактор на Anthropic structured outputs раскладывает пост в нормализованные поля (зарплата, формат, стек), дедупликация работает в два слоя — точная и семантическая через pgvector. Каталог отдаётся пользователю как Telegram Mini App, модерация источников — в отдельной админке. Авторизация Mini App проверяется по HMAC-SHA256 от initData на бэкенде: фронт никогда не передаёт telegram_id напрямую.",
      role: "Соло-разработка: архитектура, все шесть сервисов, схема данных, CI.",
      outcome:
        "Монорепо из 5 приложений и 2 общих пакетов, тесты гоняются на sqlite без поднятого Postgres, Alembic-миграция проверяется вживую в CI. Экстрактор по контракту не выдумывает факты — неизвестные поля остаются null (extra=\"forbid\" в Pydantic-схеме).",
    },
    en: {
      tagline: "Remote-job aggregator over Telegram",
      problem:
        "Jobs and contract offers live across dozens of Telegram channels, mixed with noise, duplicates, and the same posting reflected in five places. Reading that by hand costs an hour a day for two relevant lines.",
      system:
        "Six services in one compose file: a Telethon MTProto collector reads whitelisted sources only, a rule-based prefilter drops obvious noise before any LLM call, an extractor built on Anthropic structured outputs normalizes each post into fields (salary, work format, stack), and deduplication runs in two layers — exact and semantic via pgvector. The catalogue ships to users as a Telegram Mini App; source moderation lives in a separate admin panel. Mini App auth is verified server-side by HMAC-SHA256 over initData — the frontend never passes a trusted telegram_id.",
      role: "Solo build: architecture, all six services, data model, CI.",
      outcome:
        "A monorepo of 5 apps and 2 shared packages; tests run on sqlite with no Postgres required, while the Alembic migration is exercised for real in CI. The extractor is contractually barred from inventing facts — unknown fields stay null (extra=\"forbid\" on the Pydantic schema).",
    },
  },
  {
    slug: "leadradar",
    title: "LeadRadar",
    isPrivateScope: false,
    stack: [
      "TypeScript (strict, ESM)",
      "BullMQ + Redis",
      "Playwright",
      "Google Gemini",
      "grammY",
      "pino",
      "zod",
      "Railway",
    ],
    links: {
      repo: "https://github.com/MERSEI/LeadRadar",
    },
    ru: {
      tagline: "Пайплайн лидов из Threads, который переживает падение",
      problem:
        "Скрапинг и скоринг ломаются по-разному: краш страницы Playwright не должен терять уже собранные посты, а разовый 429 от Gemini не должен убивать весь прогон. Наивный цикл теряет и то и другое.",
      system:
        "Две очереди BullMQ на Redis между стадиями. Скрапер (headless Chromium) держит низкую конкурентность — он упирается в браузер и I/O; скорер идёт с высокой — он в основном ждёт API. Каждая стадия ретраится независимо, с экспоненциальным backoff, и переживает рестарт процесса, потому что состояние в Redis, а не в памяти. Оценки кэшируются по sha256(текста поста) с TTL 24 часа: один и тот же пост, всплывший под несколькими ключевыми словами, стоит одного GET, а не второго платного вызова Gemini. Ниша не в коде — она в JSON-конфиге по пути из env, так что смена вертикали или запуск второго инстанса под другую нишу это конфиг, а не деплой.",
      role: "Соло-разработка, включая решения по архитектуре очередей.",
      outcome:
        "Задеплоено на Railway из Dockerfile поверх официального образа Playwright. Порог релевантности гейтит доставку в Telegram, но кэш наполняют все оценённые посты, а не только прошедшие.",
    },
    en: {
      tagline: "A Threads lead pipeline that survives a crash",
      problem:
        "Scraping and scoring fail in different ways: a Playwright page crash shouldn't lose already-scraped posts, and a transient Gemini 429 shouldn't kill the whole run. A naive loop loses both.",
      system:
        "Two BullMQ queues on Redis sit between the stages. The scraper (headless Chromium) runs at low concurrency — it's browser- and I/O-bound; the scorer runs high — it's mostly waiting on an API. Each stage retries independently with exponential backoff and survives a process restart, because state lives in Redis, not memory. Scores are cached by sha256(post text) with a 24h TTL, so the same post surfacing under several keywords costs one Redis GET instead of a second billed Gemini call. The niche isn't in source — it's a JSON config resolved from an env path, so switching verticals or running a second instance is configuration, not a deploy.",
      role: "Solo build, including the queue architecture decisions.",
      outcome:
        "Deployed on Railway from a Dockerfile built on Playwright's official image. A relevance threshold gates Telegram delivery, while the cache is filled by every scored post, not just the ones that alert.",
    },
  },
  {
    slug: "agent-farm",
    title: "Agent Farm",
    isPrivateScope: true,
    stack: [
      "TypeScript",
      "Node.js 20",
      "Fastify",
      "BullMQ",
      "grammY",
      "PostgreSQL (RLS)",
      "Docker Compose",
      "Tailscale",
      "Caddy",
    ],
    links: {},
    ru: {
      tagline: "Ферма агентов hub-and-spoke с изолированными RAG-воркспейсами",
      problem:
        "Несколько LLM-агентов на нескольких VPS — это в первую очередь вопрос изоляции, а не оркестрации. Утечка контекста между воркспейсами или агент с доступом к shell превращают удобство в инцидент.",
      system:
        "Хаб (VPS-0) держит Telegram-бота, Fastify-оркестратор, BullMQ, Postgres и Redis; спицы (VPS-N) — воркеры с RAG-пайплайном, каждый в своём воркспейсе. Изоляция вшита в базу, а не в код приложения: воркеры ходят в Postgres под ролью worker, а RLS требует SET LOCAL app.workspace_id — забыть про фильтр по воркспейсу физически нельзя. Единственная публичная поверхность — Telegram-вебхук через Caddy; Postgres и Redis слушают только Tailscale-меш со своим ACL. Привилегированные действия требуют inline Yes/No прямо в чате, а модели никогда не выдаётся инструмент shell или exec.",
      role: "Соло-разработка: архитектура, инварианты безопасности, инфраструктура.",
      outcome:
        "MVP с пятистадийным планом раскатки, heartbeat-сбором и алертингом. Инварианты безопасности зафиксированы в README как контракт, а не как пожелание.",
    },
    en: {
      tagline: "Hub-and-spoke agent farm with isolated RAG workspaces",
      problem:
        "Several LLM agents across several VPS boxes is first an isolation problem, not an orchestration one. Context leaking between workspaces — or an agent holding a shell tool — turns convenience into an incident.",
      system:
        "The hub (VPS-0) runs the Telegram bot, a Fastify orchestrator, BullMQ, Postgres and Redis; the spokes (VPS-N) run workers with a RAG pipeline, one workspace each. Isolation is enforced in the database, not in application code: workers connect to Postgres as role worker, and RLS demands SET LOCAL app.workspace_id — forgetting the workspace filter is physically impossible. The only public surface is the Telegram webhook through Caddy; Postgres and Redis listen on a Tailscale mesh with its own ACL. Privileged actions require an inline Yes/No in chat, and the model is never handed a shell or exec tool.",
      role: "Solo build: architecture, security invariants, infrastructure.",
      outcome:
        "MVP with a five-stage rollout plan, heartbeat collection and alerting. The safety invariants are written into the README as a contract, not an aspiration.",
    },
  },
  {
    slug: "chronicles",
    title: "Хроники Судьбы / Chronicles",
    isPrivateScope: true,
    stack: [
      "TypeScript",
      "pnpm monorepo",
      "Anthropic API",
      "Детерминированное ядро",
      "Vitest",
    ],
    links: {},
    ru: {
      tagline: "Текстовая игра, где кубик бросает код, а не модель",
      problem:
        "Если позволить LLM самой решать, получилось ли действие у игрока, она будет подгонять исход под красоту сцены. Ощущение честного расчёта — единственное, чем такая игра отличается от AI Dungeon, — исчезает за первые двадцать минут.",
      system:
        "Модель до броска называет релевантный навык и сложность, после броска описывает уже готовый исход. Вся математика — бросок, ресурсы, смерть, выбор типа карты — живёт в детерминированном ядре с нулём зависимостей и нулём обращений к API. Сложность выводится в два шага: правдоподобность действия по шкале с закреплёнными якорями, затем поправка на явные законы сгенерированного мира. Каждый вариант обязан нести обоснование сложности — вариант без него отбраковывает валидатор.",
      role: "Соло-разработка: движок, слой LLM, харнесс симуляции.",
      outcome:
        "Движок отлаживается без единого платного вызова: 500 партий на заглушках поймали четыре дефекта баланса, включая тот, где успешные проверки делали игрока слабее случайного. Дефект нашёлся только сравнением двух стратегий — сравнение закреплено тестом. 46 тестов, партия обходится ≈$0.24 при плановых $0.28.",
    },
    en: {
      tagline: "A text game where code rolls the dice, not the model",
      problem:
        "Let an LLM decide whether the player's action succeeded and it will bend the outcome toward the prettier scene. The sense of an honest roll — the only thing separating this from AI Dungeon — evaporates in the first twenty minutes.",
      system:
        "Before the roll the model names the relevant skill and a difficulty; after the roll it narrates an outcome already decided. All the math — the roll, resources, death, card selection — lives in a deterministic engine with zero dependencies and zero API calls. Difficulty is derived in two steps: real-world plausibility on an anchored scale, then a correction for the generated world's explicit laws. Every option must carry a difficulty rationale — the validator rejects options without one.",
      role: "Solo build: engine, LLM layer, simulation harness.",
      outcome:
        "The engine is debugged without a single billed call: 500 stubbed runs caught four balance defects, including one where succeeding at checks made a skilled player die sooner than a random one. That defect only shows up when two strategies are compared — so the comparison is pinned by a test. 46 tests; a run costs ≈$0.24 against a $0.28 budget.",
    },
  },
  {
    slug: "crypto-widget",
    title: "crypto-widget",
    isPrivateScope: false,
    stack: ["Tauri 2", "Rust", "React 19", "TypeScript", "Binance API"],
    links: {
      repo: "https://github.com/MERSEI/crypto-widget",
    },
    ru: {
      tagline: "Резидентный десктоп-виджет рыночной обстановки",
      problem:
        "Держать вкладку с графиками открытой — значит либо смотреть в неё, либо забыть про неё. Нужен периферийный канал: видно краем глаза, разворачивается по требованию, не претендует на внимание.",
      system:
        "Пристыкованная к краю экрана «пилюля», которая раскрывается в живой watchlist Binance с графиками и алертами по цене и всплескам. Нативное поведение окна — always-on-top, докинг, клик-сквозь — сделано на стороне Rust, потому что из веб-слоя это не выражается. Фронт на React 19, состояние рынка приходит стримом.",
      role: "Соло-разработка, включая нативный слой.",
      outcome:
        "Работающее десктоп-приложение, собирается как нативный бандл Tauri 2.",
    },
    en: {
      tagline: "Resident desktop widget for peripheral market awareness",
      problem:
        "Keeping a chart tab open means either staring at it or forgetting it exists. What's needed is a peripheral channel: visible out of the corner of your eye, expandable on demand, never demanding attention.",
      system:
        "A pill docked to the screen edge that expands into a live Binance watchlist with charts and price/spike alerts. Native window behaviour — always-on-top, docking, click-through — is handled on the Rust side, because the web layer simply can't express it. React 19 on the front, market state arriving as a stream.",
      role: "Solo build, native layer included.",
      outcome: "A working desktop app, shipped as a native Tauri 2 bundle.",
    },
  },
  {
    slug: "ton-testnet",
    title: "TON Testnet Wallet",
    isPrivateScope: false,
    stack: ["TypeScript", "React", "Vite", "WebSocket", "TON", "Vitest"],
    links: {
      repo: "https://github.com/MERSEI/Ton-testnet",
    },
    ru: {
      tagline: "Self-custodial кошелёк TON с аудитом безопасности",
      problem:
        "Кошелёк — это код, где обычная небрежность становится потерей средств. Первая рабочая версия проходила ручные сценарии и всё равно содержала два с половиной десятка проблем разной тяжести.",
      system:
        "React + TypeScript фронт с Telegram-подобным UI и обновлением баланса и транзакций по WebSocket. После MVP — целенаправленный аудит: 25 исправлений по обработке ключей, валидации ввода, состояниям гонки в обновлении баланса и краевым случаям сети, плюс редизайн интерфейса.",
      role: "Соло-разработка, аудит и редизайн.",
      outcome:
        "Тестовое покрытие выросло с 78 до 347 тестов, всё влито в main. Тесты писались под найденные дефекты, а не ради процента покрытия.",
    },
    en: {
      tagline: "Self-custodial TON wallet, security-audited",
      problem:
        "A wallet is code where ordinary sloppiness becomes lost funds. The first working version passed manual scenarios and still held two dozen-plus issues of varying severity.",
      system:
        "A React + TypeScript front-end with a Telegram-style UI, balances and transactions updating over WebSocket. After the MVP came a deliberate audit pass: 25 fixes across key handling, input validation, race conditions in balance refresh, and network edge cases — plus an interface redesign.",
      role: "Solo build, audit and redesign.",
      outcome:
        "Test coverage grew from 78 to 347 tests, all merged to main. Tests were written against the defects found, not to chase a coverage percentage.",
    },
  },
  {
    slug: "data-rooms",
    title: "Data Room MVP",
    isPrivateScope: false,
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Zustand",
      "Tailwind CSS",
      "IndexedDB",
      "Vitest",
    ],
    links: {
      live: "https://acme-data-rooms.vercel.app",
      repo: "https://github.com/MERSEI/data-rooms",
    },
    ru: {
      tagline: "Комната документов для due diligence без бэкенда",
      problem:
        "Задача была на аккуратность, а не на объём: вложенные папки, загрузка и просмотр PDF, мгновенный поиск — и всё это должно переживать перезагрузку страницы без единого серверного вызова.",
      system:
        "React 19 + TypeScript, состояние в Zustand, персистентность на IndexedDB — дерево папок, файлы и метаданные лежат локально и восстанавливаются при следующем открытии. Просмотр PDF встроенный, поиск идёт по дереву без задержки на ввод.",
      role: "Соло-разработка (take-home с ограничением по времени).",
      outcome: "Задеплоено, покрыто unit-тестами, сдано в срок.",
    },
    en: {
      tagline: "A due-diligence document room with no backend",
      problem:
        "The brief was about care, not scale: nested folders, PDF upload and preview, instant search — all surviving a page reload without a single server call.",
      system:
        "React 19 + TypeScript with Zustand for state and IndexedDB for persistence — the folder tree, files and metadata live locally and come back on the next visit. PDF preview is inline; search walks the tree with no input lag.",
      role: "Solo build (timeboxed take-home).",
      outcome: "Deployed, unit-tested, delivered on time.",
    },
  },
  {
    slug: "wallet-dashboard",
    title: "Wallet Analytics Dashboard",
    isPrivateScope: false,
    stack: ["Next.js", "TypeScript", "Etherscan V2 API", "Vitest", "Vercel"],
    links: {
      live: "https://dashboard-bice-rho-61.vercel.app",
      repo: "https://github.com/MERSEI/Dashboard",
    },
    ru: {
      tagline: "Аналитика любого Ethereum-адреса",
      problem:
        "Понять, что происходило с адресом, по сырому списку транзакций невозможно — нужны потоки токенов и история баланса, а не лента хешей.",
      system:
        "Next.js-дашборд поверх Etherscan V2 API: транзакции, потоки токенов, история баланса по произвольному адресу. Данные нормализуются на сервере, чтобы клиент не тянул сырые ответы API.",
      role: "Соло-разработка, позже — аудит безопасности.",
      outcome:
        "В ходе аудита закрыт публичный withdraw-эндпоинт, миграция на Etherscan V2, тестов с 0 до 175. Влито в main.",
    },
    en: {
      tagline: "Analytics for any Ethereum address",
      problem:
        "A raw transaction list tells you nothing about what happened to an address — you need token flows and balance history, not a feed of hashes.",
      system:
        "A Next.js dashboard on the Etherscan V2 API: transactions, token flows and balance history for an arbitrary address. Data is normalized server-side so the client never handles raw API payloads.",
      role: "Solo build, later a security audit pass.",
      outcome:
        "The audit closed a publicly reachable withdraw endpoint, migrated to Etherscan V2, and took the suite from 0 to 175 tests. Merged to main.",
    },
  },
  {
    slug: "antitck",
    title: "antiTCK",
    isPrivateScope: false,
    stack: [
      "Node.js 22",
      "TypeScript",
      "grammY",
      "PostgreSQL + Prisma",
      "Zod",
      "pino",
      "Docker",
      "Vitest",
    ],
    links: {
      repo: "https://github.com/MERSEI/antiTCK",
    },
    ru: {
      tagline: "Анонимные сообщения об инцидентах с ручной модерацией",
      problem:
        "Канал, куда люди пишут об инцидентах, обязан защищать отправителя. Автопубликация в такой задаче — не фича, а способ выдать человека фоном на фотографии или номером в тексте.",
      system:
        "Пошаговый визард заявки в личке бота (медиа, описание, место), затем — приватный модераторский чат, где заявку одобряют, отклоняют или возвращают на уточнение. Публикация только после ручного одобрения и автоматической очистки: sanitizeSubmission вырезает телефоны, email, @username, URL, номера авто и документов; координаты округляются до уровня района. Заявки с призывами к насилию блокируются автоматически, все действия модераторов пишутся в аудит.",
      role: "Соло-разработка: модель угроз, конвейер модерации, санитизация.",
      outcome:
        "Ни одного пути автопубликации в коде — это архитектурный инвариант, а не настройка. Покрыто тестами, разворачивается одним compose.",
    },
    en: {
      tagline: "Anonymous incident reports with human moderation",
      problem:
        "A channel where people report incidents owes its senders protection. Auto-publishing here isn't a feature — it's a way to expose someone via a face in the background or a number in the text.",
      system:
        "A step-by-step submission wizard in the bot's DMs (media, description, location), then a private moderator chat where a report is approved, rejected, or sent back for clarification. Publication happens only after human approval and an automatic sanitization pass: sanitizeSubmission strips phone numbers, emails, @usernames, URLs, licence plates and document numbers, and coordinates are rounded to roughly district level. Submissions calling for violence are blocked automatically, and every moderator action is audited.",
      role: "Solo build: threat model, moderation pipeline, sanitization.",
      outcome:
        "There is no auto-publish path in the codebase — that's an architectural invariant, not a setting. Test-covered, deployable with a single compose file.",
    },
  },
  {
    slug: "tr-dev",
    title: "Content Intelligence Bot",
    isPrivateScope: false,
    stack: [
      "Python",
      "aiogram 3",
      "ARQ",
      "PostgreSQL",
      "Redis",
      "Whisper STT",
      "OCR",
      "LLM function calling",
      "Docker",
    ],
    links: {
      repo: "https://github.com/MERSEI/Tr-Dev",
    },
    ru: {
      tagline: "Суточная выжимка контента блогера в Telegram",
      problem:
        "Чтобы понять, о чём говорил автор за сутки, нужно пересмотреть сторис и рилсы целиком. Текста там нет — смысл распределён по речи, надписям на видео и подписям.",
      system:
        "Асинхронный конвейер: контент забирается, речь расшифровывается через Whisper, текст с кадров снимается OCR, дальше LLM с function calling сводит это в структурированную сводку. Долгие стадии вынесены в ARQ-воркеры, состояние в PostgreSQL, очередь на Redis — бот отвечает мгновенно, обработка идёт фоном.",
      role: "Соло-разработка коммерческого проекта.",
      outcome:
        "Упаковано в Docker, покрыто тестами, работало в проде у заказчика.",
    },
    en: {
      tagline: "A 24-hour digest of a creator's content, in Telegram",
      problem:
        "Understanding what a creator said in a day means watching every story and reel end to end. There's no text to read — the meaning is spread across speech, on-screen captions and overlays.",
      system:
        "An async pipeline: content is fetched, speech is transcribed with Whisper, on-frame text is lifted by OCR, and an LLM with function calling folds it into a structured summary. Slow stages run in ARQ workers with state in PostgreSQL and the queue on Redis — the bot answers instantly while processing continues in the background.",
      role: "Solo build, commercial project.",
      outcome: "Dockerised, test-covered, ran in production for the client.",
    },
  },
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
    slug: "ai-integrator",
    title: "AI Integrator Landing",
    isPrivateScope: false,
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Gemini API",
      "Upstash Redis",
      "Vercel",
    ],
    links: {
      live: "https://ai-integrator-landing.vercel.app",
      repo: "https://github.com/MERSEI/ai-integrator-landing",
    },
    ru: {
      tagline: "Двуязычный лендинг с десятью живыми AI-инструментами",
      problem:
        "Проверить спрос на AI-автоматизацию продаж быстрее, чем строить продукт: показать инструменты работающими, а не на скриншотах.",
      system:
        "Next.js 15 с двуязычным контентом и десятью инструментами поверх Gemini: холодные письма, обработка возражений, разбор бизнеса и другие. Двухуровневый rate limit на Upstash Redis — общий суточный бюджет на IP плюс burst-guard в каждом роуте, потому что бесплатный тир модели упирается в лимит быстрее, чем кошелёк. Инструменты, которым нужен живой скрапинг, недоступный из serverless, честно помечены демо-режимом вместо имитации работы.",
      role: "Соло-разработка, включая дизайн-систему и лидогенерацию.",
      outcome:
        "Задеплоено, форма шлёт лиду автоответ через Gmail SMTP и пишет заявку в Upstash и Google Sheets независимо от статуса почты — сбой SMTP не роняет форму.",
    },
    en: {
      tagline: "Bilingual landing with ten live AI tools",
      problem:
        "Validate demand for sales automation faster than building the product: show the tools working, not screenshotted.",
      system:
        "Next.js 15 with bilingual content and ten Gemini-backed tools — cold email, objection handling, business diagnosis and more. A two-tier rate limit on Upstash Redis: a shared daily per-IP budget plus a per-route burst guard, because the model's free tier hits a wall long before the wallet does. Tools that need live scraping unavailable from serverless are honestly marked as demos rather than faking the work.",
      role: "Solo build, design system and lead capture included.",
      outcome:
        "Deployed; the form sends the lead an auto-reply over Gmail SMTP and writes the submission to Upstash and Google Sheets regardless of mail status — an SMTP failure never takes the form down.",
    },
  },
  {
    slug: "sporysh",
    title: "Sporysh",
    isPrivateScope: false,
    stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    links: {
      live: "https://sporysh.pp.ua",
      repo: "https://github.com/MERSEI/Sporysh",
    },
    ru: {
      tagline: "B2B-сайт для поставщика растительного сырья",
      problem:
        "У украинского B2B-поставщика не было сайта, который бы продавал международным закупщикам — а закупщик открывает его один раз перед звонком.",
      system:
        "Каталог продукции и презентация компании с акцентом на сигналы доверия: происхождение сырья, объёмы, сертификация. Статическая вёрстка рендерится темой WordPress, чтобы заказчик правил тексты сам.",
      role: "Клиентский проект: дизайн, вёрстка, деплой, передача заказчику.",
      outcome: "Задеплоено и работает на боевом домене.",
    },
    en: {
      tagline: "B2B site for a raw-materials supplier",
      problem:
        "A Ukrainian B2B supplier had no site that actually sold to international buyers — and a buyer opens it once, right before the call.",
      system:
        "A product catalogue and company presentation built around trust signals: sourcing, volumes, certification. The static build is rendered by a WordPress theme so the client can edit copy without a developer.",
      role: "Client project: design, build, deploy, handover.",
      outcome: "Deployed and live on the production domain.",
    },
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
