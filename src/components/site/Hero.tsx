import { ArrowRight, Play, Sparkles, Rocket, Zap, Brain } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-accent/60 border border-primary/20 px-4 py-2 rounded-full text-xs font-medium text-primary mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            2 slots left this month
          </div>

          <p className="text-accent-orange font-medium mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            We build products that scale revenue
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Scale Your Vision.
            <br />
            <span className="underline-yellow">Build Without Limits.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            We help startups and teams launch high-performance websites, apps,
            and platforms — fast, scalable, and conversion-focused.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold shadow-elegant hover:opacity-95 transition"
            >
              Get a Free Strategy Call <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 border border-primary/30 px-7 py-3.5 rounded-full font-semibold hover:bg-accent/40 transition"
            >
              <Play className="h-4 w-4" /> See Real Work
            </a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            No obligation • Free 30-min call • Trusted by 30+ teams
          </p>
        </div>

        {/* Right visual */}
        <div className="relative h-[500px] hidden lg:block">
          <div className="absolute inset-0 bg-soft-glow blur-3xl" />

          <div className="absolute top-10 right-8 bg-card shadow-elegant rounded-full px-5 py-3 flex items-center gap-2 animate-float">
            <Zap className="h-4 w-4 text-accent-yellow fill-accent-yellow" />
            <span className="font-medium text-sm">Fast Delivery</span>
          </div>

          <div className="absolute top-44 left-8 bg-card shadow-elegant rounded-full px-5 py-3 flex items-center gap-2 animate-float-delayed">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="font-medium text-sm">Built to Scale</span>
          </div>

          <div className="absolute bottom-32 right-12 bg-card shadow-elegant rounded-full px-5 py-3 flex items-center gap-2 animate-float">
            <Brain className="h-4 w-4 text-accent-orange" />
            <span className="font-medium text-sm">Product Thinking</span>
          </div>

          <div className="absolute bottom-10 left-16 bg-card shadow-elegant rounded-2xl px-8 py-5 text-center animate-float-delayed">
            <div className="text-3xl font-bold text-gradient-primary">30+</div>
            <div className="text-xs text-muted-foreground mt-1">Projects Shipped</div>
          </div>
        </div>
      </div>
    </section>
  );
}
