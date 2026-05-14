import { useState } from "react";
import { Mail, Phone, MapPin, Send, BadgeCheck, MessageCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

const WHATSAPP = "9700000000";
const EMAIL = "dewtronai@gmail.com";
const WHATSAPP_URL = `https://wa.me/91${WHATSAPP}?text=${encodeURIComponent("Hi Dewtronai, I'd like to discuss a project.")}`;

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent! We'll get back to you within 4-6 hours.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try WhatsApp or email instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Let's Talk
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Build something{" "}
            <span className="font-serif-italic text-gradient-primary">amazing</span>{" "}
            together.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Ready to start your next project? Tell us about it — we usually
            respond within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left info — 2/5 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-gradient-to-br from-primary/15 via-card to-card border-gradient rounded-3xl p-6 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl glass grid place-items-center text-primary-glow shrink-0">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Quick Response Guarantee</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    We respond within 4-6 business hours. Free initial consultation.
                  </p>
                </div>
              </div>
            </div>

            <ContactRow
              icon={Mail}
              label="Email us"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactRow
              icon={Phone}
              label="Call / WhatsApp"
              value={`+91 ${WHATSAPP}`}
              href={WHATSAPP_URL}
              external
            />
            <ContactRow
              icon={MapPin}
              label="Based in"
              value="India — Remote-first agency"
            />

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-full font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 glass px-5 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>

          {/* Right form — 3/5 */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-card-premium border-gradient rounded-3xl p-8 shadow-elegant"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <span className="inline-block text-[11px] glass px-2.5 py-1 rounded-full text-primary-glow mb-3">
                  Project Inquiry
                </span>
                <h3 className="text-2xl font-semibold">Send us a message</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Fill out the form and we'll get back to you ASAP.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-7">
              <Field label="Full Name *">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
                />
              </Field>
              <Field label="Email Address *">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
                />
              </Field>
            </div>

            <Field label="Company (Optional)" className="mt-4">
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Your Company"
                className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
              />
            </Field>

            <Field label="Your Message *" className="mt-4">
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project, timeline, and budget..."
                className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none placeholder:text-muted-foreground/60"
              />
            </Field>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-4 rounded-full font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
            <p className="mt-4 text-xs text-center text-muted-foreground">
              We typically respond within 4-6 hours during business days.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-foreground/80">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href, external }: { icon: any; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="flex items-center gap-4 bg-card-premium border-gradient rounded-2xl p-4 shadow-card hover:shadow-elegant transition-all hover:-translate-y-0.5">
      <div className="h-12 w-12 rounded-xl bg-gradient-primary/15 border border-primary/20 grid place-items-center text-primary-glow">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-semibold text-sm truncate">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{inner}</a>
  ) : inner;
}
