import Image from "next/image";

const experience = [
  {
    role: "Founder & Lead Engineer",
    company: "Joypinness Technologies Ltd",
    period: "2017 — Present",
    summary:
      "Leading product strategy, design, and engineering across client systems, internal products, startup experiments, and research-driven prototypes.",
  },
  {
    role: "Frontend Engineer",
    company: "Africhange",
    period: "2022 — 2025",
    summary:
      "Built payments and compliance dashboards, scalable frontend architecture, reusable UI systems, and cloud-friendly delivery pipelines for a regulated fintech environment.",
  },
  {
    role: "Frontend Engineer",
    company: "Evolutics Tech",
    period: "2021 — 2022",
    summary:
      "Worked on modular B2B insurance software with role-based workflows, configurable dashboards, and customer-specific feature access.",
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
      "An AI-assisted betting intelligence concept focused on explainable sports insights, user-facing clarity, and productized prediction workflows.",
    stack: ["AI workflows", "Product strategy", "Frontend systems"],
    links: [{ label: "GitHub", href: "https://github.com/tony-eneh/bookie-ai" }],
  },
  {
    name: "OgaPredict",
    description:
      "A subscription-based sports prediction platform with payment flows, rule-based prediction logic, and room for ML-assisted explainability.",
    stack: ["Next.js", "Node.js", "Payments"],
    links: [],
  },
  {
    name: "FieldSnap",
    description:
      "A field operations product pairing a modern admin dashboard with mobile execution, offline sync, and workforce visibility.",
    stack: ["Next.js", "Flutter", "Firebase"],
    links: [{ label: "Web", href: "https://field-snap.vercel.app" }],
  },
  {
    name: "PayPilot",
    description:
      "A fintech demo with onboarding, KYC-ready flows, wallet operations, audit trails, and administrative controls.",
    stack: ["Next.js", "TypeScript", "Prisma"],
    links: [{ label: "Live", href: "http://pay-pilot.netlify.app" }],
  },
  {
    name: "Cold-pitch Templates",
    description:
      "A practical library of outreach-ready website concepts and growth assets for founders who need speed without generic design.",
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
    note: "Peer-reviewed publication on hate-speech detection for metaverse environments.",
  },
  {
    title:
      "HyBaTwin: Web-Based Hybrid Digital Twin Platform for Electric Vehicle Battery Capacity Estimation",
    venue: "JKICS 2025",
    href: "https://doi.org/10.7840/kics.2025.50.4.549",
    note: "Peer-reviewed work combining digital twins, web systems, and predictive estimation.",
  },
  {
    title: "ClaimGuard",
    venue: "Research in progress",
    href: "https://github.com/tony-eneh/claimguard",
    note: "Verifiable workflow evidence and access-control thinking for high-stakes insurance and claims systems.",
  },
  {
    title: "PureAjo",
    venue: "Research prototype",
    href: "https://github.com/tony-eneh/pureajo-paper",
    note: "A blockchain-backed P2P insurance direction exploring governance, trust, and automated payouts.",
  },
  {
    title: "EdgeConsent",
    venue: "Research prototype",
    href: "https://github.com/tony-eneh/edgeconsent",
    note: "Consent and policy enforcement concepts for distributed, privacy-sensitive systems.",
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
  // {
  //   label: "Email",
  //   value: "anthony.u.eneh@gmail.com",
  //   href: "mailto:anthony.u.eneh@gmail.com",
  // },
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

function SectionIntro({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/90">{label}</p>
      <h2 className="font-serif text-4xl leading-tight text-[#fff7ec] sm:text-5xl">{title}</h2>
      <p className="text-base leading-8 text-[#d8ccb7] sm:text-lg">{copy}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#f6ead7]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-transparent text-[#f7f2e8]">
      <section className="mx-auto grid min-h-screen max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1525] min-h-[34rem] lg:min-h-[calc(100vh-3rem)]">
          <Image
            src="/photos/headshot.jpg"
            alt="Anthony Uchenna Eneh smiling in front of a colorful wall"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
            <div className="mb-5 flex flex-wrap gap-3 text-sm text-[#fff1dc]">
              <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-sm">
                South Korea 🇰🇷
              </span>
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-amber-100 backdrop-blur-sm">
                9+ years building across product and research
              </span>
            </div>
            <h1 className="max-w-4xl font-serif text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
              Anthony Uchenna Eneh
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[#f5dfbf] sm:text-xl">
              Senior Full-Stack Engineer • PhD Researcher
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#e1d4c0] sm:text-lg">
              I build software with a founder’s urgency and a researcher’s discipline — spanning web,
              mobile, blockchain, AI, and trustworthy systems for real-world use.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-rows-[auto_1fr_auto]">
          <div className="rounded-[2rem] border border-amber-200/10 bg-[#101a2b]/90 p-8 shadow-2xl shadow-black/20">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">Editorial note</p>
            <h2 className="mt-4 font-serif text-3xl text-[#fff7ec] sm:text-4xl">
              Personal portfolio, not a corporate brochure.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#d7c8b1]">
              Based in South Korea, Tony combines engineering leadership, startup execution, and doctoral research at Kumoh
              National Institute of Technology. The result is a profile shaped by both shipping and scholarship.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-[#caa96d]">Current focus</p>
              <p className="mt-4 font-serif text-2xl text-white">Verifiable AI decision infrastructure</p>
              <p className="mt-4 text-sm leading-7 text-[#d8ccb7]">
                Researching trustworthy, explainable systems for regulated and high-stakes environments.
              </p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-[#160f09]/40 p-7">
              <p className="text-sm uppercase tracking-[0.28em] text-[#caa96d]">Builder mode</p>
              <p className="mt-4 font-serif text-2xl text-white">Frontend-heavy, full-stack capable</p>
              <p className="mt-4 text-sm leading-7 text-[#d8ccb7]">
                From polished interfaces to backend APIs, product architecture, blockchain integrations, and deployment.
              </p>
            </article>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:anthony.u.eneh@gmail.com"
              className="inline-flex items-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-[#17120c] transition hover:bg-amber-300"
            >
              Email Tony
            </a>
            <a
              href="https://github.com/tony-eneh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              GitHub
            </a>
            <a
              href="https://wa.me/821028619815"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-amber-300/30 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/photos/about.jpg"
              alt="Anthony Uchenna Eneh sitting outdoors on a bench"
              width={3048}
              height={4064}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <SectionIntro
              label="About"
              title="A personal practice at the intersection of products, research, and systems thinking"
              copy="Tony has spent 9+ years building web products, mobile experiences, internal platforms, and blockchain-backed systems. He is currently pursuing a PhD at Kumoh National Institute of Technology in South Korea, while continuing to ship practical software across AI, fintech, and operational tooling."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Research</p>
                <p className="mt-3 text-base leading-7 text-[#ddcfbb]">
                  Doctoral work in IT Convergence Engineering with a focus on trustworthy, verifiable, high-stakes decision systems.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Builds</p>
                <p className="mt-3 text-base leading-7 text-[#ddcfbb]">
                  Comfortable across web, mobile, blockchain, and AI product work — with a frontend eye and full-stack execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c1525]/80">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionIntro
              label="Experience"
              title="A timeline shaped by startup grit and production reality"
              copy="The through-line is simple: learn fast, ship carefully, and keep increasing the complexity of the systems you can own."
            />
            <div className="space-y-8">
              {experience.map((item, index) => (
                <article key={`${item.company}-${item.role}`} className="grid gap-4 border-l border-amber-300/25 pl-6 sm:grid-cols-[80px_1fr] sm:gap-6">
                  <div className="text-sm font-semibold tracking-[0.28em] text-amber-300">0{index + 1}</div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-serif text-2xl text-white">{item.role}</h3>
                        <p className="mt-1 text-[#f4d8a0]">{item.company}</p>
                      </div>
                      <p className="text-sm text-[#cdbfa7]">{item.period}</p>
                    </div>
                    <p className="mt-4 text-base leading-8 text-[#d8ccb7]">{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          label="Projects"
          title="Selected products and experiments"
          copy="These projects show a mix of commercial instincts, systems thinking, and curiosity-driven product building."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`rounded-[2rem] border p-6 ${
                index % 3 === 0
                  ? "border-amber-300/20 bg-[#17120d]"
                  : index % 3 === 1
                    ? "border-white/10 bg-white/5"
                    : "border-white/10 bg-[#0f1728]"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">{project.name}</p>
              <p className="mt-4 font-serif text-3xl text-white">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
              {project.links.length > 0 ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-8 text-sm text-[#baa98e]">Available on request</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionIntro
              label="Research & speaking"
              title="Peer-reviewed publications, ongoing prototypes, and conference presence"
              copy="Tony’s academic profile is grounded in published work, active prototyping, and presentations that connect theory with implementation."
            />
            <div className="mt-10 space-y-4">
              {publications.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-amber-300/30 hover:bg-white/[0.07]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">{item.venue}</p>
                  <h3 className="mt-3 font-serif text-2xl text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#d8ccb7]">{item.note}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <Image
                src="/photos/speaking-ictc.jpg"
                alt="Anthony Uchenna Eneh speaking at IEEE ICTC conference"
                width={4608}
                height={3456}
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="h-[320px] w-full object-cover"
              />
              <figcaption className="p-5 text-sm leading-7 text-[#d8ccb7]">
                Presenting research at IEEE ICTC — translating technical ideas into clear, defensible stories.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <Image
                src="/photos/speaking-kics.jpg"
                alt="Anthony Uchenna Eneh speaking at KICS Winter 2026"
                width={4032}
                height={3024}
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="h-[320px] w-full object-cover"
              />
              <figcaption className="p-5 text-sm leading-7 text-[#d8ccb7]">
                Speaking at KICS Winter 2026 — part academic rigor, part builder instinct, always implementation-minded.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1625]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/photos/working.jpg"
                alt="Anthony Uchenna Eneh working at a desk with dual monitors"
                width={3264}
                height={2448}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <SectionIntro
                label="Skills / tech"
                title="A stack that spans interface craft, system design, and research prototypes"
                copy="Tony’s toolkit reflects where he works best: modern frontend systems, pragmatic backend services, fast prototyping, and infrastructure that can survive real usage."
              />
              <div className="mt-10 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-[#fff0cf]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-6">
            <SectionIntro
              label="Contact"
              title="Open to serious collaborations, thoughtful products, and ambitious technical work"
              copy="If you’re building something difficult — especially where product craft and technical depth both matter — Tony is worth talking to."
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/photos/outdoor-autumn.jpg"
                alt="Anthony Uchenna Eneh outdoors in autumn leaves"
                width={4000}
                height={2252}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-amber-300/30 hover:bg-white/[0.07]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">{item.label}</p>
                <p className="mt-4 font-serif text-2xl text-white">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#08111f]">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-[#d8ccb7] sm:px-6 lg:px-8">
          Built by{" "}
          <a
            href="https://www.joypinness.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-amber-300 transition hover:text-amber-200"
          >
            Joypinness Technologies
          </a>
        </div>
      </footer>
    </main>
  );
}
