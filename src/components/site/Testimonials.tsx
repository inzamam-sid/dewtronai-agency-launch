import { BadgeCheck, Quote, Star } from "lucide-react";

const items = [
  {
    tag: "2x more appointments",
    quote:
      "Our website now brings real appointment bookings, not just visitors. Dewtronai understood how patients think and built something that actually converts.",
    name: "Dr. Anil Verma",
    role: "Owner, SmileCare Dental Clinic",
    initials: "AV",
    accent: "violet",
  },
  {
    tag: "Professional appeal",
    quote:
      "The new website instantly made our clinic look more professional. Patients trust us more, and booking has become effortless.",
    name: "Dr. Neha Reddy",
    role: "Founder, BrightSmile Dental Studio",
    initials: "NR",
    featured: true,
    accent: "peach",
  },
  {
    tag: "Mobile-first success",
    quote:
      "We started getting appointment calls directly from the website within the first month. Everything loads fast and looks clean on mobile.",
    name: "Dr. Karthik Iyer",
    role: "Dental Surgeon, Pearl Dental Care",
    initials: "KI",
    accent: "mustard",
  },
  {
    tag: "Mobile lead surge",
    quote:
      "Most of our leads now come from mobile users. The speed and layout made a big difference in inquiries.",
    name: "Rajesh Mehta",
    role: "Business Owner",
    initials: "RM",
    accent: "violet",
  },
  {
    tag: "Trust-building design",
    quote:
      "The site clearly explains our services and builds trust instantly. We no longer need to explain everything on calls.",
    name: "Amit Shah",
    role: "Founder",
    initials: "AS",
    accent: "peach",
  },
  {
    tag: "Walk-in increase",
    quote:
      "Patients often mention that they found us online and liked how professional our website looks. That alone increased walk-ins.",
    name: "Dr. Pooja Malhotra",
    role: "Clinic Owner",
    initials: "PM",
    accent: "mustard",
  },
];

const accentMap: Record<string, { dot: string; tag: string; ring: string }> = {
  violet: {
    dot: "bg-primary",
    tag: "text-primary",
    ring: "from-primary/25 to-primary/0",
  },
  peach: {
    dot: "bg-accent-orange",
    tag: "text-accent-orange",
    ring: "from-accent-orange/25 to-accent-orange/0",
  },
  mustard: {
    dot: "bg-accent-yellow",
    tag: "text-[oklch(0.55_0.14_85)]",
    ring: "from-accent-yellow/25 to-accent-yellow/0",
  },
};

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Soft editorial backdrop */}
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[760px] bg-soft-glow blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow + headline */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Client Stories
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl tracking-tight leading-[1.02]">
            Trusted by{" "}
            <span className="font-serif-italic text-gradient-primary">
              founders
            </span>{" "}
            &amp; owners.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Real feedback from people who use their website as a growth tool.
          </p>

          {/* Aggregate rating row */}
          <div className="mt-8 inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 text-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-accent-yellow text-accent-yellow"
                />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9 / 5</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">
              from 30+ founders &amp; clinic owners
            </span>
          </div>
        </div>

        {/* Editorial card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, idx) => {
            const a = accentMap[t.accent];
            return (
              <article
                key={t.name}
                className={`group relative bg-card-premium border-gradient rounded-3xl p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 ${
                  t.featured ? "lg:scale-[1.03] shadow-elegant" : ""
                } ${idx % 2 === 1 ? "lg:translate-y-4" : ""}`}
              >
                {/* Accent corner glow */}
                <div
                  className={`absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br ${a.ring} blur-3xl opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                {/* Big serif quote mark */}
                <div className="relative">
                  <span
                    aria-hidden
                    className="font-serif-italic text-[5.5rem] leading-none text-primary/15 absolute -top-6 -left-2 select-none"
                  >
                    &ldquo;
                  </span>
                  <Quote className="absolute top-2 right-0 h-7 w-7 text-primary/15" />
                </div>

                <div className="relative pt-6">
                  {/* Tag pill */}
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold glass rounded-full px-3 py-1 ${a.tag} mb-5`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                    {t.tag}
                  </span>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent-yellow text-accent-yellow drop-shadow-sm"
                      />
                    ))}
                    <span className="ml-2 text-[11px] text-muted-foreground font-medium">
                      5.0
                    </span>
                  </div>

                  {/* Editorial pull-quote */}
                  <p className="font-serif-italic text-[1.35rem] md:text-[1.45rem] leading-[1.35] text-foreground/90 tracking-tight">
                    {t.quote}
                  </p>

                  {/* Divider */}
                  <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                  {/* Author */}
                  <div className="mt-5 flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground font-semibold flex items-center justify-center text-sm shadow-soft ring-4 ring-background">
                      {t.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm flex items-center gap-1.5 text-foreground">
                        {t.name}
                        <BadgeCheck className="h-4 w-4 text-primary" />
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-14 text-center text-sm text-muted-foreground">
          Verified reviews from real founders &amp; clinic owners we&rsquo;ve
          partnered with.
        </p>
      </div>
    </section>
  );
}
