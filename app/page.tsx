import { buildMetadata } from "@/lib/metadata";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Profesionalni upravnik zgrade Beograd",
  description:
    "Beo City Upravnik – profesionalni upravnik stambenih zajednica u Beogradu. Tekuće održavanje, hitne intervencije 24/7, više od 700 zadovoljnih klijenata. Besplatna ponuda.",
  url: "https://upravnikbeocity.com",
});

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Partners />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
