import { Globe, Palette, Smartphone, ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Web Development",
    icon: Globe,
    title: "E-Commerce Platform",
    desc: "Full-featured online store with payments, inventory, and analytics.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    metric: "300% ROI",
    gradient: "from-violet-500 via-purple-600 to-indigo-700",
  },
  {
    tag: "UI/UX Design",
    icon: Palette,
    title: "HealthTech Dashboard",
    desc: "Intuitive healthcare analytics dashboard for medical professionals.",
    tech: ["Figma", "React", "D3.js", "Postgres"],
    metric: "Medical-grade",
    gradient: "from-teal-400 via-emerald-500 to-cyan-600",
  },
  {
    tag: "App Development",
    icon: Smartphone,
    title: "Fintech Mobile App",
    desc: "Secure mobile banking with biometric authentication and instant transfers.",
    tech: ["React Native", "Firebase", "Node"],
    metric: "Bank-level",
    gradient: "from-fuchsia-500 via-pink-500 to-rose-600",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
              Featured Work
            </span>
            <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Latest{" "}
              <span className="font-serif-italic text-gradient-primary">projects</span>{" "}
              we've shipped.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              A selection of recent work — where innovation meets execution.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 transition"
          >
            Start your project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative bg-card-premium border-gradient rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div
                className={`relative h-56 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 animate-shimmer" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 glass-strong text-xs font-medium px-3 py-1.5 rounded-full text-foreground">
                  <p.icon className="h-3.5 w-3.5" />
                  {p.tag}
                </span>
                <p.icon className="h-20 w-20 text-white/40 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-secondary border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-primary-glow font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
                  {p.metric}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center mt-12 text-sm text-muted-foreground">
          More real projects coming soon — this is just the beginning.
        </p>
      </div>
    </section>
  );
}
