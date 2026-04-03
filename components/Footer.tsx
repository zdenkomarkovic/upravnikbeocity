import Image from "next/image";
import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d2444] text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt={SITE_NAME}
                width={44}
                height={44}
                className="rounded-md"
              />
              <div>
                <p className="font-bold text-sm uppercase tracking-wide">Beo City</p>
                <p className="text-[#c8972a] font-semibold text-xs uppercase tracking-widest">
                  Upravnik
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Vaš pouzdan partner za profesionalno upravljanje zgradama u
              Beogradu.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold uppercase tracking-wide text-sm mb-4 text-[#c8972a]">
              Brze veze
            </h3>
            <ul className="space-y-2">
              {[
                { href: "#o-nama", label: "O nama" },
                { href: "#zasto-mi", label: "Zašto mi?" },
                { href: "#usluge", label: "Usluge" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#c8972a] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold uppercase tracking-wide text-sm mb-4 text-[#c8972a]">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">
                  📞 {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors break-all">
                  ✉️ {CONTACT.email}
                </a>
              </li>
              <li>📍 {CONTACT.address}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <p>© {year} {SITE_NAME}. Sva prava zadržana.</p>
          <p>upravnikbeocity.com</p>
        </div>
      </div>
    </footer>
  );
}
