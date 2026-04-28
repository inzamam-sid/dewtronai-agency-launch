import { Code2, Palette, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "MERN Stack Experts",
    desc: "Full-stack mastery with MongoDB, Express, React, and Node.js",
    tag: "Full-stack",
    n: "01",
  },
  {
    icon: Palette,
    title: "Modern UI/UX",
    desc: "Beautiful, intuitive interfaces that users love",
    tag: "User-centered",
    n: "02",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    desc: "Architecture built to grow with your business",
    tag: "Enterprise-ready",
    n: "03",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Serving clients worldwide with 24/7 support",
    tag: "24/7 support",
    n: "04",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-accent/60 px-4 py-1.5 rounded-full text-xs font-medium text-primary border border-primary/20">
            ◎ About Us
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
            <span className="underline-yellow">Who We</span>
            <br />
            <span className="text-gradient-primary">Are</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Premium web agency creating high-performance digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-accent-orange text-sm font-medium mb-4">◉ The team behind the results</p>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              We Build Digital Products That
              <br />
              <span className="underline-yellow">Drive Growth</span>
            </h3>
            <p className="mt-6 text-muted-foreground">
              Dewtronai is a premium web agency that creates high-performance
              digital solutions combining cutting-edge technology with stunning design.
            </p>
            <p className="mt-4 text-muted-foreground">
              From startups to enterprises, our team of developers, designers, and
              strategists turns visions into reality, delivering measurable results.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 bg-accent/50 border border-primary/20 px-4 py-2 rounded-full text-sm text-primary font-medium">
              ✦ Driven by results, guided by strategy
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 bg-card rounded-2xl p-6 shadow-card">
              {[
                { v: "30+", l: "Projects Delivered" },
                { v: "97%", l: "Client Satisfaction" },
                { v: "5+", l: "Years Experience" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl font-bold text-gradient-primary">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-shadow"
              >
                <div className="absolute top-4 right-4 text-xs text-muted-foreground font-mono">{f.n}</div>
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary mb-4">
                  <f.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg">{f.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
                <span className="inline-block mt-4 text-xs bg-accent/60 text-primary px-3 py-1 rounded-full">
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
