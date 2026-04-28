import { Twitter, Linkedin, Instagram, ArrowUp, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 pt-24 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 bg-aurora opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Big CTA strip */}
        <div className="text-center mb-16 pb-12 border-b border-border/60">
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Have a project in mind?{" "}
            <a
              href="#contact"
              className="font-serif-italic text-gradient-primary underline decoration-primary/30 underline-offset-8"
            >
              Let's talk
            </a>
            .
          </h3>
          <p className="mt-4 inline-flex flex-wrap justify-center items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" /> No obligation</span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> Free consultation</span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent-orange" /> Custom quotes</span>
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary shadow-soft grid place-items-center text-primary-foreground font-bold text-sm">
                D
              </div>
              <h3 className="text-xl font-semibold">
                Dewtron<span className="text-gradient-primary">ai</span>
              </h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              A boutique studio building high-performance digital products
              that scale with your business. From concept to launch.
            </p>
            <div className="flex gap-2 mt-6">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full glass hover:bg-white/10 grid place-items-center transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company" links={["About", "Services", "Portfolio", "Careers"]} />
          <FooterCol title="Resources" links={["Blog", "Case Studies", "Docs", "Support"]} />
          <FooterCol title="Legal" links={["Privacy", "Terms", "Cookies"]} />
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dewtronai. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="glass px-3 py-1 rounded-full">Premium Quality</span>
            <span className="glass px-3 py-1 rounded-full">Fast Delivery</span>
          </div>
          <a href="#top" className="inline-flex items-center gap-2 hover:text-foreground">
            <ArrowUp className="h-3 w-3" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-foreground/70">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-foreground transition">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
