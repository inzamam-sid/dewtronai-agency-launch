import { Globe, Palette, Smartphone } from "lucide-react";

const projects = [
  {
    tag: "Web Development",
    icon: Globe,
    title: "E-Commerce Platform",
    desc: "A full-featured online store with payment integration and inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    metric: "300% ROI",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    tag: "UI/UX Design",
    icon: Palette,
    title: "HealthTech Dashboard",
    desc: "An intuitive healthcare analytics dashboard for medical professionals.",
    tech: ["Figma", "React", "D3.js", "PostgreSQL"],
    metric: "Medical-grade",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    tag: "App Development",
    icon: Smartphone,
    title: "Fintech Mobile App",
    desc: "A secure mobile banking app with biometric authentication.",
    tech: ["React Native", "Firebase", "Node.js"],
    metric: "Bank-level security",
    gradient: "from-violet-500 to-purple-700",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium mb-4">◇ Real work, real results</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="underline-yellow">Featured</span>
            <br />
            <span className="text-gradient-primary">Portfolio Projects</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Explore our latest work and see how we've helped businesses achieve
            their digital transformation goals.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-accent/40 border border-primary/15 px-4 py-2 rounded-full text-sm text-primary">
            ✦ Where innovation meets execution
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div
                className={`relative h-56 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}
              >
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur text-xs font-medium px-3 py-1.5 rounded-full text-foreground">
                  <p.icon className="h-3.5 w-3.5" />
                  {p.tag}
                </span>
                <p.icon className="h-20 w-20 text-white/40" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-block text-xs bg-accent/60 text-primary px-3 py-1 rounded-full font-medium">
                  {p.metric}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-muted-foreground">
          More real projects coming soon — this is just the beginning.
        </p>
      </div>
    </section>
  );
}
