import { contact } from "@/content/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Primal Construction and Consulting",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[640px] px-6 pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="space-y-12">
        <section>
          <h2 className="font-nav mb-3">{contact.studio.label}</h2>
          <div className="serif-title not-italic space-y-1 text-[15px]">
            {contact.studio.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-nav mb-3">{contact.enquiry.label}</h2>
          <p className="serif-title not-italic text-[15px]">
            <a href={`mailto:${contact.enquiry.email}`}>{contact.enquiry.email}</a>
          </p>
        </section>

        <section>
          <h2 className="font-nav mb-3">{contact.social.label}</h2>
          <p className="serif-title not-italic text-[15px]">{contact.social.handle}</p>
        </section>

        <section className="pt-6">
          <h2 className="font-nav mb-3">{contact.joinUs.label}</h2>
          <div className="serif-title not-italic space-y-2 text-[15px]">
            {contact.joinUs.body.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <p>
              <a
                href={`mailto:${contact.joinUs.contactEmail}`}
                className="italic underline-offset-2 hover:underline"
              >
                {contact.joinUs.contactEmail}
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
