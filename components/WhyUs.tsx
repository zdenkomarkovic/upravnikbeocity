import Image from "next/image";

const reasons = [
  {
    icon: "🏆",
    title: "Dugogodišnje iskustvo",
    desc: "Više od četiri godine upravljanja stambenim zajednicama u Beogradu. Poznajemo zakone, procedure i svakodnevne izazove zgrada.",
  },
  {
    icon: "⚡",
    title: "Brzo i efikasno rešavanje problema",
    desc: "Kvarovi na instalacijama, prodor vode, problemi sa liftom – rešavamo bez odlaganja. Brzina reakcije štiti vrednost vaše imovine.",
  },
  {
    icon: "📊",
    title: "Potpuna finansijska transparentnost",
    desc: "Redovan finansijski izveštaj o svim prihodima i rashodima. Svaki trošak je dokumentovan – uvek znate gde odlazi novac.",
  },
  {
    icon: "🚨",
    title: "Hitne intervencije 24/7",
    desc: "Dostupni smo noću, vikendom i tokom praznika. Hitne situacije ne mogu čekati – reagujemo što je brže moguće.",
  },
];

export default function WhyUs() {
  return (
    <section id="zasto-mi" className="py-20 bg-[#f4f7fb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="text-[#c8972a] font-semibold text-sm uppercase tracking-widest">
              Zašto izabrati nas?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mt-2 mb-8 leading-tight">
              Vaša zgrada zaslužuje <br />
              <span className="text-[#c8972a]">profesionalnog upravnika</span>
            </h2>

            <div className="space-y-5">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="flex gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-3xl flex-shrink-0">{r.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#1b3a6b] mb-1.5">{r.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] hidden md:block">
            <Image
              src="/viber_image_2024-12-18_11-08-59-073.jpg"
              alt="Profesionalni upravnik zgrade Beograd – Beo City Upravnik"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a6b]/65 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-2xl font-bold mb-2">Saradnja je ključ uspeha!</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Radimo sa pouzdanim partnerima – serviserima, majstorima i
                pravnicima koji svakodnevno učestvuju u životu zgrade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
