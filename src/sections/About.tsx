import { site } from "@/config/site";
import { Shell, SectionHeader } from "@/components/Layout";
import { Terminal, CheckCircle2, Zap, Brain, Code } from "lucide-react";

export function About() {
  return (
    <section id="about" className="w-full">
      <SectionHeader title="About" number="01" aside="// Background & Philosophy" />

      <Shell className="px-4 py-8 sm:px-6 sm:py-10 space-y-8">
        {/* Narrative Paragraphs */}
        <div className="space-y-4 font-sans text-sm sm:text-base text-muted leading-relaxed">
          {site.about.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* TL;DR Grid */}
        <div className="pt-2">
          <div className="font-mono text-xs text-muted mb-3 flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5 text-accent" />
            <span>TL;DR // SUMMARY</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
            {site.tldr.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-lg border border-line bg-surface/60 px-3.5 py-2.5 text-text hover:border-line transition-colors"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus Box */}
        <div className="rounded-xl border border-line bg-surface/40 p-4 sm:p-5 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-muted border-b border-line pb-2 mb-3">
            <span className="flex items-center gap-2 text-text font-semibold">
              <Zap className="h-3.5 w-3.5 text-accent" />
              <span>CURRENT STATUS & FOCUS</span>
            </span>
            <span className="text-[10px] text-accent font-mono uppercase tracking-wider">
              ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-muted block text-[11px] mb-1">
                Now Building:
              </span>
              <span className="text-text font-medium">
                {site.status.nowBuilding}
              </span>
            </div>
            <div>
              <span className="text-muted block text-[11px] mb-1">
                Deepening:
              </span>
              <span className="text-text font-medium">
                {site.status.nowLearning}
              </span>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
