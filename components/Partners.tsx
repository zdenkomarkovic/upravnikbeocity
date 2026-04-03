import Image from "next/image";

const partners = [
  { label: "Serviseri i majstori", icon: "🔧" },
  { label: "Pravnici i advokati", icon: "⚖️" },
  { label: "Komunalna preduzeća", icon: "🏢" },
  { label: "Elektro serviseri", icon: "⚡" },
  { label: "Vodoinstalaterske firme", icon: "🚿" },
  { label: "Građevinske firme", icon: "👷" },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square hidden md:block">
            <Image
              src="/ghfg.png"
              alt="Saradnja sa partnerima – profesionalno upravljanje zgradom Beograd"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1b3a6b]/50 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <span className="text-[#c8972a] font-semibold text-sm uppercase tracking-widest">
              Mreža pouzdanih partnera
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mt-2 mb-5 leading-tight">
              Saradnja je ključ uspeha!
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Radimo sa proverenim serviserima, majstorima, pravnicima i
              stručnjacima koji svakodnevno učestvuju u životu zgrada kojima
              upravljamo. Zahvaljujući ovoj mreži garantujemo{" "}
              <strong className="text-[#1b3a6b]">
                brzu reakciju i kvalitetno izvođenje radova
              </strong>{" "}
              po konkurentnim cenama.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {partners.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-3 bg-[#f4f7fb] rounded-xl px-4 py-3"
                >
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-sm font-semibold text-[#1b3a6b]">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
