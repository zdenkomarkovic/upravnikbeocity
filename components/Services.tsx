const services = [
  {
    title: "Upis u Registar stambenih zajednica",
    desc: "Podnošenje prijave i vođenje celokupnog postupka upisa vaše stambene zajednice u zakonski propisani registar.",
  },
  {
    title: "Otvaranje tekućeg računa",
    desc: "Otvaramo namenski tekući račun stambene zajednice i upravljamo sredstvima u skladu sa zakonom i odlukama skupštine.",
  },
  {
    title: "Zastupanje stambene zajednice",
    desc: "Predstavljamo i zastupamo stambenu zajednicu pred svim nadležnim organima, komunalnim preduzećima i trećim licima.",
  },
  {
    title: "Godišnji plan održavanja",
    desc: "Priprema godišnjeg plana održavanja zgrade i praćenje realizacije svih radova po usvajanju odluke od strane skupštine stanara.",
  },
  {
    title: "Izvršavanje odluka skupštine",
    desc: "Sve odluke stambene zajednice izvršavamo blagovremeno i u skladu sa Zakonom o stanovanju i održavanju zgrada.",
  },
  {
    title: "Organizacija hitnih intervencija",
    desc: "Brza organizacija radova na otklanjanju hitnih kvarova i opasnih situacija koje ugrožavaju stanare ili objekat.",
  },
  {
    title: "Investicioni radovi u zgradi",
    desc: "Prikupljanje ponuda, odabir izvođača i organizacija investicionih radova – fasada, krov, lift, instalacije i dr.",
  },
  {
    title: "Tekuće održavanje zgrade",
    desc: "Organizacija redovnih radova na zajedničkim delovima zgrade: ulazi, hodnici, stepenišno osvetljenje, dvorište i dr.",
  },
  {
    title: "Komunikacija sa državnim organima",
    desc: "Rešavamo sporove i komuniciramo sa javnim preduzećima, inspekcijama, komunalnom policijom i svim državnim organima.",
  },
  {
    title: "Upravljanje finansijama zajednice",
    desc: "Po odluci skupštine raspolažemo sredstvima sa računa i vodimo urednu finansijsku evidenciju svih transakcija.",
  },
  {
    title: "Redovni finansijski izveštaji",
    desc: "Skupštini stambene zajednice redovno podnosimo detaljan izveštaj o radu i sveobuhvatan finansijski izveštaj.",
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-20 bg-[#1b3a6b]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#c8972a] font-semibold text-sm uppercase tracking-widest">
            Šta nudimo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-5">
            Usluge profesionalnog upravnika zgrade
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
            Preuzimamo sve zakonske i operativne obaveze kako biste se stanari
            mogli fokusirati na ono što je njima zaista važno.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-2 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-5 transition-colors duration-200"
            >
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-[#c8972a] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug">
                  {service.title}
                </h3>
              </div>
              <p className="text-white/60 text-xs leading-relaxed pl-9">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-white/80 text-lg mb-2">
            Učinite prvi korak ka bezbrižnom stanovanju u vašoj zgradi.
          </p>
          <p className="text-white/55 text-sm mb-6">
            Besplatna procena i ponuda za vašu stambenu zajednicu.
          </p>
          <a
            href="#kontakt"
            className="inline-block bg-[#c8972a] hover:bg-[#e0b04a] text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Zatražite besplatnu ponudu
          </a>
        </div>
      </div>
    </section>
  );
}
