import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_SECRET_KEY!,
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  const { name, email, phone, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Ime, email i poruka su obavezni." },
      { status: 422 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Email adresa nije ispravna." },
      { status: 422 }
    );
  }

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SITE_MAIL_SENDER!,
            Name: "Beo City Upravnik – Kontakt forma",
          },
          To: [
            {
              Email: process.env.SITE_MAIL_RECEIVER!,
              Name: "Beo City Upravnik",
            },
          ],
          ReplyTo: {
            Email: email.trim(),
            Name: name.trim(),
          },
          Subject: `Nova poruka sa sajta – ${name.trim()}`,
          HTMLPart: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f4f7fb;border-radius:12px;">
              <div style="background:#1b3a6b;padding:24px 28px;border-radius:8px 8px 0 0;">
                <h2 style="color:#fff;margin:0;font-size:20px;">Nova poruka sa sajta</h2>
                <p style="color:#c8972a;margin:4px 0 0;font-size:13px;">upravnikbeocity.com – kontakt forma</p>
              </div>
              <div style="background:#fff;padding:28px;border-radius:0 0 8px 8px;border:1px solid #e0e7ef;border-top:none;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;width:120px;">Ime i prezime</td>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#1a1a2e;font-weight:600;">${name.trim()}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;">Email</td>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;"><a href="mailto:${email.trim()}" style="color:#1b3a6b;">${email.trim()}</a></td>
                  </tr>
                  ${
                    phone?.trim()
                      ? `<tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;">Telefon</td>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#1a1a2e;">${phone.trim()}</td>
                  </tr>`
                      : ""
                  }
                  <tr>
                    <td style="padding:14px 0 0;color:#888;font-size:13px;vertical-align:top;">Poruka</td>
                    <td style="padding:14px 0 0;color:#1a1a2e;line-height:1.6;">${message.trim().replace(/\n/g, "<br>")}</td>
                  </tr>
                </table>
              </div>
              <p style="color:#aaa;font-size:11px;text-align:center;margin-top:16px;">Poruka poslata sa upravnikbeocity.com</p>
            </div>
          `,
          TextPart: `Nova poruka sa sajta\n\nIme: ${name.trim()}\nEmail: ${email.trim()}${phone?.trim() ? `\nTelefon: ${phone.trim()}` : ""}\n\nPoruka:\n${message.trim()}`,
        },
      ],
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Mailjet error:", err);
    return NextResponse.json(
      { error: "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite direktno." },
      { status: 500 }
    );
  }
}
