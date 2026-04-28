import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dewtronai — Premium Web Agency | Web, App & UI/UX Development" },
      {
        name: "description",
        content:
          "Dewtronai builds high-performance websites, apps, and platforms. Strategy, design, and engineering aligned to scale your business.",
      },
      { property: "og:title", content: "Dewtronai — Build Without Limits" },
      {
        property: "og:description",
        content:
          "Premium web agency creating high-performance digital solutions. MERN stack experts, modern UI/UX, scalable architecture.",
      },
    ],
  }),
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChoose />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
