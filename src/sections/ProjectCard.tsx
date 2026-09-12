import { Project } from "@/config/site";
import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="group relative rounded-xl border border-line bg-surface/40 p-5 sm:p-6 transition-all hover:border-text/30 hover:bg-surface/70"
    >
      {/* Top Meta: Accent Badge, Category, Status, Year */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="rounded bg-surface px-2 py-0.5 font-semibold text-accent border border-line">
            {project.accent}
          </span>
          <span className="text-muted">•</span>
          <span className="text-muted">{project.category}</span>
          {project.status && (
            <span className="rounded-full bg-accent-muted/30 px-2 py-0.5 text-[10px] text-accent font-medium border border-accent/20">
              {project.status}
            </span>
          )}
        </div>
        <span className="text-muted">{project.year}</span>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-text">
          {project.title}
        </h3>

        <p className="font-sans text-sm sm:text-base text-text leading-relaxed">
          {project.summary}
        </p>

        <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed border-l-2 border-line pl-3 italic">
          {project.impact}
        </p>

        <div className="font-mono text-xs text-subtle flex items-start gap-1.5 pt-1">
          <span className="font-bold text-muted">Proof:</span>
          <span>{project.proof}</span>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-xs">
          {project.stack.map((tool) => (
            <span
              key={tool}
              className="rounded border border-line bg-surface px-2.5 py-1 text-muted hover:text-text hover:border-text/40 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-line font-mono text-xs">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"
            >
              <span>Open Live App</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}

          {project.links.source && (
            <a
              href={project.links.source}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-text transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
