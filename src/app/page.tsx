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
import { ThemeToggle } from "@/components/theme-toggle";
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
    title: "Wedding & Events Website",
    category: "Event Website Concept",
    status: "Coming Soon",
    description:
      "An elegant event website concept planned for presenting wedding details, birthday celebrations, event schedules, venues, photo galleries, guest information, and RSVP interfaces.",
    technologies: [],
    buttonLabel: "Coming Soon",
    image: "/portfolio/wedding-events-website-preview.webp",
    imageAlt: "Wedding and events website concept preview",
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
    return "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-200";
  }

  if (status === "Coming Soon") {
    return "border-[var(--strong-border)] bg-[var(--muted)] text-[var(--muted-foreground)]";
  }

  return "border-[var(--accent)]/50 bg-[var(--accent)]/10 text-[var(--foreground)]";
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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur">
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
                className="absolute left-[-48px] top-[-58px] h-auto w-[248px] max-w-none dark:hidden sm:left-[-52px] sm:top-[-64px] sm:w-[270px]"
              />
              <Image
                src="/brand/horizontal_logo_without_tagline_white.png"
                alt=""
                width={1536}
                height={1024}
                priority
                aria-hidden="true"
                className="absolute left-[-48px] top-[-58px] hidden h-auto w-[248px] max-w-none dark:block sm:left-[-52px] sm:top-[-64px] sm:w-[270px]"
              />
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-[var(--muted-foreground)] transition hover:text-[var(--primary)]"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-md bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              Get a Quote
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
          <details className="relative">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-[var(--border)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation menu</span>
              <span aria-hidden="true" className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded bg-current" />
                <span className="block h-0.5 w-5 rounded bg-current" />
                <span className="block h-0.5 w-5 rounded bg-current" />
              </span>
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-md border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block rounded px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] transition hover:bg-[var(--surface-elevated)] hover:text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 block rounded-md bg-[var(--primary)] px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              >
                Get a Quote
              </a>
            </div>
          </details>
          </div>
        </nav>
      </header>

      <section id="home" className="overflow-hidden bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="min-w-0">
            <div className="relative mb-12 block h-[74px] w-64 overflow-hidden sm:mb-14 sm:h-20 sm:w-72">
              <Image
                src="/brand/primary_logo_with_tagline.png"
                alt="Diwatek Creative Technology"
                width={1536}
                height={1024}
                priority
                className="absolute left-[-66px] top-[-90px] h-auto w-[398px] max-w-none dark:hidden sm:left-[-74px] sm:top-[-101px] sm:w-[445px]"
              />
              <Image
                src="/brand/primary_logo_with_tagline_white.png"
                alt=""
                width={1536}
                height={1024}
                priority
                aria-hidden="true"
                className="absolute left-[-66px] top-[-90px] hidden h-auto w-[398px] max-w-none dark:block sm:left-[-74px] sm:top-[-101px] sm:w-[445px]"
              />
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Modern websites crafted for growing businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
              Diwatek creates modern, responsive, and user-friendly websites and digital
              experiences for startups, small businesses, and growing companies that need
              a professional online presence.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              >
                Get a Quote
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-md border border-[var(--strong-border)] bg-[var(--surface)] px-6 py-3 text-base font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              >
                View Our Work
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] shadow-sm sm:aspect-[3/2] lg:aspect-[4/3]">
            <Image
              src="/images/diwatek-hero-website-showcase.webp"
              alt="Modern responsive website designs displayed on desktop and mobile screens"
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Focused support for digital growth.
          </h2>
        </div>
        <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="group h-full rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-md"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#071A3A] text-[var(--accent)] transition duration-200 group-hover:bg-[var(--primary)] group-hover:text-white">
                <service.Icon aria-hidden="true" size={24} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Portfolio
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Practical websites and digital tools.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
            A selection of websites and digital tools designed to solve practical
            business needs through clear interfaces, responsive development, and
            thoughtful design.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-md"
              >
                <div className="aspect-video border-b border-[var(--border)] bg-[var(--surface-elevated)] p-5">
                  <div className="relative h-full overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] shadow-sm">
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
                    <p className="text-sm font-semibold text-[var(--primary)]">{project.category}</p>
                    <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${getStatusBadgeClass(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-[var(--foreground)]">{project.title}</h3>
                  {project.disclosure ? (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--subtle-foreground)]">
                      {project.disclosure}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{project.description}</p>

                  {project.technologies.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs font-semibold text-[var(--muted-foreground)]"
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
                        className="inline-flex w-full items-center justify-center rounded-md bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
                      >
                        {project.buttonLabel}
                        {project.external ? <span className="sr-only"> opens in a new tab</span> : null}
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled={project.disabled}
                        className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-md border border-[var(--strong-border)] bg-[var(--muted)] px-4 py-3 text-sm font-semibold text-[var(--muted-foreground)]"
                      >
                        {project.buttonLabel}
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-7 sm:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                  And More
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[var(--foreground)]">
                  Have another website idea in mind?
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted-foreground)]">
                  These concepts are only examples of what Diwatek can create.
                  Websites can be designed around different businesses, services,
                  events, personal projects, and unique requirements.
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  Tell us what you need, and we can plan a website that fits your
                  goals, content, and audience.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-md bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 md:w-auto md:shrink-0"
              >
                Discuss Your Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              About Diwatek
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              Creative digital work, built around your goals.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[var(--muted-foreground)]">
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
            <p className="font-semibold text-[var(--foreground)]">
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
              className="rounded-md border border-[var(--border)] bg-[var(--surface)]/80 p-5 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[var(--surface-elevated)] text-[var(--primary)] ring-1 ring-[var(--border)]">
                <card.Icon aria-hidden="true" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                How We Work
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                Professional websites without unnecessary complexity.
              </h3>
            </div>

            <div className="space-y-4 text-base leading-7 text-[var(--muted-foreground)]">
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
              <p className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm leading-6 text-[var(--foreground)]">
                Projects requiring custom databases, user accounts, payment processing,
                business-system integrations, sensitive-data processing, or other advanced
                backend functionality are assessed separately and may be referred to or
                completed with an approved technology partner.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
              <h4 className="font-semibold text-[var(--foreground)]">Focused Scope</h4>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                Start with the pages and functionality that matter most.
              </p>
            </div>
            <div className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
              <h4 className="font-semibold text-[var(--foreground)]">Direct Collaboration</h4>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                Communicate directly with the person designing and building the project.
              </p>
            </div>
            <div className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
              <h4 className="font-semibold text-[var(--foreground)]">Flexible Growth</h4>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                Add new pages and features as the website and organization grow.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 rounded-md border border-[#22D3EE]/40 bg-[#22D3EE]/10 px-5 py-4 text-sm font-medium leading-6 text-[var(--foreground)]">
          Independent and project-based: You communicate directly with the person working
          on your project, allowing for a more personal, flexible, and focused process.
        </p>
      </section>

      <section id="contact" className="bg-[#071A3A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
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
                  className="group flex items-center gap-4 rounded-md border border-white/15 bg-[var(--surface)]/5 p-4 transition hover:border-[#22D3EE] hover:bg-[var(--surface)]/10 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#071A3A]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--surface)]/10 text-[var(--accent)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
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
