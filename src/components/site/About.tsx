import { Code2, Palette, Zap, Globe } from "lucide-react";

const features = [
  { icon: Code2, title: "MERN Stack Experts", desc: "Full-stack mastery with MongoDB, Express, React, and Node.", tag: "Full-stack", n: "01" },
  { icon: Palette, title: "Modern UI / UX", desc: "Beautiful, intuitive interfaces that users genuinely love.", tag: "User-centered", n: "02" },
  { icon: Zap, title: "Scalable Solutions", desc: "Architecture built to grow with your business from day one.", tag: "Enterprise-ready", n: "03" },
  { icon: Globe, title: "Global Reach", desc: "Serving clients worldwide with attentive, ongoing support.", tag: "24/7 support", n: "04" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] bg-soft-glow blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> About Us
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Who we{" "}
            <span className="font-serif-italic text-gradient-primary">are</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            A boutique studio creating high-performance digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-wider text-primary-glow font-medium mb-4">
              The team behind the results
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
              We build digital products that{" "}
              <span className="font-serif-italic text-gradient-primary">drive growth</span>.
            </h3>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Dewtronai is a premium web agency that combines cutting-edge
              technology with stunning design. From early-stage startups to
              established enterprises, our team of developers, designers and
              strategists turns vision into measurable results.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
              Driven by results, guided by strategy
            </div>

            <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl glass">
              {[
                { v: "30+", l: "Projects" },
                { v: "97%", l: "Satisfaction" },
                { v: "5+", l: "Years" },
              ].map((s) => (
                <div key={s.l} className="text-center p-5 bg-background/30">
                  <div className="text-3xl font-semibold text-gradient-primary">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`relative bg-card-premium border-gradient rounded-3xl p-6 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 ${
                  i % 2 ? "sm:translate-y-6" : ""
                }`}
              >
                <div className="absolute top-5 right-5 text-[11px] text-muted-foreground font-mono">
                  {f.n}
                </div>
                <div className="h-11 w-11 rounded-xl bg-gradient-primary/20 border border-primary/20 grid place-items-center text-primary-glow mb-5">
                  <f.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-base">{f.title}</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
                <span className="inline-block mt-4 text-[11px] bg-secondary border border-border text-muted-foreground px-2.5 py-1 rounded-full">
                  {f.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
