import { useState, useEffect } from "react";
import { site } from "@/config/site";
import { asset } from "@/utils/asset";
import { Shell } from "@/components/Layout";
import {
  MapPin,
  Clock,
  Download,
  ExternalLink,
  ArrowDown,
  RotateCw,
  FolderGit2,
  Sparkles,
} from "lucide-react";

export function Hero({ onOpenPalette }: { onOpenPalette?: () => void }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [localTime, setLocalTime] = useState("");

  // Rotate headlines
  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % site.headlineTitles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Update local clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-IN", {
          timeZone: site.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setImgIndex((prev) => (prev + 1) % site.profileImages.length);
  };

  return (
    <section id="hero" className="w-full">
      {/* Cover Banner with CRT Scanlines */}
      <Shell className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="relative h-36 sm:h-52 w-full overflow-hidden rounded-xl border border-line bg-surface">
          {/* Cover Photo */}
          <img
            src={asset(site.bannerImage)}
            alt="Cover banner"
            loading="eager"
            className="w-full h-full object-cover object-center opacity-90 transition-all duration-500"
          />

          {/* Subtle Scanline Texture & Dark Vignette */}
          <div className="absolute inset-0 scanlines opacity-25 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/15 to-transparent z-10" />

          {/* Diagonal retro grid lines */}
          <div className="absolute inset-0 bg-stripes opacity-15 z-10 pointer-events-none" />

        </div>
      </Shell>

      {/* Profile & Bio Identity */}
      <Shell className="px-4 pt-4 pb-8 sm:px-6 sm:pb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 -mt-12 sm:-mt-16 mb-6">
          {/* Avatar with Click-to-Rotate */}
          <div className="relative z-20 group">
            <button
              onClick={handleNextImage}
              className="relative block h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-2xl border-2 border-line bg-surface p-1 shadow-xl hover:border-accent transition-all focus:outline-none cursor-pointer"
              title={`Click to switch photo (${imgIndex + 1}/${site.profileImages.length})`}
              aria-label="Switch profile photo"
            >
              <img
                key={site.profileImages[imgIndex]}
                src={asset(site.profileImages[imgIndex])}
                alt={site.name}
                className="h-full w-full rounded-xl object-cover transition-all duration-300"
              />
              <div
                className="absolute bottom-1.5 right-1.5 rounded-full bg-surface/95 p-1.5 border border-line text-accent shadow-md hover:bg-surface-hover hover:scale-110 active:rotate-180 transition-all"
                title="Switch photo"
              >
                <RotateCw className="h-3 w-3 text-accent" />
              </div>
            </button>
          </div>

          {/* Availability Status Badge */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 text-text backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>{site.status.availableText}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/80 px-3 py-1 text-muted backdrop-blur-sm">
              <MapPin className="h-3 w-3 text-subtle" />
              <span>{site.location}</span>
              <span className="text-subtle">•</span>
              <Clock className="h-3 w-3 text-subtle" />
              <span>{localTime || "IST"}</span>
            </div>
          </div>
        </div>

        {/* Name & Animated Rotating Headline */}
        <div className="space-y-2 mb-6">
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-text">
            {site.name}
          </h1>

          <div className="h-7 sm:h-8 flex items-center font-mono text-sm sm:text-base text-accent">
            <span className="text-muted mr-2 font-semibold">›</span>
            <span className="font-medium transition-all duration-300">
              {site.headlineTitles[headlineIndex]}
            </span>
            <span className="ml-1 inline-block w-2 h-4 bg-accent animate-pulse" />
          </div>

          <p className="font-sans text-sm sm:text-base text-muted max-w-2xl leading-relaxed pt-1">
            {site.tagline}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 mb-8 font-mono text-xs">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-text text-bg px-4 py-2.5 font-semibold hover:opacity-90 transition-opacity"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Explore Work</span>
          </a>

          <a
            href={asset(site.socials.resume)}
            download="RajTiwari_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-text hover:border-text transition-colors"
          >
            <Download className="h-3.5 w-3.5 text-muted" />
            <span>Resume</span>
          </a>

          <a
            href={site.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2.5 text-text hover:border-amber-500/60 transition-colors"
            title="LeetCode Knight • 1,973 Contest Rating • 600+ Solved"
          >
            <span className="text-amber-400 font-bold">♞ Knight</span>
            <span className="text-muted">•</span>
            <span className="text-text font-semibold">1973</span>
            <ExternalLink className="h-3 w-3 text-muted" />
          </a>

          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3.5 py-2.5 text-text hover:border-text transition-colors"
          >
            <span>GitHub</span>
            <ExternalLink className="h-3 w-3 text-muted" />
          </a>
        </div>

        {/* Proof Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-dashed border-line">
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-line bg-surface/50 p-3"
            >
              <div className="font-mono text-lg sm:text-xl font-bold text-text">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] text-muted tracking-wide mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
