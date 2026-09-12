import { site } from "@/config/site";
import { Shell, SectionHeader } from "@/components/Layout";
import { Award, Trophy, ExternalLink, CheckCircle, ShieldCheck } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="w-full">
      <SectionHeader
        title="Proof & Credentials"
        number="04"
        aside="// Competitive Signals & Certifications"
      />

      <Shell className="px-4 py-8 sm:px-6 sm:py-10 space-y-8">
        {/* Hackathons & Competitions */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <Trophy className="h-3.5 w-3.5 text-amber-500" />
            <span>HACKATHONS & COMPETITIVE CODING</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {site.achievements.map((item) => {
              const isLeetCode = item.id === "leetcode-knight";
              const CardTag = isLeetCode ? "a" : "div";
              return (
                <CardTag
                  key={item.id}
                  {...(isLeetCode
                    ? {
                        href: site.socials.leetcode,
                        target: "_blank",
                        rel: "noreferrer",
                      }
                    : {})}
                  className={`relative rounded-xl border p-4 space-y-2 transition-all block ${
                    isLeetCode
                      ? "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60 hover:bg-amber-500/10 group cursor-pointer"
                      : "border-line bg-surface/40 hover:border-line hover:bg-surface/60"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-muted font-bold">{item.number}</span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`rounded px-2 py-0.5 text-[10px] font-medium border ${
                          isLeetCode
                            ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                            : "bg-surface text-accent border-line"
                        }`}
                      >
                        {item.tag}
                      </span>
                      {isLeetCode && (
                        <ExternalLink className="h-3 w-3 text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-text group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </CardTag>
              );
            })}
          </div>
        </div>

        {/* Verified Coursera Credentials */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            <span>VERIFIED MACHINE LEARNING CREDENTIALS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {site.credentials.map((cred, idx) => (
              <a
                key={idx}
                href={cred.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-line bg-surface/30 p-4 hover:border-text/40 hover:bg-surface/70 transition-all"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-[11px] text-muted">
                    <span>Verified Certificate</span>
                    <ExternalLink className="h-3.5 w-3.5 text-subtle group-hover:text-text transition-colors" />
                  </div>
                  <h4 className="font-serif text-base font-medium text-text group-hover:text-accent transition-colors">
                    {cred.title}
                  </h4>
                </div>
                <p className="font-mono text-[11px] text-muted pt-3">
                  {cred.issuer}
                </p>
              </a>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}
