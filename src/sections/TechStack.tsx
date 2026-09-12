import { site } from "@/config/site";
import { Shell, SectionHeader } from "@/components/Layout";
import { Code2, Server, Cpu, Database } from "lucide-react";

const CATEGORY_ICONS: Record<string, any> = {
  Languages: Code2,
  "Frontend & Full-Stack": Server,
  "Applied AI & ML": Cpu,
  "Databases & Infrastructure": Database,
};

export function TechStack() {
  return (
    <section id="stack" className="w-full">
      <SectionHeader
        title="Tech Stack"
        number="03"
        aside="// Engineering Core"
      />

      <Shell className="px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {site.skillsCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.name] || Code2;
            return (
              <div
                key={category.name}
                className="rounded-xl border border-line bg-surface/40 p-5 space-y-3 transition-colors hover:border-line hover:bg-surface/60"
              >
                <div className="flex items-center gap-2 text-text">
                  <Icon className="h-4 w-4 text-accent" />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider">
                    {category.name}
                  </h3>
                </div>

                <p className="font-sans text-xs text-muted leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-xs text-text hover:border-text/40 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
