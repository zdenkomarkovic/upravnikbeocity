import Image from "next/image";
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
  image: "/viber_image_2024-12-18_11-09-58-471.jpg",
});

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="w-full">
          <Image
            src="/beocity.PNG"
            alt="Beo City Upravnik – tim profesionalnih upravnika zgrada Beograd"
            width={1920}
            height={800}
            className="w-full h-auto"
          />
        </div>
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
