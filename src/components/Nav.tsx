import { useState, useEffect } from "react";
import { site } from "@/config/site";
import { useTheme } from "./ThemeProvider";
import { Search, Sun, Moon } from "lucide-react";

export function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<"Home" | "Projects" | "Experience" | "Contact">("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const contactEl = document.getElementById("contact");
      const expEl = document.getElementById("achievements");
      const projectsEl = document.getElementById("projects");

      if (contactEl && scrollPos >= contactEl.offsetTop - 100) {
        setActiveTab("Contact");
      } else if (expEl && scrollPos >= expEl.offsetTop - 100) {
        setActiveTab("Experience");
      } else if (projectsEl && scrollPos >= projectsEl.offsetTop - 100) {
        setActiveTab("Projects");
      } else {
        setActiveTab("Home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string, tab: typeof activeTab) => {
    setActiveTab(tab);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-bg/85 backdrop-blur-md transition-all">
      <div className="mx-auto w-full max-w-[760px] border-x border-dashed border-line">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          {/* Brand: "Raj Tiwari" in Instrument Serif */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero", "Home");
            }}
            className="font-serif text-2xl tracking-normal text-text hover:opacity-80 transition-opacity select-none"
          >
            {site.name}
          </a>

          {/* Navigation & Controls */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Desktop Navigation Links matching screenshot */}
            <nav className="flex items-center gap-4 sm:gap-6 text-sm">
              <button
                onClick={() => scrollTo("hero", "Home")}
                className={`transition-colors pb-0.5 ${
                  activeTab === "Home"
                    ? "font-bold text-text border-b-2 border-text"
                    : "text-muted hover:text-text font-normal"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => scrollTo("projects", "Projects")}
                className={`transition-colors pb-0.5 ${
                  activeTab === "Projects"
                    ? "font-bold text-text border-b-2 border-text"
                    : "text-muted hover:text-text font-normal"
                }`}
              >
                Projects
              </button>

              <button
                onClick={() => scrollTo("achievements", "Experience")}
                className={`transition-colors pb-0.5 ${
                  activeTab === "Experience"
                    ? "font-bold text-text border-b-2 border-text"
                    : "text-muted hover:text-text font-normal"
                }`}
              >
                Experience
              </button>

              <button
                onClick={() => scrollTo("contact", "Contact")}
                className={`transition-colors pb-0.5 ${
                  activeTab === "Contact"
                    ? "font-bold text-text border-b-2 border-text"
                    : "text-muted hover:text-text font-normal"
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Actions: Circular Search & Theme Toggle */}
            <div className="flex items-center gap-2 pl-1">
              <button
                onClick={onOpenPalette}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface/50 text-muted hover:text-text hover:border-text/60 transition-colors"
                title="Search (⌘K / Ctrl+K)"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>

              <button
                onClick={toggleTheme}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface/50 text-muted hover:text-text hover:border-text/60 transition-colors"
                aria-label="Toggle theme"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
