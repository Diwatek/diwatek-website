import Image from "next/image";

const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"];

const services = [
  {
    title: "Website Design",
    description: "Clean interface concepts that make your brand feel credible from the first visit.",
  },
  {
    title: "Website Development",
    description: "Responsive, production-ready websites built with performance and maintainability in mind.",
  },
  {
    title: "Landing Pages",
    description: "Focused pages for campaigns, offers, launches, and lead generation.",
  },
  {
    title: "Graphic Design",
    description: "Brand-aligned visuals for digital channels, social media, and business materials.",
  },
  {
    title: "Digital Solutions",
    description: "Practical web tools and digital experiences shaped around real business workflows.",
  },
];

const contactLinks = [
  { label: "09283018626", href: "tel:09283018626" },
  { label: "hello.diwatek@gmail.com", href: "mailto:hello.diwatek@gmail.com" },
  { label: "GitHub: Diwatek", href: "https://github.com/Diwatek" },
  { label: "diwatek.com", href: "https://diwatek.com" },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#071A3A]">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8"
          aria-label="Primary navigation"
        >
          <a href="#home" className="inline-flex items-center" aria-label="Diwatek home">
            <Image
              src="/brand/horizontal_logo_without_tagline.png"
              alt="Diwatek"
              width={176}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-700 transition hover:text-[#2563EB]"
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-md bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 lg:inline-flex"
          >
            Get a Quote
          </a>

          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-slate-200 text-[#071A3A] transition hover:border-[#2563EB] hover:text-[#2563EB] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation menu</span>
              <span aria-hidden="true" className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded bg-current" />
                <span className="block h-0.5 w-5 rounded bg-current" />
                <span className="block h-0.5 w-5 rounded bg-current" />
              </span>
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-md border border-slate-200 bg-white p-3 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block rounded px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#2563EB]"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 block rounded-md bg-[#2563EB] px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Get a Quote
              </a>
            </div>
          </details>
        </nav>
      </header>

      <section id="home" className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <Image
              src="/brand/primary_logo_with_tagline.png"
              alt="Diwatek Creative Technology"
              width={260}
              height={180}
              priority
              className="mb-9 h-auto w-44 sm:w-52"
            />
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
              Creative Technology
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal text-[#071A3A] sm:text-5xl lg:text-6xl">
              Modern websites crafted for growing businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475569]">
              Diwatek creates modern, responsive, and user-friendly websites and digital
              experiences for startups, small businesses, and growing companies that need
              a professional online presence.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-[#2563EB] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
              >
                Get a Quote
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-[#071A3A] transition hover:border-[#2563EB] hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
              >
                View Our Work
              </a>
            </div>
          </div>

          <div className="relative min-h-80 rounded-md border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm">
            <div className="absolute right-6 top-6 h-16 w-16 rounded-md bg-[#22D3EE]" />
            <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full border-[18px] border-[#2563EB]" />
            <div className="relative mt-16 space-y-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
              <div className="h-3 w-28 rounded-full bg-[#071A3A]" />
              <div className="h-3 w-full rounded-full bg-slate-200" />
              <div className="h-3 w-5/6 rounded-full bg-slate-200" />
              <div className="grid grid-cols-3 gap-3 pt-5">
                <div className="h-24 rounded-md bg-[#071A3A]" />
                <div className="h-24 rounded-md bg-[#2563EB]" />
                <div className="h-24 rounded-md bg-[#22D3EE]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#071A3A] sm:text-4xl">
            Focused support for digital growth.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#071A3A] text-white">
                <span aria-hidden="true" className="h-4 w-4 rounded-sm border-2 border-[#22D3EE]" />
                <span className="sr-only">Service {index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#071A3A]">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#475569]">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
            Portfolio
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[#071A3A] sm:text-4xl">
            Thoughtful digital experiences, shaped for the businesses behind them.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#475569]">
            Diwatek partners with teams that need websites and brand systems that are
            clear, responsive, and easy for customers to trust.
          </p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <h2 className="text-3xl font-bold text-[#071A3A] sm:text-4xl">About Diwatek</h2>
          <p className="text-lg leading-8 text-[#475569]">
            Diwatek is a creative technology brand helping startups, small businesses,
            and growing companies establish a professional online presence through
            purposeful design, reliable development, and practical digital solutions.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-[#071A3A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#22D3EE]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Ready to build a sharper online presence?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Start with a conversation about your goals, audience, and the kind of
              website your business needs next.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md border border-white/15 bg-white/5 p-4 text-sm font-semibold text-white transition hover:border-[#22D3EE] hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#04122A] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Image
              src="/brand/horizontal_logo_without_tagline_white.png"
              alt="Diwatek"
              width={176}
              height={48}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-slate-300">© {year} Diwatek. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-300">
            <a className="transition hover:text-white" href="https://facebook.com/Diwatek">Facebook</a>
            <a className="transition hover:text-white" href="https://github.com/Diwatek">GitHub</a>
            <a className="transition hover:text-white" href="mailto:hello.diwatek@gmail.com">Email</a>
            <a className="transition hover:text-white" href="https://diwatek.com">diwatek.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
