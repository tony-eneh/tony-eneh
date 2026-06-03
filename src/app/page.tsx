import Image from "next/image";

const experience = [
  {
    role: "Founder & Lead Engineer",
    company: "Joypinness Technologies Ltd",
    period: "2017 — Present",
    summary:
      "Leads product strategy, design, and engineering across client systems, internal products, startup experiments, and research-driven prototypes.",
  },
  {
    role: "Frontend Engineer",
    company: "Africhange",
    period: "2022 — 2025",
    summary:
      "Built payments and compliance dashboards, scalable frontend architecture, reusable UI systems, and cloud-friendly delivery pipelines for regulated fintech.",
  },
  {
    role: "Frontend Engineer",
    company: "Evolutics Tech",
    period: "2021 — 2022",
    summary:
      "Delivered modular B2B insurance software with role-based workflows, configurable dashboards, and customer-specific feature access.",
  },
  {
    role: "Full-Stack Developer",
    company: "Telixia",
    period: "2019 — 2021",
    summary:
      "Shipped Angular, Ionic, Express, and PostgreSQL systems for education, transport, and business operations with multi-portal access patterns.",
  },
  {
    role: "Web Development Specialist",
    company: "Pocosoft Ltd",
    period: "2016 — 2019",
    summary:
      "Delivered websites, internal tools, backend services, and deployment workflows while growing into a full product-minded engineer.",
  },
];

const projects = [
  {
    name: "BookieAI",
    description:
      "AI-assisted betting intelligence focused on explainable sports insights and productized prediction workflows.",
    stack: ["AI workflows", "Product strategy", "Frontend systems"],
    links: [{ label: "GitHub", href: "https://github.com/tony-eneh/bookie-ai" }],
  },
  {
    name: "OgaPredict",
    description:
      "Subscription sports prediction platform with payment flows, rule-based logic, and ML-ready explainability.",
    stack: ["Next.js", "Node.js", "Payments"],
    links: [],
  },
  {
    name: "FieldSnap",
    description:
      "Field operations product pairing a modern admin dashboard with mobile execution, offline sync, and workforce visibility.",
    stack: ["Next.js", "Flutter", "Firebase"],
    links: [{ label: "Web", href: "https://field-snap.vercel.app" }],
  },
  {
    name: "PayPilot",
    description:
      "Fintech demo with onboarding, KYC-ready flows, wallet operations, audit trails, and administrative controls.",
    stack: ["Next.js", "TypeScript", "Prisma"],
    links: [{ label: "Live", href: "http://pay-pilot.netlify.app" }],
  },
  {
    name: "Cold-pitch Templates",
    description:
      "Outreach-ready website concepts and growth assets for founders who need speed without generic design.",
    stack: ["Templates", "Conversion design", "Rapid delivery"],
    links: [{ label: "Portfolio", href: "https://joypinness.com/portfolio" }],
  },
];

const publications = [
  {
    title:
      "MetaHate: Text-based Hate Speech Detection for Metaverse Applications using Deep Learning",
    venue: "IEEE ICTC 2023",
    href: "https://www.researchgate.net/publication/374976069",
  },
  {
    title:
      "HyBaTwin: Web-Based Hybrid Digital Twin Platform for Electric Vehicle Battery Capacity Estimation",
    venue: "JKICS 2025",
    href: "https://doi.org/10.7840/kics.2025.50.4.549",
  },
  {
    title: "ClaimGuard",
    venue: "Research in progress",
    href: "https://github.com/tony-eneh/claimguard",
  },
  {
    title: "PureAjo",
    venue: "Research prototype",
    href: "https://github.com/tony-eneh/pureajo-paper",
  },
  {
    title: "EdgeConsent",
    venue: "Research prototype",
    href: "https://github.com/tony-eneh/edgeconsent",
  },
];

const stack = [
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Flutter",
  "Python",
  "FastAPI",
  "Solidity",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Tailwind",
];

const contactLinks = [
  {
    label: "Email",
    value: "Start a conversation",
    href: "mailto:anthony.u.eneh@gmail.com",
  },
  {
    label: "GitHub",
    value: "tony-eneh",
    href: "https://github.com/tony-eneh",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tony-eneh",
    href: "https://linkedin.com/in/tony-eneh",
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/821028619815",
  },
];

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{copy}</p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm shadow-slate-950/5">
      {children}
    </span>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M6 14 14 6m0 0H7m7 0v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(245,158,11,0.18),transparent_26%),linear-gradient(180deg,#f8fafc_0%,#eef2f7_48%,#f8fafc_100%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#top" className="text-sm font-bold uppercase tracking-[0.25em] text-slate-950">
          Tony Eneh
        </a>
        <nav className="hidden items-center gap-7 rounded-full border border-white/70 bg-white/75 px-6 py-3 text-sm font-medium text-slate-600 shadow-sm shadow-slate-950/5 backdrop-blur md:flex">
          <a href="#work" className="transition hover:text-slate-950">Work</a>
          <a href="#projects" className="transition hover:text-slate-950">Projects</a>
          <a href="#research" className="transition hover:text-slate-950">Research</a>
          <a href="#contact" className="transition hover:text-slate-950">Contact</a>
        </nav>
        <a
          href="mailto:anthony.u.eneh@gmail.com"
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Let’s talk
        </a>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:pb-28 lg:pt-16">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm shadow-slate-950/5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Senior Full-Stack Engineer · PhD Researcher · South Korea
          </div>
          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.075em] text-slate-950 sm:text-7xl lg:text-8xl">
            Designing dependable software for products that cannot feel improvised.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            Anthony Uchenna Eneh combines founder-level product judgment, production engineering, and doctoral research to build polished web, mobile, AI, and blockchain systems.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-sky-600/25 transition hover:-translate-y-0.5 hover:bg-sky-500"
            >
              View selected work <ArrowUpRight />
            </a>
            <a
              href="#research"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-900 shadow-sm shadow-slate-950/5 transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              Explore research
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-12 hidden rounded-3xl border border-white/70 bg-white/80 p-5 shadow-2xl shadow-slate-950/10 backdrop-blur md:block">
            <p className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">9+</p>
            <p className="mt-1 max-w-32 text-sm leading-5 text-slate-500">years shipping software</p>
          </div>
          <div className="absolute -right-5 bottom-10 z-10 hidden rounded-3xl bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/25 md:block">
            <p className="text-sm font-medium text-slate-300">Current focus</p>
            <p className="mt-2 max-w-56 text-lg font-semibold leading-6">Verifiable AI decision infrastructure</p>
          </div>
          <div className="overflow-hidden rounded-[2.25rem] border border-white/80 bg-white p-3 shadow-2xl shadow-slate-950/12">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-slate-200">
              <Image
                src="/photos/headshot.jpg"
                alt="Anthony Uchenna Eneh smiling in front of a colorful wall"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-xl shadow-slate-950/5 backdrop-blur sm:grid-cols-3">
          {[
            ["01", "Product judgment", "Founder-led execution from idea to launch."],
            ["02", "Interface craft", "Clear, accessible, conversion-aware UI systems."],
            ["03", "Research depth", "Trustworthy systems for regulated decisions."],
          ].map(([number, title, copy]) => (
            <article key={title} className="rounded-[1.5rem] bg-slate-50 p-6">
              <p className="text-sm font-bold text-sky-600">{number}</p>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl shadow-slate-950/10">
          <Image
            src="/photos/about.jpg"
            alt="Anthony Uchenna Eneh sitting outdoors on a bench"
            width={3048}
            height={4064}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow="About"
            title="Builder instinct with academic discipline."
            copy="Tony works where polished product experiences meet serious system requirements. His work spans fintech dashboards, mobile operations tools, AI prototypes, blockchain-backed trust systems, and doctoral research at Kumoh National Institute of Technology."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">Research</p>
              <p className="mt-4 text-lg font-semibold leading-7 tracking-[-0.02em] text-slate-950">
                Trustworthy, verifiable, high-stakes decision systems.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">Delivery</p>
              <p className="mt-4 text-lg font-semibold leading-7 tracking-[-0.02em] text-slate-950">
                Frontend-led engineering with full-stack execution.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="work" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Experience</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Production roles across fintech, insurance, platforms, and founder-led delivery.
            </h2>
          </div>
          <div className="space-y-4">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.07]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.role}</h3>
                    <p className="mt-1 font-medium text-sky-200">{item.company}</p>
                  </div>
                  <p className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">{item.period}</p>
                </div>
                <p className="mt-5 max-w-3xl leading-8 text-slate-300">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeader
          eyebrow="Selected projects"
          title="A portfolio of practical products, prototypes, and commercial experiments."
          copy="The work is deliberately varied: operational dashboards, fintech flows, sports intelligence, outreach assets, and research-adjacent systems."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`flex min-h-[24rem] flex-col rounded-[2rem] p-7 shadow-xl shadow-slate-950/5 ${
                index === 0
                  ? "bg-sky-600 text-white lg:col-span-2"
                  : "border border-slate-200 bg-white text-slate-950"
              }`}
            >
              <p className={`text-sm font-bold uppercase tracking-[0.24em] ${index === 0 ? "text-sky-100" : "text-slate-400"}`}>
                {project.name}
              </p>
              <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em]">{project.description}</h3>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
              <div className="mt-auto pt-10">
                {project.links.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${
                          index === 0 ? "bg-white text-slate-950" : "bg-slate-950 text-white"
                        }`}
                      >
                        {link.label} <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className={index === 0 ? "text-sky-100" : "text-slate-500"}>Available on request</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.86fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Research & speaking"
            title="Research that connects technical rigor with systems people can use."
            copy="Peer-reviewed work, conference presentations, and prototypes focused on trustworthy AI, digital twins, consent, claims, and blockchain-backed governance."
          />
          <div className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
            {publications.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex gap-5 p-6 transition hover:bg-slate-50"
              >
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-sky-500" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">{item.venue}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-7 tracking-[-0.02em] text-slate-950 group-hover:text-sky-700">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-5">
          <figure className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-slate-950/10">
            <Image
              src="/photos/speaking-ictc.jpg"
              alt="Anthony Uchenna Eneh speaking at IEEE ICTC conference"
              width={4608}
              height={3456}
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="h-80 w-full rounded-[1.35rem] object-cover"
            />
            <figcaption className="px-2 pb-2 pt-5 text-sm leading-7 text-slate-600">
              Presenting research at IEEE ICTC with a clear, defensible technical narrative.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[2rem] bg-slate-950 p-3 text-white shadow-2xl shadow-slate-950/15">
            <Image
              src="/photos/speaking-kics.jpg"
              alt="Anthony Uchenna Eneh speaking at KICS Winter 2026"
              width={4032}
              height={3024}
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="h-80 w-full rounded-[1.35rem] object-cover"
            />
            <figcaption className="px-2 pb-2 pt-5 text-sm leading-7 text-slate-300">
              Conference presence that bridges academic rigor and implementation-minded product work.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-slate-200">
            <Image
              src="/photos/working.jpg"
              alt="Anthony Uchenna Eneh working at a desk with dual monitors"
              width={3264}
              height={2448}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Technical range"
              title="Modern frontend polish with enough backend depth to own the system."
              copy="Tony’s stack supports rapid product delivery, reliable operations, and credible prototypes across web, mobile, AI, blockchain, and data-heavy domains."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-2xl shadow-slate-950/20 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Contact</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Open to serious collaborations, ambitious products, and technical work with real stakes.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              If you are building something difficult and need product craft plus engineering depth, Tony is worth talking to.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.1]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                  <p className="mt-3 font-semibold text-white">{item.value}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="relative min-h-[28rem]">
            <Image
              src="/photos/outdoor-autumn.jpg"
              alt="Anthony Uchenna Eneh outdoors in autumn leaves"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 text-center text-sm text-slate-500 sm:px-8">
        Built by{" "}
        <a
          href="https://www.joypinness.com"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-slate-950 transition hover:text-sky-700"
        >
          Joypinness Technologies
        </a>
      </footer>
    </main>
  );
}
