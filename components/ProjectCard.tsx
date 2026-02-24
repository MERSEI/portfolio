interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  live?: string;
  stack: string[];
  metrics: string[];
  experience: string[];
}

export default function ProjectCard({
  title,
  description,
  github,
  live,
  stack,
  metrics,
  experience,
}: ProjectCardProps) {
  return (
    <div className="bg-slate-700/50 backdrop-blur border border-slate-600 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>

      <div className="mb-4">
        <div className="flex gap-4 mb-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2"
          >
            → GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-medium flex items-center gap-2"
            >
              → Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-slate-300 mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-slate-300 mb-2">Key Metrics:</p>
        <ul className="text-sm text-slate-300 space-y-1">
          {metrics.map((metric, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-green-400">▸</span> {metric}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-300 mb-2">Experience Gained:</p>
        <ul className="text-sm text-slate-400 space-y-1">
          {experience.map((exp, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-slate-500">•</span> {exp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
