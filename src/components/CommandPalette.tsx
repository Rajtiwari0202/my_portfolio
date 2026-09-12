import { useState, useEffect, useRef } from "react";
import { site } from "@/config/site";
import { asset } from "@/utils/asset";
import { useTheme } from "./ThemeProvider";
import {
  Search,
  ArrowRight,
  ExternalLink,
  Download,
  Moon,
  Sun,
  Code2,
  FolderGit2,
  Award,
  Layers,
  Mail,
  X,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  // All commands list
  const commands = [
    // Navigation
    {
      id: "nav-about",
      title: "Jump to About",
      category: "Navigation",
      icon: Code2,
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-projects",
      title: "Jump to Projects",
      category: "Navigation",
      icon: FolderGit2,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-stack",
      title: "Jump to Tech Stack",
      category: "Navigation",
      icon: Layers,
      action: () => {
        document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-achievements",
      title: "Jump to Proof & Achievements",
      category: "Navigation",
      icon: Award,
      action: () => {
        document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-contact",
      title: "Jump to Contact",
      category: "Navigation",
      icon: Mail,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },

    // Projects
    ...site.projects.map((p) => ({
      id: `project-${p.id}`,
      title: `View ${p.title} (${p.accent})`,
      category: "Projects",
      icon: FolderGit2,
      action: () => {
        document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    })),

    // Socials & Actions
    {
      id: "action-resume",
      title: "Download Resume (PDF)",
      category: "External & Actions",
      icon: Download,
      action: () => {
        const link = document.createElement("a");
        link.href = asset(site.socials.resume);
        link.download = "RajTiwari_Resume.pdf";
        link.click();
        onClose();
      },
    },
    {
      id: "action-github",
      title: "Open GitHub Profile",
      category: "External & Actions",
      icon: ExternalLink,
      action: () => {
        window.open(site.socials.github, "_blank");
        onClose();
      },
    },
    {
      id: "action-leetcode",
      title: "Open LeetCode (Knight • 1,973 Rating • 600+ Solved)",
      category: "External & Actions",
      icon: ExternalLink,
      action: () => {
        window.open(site.socials.leetcode, "_blank");
        onClose();
      },
    },
    {
      id: "action-linkedin",
      title: "Open LinkedIn Profile",
      category: "External & Actions",
      icon: ExternalLink,
      action: () => {
        window.open(site.socials.linkedin, "_blank");
        onClose();
      },
    },
    {
      id: "action-theme",
      title: `Toggle Theme (Currently ${theme})`,
      category: "Settings",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      },
    },
  ];

  // Filter commands by query
  const filtered = commands.filter((cmd) =>
    `${cmd.title} ${cmd.category}`.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered outside
        }
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? Math.max(0, filtered.length - 1) : prev - 1
        );
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg border border-line bg-surface rounded-xl shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Box */}
        <div className="flex items-center gap-3 border-b border-line px-4 py-3 bg-surface">
          <Search className="h-4 w-4 text-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search..."
            className="w-full bg-transparent font-mono text-sm text-text placeholder:text-muted focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-muted hover:text-text hover:bg-surface-hover transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 font-mono text-xs">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-muted">
              No matching commands found.
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex w-full items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors ${
                    isSelected
                      ? "bg-text text-bg font-semibold"
                      : "text-text hover:bg-surface-hover"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-3.5 w-3.5 opacity-70" />
                    <span>{cmd.title}</span>
                  </div>
                  <span
                    className={`text-[10px] tracking-wider uppercase opacity-60 ${
                      isSelected ? "text-bg" : "text-muted"
                    }`}
                  >
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Palette Footer Help */}
        <div className="flex items-center justify-between border-t border-line px-4 py-2 bg-surface text-[11px] font-mono text-muted">
          <span>Navigate with ↑ ↓, press Enter to select</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}
