import { useState } from "react";
import { site } from "@/config/site";
import { asset } from "@/utils/asset";
import { Shell, SectionHeader } from "@/components/Layout";
import {
  Mail,
  Copy,
  Check,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="w-full">
      <SectionHeader
        title="Get in Touch"
        number="06"
        aside="// Channels & Inquiries"
      />

      <Shell className="px-4 py-8 sm:px-6 sm:py-12 space-y-8">
        <div className="space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-text">
            Let's build something durable.
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted max-w-xl leading-relaxed">
            I'm actively open to software engineering internships, product-minded
            engineering teams, and innovative hackathon squads. If you have an
            exciting project or role, feel free to reach out.
          </p>
        </div>

        {/* Primary Email Card with Quick Copy */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-line bg-surface/50 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface">
              <Mail className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted">Direct Email</div>
              <a
                href={site.socials.email}
                className="font-mono text-sm sm:text-base font-semibold text-text hover:text-accent transition-colors"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg border border-line bg-surface px-3.5 py-2 font-mono text-xs text-text hover:border-text transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-accent" />
                  <span className="text-accent font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-muted" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={site.socials.email}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg bg-text text-bg px-4 py-2 font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Write Email</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-lg border border-line bg-surface/30 p-3.5 text-text hover:border-text/40 hover:bg-surface/70 transition-all"
          >
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 text-muted" />
              <span>GitHub</span>
            </div>
            <ExternalLink className="h-3 w-3 text-subtle" />
          </a>

          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-lg border border-line bg-surface/30 p-3.5 text-text hover:border-text/40 hover:bg-surface/70 transition-all"
          >
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-blue-400" />
              <span>LinkedIn</span>
            </div>
            <ExternalLink className="h-3 w-3 text-subtle" />
          </a>

          <a
            href={site.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-lg border border-line bg-surface/30 p-3.5 text-text hover:border-text/40 hover:bg-surface/70 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-500 font-bold">LC</span>
              <span>LeetCode</span>
            </div>
            <ExternalLink className="h-3 w-3 text-subtle" />
          </a>

          <a
            href={asset(site.socials.resume)}
            download="RajTiwari_Resume.pdf"
            className="flex items-center justify-between rounded-lg border border-line bg-surface/30 p-3.5 text-text hover:border-text/40 hover:bg-surface/70 transition-all"
          >
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-accent" />
              <span>Resume</span>
            </div>
            <span className="text-[10px] text-muted uppercase">PDF</span>
          </a>
        </div>
      </Shell>
    </section>
  );
}
