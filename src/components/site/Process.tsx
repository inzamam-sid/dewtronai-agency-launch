import { MessageSquare, FileText, CreditCard, Palette, Code, Rocket } from "lucide-react";

const steps = [
  { n: 1, icon: MessageSquare, title: "Discovery & Strategy Call", tag: "We listen first", desc: "We start with a detailed conversation to understand your goals, challenges, target audience, and vision. This ensures we're aligned before anything begins." },
  { n: 2, icon: FileText, title: "Clear Proposal & Timeline", tag: "No hidden surprises", desc: "You receive a transparent project plan outlining scope, deliverables, timelines, and pricing — so you know exactly what you're getting and when." },
  { n: 3, icon: CreditCard, title: "Project Kickoff", tag: "Start with confidence", desc: "Once you're comfortable and ready, we finalize the agreement and kick off the project smoothly with everything clearly defined." },
  { n: 4, icon: Palette, title: "Design & Visual Direction", tag: "You approve every step", desc: "We design wireframes and visuals that match your brand and business goals. Your feedback shapes every iteration before development begins." },
  { n: 5, icon: Code, title: "Development & Progress Updates", tag: "Full visibility", desc: "Our team builds your product using modern, scalable technologies while keeping you updated on progress and milestones." },
  { n: 6, icon: Rocket, title: "Testing, Launch & Support", tag: "Built to last", desc: "We test thoroughly, deploy confidently, and stay available after launch with dedicated support to keep your product running smoothly." },
];

export function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="underline-yellow">Our Process</span>
            <br />
            <span className="text-gradient-primary">Explained</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            From payment to launch and beyond, here's exactly how we work with
            you to deliver exceptional results.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-orange via-primary/40 to-accent-yellow -translate-x-1/2 hidden md:block" />
          <div className="space-y-12">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <div key={s.n} className="grid md:grid-cols-2 gap-8 items-center relative">
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gradient-to-br from-accent-orange to-accent-yellow text-white font-bold items-center justify-center shadow-soft z-10">
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
    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-xs bg-accent/60 text-primary px-3 py-1 rounded-full">{s.tag}</span>
      </div>
      <h3 className="font-bold text-lg">{s.title}</h3>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
    </div>
  );
}
