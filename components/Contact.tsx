import { CONTACT } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-[#f4f7fb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#c8972a] font-semibold text-sm uppercase tracking-widest">
            Stupite u kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mt-2 mb-4">
            Kontaktirajte nas danas
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Zakazaćemo besplatan obilazak objekta i procenu stanja vaše
            stambene zajednice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left – contact info + map */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-7 shadow-sm flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1b3a6b] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1b3a6b] mb-1">Telefon / Viber</p>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-[#c8972a] font-semibold text-lg hover:underline"
                >
                  {CONTACT.phoneDisplay}
                </a>
                <p className="text-gray-500 text-sm mt-1">
                  Dostupni za hitne intervencije 24 sata / 7 dana u nedelji
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1b3a6b] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1b3a6b] mb-1">Email adresa</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[#c8972a] font-semibold hover:underline break-all"
                >
                  {CONTACT.email}
                </a>
                <p className="text-gray-500 text-sm mt-1">
                  Odgovaramo u roku od 24 sata
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1b3a6b] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1b3a6b] mb-1">Adresa</p>
                <address className="not-italic text-gray-700">
                  <span itemProp="streetAddress">Prvog Maja 42a</span>,{" "}
                  <span itemProp="addressLocality">Beograd</span>,{" "}
                  <span itemProp="addressCountry">Srbija</span>
                </address>
                <p className="text-gray-500 text-sm mt-1">
                  Radno vreme: pon–pet 08:00–17:00
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm h-52">
              <iframe
                title="Lokacija Beo City Upravnik – Prvog Maja 42a Beograd"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.5!2d20.4650!3d44.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ4JzQ1LjAiTiAyMMKwMjcnNTQuMCJF!5e0!3m2!1ssr!2srs!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "200px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right – contact form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
