import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2">
          <div className="relative h-7 w-7 rounded-md bg-gradient-to-br from-neon to-violet">
            <div className="absolute inset-[2px] rounded-[5px] bg-background" />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] font-bold text-neon">
              A
            </div>
          </div>
          <span className="text-sm font-semibold tracking-tight">
            ACube <span className="text-muted-foreground font-normal">— AI Systems Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Services
          </a>
          <a href="/#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Case Studies
          </a>
          <a href="/#process" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Process
          </a>
          <a href="/#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>

        <a
          href="mailto:cacube.ai@gmail.com"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium transition-all hover:border-neon/50 hover:bg-secondary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
          Work With Us
        </a>
      </div>
    </header>
  );
}
