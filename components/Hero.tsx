import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Naslovna sekcija"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/viber_image_2024-12-18_11-09-58-471.jpg"
          alt="Stambena zgrada u Beogradu – Beo City Upravnik"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1b3a6b]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-52 md:pb-16">
        <div className="inline-block border border-[#c8972a]/60 rounded-full px-5 py-1.5 mb-6">
          <span className="text-[#c8972a] text-[10px] lg:text-xl font-semibold uppercase tracking-wider sm:tracking-widest">
            Profesionalni upravnik zgrade – Beograd
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          <span className="text-[#c8972a]">Beo City Upravnik</span> –
          <br className="hidden md:block" /> profesionalni upravnik zgrade Beograd
        </h1>

        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Vaš pouzdan partner za{" "}
          <strong className="text-white">profesionalno upravljanje zgradama</strong> u Beogradu. Sa
          četiri godine iskustva i{" "}
          <strong className="text-white">preko 700 zadovoljnih klijenata</strong>, pokrivamo sve
          beogradske opštine: Novi Beograd, Zemun, Voždovac, Zvezdaru, Palilulu, Rakovicu, Čukaricu
          i ostale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#kontakt"
            className="bg-[#c8972a] hover:bg-[#e0b04a] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Kontaktirajte nas
          </Link>
          <Link
            href="#usluge"
            className="hidden sm:block border-2 border-white/70 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10"
          >
            Naše usluge
          </Link>
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#122850]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "4+", label: "Godine iskustva" },
            { number: "700+", label: "Zadovoljnih stanara" },
            { number: "24/7", label: "Hitne intervencije" },
            { number: "100%", label: "Transparentnost" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-[#c8972a]">{stat.number}</p>
              <p className="text-white/80 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
