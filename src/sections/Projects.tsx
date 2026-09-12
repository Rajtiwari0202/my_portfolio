import { useState } from "react";
import { site } from "@/config/site";
import { Shell, SectionHeader } from "@/components/Layout";
import { ProjectCard } from "./ProjectCard";

const CATEGORIES = ["All", "AI & ML", "Fintech & SaaS", "Commerce"] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? site.projects
      : site.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="w-full">
      <SectionHeader
        title="Selected Work"
        number="02"
        aside={`// ${site.projects.length} Engineering Case Studies`}
      />

      <Shell className="px-4 py-8 sm:px-6 sm:py-10 space-y-6">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 transition-all ${
                selectedCategory === cat
                  ? "bg-text text-bg font-semibold shadow-sm"
                  : "border border-line bg-surface text-muted hover:text-text hover:border-text/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Shell>
    </section>
  );
}
