import { CONTACT, SITE_URL, SITE_NAME } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    description:
      "Profesionalni upravnik stambenih zajednica i zgrada u Beogradu. Upravljanje stambenim objektima, tekuće i investiciono održavanje, zastupanje pred državnim organima, hitne intervencije 24/7.",
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    image: `${SITE_URL}/logo.jpeg`,
    logo: `${SITE_URL}/logo.jpeg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Prvog Maja 42a",
      addressLocality: "Beograd",
      addressRegion: "Beograd",
      postalCode: "11000",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8125,
      longitude: 20.465,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      contactType: "customer service",
      availableLanguage: "Serbian",
areaServed: "RS",
    },
    areaServed: {
      "@type": "City",
      name: "Beograd",
    },
    serviceType: [
      "Upravljanje stambenim zajednicama",
      "Profesionalni upravnik zgrade",
      "Tekuće održavanje zgrade",
      "Investiciono održavanje",
      "Hitne intervencije u zgradi",
      "Finansijsko upravljanje stambenom zajednicom",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge profesionalnog upravnika",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Profesionalno upravljanje stambenom zajednicom",
            description:
              "Upis u Registar stambenih zajednica, otvaranje tekućeg računa, zastupanje pred organima vlasti i komunalnim preduzećima.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tekuće i investiciono održavanje zgrade",
            description:
              "Organizacija i nadzor svih radova na tekućem i investicionom održavanju zajedničkih delova zgrade.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hitne intervencije 24/7",
            description:
              "Brzo reagovanje na hitne situacije u zgradi – kvarovi na instalacijama, prodor vode, elektro kvarovi i dr.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Šta radi profesionalni upravnik zgrade?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Profesionalni upravnik zgrade zastupa stambenu zajednicu, organizuje tekuće i investiciono održavanje, podnosi prijavu za upis u Registar stambenih zajednica, otvara tekući račun, prikuplja ponude za radove, komunicira sa javnim preduzećima i inspekcijama i podnosi finansijske izveštaje skupštini stanara.",
        },
      },
      {
        "@type": "Question",
        name: "Koliko košta profesionalni upravnik zgrade u Beogradu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cena profesionalnog upravljanja zavisi od veličine objekta, broja stanova i obima usluga. Kontaktirajte nas za besplatnu procenu i individualizovanu ponudu prilagođenu vašoj zgradi.",
        },
      },
      {
        "@type": "Question",
        name: "Da li profesionalni upravnik mora biti registrovan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da, prema Zakonu o stanovanju i održavanju zgrada, profesionalni upravnik mora biti registrovan. Beo City Upravnik posluje u skladu sa svim zakonskim propisima i upisana je u Registar privrednih subjekata.",
        },
      },
      {
        "@type": "Question",
        name: "Kako se bira profesionalni upravnik zgrade?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Profesionalni upravnik se bira odlukom skupštine stambene zajednice. Potrebna je natpolovična većina glasova suvlasnika. Beo City Upravnik vam može pomoći u celom procesu – od sazivanja skupštine do potpisivanja ugovora.",
        },
      },
      {
        "@type": "Question",
        name: "Da li ste dostupni za hitne intervencije noću i vikendom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da, Beo City Upravnik je dostupan 24 sata dnevno, 7 dana u nedelji za sve hitne situacije u zgradi. Kvarovi na instalacijama, prodor vode i drugi hitni problemi rešavaju se što je brže moguće.",
        },
      },
      {
        "@type": "Question",
        name: "Koje delove Beograda pokrivate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upravljamo zgradama na celoj teritoriji Beograda – Novi Beograd, Zemun, Voždovac, Zvezdara, Palilula, Rakovica, Čukarica, Savski venac, Stari grad i ostale opštine.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
