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
          <h2 className="font-nav mb-3">{contact.enquiry.label}</h2>
          <div className="serif-title not-italic space-y-1 text-[15px]">
            <p>
              <a href={`mailto:${contact.enquiry.email}`}>{contact.enquiry.email}</a>
            </p>
            <p>
              <a href={`tel:${contact.enquiry.phone.replace(/[^\d+]/g, "")}`}>
                {contact.enquiry.phone}
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-nav mb-3">{contact.social.label}</h2>
          <p className="serif-title not-italic text-[15px]">{contact.social.handle}</p>
        </section>
      </div>
    </div>
  );
}
