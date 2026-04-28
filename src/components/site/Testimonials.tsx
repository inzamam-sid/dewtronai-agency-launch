import { BadgeCheck, Quote, Star } from "lucide-react";

const items = [
  { tag: "2x more appointments", quote: "Our website now brings real appointment bookings, not just visitors. Dewtronai understood how patients think and built something that actually converts.", name: "Dr. Anil Verma", role: "Owner, SmileCare Dental Clinic", initials: "AV" },
  { tag: "Professional appeal", quote: "The new website instantly made our clinic look more professional. Patients trust us more, and booking has become effortless.", name: "Dr. Neha Reddy", role: "Founder, BrightSmile Dental Studio", initials: "NR", featured: true },
  { tag: "Mobile-first success", quote: "We started getting appointment calls directly from the website within the first month. Everything loads fast and looks clean on mobile.", name: "Dr. Karthik Iyer", role: "Dental Surgeon, Pearl Dental Care", initials: "KI" },
  { tag: "Mobile lead surge", quote: "Most of our leads now come from mobile users. The speed and layout made a big difference in inquiries.", name: "Rajesh Mehta", role: "Business Owner", initials: "RM" },
  { tag: "Trust-building design", quote: "The site clearly explains our services and builds trust instantly. We no longer need to explain everything on calls.", name: "Amit Shah", role: "Founder", initials: "AS" },
  { tag: "Walk-in increase", quote: "Patients often mention that they found us online and liked how professional our website looked. That alone increased walk-ins.", name: "Dr. Pooja Malhotra", role: "Clinic Owner", initials: "PM" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="underline-yellow">Trusted by</span>
            <br />
            <span className="text-gradient-primary">Clinic & Business Owners</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
            Real feedback from owners who use their website as a growth tool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <div
              key={t.name}
              className={`relative bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant transition-all ${
                t.featured ? "lg:scale-105 ring-2 ring-primary/20" : ""
              }`}
            >
              <span className="inline-block text-xs bg-accent/60 text-primary px-3 py-1 rounded-full mb-4">
                {t.tag}
              </span>
              <Quote className="absolute top-6 right-6 h-6 w-6 text-primary/30" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-yellow text-accent-yellow" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-11 w-11 rounded-full bg-gradient-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm flex items-center gap-1">
                    {t.name}
                    <BadgeCheck className="h-4 w-4 text-primary" />
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
