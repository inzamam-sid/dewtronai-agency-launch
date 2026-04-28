import { Globe, Smartphone, Palette, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Cross-platform mobile applications using React Native and Flutter.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces designed with user experience at the core.",
  },
  {
    icon: Sparkles,
    title: "Branding & Creative",
    desc: "Complete brand identity design including logos, colors, and guidelines.",
  },
];

const why = [
  "🍩 Product-first thinking, not just code.",
  "🍪 Designs that convert and feel premium.",
  "⚙️ Scalable architecture built for growth.",
  "🚀 Fast delivery without cutting corners.",
  "🤝 Long-term partner, not a one-time vendor.",
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-accent/60 px-4 py-1.5 rounded-full text-xs font-medium text-primary border border-primary/20">
            OUR SERVICES 🚀
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            We Build Digital Products That
            <br />
            <span className="text-gradient-primary underline-yellow">Actually Perform</span> ⚡
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            <span className="text-foreground font-medium">Strategy</span> •{" "}
            <span className="text-foreground font-medium">Design</span> •{" "}
            <span className="text-foreground font-medium">Engineering</span> — aligned to help your business scale smarter and faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary mb-5">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <aside className="bg-card rounded-2xl p-7 shadow-card">
            <p className="text-primary font-medium underline-yellow inline-block">Why us?</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight">
              More Than Just Development ✨
            </h3>
            <ul className="mt-6 space-y-4 text-sm">
              {why.map((w) => (
                <li key={w} className="flex gap-2">
                  <span>{w}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 rounded-xl bg-accent/30 border border-primary/10">
              <p className="font-display text-xl text-accent-orange italic">
                Built like a partner,
                <br />
                not a service. 🤝
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
