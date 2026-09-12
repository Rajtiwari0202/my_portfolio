import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { SideIndex } from "@/components/SideIndex";
import { CommandPalette } from "@/components/CommandPalette";
import { Footer } from "@/components/Footer";

// Sections
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { TechStack } from "@/sections/TechStack";
import { Achievements } from "@/sections/Achievements";
import { GithubActivity } from "@/sections/GithubActivity";
import { Contact } from "@/sections/Contact";

export default function App() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-text selection:bg-neutral-800 selection:text-neutral-200">
        {/* Navigation Bar */}
        <Nav onOpenPalette={() => setIsPaletteOpen(true)} />

        {/* Desktop Side Index Floating Table of Contents */}
        <SideIndex />

        {/* Main Content Stream */}
        <main className="w-full">
          <Hero onOpenPalette={() => setIsPaletteOpen(true)} />
          <About />
          <Projects />
          <TechStack />
          <Achievements />
          <GithubActivity />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Command Palette Dialog (⌘K / Ctrl+K) */}
        <CommandPalette
          isOpen={isPaletteOpen}
          onClose={() => setIsPaletteOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
