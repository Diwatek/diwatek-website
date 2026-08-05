import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const sections = [
  "About Diwatek",
  "Scope",
  "Information Diwatek May Collect",
  "Sensitive Information",
  "How Information Is Collected",
  "Why Diwatek Uses Information",
  "Bases for Processing",
  "Google, Facebook, Hosting, and Development Services",
  "Sharing and Disclosure",
  "Client Website Data",
  "Retention",
  "Security",
  "Personal Data Incidents",
  "Your Privacy Rights",
  "Exercising Your Rights",
  "Children's Information",
  "Third-Party Links",
  "Changes to This Notice",
  "Privacy Contact",
];

const collectedInformation = [
  "Identity and contact details, including name, position, business or organization, email address, mobile number, Messenger profile, and preferred contact method.",
  "Project information, including business background, website requirements, requested pages and features, branding and design preferences, schedule, budget range, reference websites, domain, hosting, and integration details.",
  "Maintenance information, including the affected website, maintenance plan, requested changes, error details, device and browser information, screenshots, desired completion date, approvals, and account-access requirements.",
  "Content and files supplied for the project, including text, logos, photographs, videos, documents, prices, testimonials, event details, and design assets.",
  "Transaction and business records, including quotations, agreements, payment requests, payment dates, amounts, transaction references, change approvals, maintenance reports, and turnover records.",
  "Technical information, including website address, registrar and hosting details, repository information, DNS configuration, deployment details, browser and device type, IP address, form-submission time, error information, and security-event information.",
  "Communications, including email, Messenger conversations, text messages, project notes, instructions, approvals, revisions, feedback, and support requests.",
];

const collectionMethods = [
  "Directly from you through website forms, Google Forms, email, Messenger, telephone, meetings, agreements, payments, content submissions, and maintenance requests.",
  "From an authorized representative, such as a business owner, employer, project manager, family representative, or event organizer.",
  "From publicly available sources relevant to the inquiry or project, such as an existing website, public business page, directory, or professional profile.",
  "Automatically through hosting, security, form-delivery, email, and website services that generate technical or diagnostic records.",
];

const useReasons = [
  "Respond to inquiries and understand the requested service.",
  "Assess project requirements and prepare recommendations, proposals, or quotations.",
  "Enter into and perform website design, development, maintenance, and support agreements.",
  "Onboard clients, organize project files, confirm contacts, and collect required content and access.",
  "Review and complete maintenance requests, diagnose problems, test changes, and prepare reports.",
  "Issue payment requests, confirm payments, maintain business records, and resolve billing questions.",
  "Communicate project updates, request approvals, schedule meetings, and send renewal reminders.",
  "Protect websites, systems, accounts, clients, users, and service providers against misuse or unauthorized access.",
  "Improve Diwatek's forms, documentation, workflows, and service quality using appropriately limited or anonymized information.",
  "Maintain records needed for contractual, security, dispute-resolution, accounting, tax, or legal purposes.",
];

const processingBases = [
  "Steps requested before entering a service agreement, such as reviewing requirements and preparing a quotation.",
  "Performance of a service agreement, including design, development, deployment, maintenance, support, and billing.",
  "Consent for optional activities such as marketing, meeting recording, or publication of non-public testimonials.",
  "Legitimate business interests, including service security, fraud prevention, recordkeeping, quality improvement, and establishing or defending legal claims, subject to the rights of affected individuals.",
  "Compliance with applicable legal, accounting, tax, court, or regulatory obligations.",
  "Protection of vital interests in an exceptional emergency.",
];

const sharingRecipients = [
  "The relevant client and its authorized representatives.",
  "Diwatek personnel or specifically authorized assistants.",
  "Google, Meta, Cloudflare, Resend, GitHub, hosting, domain, DNS, email, analytics, payment, and other project service providers.",
  "Accountants, legal advisers, or professional consultants when reasonably necessary.",
  "A replacement provider authorized by the client.",
  "Courts, government bodies, regulators, or authorities acting under lawful authority.",
];

const retentionPeriods = [
  "General inquiries that do not become projects: up to 12 months after the last meaningful communication.",
  "Requirements, quotations, and related records for projects that do not proceed: up to 24 months after the quotation expires or the inquiry becomes inactive.",
  "Agreements, approvals, change requests, delivery records, payment records, and important project communications: generally up to 5 years after project completion or termination.",
  "Maintenance agreements, requests, reports, access records, and related approvals: generally up to 5 years after the maintenance relationship ends.",
  "Technical and security logs: according to the applicable provider's settings or the reasonable period needed for troubleshooting, security, and service operation.",
];

const privacyRights = [
  "Be informed about the processing of your personal information.",
  "Access personal information held about you.",
  "Correct inaccurate, incomplete, outdated, false, or misleading information.",
  "Object to certain processing.",
  "Request erasure, removal, or blocking where appropriate.",
  "Receive portable data where applicable.",
  "Withdraw consent for processing based on consent.",
  "File a complaint or seek remedies available under applicable law.",
];

export const metadata: Metadata = {
  title: "Privacy Notice | Diwatek",
  description:
    "Learn how Diwatek collects, uses, stores, shares, protects, retains, and disposes of personal information submitted through its website, forms, and services.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Notice | Diwatek",
    description:
      "How Diwatek handles personal information for inquiries, projects, support, security, and legal purposes.",
    url: "https://diwatek.com/privacy",
    siteName: "Diwatek",
    type: "website",
    images: [
      {
        url: "/brand/cover_photo_fb.png",
        width: 1200,
        height: 630,
        alt: "Diwatek Creative Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Notice | Diwatek",
    description:
      "How Diwatek handles personal information for inquiries, projects, support, security, and legal purposes.",
    images: ["/brand/cover_photo_fb.png"],
  },
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function PrivacySection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={slugify(title)} className="scroll-mt-24 border-t border-[var(--border)] pt-8">
      <h2 className="text-2xl font-bold text-[var(--foreground)]">
        {number}. {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-[var(--muted-foreground)]">
        {children}
      </div>
    </section>
  );
}

function PrivacyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-3 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]">
            <Image
              src="/brand/horizontal_logo_without_tagline.png"
              alt="Diwatek"
              width={220}
              height={60}
              priority
              className="h-10 w-auto dark:hidden"
            />
            <Image
              src="/brand/horizontal_logo_without_tagline_white.png"
              alt="Diwatek"
              width={220}
              height={60}
              priority
              className="hidden h-10 w-auto dark:block"
            />
          </Link>
          <Link
            href="/#contact"
            className="rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
          >
            Contact
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <article className="min-w-0 rounded-md border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Privacy Notice
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl">
              Diwatek Privacy Notice
            </h1>
            <dl className="mt-6 grid gap-3 text-sm text-[var(--muted-foreground)] sm:grid-cols-3">
              <div className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] p-3">
                <dt className="font-semibold text-[var(--foreground)]">Version</dt>
                <dd className="mt-1">1.0</dd>
              </div>
              <div className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] p-3">
                <dt className="font-semibold text-[var(--foreground)]">Effective Date</dt>
                <dd className="mt-1">August 6, 2026</dd>
              </div>
              <div className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] p-3">
                <dt className="font-semibold text-[var(--foreground)]">Last Updated</dt>
                <dd className="mt-1">August 6, 2026</dd>
              </div>
            </dl>

            <div className="mt-8 space-y-4 text-base leading-8 text-[var(--muted-foreground)]">
              <p>
                Diwatek - Creative Technology respects your privacy and handles personal
                information only for legitimate business, project, support, security, and
                legal purposes. This notice explains how Diwatek collects, uses, stores,
                shares, protects, retains, and disposes of personal information obtained
                through the Diwatek website, online forms, client projects, website
                maintenance services, email, Messenger, phone, and related business systems.
              </p>
              <p>
                By submitting information to Diwatek, you acknowledge that you have read
                this Privacy Notice and understand how your information may be handled.
                Where consent is legally required, Diwatek will request it separately and
                for the specific activity concerned.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              <PrivacySection number={1} title="About Diwatek">
                <dl className="grid gap-3 rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] p-4 text-sm sm:grid-cols-2">
                  <div><dt className="font-semibold text-[var(--foreground)]">Business Name</dt><dd>Diwatek - Creative Technology</dd></div>
                  <div><dt className="font-semibold text-[var(--foreground)]">Representative</dt><dd>Shan Marion T. Silveo</dd></div>
                  <div><dt className="font-semibold text-[var(--foreground)]">Website</dt><dd><a href="https://diwatek.com" className="font-semibold text-[var(--primary)] underline">https://diwatek.com</a></dd></div>
                  <div><dt className="font-semibold text-[var(--foreground)]">Facebook</dt><dd><a href="https://facebook.com/diwatek" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--primary)] underline">https://facebook.com/diwatek</a></dd></div>
                  <div><dt className="font-semibold text-[var(--foreground)]">Email</dt><dd><a href="mailto:hello.diwatek@gmail.com" className="font-semibold text-[var(--primary)] underline">hello.diwatek@gmail.com</a></dd></div>
                  <div><dt className="font-semibold text-[var(--foreground)]">Mobile</dt><dd><a href="tel:+639283018626" className="font-semibold text-[var(--primary)] underline">0928 301 8626</a></dd></div>
                  <div><dt className="font-semibold text-[var(--foreground)]">Location</dt><dd>Iloilo City, Philippines</dd></div>
                </dl>
                <p>
                  For the processing described in this notice, Diwatek may act as a
                  personal information controller when it determines why and how personal
                  information is processed. For some client projects, Diwatek may process
                  information only according to the client&apos;s documented instructions, in
                  which case the client may act as the controller and Diwatek as a service
                  provider or personal information processor.
                </p>
              </PrivacySection>

              <PrivacySection number={2} title="Scope">
                <p>
                  This notice applies to prospective, current, and former clients; client
                  representatives; authorized project and maintenance contacts; suppliers and
                  service providers; website visitors; individuals who submit inquiries; and
                  people whose information is included in client-supplied website content.
                </p>
                <p>
                  This notice does not replace the independent privacy policies of Google,
                  Meta or Facebook, GitHub, Cloudflare, Resend, domain registrars, hosting
                  providers, payment providers, or other third-party services.
                </p>
              </PrivacySection>

              <PrivacySection number={3} title="Information Diwatek May Collect">
                <p>Depending on your interaction with Diwatek, the following information may be collected:</p>
                <PrivacyList items={collectedInformation} />
                <p>
                  Diwatek does not need complete card numbers, online-banking passwords,
                  PINs, recovery codes, private keys, or authentication tokens through
                  ordinary website forms, email, or Messenger.
                </p>
              </PrivacySection>

              <PrivacySection number={4} title="Sensitive Information">
                <p>
                  Standard website inquiries, quotations, design projects, and maintenance
                  requests normally do not require sensitive personal information. Do not
                  submit unnecessary health records, government identification numbers, tax
                  records, bank credentials, biometric information, religious or political
                  information, criminal records, or other highly sensitive information.
                </p>
                <p>
                  When higher-risk information is genuinely required for a specific project,
                  Diwatek may require separate authorization, stronger safeguards, or a
                  dedicated data-processing agreement. Unnecessary sensitive information may
                  be removed, restricted, returned, or securely deleted.
                </p>
              </PrivacySection>

              <PrivacySection number={5} title="How Information Is Collected">
                <p>Information may be collected:</p>
                <PrivacyList items={collectionMethods} />
              </PrivacySection>

              <PrivacySection number={6} title="Why Diwatek Uses Information">
                <p>Diwatek may use personal information to:</p>
                <PrivacyList items={useReasons} />
                <p>
                  Project information is not automatically used for promotional marketing.
                  Optional marketing messages will be sent only when an appropriate basis
                  exists, and recipients may request that they stop.
                </p>
              </PrivacySection>

              <PrivacySection number={7} title="Bases for Processing">
                <p>Depending on the activity, processing may be based on:</p>
                <PrivacyList items={processingBases} />
              </PrivacySection>

              <PrivacySection number={8} title="Google, Facebook, Hosting, and Development Services">
                <p>
                  Diwatek may use Google Forms, Sheets, Drive, Docs, and Gmail for project
                  submissions, lead tracking, client records, content collection, agreements,
                  maintenance requests, and communication. Information submitted through
                  Google Forms may be stored in related Google services.
                </p>
                <p>
                  When you communicate through Facebook or Messenger, Meta processes
                  information under its own policies. Diwatek may retain relevant
                  conversations or screenshots to document project instructions and approvals.
                </p>
                <p>
                  The Diwatek website may use Cloudflare for hosting, delivery, and security
                  functions; Cloudflare Turnstile for spam and automated-abuse protection;
                  and Resend or another provider for form-delivery emails. Projects may also
                  use GitHub, domain registrars, DNS providers, hosting platforms, databases,
                  analytics, payment services, or other client-approved integrations.
                </p>
                <p>
                  These independent providers may process limited information needed to
                  perform their services and may operate infrastructure outside the Philippines.
                </p>
              </PrivacySection>

              <PrivacySection number={9} title="Sharing and Disclosure">
                <p>Diwatek does not sell personal information.</p>
                <p>Information may be shared only when reasonably necessary with:</p>
                <PrivacyList items={sharingRecipients} />
                <p>Only information reasonably necessary for the applicable purpose should be shared.</p>
              </PrivacySection>

              <PrivacySection number={10} title="Client Website Data">
                <p>
                  A client may determine what visitor or customer information its own website
                  collects, such as inquiries, bookings, accounts, orders, newsletter
                  subscriptions, event registrations, or support messages.
                </p>
                <p>
                  The client is generally responsible for defining the purpose of collection,
                  providing an appropriate privacy notice, limiting the information requested,
                  deciding retention and access rules, and obtaining any necessary authority.
                  Diwatek will process such information only as reasonably necessary to
                  provide the agreed technical service. A separate data-processing agreement
                  may be required for higher-risk, sensitive, or ongoing processing.
                </p>
                <p>The Diwatek Privacy Notice does not replace a client&apos;s own privacy notice.</p>
              </PrivacySection>

              <PrivacySection number={11} title="Retention">
                <p>
                  Diwatek keeps personal information only for as long as reasonably necessary
                  for the original purpose and relevant contractual, security,
                  dispute-resolution, accounting, tax, or legal requirements.
                </p>
                <p>The intended default periods are:</p>
                <PrivacyList items={retentionPeriods} />
                <p>
                  Information relevant to an active dispute, complaint, security incident,
                  investigation, or legal proceeding may be retained until the matter is
                  resolved. Deleted information may remain temporarily in backups until those
                  backups are overwritten or expire.
                </p>
              </PrivacySection>

              <PrivacySection number={12} title="Security">
                <p>
                  Diwatek aims to use reasonable organizational, physical, and technical
                  safeguards appropriate to the information and risks involved. These may
                  include strong passwords, multi-factor authentication, restricted access,
                  secure cloud platforms, updated software, HTTPS, private repositories,
                  protected environment variables, backups, access reviews, and incident
                  documentation.
                </p>
                <p>
                  No website, cloud service, device, storage system, or communication method
                  can be guaranteed to be completely secure. Do not send passwords, recovery
                  codes, private keys, payment credentials, or other secrets through ordinary
                  forms, email, or Messenger.
                </p>
              </PrivacySection>

              <PrivacySection number={13} title="Personal Data Incidents">
                <p>
                  When Diwatek becomes aware of a suspected loss, unauthorized access,
                  accidental disclosure, compromised account, exposed credential, or other
                  personal data incident, Diwatek will reasonably assess and contain the
                  issue, protect affected systems, preserve relevant evidence, coordinate
                  with relevant clients and providers, take corrective action, and make
                  notifications when required.
                </p>
                <p>
                  Report a suspected incident promptly through{" "}
                  <a href="mailto:hello.diwatek@gmail.com" className="font-semibold text-[var(--primary)] underline">
                    hello.diwatek@gmail.com
                  </a>.
                </p>
              </PrivacySection>

              <PrivacySection number={14} title="Your Privacy Rights">
                <p>Subject to applicable conditions and limitations, you may request to:</p>
                <PrivacyList items={privacyRights} />
                <p>
                  Withdrawing consent does not affect processing that occurred lawfully before
                  withdrawal and does not require deletion when another lawful and necessary
                  basis applies.
                </p>
              </PrivacySection>

              <PrivacySection number={15} title="Exercising Your Rights">
                <p>Send a request to:</p>
                <dl className="grid gap-3 rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] p-4 text-sm sm:grid-cols-2">
                  <div><dt className="font-semibold text-[var(--foreground)]">Privacy Contact</dt><dd>Shan Marion T. Silveo</dd></div>
                  <div><dt className="font-semibold text-[var(--foreground)]">Business</dt><dd>Diwatek - Creative Technology</dd></div>
                  <div><dt className="font-semibold text-[var(--foreground)]">Email</dt><dd><a href="mailto:hello.diwatek@gmail.com?subject=Privacy%20Request" className="font-semibold text-[var(--primary)] underline">hello.diwatek@gmail.com</a></dd></div>
                  <div><dt className="font-semibold text-[var(--foreground)]">Subject</dt><dd>Privacy Request</dd></div>
                  <div><dt className="font-semibold text-[var(--foreground)]">Mobile</dt><dd><a href="tel:+639283018626" className="font-semibold text-[var(--primary)] underline">0928 301 8626</a></dd></div>
                </dl>
                <p>
                  Include your name, contact details, relationship with Diwatek, the project
                  or form involved, the right you wish to exercise, and a clear description
                  of the information concerned. Do not send unnecessary identification
                  documents. Diwatek may request reasonable verification to prevent
                  unauthorized disclosure or deletion.
                </p>
                <p>
                  Some requests may be limited when information remains necessary for
                  contract performance, legal compliance, accounting or tax records,
                  security, fraud prevention, dispute resolution, legal claims, or protection
                  of another person&apos;s rights.
                </p>
              </PrivacySection>

              <PrivacySection number={16} title="Children's Information">
                <p>
                  Diwatek&apos;s general business website and project forms are not intentionally
                  directed toward children. A person below the applicable age of legal
                  capacity should submit contractual or project information through a parent,
                  guardian, or properly authorized adult.
                </p>
                <p>
                  For family, school, birthday, wedding, or event websites involving
                  children, the client must provide appropriate authorization, limit public
                  information, and review location, schedule, contact, image, and safety
                  risks. Diwatek may refuse or remove content when appropriate authority
                  cannot be confirmed.
                </p>
              </PrivacySection>

              <PrivacySection number={17} title="Third-Party Links">
                <p>
                  Diwatek websites and client projects may link to external services.
                  Diwatek does not control the privacy, content, availability, or security
                  practices of independently operated third parties. Review the external
                  provider&apos;s privacy information before submitting personal information.
                </p>
              </PrivacySection>

              <PrivacySection number={18} title="Changes to This Notice">
                <p>
                  Diwatek may update this notice when services, forms, providers, security
                  practices, retention arrangements, or legal requirements change. The
                  current version, effective date, and last updated date will be shown on
                  this page. Material changes may also be communicated through the website,
                  email, Messenger, or another reasonable channel.
                </p>
              </PrivacySection>

              <PrivacySection number={19} title="Privacy Contact">
                <p>For questions, access requests, correction requests, objections, deletion requests, complaints, or suspected incidents, contact:</p>
                <address className="not-italic">
                  <strong className="text-[var(--foreground)]">Shan Marion T. Silveo</strong>
                  <br />
                  <strong className="text-[var(--foreground)]">Diwatek - Creative Technology</strong>
                  <br />
                  Email:{" "}
                  <a href="mailto:hello.diwatek@gmail.com?subject=Privacy%20Request" className="font-semibold text-[var(--primary)] underline">
                    hello.diwatek@gmail.com
                  </a>
                  <br />
                  Mobile:{" "}
                  <a href="tel:+639283018626" className="font-semibold text-[var(--primary)] underline">
                    0928 301 8626
                  </a>
                  <br />
                  Website:{" "}
                  <a href="https://diwatek.com" className="font-semibold text-[var(--primary)] underline">
                    https://diwatek.com
                  </a>
                  <br />
                  Facebook:{" "}
                  <a href="https://facebook.com/diwatek" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--primary)] underline">
                    https://facebook.com/diwatek
                  </a>
                  <br />
                  Location: Iloilo City, Philippines
                </address>
                <p>
                  Use the email subject <strong className="text-[var(--foreground)]">Privacy Request</strong>.
                </p>
              </PrivacySection>
            </div>
          </article>

          <aside className="lg:sticky lg:top-8">
            <nav
              aria-label="Privacy notice sections"
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
                Contents
              </p>
              <ol className="mt-4 space-y-2 text-sm text-[var(--muted-foreground)]">
                {sections.map((section, index) => (
                  <li key={section}>
                    <a
                      href={`#${slugify(section)}`}
                      className="block rounded-sm py-1 transition hover:text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
                    >
                      {index + 1}. {section}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}
