import { Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pb-12 border-b border-background/10">
          <p className="inline-flex items-center gap-3 text-sm text-background/70">
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" /> No obligation</span>
            <span>|</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> Free consultation</span>
            <span>|</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent-orange" /> Custom quotes</span>
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold">
              Dewtron<span className="text-primary-glow">ai</span>
            </h3>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Building high-performance digital products that scale with your
              business. From concept to launch, we bring your vision to life.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company" links={["About", "Services", "Portfolio", "Careers"]} />
          <FooterCol title="Resources" links={["Blog", "Case Studies", "Documentation", "Support"]} />
          <FooterCol title="Legal" links={["Privacy Policy", "Terms of Service", "Cookie Policy"]} />
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Dewtronai. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="bg-background/10 px-3 py-1 rounded-full">🚀 Premium Quality</span>
            <span className="bg-background/10 px-3 py-1 rounded-full">⚡ Fast Delivery</span>
          </div>
          <p>✦ Crafted with ❤ for innovators worldwide</p>
        </div>

        <div className="mt-8 text-center">
          <a href="#top" className="inline-flex items-center gap-2 text-xs text-background/60 hover:text-background">
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
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-3 text-sm text-background/60">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-background transition">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
