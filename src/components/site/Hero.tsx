import { ArrowUpRight, Play, Sparkles, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden noise">
      {/* Aurora glow */}
      <div className="absolute inset-0 bg-aurora animate-aurora pointer-events-none" />
      {/* Grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Accepting 2 new projects this month
          <span className="text-muted-foreground">·</span>
          <span className="text-primary-glow">Limited slots</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-semibold leading-[1.02] tracking-tight max-w-5xl mx-auto">
        {/* <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.02] tracking-tight max-w-6xl mx-auto"> */}
          We craft{" "}
          <span className="font-serif-italic text-gradient-primary">premium</span>{" "}
          digital products that
          <br className="hidden md:block" />{" "}
          <span className="relative inline-block">
            {/* <span className="bg-gradient-primary bg-clip-text text-transparent"> */}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              scale revenue.
            </span>
            <svg
              className="absolute -bottom-3 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
            >
              <path
                d="M2 8 Q 75 2, 150 6 T 298 5"
                stroke="url(#gradStroke)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="gradStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.7 0.22 295)" />
                  <stop offset="100%" stopColor="oklch(0.78 0.18 50)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Dewtronai is a boutique studio building high-performance websites,
          apps and platforms — engineered for speed, designed to convert.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            Start your project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 glass px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition"
          >
            <Play className="h-4 w-4 text-primary" /> See our work
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["A", "M", "K", "S"].map((c, i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full bg-gradient-primary ring-2 ring-background grid place-items-center text-[10px] font-bold text-primary-foreground"
                >
                  {c}
                </div>
              ))}
            </div>
            <span>30+ teams shipped</span>
          </div>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent-yellow text-accent-yellow" />
            ))}
            <span className="ml-1">4.9 client rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent-orange" />
            Free 30-min strategy call
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl glass max-w-3xl mx-auto">
          {[
            { v: "30+", l: "Projects shipped" },
            { v: "97%", l: "Client retention" },
            { v: "<6h", l: "Avg response" },
            { v: "5+", l: "Years crafting" },
          ].map((s) => (
            <div key={s.l} className="p-5 bg-background/30">
              <div className="text-2xl md:text-3xl font-semibold text-gradient-primary">
                {s.v}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
