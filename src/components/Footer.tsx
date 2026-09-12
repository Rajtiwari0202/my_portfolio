import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { asset } from "@/utils/asset";
import { Shell } from "./Layout";
import { ArrowUp, Clock, MapPin, Heart } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-IN", {
          timeZone: site.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setTime(formatted);
      } catch {
        setTime(new Date().toLocaleTimeString());
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-line bg-surface/30">
      <Shell className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column: Quote & Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-text">
              <img
                src={asset(site.avatar)}
                alt={site.name}
                className="h-5 w-5 rounded-full object-cover border border-line"
              />
              <span>{site.name}</span>
              <span className="text-muted">•</span>
              <span className="text-muted">{site.role}</span>
            </div>

            <blockquote className="border-l-2 border-line pl-3 font-serif text-base italic text-muted">
              "{site.quote.text}"
              <footer className="font-mono text-[11px] not-italic text-subtle mt-1">
                — {site.quote.author}
              </footer>
            </blockquote>
          </div>

          {/* Right Column: Live Clock & Status */}
          <div className="flex flex-col md:items-end justify-between gap-4 font-mono text-xs text-muted">
            <div className="space-y-1.5 md:text-right">
              <div className="flex items-center md:justify-end gap-1.5 text-text">
                <Clock className="h-3.5 w-3.5 text-accent" />
                <span>{time || "Loading..."}</span>
                <span className="text-[10px] text-muted uppercase">IST</span>
              </div>
              <div className="flex items-center md:justify-end gap-1 text-[11px] text-subtle">
                <MapPin className="h-3 w-3" />
                <span>{site.location}</span>
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 rounded border border-line bg-surface px-3 py-1.5 text-xs text-text hover:border-text transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-line font-mono text-xs text-muted">
          <p>© {new Date().getFullYear()} {site.name}. Crafted with precision.</p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-text transition-colors"
            >
              GitHub
            </a>
            <a
              href={site.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-text transition-colors"
            >
              LeetCode
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-text transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={site.socials.email}
              className="hover:text-text transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </Shell>
    </footer>
  );
}
