import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", to: "#services" },
  { label: "Work", to: "#portfolio" },
  { label: "About", to: "#about" },
  { label: "Process", to: "#process" },
  { label: "Reviews", to: "#testimonials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-rainbow-bar z-50 opacity-80" />
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary shadow-soft grid place-items-center text-primary-foreground font-bold text-sm">
              D
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Dewtron<span className="text-gradient-primary">ai</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground glass rounded-full px-2 py-1.5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.to}
                  className="px-4 py-1.5 rounded-full hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
          >
            Start a Project <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            className="md:hidden p-2 rounded-lg glass"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden border-t border-border/60 glass-strong">
            <ul className="px-6 py-5 space-y-2">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 rounded-lg hover:bg-white/5 text-sm font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-gradient-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold mt-2"
                >
                  Start a Project
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
