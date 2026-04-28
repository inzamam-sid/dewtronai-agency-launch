import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Services", to: "/#services" },
  { label: "Portfolio", to: "/#portfolio" },
  { label: "About", to: "/#about" },
  { label: "Process", to: "/#process" },
  { label: "Testimonials", to: "/#testimonials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-rainbow-bar z-50" />
      <header className="sticky top-1 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Dewtron<span className="text-gradient-primary">ai</span>
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.to} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-elegant hover:opacity-95 transition-opacity"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <ul className="px-6 py-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold"
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
