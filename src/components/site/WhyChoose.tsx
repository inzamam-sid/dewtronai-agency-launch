import { Rocket, Layers, Scale, MessageCircle, Headphones, Award } from "lucide-react";

const items = [
  { n: "01", icon: Rocket, title: "Fast Delivery", desc: "We deliver projects on time without compromising quality. Agile sprints, rapid iterations.", tag: "3-5x faster" },
  { n: "02", icon: Layers, title: "Modern Stack", desc: "React, Node.js and cloud-native — future-proof, maintainable foundations.", tag: "Future-proof" },
  { n: "03", icon: Scale, title: "Scalable Solutions", desc: "Architecture that grows seamlessly from startup to enterprise scale.", tag: "Enterprise-ready" },
  { n: "04", icon: MessageCircle, title: "Transparent Communication", desc: "Regular updates, clear documentation, and open channels. You're always in control.", tag: "Clear updates" },
  { n: "05", icon: Headphones, title: "Dedicated Support", desc: "We stay close after launch — fixes, improvements, and strategic guidance when you need it.", tag: "Always available" },
  { n: "06", icon: Award, title: "Premium Quality", desc: "Pixel-level care in design, line-level care in code. Excellence you can feel.", tag: "Pixel-perfect" },
];

export function WhyChoose() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Why Dewtronai
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Built for{" "}
            <span className="font-serif-italic text-gradient-primary">real results</span>,
            not just code.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Not all agencies are created equal. Here's why leading teams trust us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-3xl glass border border-border/40">
          {items.map((it) => (
            <div
              key={it.n}
              className="group relative bg-background/40 p-8 hover:bg-background/60 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary/15 border border-primary/20 grid place-items-center text-primary-glow shadow-soft group-hover:shadow-glow transition-shadow">
                  <it.icon className="h-5 w-5" />
                </div>
                <span className="text-[11px] text-muted-foreground font-mono">{it.n}</span>
              </div>
              <h3 className="mt-6 font-semibold text-lg">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{it.desc}</p>
              <span className="inline-block mt-5 text-[11px] bg-white/5 border border-white/5 text-muted-foreground px-2.5 py-1 rounded-full">
                {it.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
