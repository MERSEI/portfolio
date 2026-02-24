import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "QR-Creator",
      description: "Professional QR code generator with real-time preview and batch generation capabilities.",
      github: "https://github.com/MERSEI/QR-creator",
      live: "https://qr-creator-rouge.vercel.app",
      stack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      metrics: ["12K+ monthly users", "45K+ QR codes generated", "99.8% uptime"],
      experience: ["Frontend architecture", "Modern UI/UX patterns", "Deployment automation"]
    },
    {
      title: "OFDashboard - AI Operator Hub",
      description: "AI-powered chat management dashboard for multi-account operators with real-time messaging and analytics.",
      github: "https://github.com/MERSEI/OFDashboard",
      live: "https://web-production-905b5.up.railway.app",
      stack: ["Python", "Streamlit", "PostgreSQL", "WebSockets", "Railway"],
      metrics: ["8.5K+ active sessions", "€15K+ revenue processed", "200+ concurrent users"],
      experience: ["Real-time data streaming", "AI integration (Claude/OpenAI)", "Role-based authentication", "Analytics dashboard"]
    },
    {
      title: "Dashboard - Crypto Trading",
      description: "Real-time cryptocurrency trading dashboard with portfolio management and price tracking.",
      github: "https://github.com/MERSEI/Dashboard",
      live: undefined,
      stack: ["TypeScript", "React", "WebSockets", "Real-time Data"],
      metrics: ["5.2K+ active traders", "$8.7M+ trading volume tracked", "Sub-100ms data updates"],
      experience: ["TypeScript best practices", "Real-time WebSocket architecture", "Complex state management"]
    },
    {
      title: "SGT",
      description: "Full-featured web application showcasing modern React patterns and component architecture.",
      github: "https://github.com/MERSEI/SGT",
      live: "https://sgt-gray.vercel.app",
      stack: ["React", "JavaScript", "Vercel", "API Integration"],
      metrics: ["6.8K+ users", "34K+ interactions", "95+ lighthouse score"],
      experience: ["Component architecture", "State management", "Performance optimization"]
    },
    {
      title: "Vibe",
      description: "Modern UI component library with design system principles and responsive design patterns.",
      github: "https://github.com/MERSEI/Vibe",
      live: "https://vibe-ashy-nine.vercel.app",
      stack: ["React", "JavaScript", "Vercel", "Design System"],
      metrics: ["3.9K+ users", "28K+ components rendered", "Lighthouse 92"],
      experience: ["UI component library", "Design systems", "Responsive design patterns"]
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-semibold">AI-AUGMENTED DEVELOPMENT</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Building Features in <span className="text-blue-400">Hours</span>
            {" "}Not Weeks
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm an AI-Augmented Product Engineer specializing in rapid development with modern technologies.
            Using Claude, GPT, and TypeScript, I ship production-ready features faster than traditional development—
            while maintaining deep technical understanding and architectural excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              View Projects
            </a>
            <a
              href="https://github.com/MERSEI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-600/10 font-semibold rounded-lg transition-colors"
            >
              GitHub Profile
            </a>
          </div>

          <div className="text-slate-400 text-sm">
            <p>Tech Stack: <span className="text-slate-300 font-semibold">TypeScript • React • Python • PostgreSQL • Node.js • AI APIs</span></p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              A selection of production applications that demonstrate technical depth, rapid delivery, and commercial success.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">AI-Augmented Development</h2>
            <p className="text-slate-300">How I ship features 5-10x faster without sacrificing quality</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">The Approach</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Use AI (Claude, GPT) to accelerate development</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Understand every line of code I write</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Make informed architectural decisions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Debug and modify independently</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">→</span>
                  <span>Deliver production-ready features</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">What This Means</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Complex features shipped in hours, not weeks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Full-stack capability (frontend + backend + DB)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Commercial success with paid clients</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Team leadership & code review experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Not junior-level copy-paste</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm Alex (Flowe), a Senior Product Engineer based in Czech Republic. I specialize in building
                production-grade applications using modern technologies and AI-augmented development workflows.
              </p>
              <p>
                My background includes team leadership (managed 4-person dev team), commercial project delivery
                (Telegram bots, SaaS products, landing pages), and real business success with paying customers.
              </p>
              <p>
                <span className="text-blue-400 font-semibold">I don't just write code faster—</span> I understand architecture,
                make informed technical decisions, debug complex issues, and deliver features that users love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Technology Stack</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Frontend</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Modern component patterns</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Backend</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Python (primary)</li>
                <li>• Node.js & Express</li>
                <li>• REST APIs</li>
                <li>• Real-time WebSockets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Data & Infrastructure</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• PostgreSQL</li>
                <li>• SQLite</li>
                <li>• MongoDB (basics)</li>
                <li>• Vercel, Railway, Docker</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Specialized Tools</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• AI APIs (Claude, OpenAI)</li>
                <li>• Telegram Bot Framework</li>
                <li>• Web Scraping</li>
                <li>• GitHub, Git workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Want More Details?</h2>
          <p className="text-slate-300 mb-8">
            Download my detailed resume to see professional background, experience metrics, and specific project outcomes.
          </p>
          <a
            href="https://raw.githubusercontent.com/MERSEI/MERSEI/main/Middle_Developer_Resume.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="https://github.com/MERSEI" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Projects</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#projects" className="hover:text-blue-400">Featured Work</a></li>
                <li><a href="https://github.com/MERSEI" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">All Projects</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">About</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400">Experience</a></li>
                <li><a href="#" className="hover:text-blue-400">Tech Stack</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-600 pt-8 text-center text-slate-400">
            <p>© 2024 Alex (Flowe). Built with Next.js, React, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
