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

const WHATSAPP = "9721510913";
const EMAIL = "inzamamsiddiqui0018@gmail.com";

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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="underline-yellow">Let's Build</span>
            <br />
            <span className="text-gradient-primary">Something Amazing</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Ready to start your next project? Get in touch and let's discuss how we
            can transform your ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left info */}
          <div>
            <p className="text-primary font-medium mb-4">✦ Your vision, our expertise ✨</p>

            <div className="bg-gradient-to-br from-accent/40 to-accent/10 border border-primary/15 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-card flex items-center justify-center text-primary">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Quick Response Guarantee</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    We respond within 24 hours • Free initial consultation
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <ContactRow icon={Mail} label="Email us" value={EMAIL} href={`mailto:${EMAIL}`} color="from-purple-400 to-indigo-500" />
              <ContactRow icon={Phone} label="Call / WhatsApp us" value={`+91 ${WHATSAPP}`} href={`tel:+91${WHATSAPP}`} color="from-amber-400 to-orange-400" />
              <ContactRow icon={MapPin} label="Visit us" value="India — Remote-first agency" color="from-rose-400 to-pink-500" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/91${WHATSAPP}?text=Hi%20Dewtronai%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-full font-semibold shadow-elegant hover:opacity-95 transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 border border-primary/30 px-5 py-3 rounded-full font-semibold hover:bg-accent/40 transition"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={onSubmit} className="bg-card rounded-2xl p-8 shadow-elegant border border-primary/10">
            <span className="inline-block text-xs bg-accent/60 text-primary px-3 py-1 rounded-full mb-4">
              📩 Project Inquiry
            </span>
            <h3 className="text-2xl font-bold">Send us a message</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Fill out the form and we'll get back to you ASAP
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <Field label="Full Name *">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </Field>
              <Field label="Email Address *">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </Field>
            </div>

            <Field label="Company (Optional)" className="mt-4">
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Your Company"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </Field>

            <Field label="Your Message *" className="mt-4">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project, timeline, and budget..."
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold shadow-elegant hover:opacity-95 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
            <p className="mt-4 text-xs text-center text-muted-foreground">
              ⚡ We typically respond within 4-6 hours during business days
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
      <span className="text-sm font-medium">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href, color }: { icon: any; label: string; value: string; href?: string; color: string }) {
  const inner = (
    <div className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-card hover:shadow-elegant transition-shadow">
      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-semibold text-sm">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
