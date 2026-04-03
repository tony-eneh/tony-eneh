const skills = {
  frontend: [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Tailwind CSS",
    "Accessibility-first UI",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Express",
    "FastAPI",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
  ],
  web3AndCloud: [
    "Solidity",
    "wagmi / viem / ethers.js",
    "AWS",
    "GitHub Actions",
    "Vercel",
    "CI/CD",
  ],
  research: [
    "Digital Twins",
    "Explainable AI",
    "Access Control Models",
    "Blockchain-backed verification",
    "Reproducible experiments",
    "Applied systems research",
  ],
};

const experience = [
  {
    role: "CEO / Lead Engineer",
    company: "Joypinness Technologies Ltd",
    period: "Jan 2017 — Present",
    summary:
      "Founder and engineering lead building production-grade products and research prototypes across fintech, betting, blockchain insurance, compliance, and AI-assisted workflows.",
  },
  {
    role: "Frontend Engineer",
    company: "Africhange",
    period: "Oct 2022 — May 2025",
    summary:
      "Built production payments and compliance dashboards with Angular, reusable component systems, charts, AWS-backed deployments, and CI/CD automation.",
  },
  {
    role: "Frontend Engineer",
    company: "Evolutics Tech",
    period: "Oct 2021 — Jul 2022",
    summary:
      "Developed modular B2B insurance software with robust roles, permissions, and customer-specific feature access across complex dashboard flows.",
  },
  {
    role: "Full-Stack Developer",
    company: "Telixia",
    period: "Jun 2019 — Sep 2021",
    summary:
      "Delivered Angular, Ionic, Express, and PostgreSQL solutions for education, transport, and client operations platforms with multi-portal access models.",
  },
  {
    role: "Web Development Specialist",
    company: "Pocosoft Ltd",
    period: "Jan 2016 — May 2019",
    summary:
      "Handled end-to-end web development, backend work, and deployment for business websites and internal tools.",
  },
];

const projects = [
  {
    name: "Notely",
    description:
      "A Notion-style knowledge workspace with AI-assisted writing, semantic search, voice notes, and offline-ready PWA support.",
    stack: "Next.js · TypeScript · Prisma · Supabase · OpenAI",
    links: [
      { label: "Live", href: "https://notely-puce.vercel.app" },
      { label: "GitHub", href: "https://github.com/tony-eneh/notely" },
    ],
  },
  {
    name: "FieldSnap",
    description:
      "A workforce operations platform with a Next.js admin dashboard and Flutter mobile app for field execution, offline sync, and push notifications.",
    stack: "Next.js · Tailwind · Flutter · Prisma · Firebase",
    links: [
      { label: "Web", href: "https://field-snap.vercel.app" },
      {
        label: "APK",
        href: "https://drive.google.com/drive/folders/1_H3kRDjoET4zQ9qVneTGr9zsQ5nTsRqO?usp=sharing",
      },
    ],
  },
  {
    name: "PayPilot",
    description:
      "A fintech demo product featuring KYC-ready onboarding, wallet ledger flows, admin operations, audit logging, and transactional notifications.",
    stack: "Next.js · TypeScript · Tailwind · Prisma · Clerk",
    links: [{ label: "Live", href: "http://pay-pilot.netlify.app" }],
  },
  {
    name: "OgaPredict",
    description:
      "A sports prediction platform with subscriptions, payment integration, and a rule-based prediction engine designed for future ML-assisted explainability.",
    stack: "Next.js · Node.js · Paystack · Prediction microservices",
    links: [],
  },
  {
    name: "PureAjo / PureChain",
    description:
      "Blockchain-backed insurance and access-control systems using wallet auth, on-chain voting, automated payouts, and verifiable workflow evidence.",
    stack: "Next.js · Solidity · EVM tooling · Event listeners",
    links: [],
  },
  {
    name: "Choirs Hub",
    description:
      "An in-progress CMS and social platform for choirs and choristers with mobile-first community and content-management features.",
    stack: "React Native (Expo) · CMS · Community features",
    links: [],
  },
];

const publications = [
  {
    title:
      "MetaHate: Text-based Hate Speech Detection for Metaverse Applications using Deep Learning",
    venue: "ICTC 2023",
    href: "https://www.researchgate.net/publication/374976069",
  },
  {
    title:
      "HyBaTwin: Web-Based Hybrid Digital Twin Platform for Electric Vehicle Battery Capacity Estimation",
    venue: "JKICS 2025",
    href: "https://doi.org/10.7840/kics.2025.50.4.549",
  },
];

const education = [
  {
    degree: "Integrated Master's & PhD in IT Convergence Engineering",
    school: "Kumoh National Institute of Technology, South Korea",
    period: "2025 — 2029 (Expected)",
  },
  {
    degree: "B.Eng in Electrical & Electronics Engineering",
    school: "Federal University of Technology, Owerri (FUTO)",
    period: "2014",
  },
];

const contacts = [
  { label: "Email", href: "mailto:anthony.u.eneh@gmail.com", value: "anthony.u.eneh@gmail.com" },
  { label: "GitHub", href: "https://github.com/tony-eneh", value: "github.com/tony-eneh" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tony-eneh", value: "linkedin.com/in/tony-eneh" },
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-slate-300 sm:text-lg">{body}</p>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200 backdrop-blur-sm">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="bg-[#020617] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(129,140,248,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#020617_70%)]" />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Senior Full-Stack Engineer · Applied Systems Researcher
              </div>

              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-400">Tony Eneh · Nigeria / South Korea</p>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Building thoughtful software for products, platforms, and high-stakes systems.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  I’m Anthony Uchenna Eneh, a frontend-focused senior full-stack engineer and founder of Joypinness Technologies.
                  I design modern web products, blockchain-enabled systems, and research-grade software with the same bias:
                  clean architecture, practical execution, and measurable outcomes.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:anthony.u.eneh@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Get in touch
                </a>
                <a
                  href="https://github.com/tony-eneh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/5"
                >
                  View GitHub
                </a>
                <a
                  href="https://linkedin.com/in/tony-eneh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/5"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur">
                <p className="text-sm text-slate-400">Current focus</p>
                <p className="mt-3 text-2xl font-semibold text-white">Verifiable AI & research-backed product systems</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Bridging commercial engineering with reproducible academic work in blockchain-backed verification,
                  digital twins, access control, and explainable decision infrastructure.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm text-slate-400">Selected strengths</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "Angular",
                    "Node.js",
                    "Solidity",
                    "AWS",
                    "System Design",
                    "Research Engineering",
                  ].map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="About"
          title="Engineering with product discipline and research depth"
          body="With 9+ years of experience across frontend, backend, blockchain, and applied systems research, I’m comfortable owning the full lifecycle: architecture, implementation, deployment, CI/CD, documentation, and iteration. My work spans startups, agency delivery, and academic collaborations."
        />
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Skills"
          title="A stack shaped by production pressure"
          body="I specialize in frontend-heavy product engineering, but I routinely move across APIs, infrastructure, blockchain, and experimental systems when the problem demands it."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries({
            Frontend: skills.frontend,
            Backend: skills.backend,
            "Web3 & Cloud": skills.web3AndCloud,
            "Research Systems": skills.research,
          }).map(([title, items]) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of product delivery"
          body="From training and agency work to leading a company and contributing to regulated product environments, each role sharpened my ability to ship reliable systems and explain them clearly."
        />
        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <article key={item.company} className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[120px_1fr] md:gap-8">
              <div className="text-cyan-300">0{index + 1}</div>
              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="text-slate-300">{item.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{item.period}</p>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across products and platforms"
          body="A mix of commercial products, portfolio-grade systems, and research-aligned builds. The common thread is practical engineering that can stand up to real users and real constraints."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-cyan-300">{project.stack}</p>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-300">{project.description}</p>
              {project.links.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/60 hover:bg-white/5"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Publications"
          title="Peer-reviewed work"
          body="My academic work sits at the intersection of trustworthy systems, data-driven modeling, and real-world deployment concerns."
        />
        <div className="mt-12 grid gap-6">
          {publications.map((publication) => (
            <a
              key={publication.href}
              href={publication.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/40 hover:bg-white/[0.07]"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{publication.venue}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{publication.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          body="Formal training in engineering, now extended through doctoral-level research in IT convergence engineering and verifiable, high-stakes system design."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.degree}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.school}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something ambitious"
            body="I’m open to research collaboration, product engineering roles, and technically demanding projects that need clean execution."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={contact.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="rounded-3xl border border-white/10 bg-[#0b1220] p-6 transition hover:border-cyan-300/40 hover:bg-[#10182b]"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">{contact.label}</p>
                <p className="mt-3 text-lg font-medium text-white">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
