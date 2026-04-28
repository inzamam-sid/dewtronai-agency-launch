import { MessageSquare, FileText, CreditCard, Palette, Code, Rocket } from "lucide-react";

const steps = [
  { n: 1, icon: MessageSquare, title: "Discovery & Strategy Call", tag: "We listen first", desc: "We start with a detailed conversation to understand your goals, audience and vision — alignment before anything begins." },
  { n: 2, icon: FileText, title: "Clear Proposal & Timeline", tag: "No hidden surprises", desc: "A transparent project plan with scope, deliverables, timelines and pricing — so you know exactly what's coming." },
  { n: 3, icon: CreditCard, title: "Project Kickoff", tag: "Start with confidence", desc: "Once you're ready, we finalize the agreement and kick off smoothly with everything clearly defined." },
  { n: 4, icon: Palette, title: "Design & Visual Direction", tag: "You approve every step", desc: "Wireframes and visuals that match your brand and goals. Your feedback shapes every iteration." },
  { n: 5, icon: Code, title: "Development & Updates", tag: "Full visibility", desc: "Modern, scalable build with regular progress updates and milestones along the way." },
  { n: 6, icon: Rocket, title: "Launch & Support", tag: "Built to last", desc: "Thorough testing, confident deployment, and ongoing support to keep your product running smoothly." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Our Process
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            From{" "}
            <span className="font-serif-italic text-gradient-primary">idea</span>{" "}
            to launch.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Six clear steps. Zero surprises. Exceptional results.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-x-1/2 hidden md:block" />
          <div className="space-y-10">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <div key={s.n} className="grid md:grid-cols-2 gap-8 items-center relative">
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground font-semibold items-center justify-center shadow-glow z-10 ring-4 ring-background">
                    {s.n}
                  </div>
                  {left ? (
                    <>
                      <Card s={s} />
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <Card s={s} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ s }: { s: { n: number; icon: any; title: string; tag: string; desc: string } }) {
  const Icon = s.icon;
  return (
    <div className="bg-card-premium border-gradient rounded-3xl p-7 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
      <div className="flex items-start justify-between mb-5">
        <div className="h-12 w-12 rounded-2xl bg-gradient-primary/15 border border-primary/20 grid place-items-center text-primary-glow">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-[11px] glass px-2.5 py-1 rounded-full text-muted-foreground">{s.tag}</span>
      </div>
      <h3 className="font-semibold text-lg">{s.title}</h3>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
    </div>
  );
}
