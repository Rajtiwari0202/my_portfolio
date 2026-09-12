import { useEffect, useState } from "react";

const INDEX_ITEMS = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "achievements", label: "Proof" },
  { id: "github", label: "Activity" },
  { id: "contact", label: "Contact" },
];

export function SideIndex() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 240;

      for (let i = INDEX_ITEMS.length - 1; i >= 0; i--) {
        const item = INDEX_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden xl:block fixed right-[max(1rem,calc((100vw-760px)/2-140px))] top-36 z-20 w-28 select-none">
      <div className="font-mono text-[11px] text-muted mb-2 tracking-wider uppercase opacity-60">
        Index
      </div>
      <nav className="flex flex-col gap-1.5 border-l border-line pl-3 font-mono text-xs">
        {INDEX_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-all ${
                isActive
                  ? "font-semibold text-text translate-x-1"
                  : "text-muted hover:text-text"
              }`}
            >
              {isActive && (
                <span className="text-accent mr-1 font-bold">›</span>
              )}
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
