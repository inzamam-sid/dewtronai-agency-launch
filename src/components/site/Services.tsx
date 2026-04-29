import { Globe, Smartphone, Palette, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom websites and web apps built with React, Next.js, and Node — engineered for speed and conversion.",
    tags: ["React", "Next.js", "Node"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Cross-platform mobile experiences using React Native and Flutter, polished to feel native.",
    tags: ["React Native", "Flutter"],
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Beautiful, intuitive interfaces designed around real user behavior and measurable outcomes.",
    tags: ["Figma", "Prototyping"],
  },
  {
    icon: Sparkles,
    title: "Branding & Creative",
    desc: "Complete identity systems — logos, type, color and guidelines that make a brand feel premium.",
    tags: ["Identity", "Systems"],
  },
];

const why = [
  "Product-first thinking, not just code",
  "Designs that convert and feel premium",
  "Scalable architecture built for growth",
  "Fast delivery without cutting corners",
  "A long-term partner, not a vendor",
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Our Services
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Digital products that{" "}
            <span className="font-serif-italic text-gradient-primary">actually</span>{" "}
            perform.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Strategy, design and engineering — aligned to help your business
            scale smarter and faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-card-premium border-gradient rounded-3xl p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-primary/20 border border-primary/20 grid place-items-center text-primary-glow shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary-glow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="relative bg-gradient-to-br from-primary/15 via-card to-card border-gradient rounded-3xl p-7 shadow-elegant overflow-hidden">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <span className="inline-block text-xs text-primary-glow font-medium tracking-wide uppercase">
                Why us
              </span>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">
                More than just{" "}
                <span className="font-serif-italic text-gradient-primary">development</span>
              </h3>
              <ul className="mt-7 space-y-3.5 text-sm">
                {why.map((w) => (
                  <li key={w} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" />
                    <span className="text-foreground/80">{w}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 rounded-2xl glass">
                <p className="font-serif-italic text-xl text-foreground/90 leading-snug">
                  "Built like a partner,
                  <br /> not a service."
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
