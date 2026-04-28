import { BadgeCheck, Quote, Star } from "lucide-react";

const items = [
  { tag: "2x more appointments", quote: "Our website now brings real appointment bookings, not just visitors. Dewtronai understood how patients think and built something that actually converts.", name: "Dr. Anil Verma", role: "Owner, SmileCare Dental Clinic", initials: "AV" },
  { tag: "Professional appeal", quote: "The new website instantly made our clinic look more professional. Patients trust us more, and booking has become effortless.", name: "Dr. Neha Reddy", role: "Founder, BrightSmile Dental Studio", initials: "NR", featured: true },
  { tag: "Mobile-first success", quote: "We started getting appointment calls directly from the website within the first month. Everything loads fast and looks clean on mobile.", name: "Dr. Karthik Iyer", role: "Dental Surgeon, Pearl Dental Care", initials: "KI" },
  { tag: "Mobile lead surge", quote: "Most of our leads now come from mobile users. The speed and layout made a big difference in inquiries.", name: "Rajesh Mehta", role: "Business Owner", initials: "RM" },
  { tag: "Trust-building design", quote: "The site clearly explains our services and builds trust instantly. We no longer need to explain everything on calls.", name: "Amit Shah", role: "Founder", initials: "AS" },
  { tag: "Walk-in increase", quote: "Patients often mention that they found us online and liked how professional our website looks. That alone increased walk-ins.", name: "Dr. Pooja Malhotra", role: "Clinic Owner", initials: "PM" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Client Stories
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Trusted by{" "}
            <span className="font-serif-italic text-gradient-primary">founders</span>{" "}
            & owners.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Real feedback from people who use their website as a growth tool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t) => (
            <div
              key={t.name}
              className={`relative bg-card-premium border-gradient rounded-3xl p-7 shadow-card hover:shadow-elegant transition-all ${
                t.featured ? "lg:scale-[1.03] shadow-glow" : ""
              }`}
            >
              <Quote className="absolute top-6 right-6 h-7 w-7 text-primary/20" />
              <span className="inline-block text-[11px] glass px-2.5 py-1 rounded-full text-primary-glow mb-4">
                {t.tag}
              </span>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-yellow text-accent-yellow" />
                ))}
              </div>
              <p className="text-[15px] text-foreground/85 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border/60">
                <div className="h-11 w-11 rounded-full bg-gradient-primary text-primary-foreground font-semibold flex items-center justify-center text-sm shadow-soft">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm flex items-center gap-1.5">
                    {t.name}
                    <BadgeCheck className="h-4 w-4 text-primary-glow" />
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
