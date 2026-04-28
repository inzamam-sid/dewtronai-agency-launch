import { Rocket, Layers, Scale, MessageCircle, Headphones, Award } from "lucide-react";

const items = [
  { n: "01", icon: Rocket, title: "Fast Delivery ✨", desc: "We deliver projects on time without compromising quality. Agile methodology ensures rapid iterations.", tag: "3-5x faster", color: "from-blue-400 to-cyan-400" },
  { n: "02", icon: Layers, title: "Modern Tech Stack 💻", desc: "Built with React, Node.js, and cloud-native solutions for future-proof, maintainable products.", tag: "Future-proof", color: "from-purple-400 to-indigo-500" },
  { n: "03", icon: Scale, title: "Scalable Solutions 📈", desc: "Our architecture grows seamlessly with your business, from startups to enterprise-level scale.", tag: "Enterprise-ready", color: "from-emerald-400 to-teal-500" },
  { n: "04", icon: MessageCircle, title: "Transparent Communication 📝", desc: "Regular updates, clear documentation, and open communication keep you in control.", tag: "Clear updates", color: "from-yellow-400 to-orange-400" },
  { n: "05", icon: Headphones, title: "24/7 Support ☎️", desc: "Our team is always ready to help, ensuring smooth operations at all times.", tag: "Always available", color: "from-pink-400 to-rose-500" },
  { n: "06", icon: Award, title: "Premium Quality 🏆", desc: "Attention to detail in every line of code and pixel ensures excellence you can trust.", tag: "Pixel-perfect", color: "from-violet-400 to-purple-500" },
];

export function WhyChoose() {
  return (
    <section className="py-24 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="underline-yellow">Why Choose</span>
            <br />
            <span className="text-gradient-primary">Dewtronai?</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Not all agencies are created equal. Here's why leading businesses trust us.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-accent/40 border border-primary/15 px-4 py-2 rounded-full text-sm text-primary">
            ✦ Built for real results, not just code
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.n} className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all">
              <div className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-gradient-to-br from-accent-orange to-accent-yellow text-white text-xs font-bold flex items-center justify-center shadow-soft">
                {it.n}
              </div>
              <div className="flex items-start justify-between">
                <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${it.color} text-white flex items-center justify-center shadow-soft`}>
                  <it.icon className="h-7 w-7" />
                </div>
                <span className="text-xs bg-accent/60 text-primary px-3 py-1 rounded-full">{it.tag}</span>
              </div>
              <h3 className="mt-5 font-bold text-lg">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
