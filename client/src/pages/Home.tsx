import { useCallback, useEffect, useState } from "react";
import { owner, projects, type PortfolioProject } from "@/data/portfolio";
import { AboutSection } from "@/components/portfolio/About";
import { ContactSection } from "@/components/portfolio/Contact";
import { HeroSection } from "@/components/portfolio/Hero";
import { InteractionLab } from "@/components/portfolio/InteractionLab";
import {
  CommandPalette,
  PortfolioHeader,
} from "@/components/portfolio/Navigation";
import { SkillsSection } from "@/components/portfolio/Skills";
import { ProjectDialog, WorkSection } from "@/components/portfolio/Work";

function PointerMark() {
  useEffect(() => {
    const finePointer = window.matchMedia("(any-pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reduced) return;
    const getCursors = () => [
      ...document.querySelectorAll<HTMLElement>(".pointer-mark"),
    ];
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");
    const move = (event: PointerEvent) => {
      const cursors = getCursors();
      if (!cursors.length) return;
      if (event.pointerType === "touch") {
        cursors.forEach(cursor =>
          cursor.classList.remove(
            "is-active",
            "is-over-link",
            "is-over-project"
          )
        );
        return;
      }
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const overLink = Boolean(target?.closest("a,button,[role=button]"));
      const overProject = Boolean(
        target?.closest(".project-open,.case-media,.case-gallery figure")
      );
      cursors.forEach(cursor => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        cursor.classList.add("is-active");
        cursor.classList.toggle("is-over-link", overLink);
        cursor.classList.toggle("is-over-project", overProject);
      });
    };
    const leave = () =>
      getCursors().forEach(cursor =>
        cursor.classList.remove("is-active", "is-over-link", "is-over-project")
      );
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      root.classList.remove("has-custom-cursor");
    };
  }, []);
  return (
    <span className="pointer-mark" aria-hidden="true">
      <i />
      <b>VIEW</b>
    </span>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closePalette = useCallback(() => setPaletteOpen(false), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openPalette = useCallback(() => {
    setMenuOpen(false);
    setPaletteOpen(true);
  }, []);
  const toggleMenu = useCallback(() => {
    setPaletteOpen(false);
    setMenuOpen(open => !open);
  }, []);
  const openProject = useCallback((slug: string) => {
    const match = projects.find(project => project.slug === slug);
    if (match) {
      setSelectedProject(match);
      setPaletteOpen(false);
      setMenuOpen(false);
    }
  }, []);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setMenuOpen(false);
        setPaletteOpen(open => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(Math.max(0, Math.min(1, value)))
      );
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>(".reveal")];
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(node => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <PointerMark />
      <PortfolioHeader
        onOpenPalette={openPalette}
        onOpenProject={openProject}
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
      />
      <main id="main">
        <HeroSection />
        <WorkSection onOpenProject={openProject} />
        <AboutSection />
        <SkillsSection onOpenProject={openProject} />
        <InteractionLab />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="footer-contact">
          <span className="mono">LET&apos;S MAKE SOMETHING</span>
          <a className="footer-email" href={`mailto:${owner.email}`}>
            {owner.email} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav className="footer-sections" aria-label="Footer sections">
          <span className="mono">SECTIONS</span>
          <div>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#lab">Lab</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <a className="back-top" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
      <CommandPalette
        open={paletteOpen}
        onClose={closePalette}
        onOpenProject={openProject}
      />
      <ProjectDialog
        project={selectedProject}
        onClose={closeProject}
        onOpenProject={openProject}
      />
    </>
  );
}
