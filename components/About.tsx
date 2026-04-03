import Image from "next/image";

export default function About() {
  return (
    <section id="o-nama" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/viber_image_2024-12-18_11-09-58-471.jpg"
                alt="Tim Beo City Upravnik – profesionalni upravnici zgrada Beograd"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <Image
                src="/1.png"
                alt="Stambena zgrada kojom upravlja Beo City Upravnik"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <span className="text-[#c8972a] font-semibold text-sm uppercase tracking-widest">
              Ko smo mi?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mt-2 mb-6 leading-tight">
              Profesionalni upravnik zgrade <br />kome možete verovati
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              <strong className="text-[#1b3a6b]">Beo City Upravnik</strong> je
              preduzeće specijalizovano za profesionalno upravljanje stambenim
              zajednicama i objektima na teritoriji Beograda – od ulaza i lifta
              do krova, fasade i instalacija.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              Naš tim čini sklop iskustva starijih kolega i entuzijazma mlađih
              stručnjaka. Svaki objekat tretiramo individualno, a poslujemo u
              skladu sa{" "}
              <strong className="text-[#1b3a6b]">
                Zakonom o stanovanju i održavanju zgrada
              </strong>
              . Cilj nam je siguran i bezbedni objekat u kome su svi stanari
              zadovoljni, a problemi se rešavaju{" "}
              <strong className="text-[#1b3a6b]">brzo i efikasno</strong>.
            </p>

            <div className="border-l-4 border-[#c8972a] pl-5 italic text-gray-700">
              &ldquo;Poverite nam upravljanje – Beo City Upravnik brine o vašoj
              zgradi kao o svojoj!&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
