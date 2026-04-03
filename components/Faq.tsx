"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Šta radi profesionalni upravnik zgrade?",
    a: "Profesionalni upravnik zastupa stambenu zajednicu pred svim organima vlasti, komunalnim preduzećima i inspekcijama. Organizuje tekuće i investiciono održavanje zajedničkih delova zgrade, podnosi prijavu za upis u Registar stambenih zajednica, otvara tekući račun, prikuplja ponude za radove i redovno podnosi finansijske izveštaje skupštini stanara. Cilj je da stanari budu rasterećeni administrativnih i tehničkih obaveza.",
  },
  {
    q: "Kako se bira profesionalni upravnik stambene zajednice?",
    a: "Profesionalni upravnik se bira odlukom skupštine stambene zajednice, natpolovičnom većinom glasova suvlasnika. Beo City Upravnik može vam pomoći u celom procesu – od sazivanja skupštine, pripreme dokumentacije, do potpisivanja ugovora o upravljanju. Ceo postupak je transparentan i u skladu sa Zakonom o stanovanju i održavanju zgrada.",
  },
  {
    q: "Da li ste dostupni za hitne intervencije noću i vikendom?",
    a: "Da, dostupni smo 24 sata dnevno, 7 dana u nedelji. Svaka hitna situacija – kvar na instalacijama, prodor vode, problemi sa liftom ili elektro kvarovi – zahteva brzu reakciju. Naš tim je uvek na raspolaganju i reaguje u najkraćem mogućem roku kako bi zaštitili vaš objekat i stanare.",
  },
  {
    q: "Koje delove Beograda pokrivate?",
    a: "Upravljamo stambenim zgradama i poslovnim objektima na celoj teritoriji Beograda: Novi Beograd, Zemun, Voždovac, Zvezdara, Palilula, Rakovica, Čukarica, Savski venac, Stari grad i sve ostale beogradske opštine. Kontaktirajte nas i proverite da li pokrivamo vašu adresu.",
  },
  {
    q: "Kako izgleda finansijsko upravljanje i izveštavanje?",
    a: "Svaka stambena zajednica ima poseban tekući račun. Redovno dostavljamo detaljan finansijski izveštaj o svim prihodima i rashodima – ko je platio, šta je plaćeno i koliko novca ostaje na računu. Potpuna transparentnost je jedan od naših ključnih principa, a skupštini se podnosi godišnji izveštaj o radu.",
  },
  {
    q: "Koliko košta profesionalni upravnik zgrade u Beogradu?",
    a: "Cena profesionalnog upravljanja zavisi od veličine objekta, broja stanova i obima usluga. Kontaktirajte nas za besplatnu procenu i individualizovanu ponudu prilagođenu vašoj zgradi.",
  },
  {
    q: "Da li profesionalni upravnik mora biti registrovan?",
    a: "Da, prema Zakonu o stanovanju i održavanju zgrada, profesionalni upravnik mora biti registrovan. Beo City Upravnik posluje u skladu sa svim zakonskim propisima i upisana je u Registar privrednih subjekata.",
  },
  {
    q: "Kako da angažujemo Beo City Upravnik za našu zgradu?",
    a: "Pozovite nas ili pošaljite email – kontakt podaci su na dnu stranice. Zakazaćemo besplatan obilazak objekta, procenu stanja i sagledavanje potreba vaše stambene zajednice. Nakon toga, dobijate individualnu ponudu prilagođenu vašem objektu. Celokupan administrativni postupak preuzimamo mi.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#c8972a] font-semibold text-sm uppercase tracking-widest">
            Često postavljana pitanja
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mt-2 mb-4">
            Imate pitanja? Imamo odgovore.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Sve što treba da znate o profesionalnom upravljanju stambenom
            zajednicom u Beogradu.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#f4f7fb] transition-colors duration-150"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-[#1b3a6b] text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#c8972a] flex items-center justify-center transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-3 h-3 text-[#c8972a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
