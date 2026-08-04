import {
  BriefcaseBusiness,
  Code2,
  LayoutTemplate,
  Lightbulb,
  Mail,
  MessageCircle,
  Palette,
  PartyPopper,
  PenTool,
  Phone,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import { ContactForm } from "./contact-form";

const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"];

const services = [
  {
    title: "Website Design",
    description: "Clean interface concepts that make your brand feel credible from the first visit.",
    Icon: Palette,
  },
  {
    title: "Website Development",
    description: "Responsive, production-ready websites built with performance and maintainability in mind.",
    Icon: Code2,
  },
  {
    title: "Landing Pages",
    description: "Focused pages for campaigns, offers, launches, and lead generation.",
    Icon: LayoutTemplate,
  },
  {
    title: "Graphic Design",
    description: "Brand-aligned visuals for digital channels, social media, and business materials.",
    Icon: PenTool,
  },
  {
    title: "Digital Solutions",
    description: "Practical web tools and digital experiences shaped around real business workflows.",
    Icon: Lightbulb,
  },
];

type Project = {
  title: string;
  category: string;
  status: "Live Project" | "Live Demo" | "Coming Soon";
  disclosure?: string;
  description: string;
  technologies: string[];
  href?: string;
  buttonLabel: string;
  image: string;
  imageAlt?: string;
  external?: boolean;
  disabled?: boolean;
};

const projects: Project[] = [
  {
    title: "Shan Marion T. Silveo — Personal Portfolio",
    category: "Website Design & Development",
    status: "Live Project",
    description:
      "A responsive personal portfolio presenting professional experience, selected projects, technical skills, an editable CV, and contact information.",
    technologies: ["Next.js", "JavaScript", "Chakra UI", "Vercel"],
    href: "https://shanmarionsilveo.diwatek.com",
    buttonLabel: "View Live Site",
    image: "/portfolio/personal-portfolio-preview.webp",
    imageAlt: "Shan Marion T. Silveo personal portfolio website preview",
    external: true,
  },
  {
    title: "Construction Business Website",
    category: "Business Website Concept",
    status: "Live Demo",
    disclosure: "Independent Concept Project",
    description:
      "A responsive construction-business concept featuring services, project case studies, company information, and a design-only inquiry experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Workers"],
    href: "https://construction.diwatek.com",
    buttonLabel: "View Live Demo",
    image: "/portfolio/construction-business-live-preview.webp",
    imageAlt: "Crestline Buildworks construction business website preview",
    external: true,
  },
  {
    title: "Cafe Website",
    category: "Cafe Website Concept",
    status: "Coming Soon",
    description:
      "A warm and inviting cafe website concept designed to present the menu, signature drinks, shop atmosphere, location information, opening hours, and customer contact options.",
    technologies: [],
    buttonLabel: "Coming Soon",
    image: "/portfolio/cafe-website-preview.webp",
    imageAlt: "Cafe website concept preview",
    disabled: true,
  },
  {
    title: "Restaurant Website",
    category: "Restaurant Website Concept",
    status: "Coming Soon",
    description:
      "A modern restaurant website concept planned for presenting food menus, featured dishes, dining information, restaurant atmosphere, contact details, and reservation options.",
    technologies: [],
    buttonLabel: "Coming Soon",
    image: "/portfolio/restaurant-website-preview.webp",
    imageAlt: "Restaurant website concept preview",
    disabled: true,
  },
  {
    title: "Pet Shop & Grooming Website",
    category: "Pet Care Website Concept",
    status: "Coming Soon",
    description:
      "A friendly pet-care website concept planned for presenting pet supplies, grooming services, service packages, store information, and appointment inquiry options.",
    technologies: [],
    buttonLabel: "Coming Soon",
    image: "/portfolio/pet-grooming-website-preview.webp",
    imageAlt: "Pet shop and grooming website concept preview",
    disabled: true,
  },
  {
    title: "Vehicle Dealership Website",
    category: "Automotive Website Concept",
    status: "Coming Soon",
    description:
      "A professional vehicle-dealership website concept planned for presenting available vehicles, specifications, pricing information, financing guidance, seller details, and inquiry options.",
    technologies: [],
    buttonLabel: "Coming Soon",
    image: "/portfolio/vehicle-dealership-preview.webp",
    imageAlt: "Vehicle dealership website concept preview",
    disabled: true,
  },
];

function getStatusBadgeClass(status: Project["status"]) {
  if (status === "Live Demo") {
    return "border-emerald-300 bg-emerald-50 text-emerald-900";
  }

  if (status === "Coming Soon") {
    return "border-slate-300 bg-slate-100 text-slate-700";
  }

  return "border-[#22D3EE]/50 bg-[#22D3EE]/10 text-[#071A3A]";
}
const audienceCards = [
  {
    title: "For Businesses",
    description:
      "Websites and digital materials for startups, small businesses, professionals, and growing brands.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "For Individuals",
    description: "Personal portfolios, resume websites, creator pages, and custom personal projects.",
    Icon: UserRound,
  },
  {
    title: "For Special Occasions",
    description:
      "Wedding websites, birthday pages, digital invitations, event announcements, and RSVP pages.",
    Icon: PartyPopper,
  },
];

const contactMethods = [
  {
    label: "Phone",
    value: "09283018626",
    href: "tel:+639283018626",
    Icon: Phone,
  },
  {
    label: "Email",
    value: "hello.diwatek@gmail.com",
    href: "mailto:hello.diwatek@gmail.com",
    Icon: Mail,
  },
  {
    label: "Facebook",
    value: "Diwatek",
    href: "https://www.facebook.com/people/Diwatek/61592484133450/",
    Icon: MessageCircle,
    external: true,
  },
  {
    label: "GitHub",
    value: "Diwatek",
    href: "https://github.com/Diwatek",
    Icon: Code2,
    external: true,
  },
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
            <span className="relative block h-10 w-44 overflow-hidden sm:h-11 sm:w-48">
              <Image
                src="/brand/horizontal_logo_without_tagline.png"
                alt="Diwatek"
                width={1536}
                height={1024}
                priority
                className="absolute left-[-48px] top-[-58px] h-auto w-[248px] max-w-none sm:left-[-52px] sm:top-[-64px] sm:w-[270px]"
              />
            </span>
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
            <div className="relative mb-12 block h-[74px] w-64 overflow-hidden sm:mb-14 sm:h-20 sm:w-72">
              <Image
                src="/brand/primary_logo_with_tagline.png"
                alt="Diwatek Creative Technology"
                width={1536}
                height={1024}
                priority
                className="absolute left-[-66px] top-[-90px] h-auto w-[398px] max-w-none sm:left-[-74px] sm:top-[-101px] sm:w-[445px]"
              />
            </div>
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
        <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="group h-full rounded-md border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#2563EB]/60 hover:shadow-md"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#071A3A] text-[#22D3EE] transition duration-200 group-hover:bg-[#2563EB] group-hover:text-white">
                <service.Icon aria-hidden="true" size={24} strokeWidth={1.8} />
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
            Practical websites and digital tools.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#475569]">
            A selection of websites and digital tools designed to solve practical
            business needs through clear interfaces, responsive development, and
            thoughtful design.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#2563EB]/60 hover:shadow-md"
              >
                <div className="aspect-video border-b border-slate-200 bg-[#F8FAFC] p-5">
                  <div className="relative h-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-[#2563EB]">{project.category}</p>
                    <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${getStatusBadgeClass(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-[#071A3A]">{project.title}</h3>
                  {project.disclosure ? (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {project.disclosure}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm leading-6 text-[#475569]">{project.description}</p>

                  {project.technologies.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-slate-200 bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-[#475569]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-auto pt-6">
                    {project.href ? (
                      <a
                        href={project.href}
                        target={project.external ? "_blank" : undefined}
                        rel={project.external ? "noopener noreferrer" : undefined}
                        className="inline-flex w-full items-center justify-center rounded-md bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
                      >
                        {project.buttonLabel}
                        {project.external ? <span className="sr-only"> opens in a new tab</span> : null}
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled={project.disabled}
                        className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-md border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-semibold text-[#475569]"
                      >
                        {project.buttonLabel}
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
              About Diwatek
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#071A3A] sm:text-4xl">
              Creative digital work, built around your goals.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#475569]">
            <p>
              Diwatek is an independent freelance creative technology practice focused on
              creating modern websites, visual designs, and practical digital experiences.
            </p>
            <p>
              We help startups, newly established businesses, and small organizations build
              a professional online presence without the complexity and cost of working with
              a large agency. Each project is handled directly, collaboratively, and
              according to the client&apos;s actual needs.
            </p>
            <p>
              Our work is not limited to businesses. Diwatek can also create personal
              portfolio websites, event pages, birthday and wedding websites, invitations,
              announcements, and other custom digital experiences for individuals and
              special occasions.
            </p>
            <p className="font-semibold text-[#071A3A]">
              Whether you are launching a business, showcasing your work, or preparing for
              an important event, Diwatek can help turn your idea into a clear and
              memorable online experience.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {audienceCards.map((card) => (
            <article
              key={card.title}
              className="rounded-md border border-slate-200 bg-white/80 p-5 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#F8FAFC] text-[#2563EB] ring-1 ring-slate-200">
                <card.Icon aria-hidden="true" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-semibold text-[#071A3A]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                How We Work
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#071A3A] sm:text-3xl">
                Professional websites without unnecessary complexity.
              </h3>
            </div>

            <div className="space-y-4 text-base leading-7 text-[#475569]">
              <p>
                Diwatek focuses on clean design, responsive frontend development, and
                carefully selected existing tools. By keeping projects focused and
                avoiding unnecessary custom systems, we can provide a professional online
                presence at a more accessible cost than a large agency.
              </p>
              <p>
                Clients can begin with the pages and features they currently need, then
                expand the website later as their goals and requirements grow. Every
                project is quoted according to its actual scope, design, content,
                functionality, and maintenance requirements.
              </p>
              <p className="rounded-md border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm leading-6 text-[#071A3A]">
                Projects requiring custom databases, user accounts, payment processing,
                business-system integrations, sensitive-data processing, or other advanced
                backend functionality are assessed separately and may be referred to or
                completed with an approved technology partner.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-md border border-slate-200 bg-[#F8FAFC] p-4">
              <h4 className="font-semibold text-[#071A3A]">Focused Scope</h4>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                Start with the pages and functionality that matter most.
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-[#F8FAFC] p-4">
              <h4 className="font-semibold text-[#071A3A]">Direct Collaboration</h4>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                Communicate directly with the person designing and building the project.
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-[#F8FAFC] p-4">
              <h4 className="font-semibold text-[#071A3A]">Flexible Growth</h4>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                Add new pages and features as the website and organization grow.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 rounded-md border border-[#22D3EE]/40 bg-[#22D3EE]/10 px-5 py-4 text-sm font-medium leading-6 text-[#071A3A]">
          Independent and project-based: You communicate directly with the person working
          on your project, allowing for a more personal, flexible, and focused process.
        </p>
      </section>

      <section id="contact" className="bg-[#071A3A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#22D3EE]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Let&apos;s talk about your project.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Tell us what you would like to build, who it is for, and what you
              hope to achieve. We will review your inquiry and get back to you
              with the recommended next steps.
            </p>

            <div className="mt-8 grid gap-4">
              {contactMethods.map((method) => (
                <a
                  key={method.href}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-md border border-white/15 bg-white/5 p-4 transition hover:border-[#22D3EE] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#071A3A]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#22D3EE] transition group-hover:bg-[#2563EB] group-hover:text-white">
                    <method.Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-300">
                      {method.label}
                    </span>
                    <span className="mt-1 block font-semibold text-white">
                      {method.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
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
            <p className="mt-4 text-sm text-slate-300">&copy; {year} Diwatek. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-300">
            <a className="transition hover:text-white" href="https://www.facebook.com/people/Diwatek/61592484133450/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="transition hover:text-white" href="https://github.com/Diwatek" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="transition hover:text-white" href="mailto:hello.diwatek@gmail.com">Email</a>
            <a className="transition hover:text-white" href="tel:+639283018626">Phone</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
