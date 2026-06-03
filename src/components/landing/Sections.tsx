import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Building2,
  Calendar,
  CheckCircle2,
  Coins,
  Compass,
  Globe,
  Headphones,
  Layers,
  LineChart,
  Network,
  Repeat,
  Rocket,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";
import brandImg from "@/assets/brand-mockup.jpg";
import revenueImg from "@/assets/revenue-visual.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* SECTION 2 — The possibility */
const possibilities = [
  {
    icon: Building2,
    title: "Own an AI company",
    body: "Not a side product. A real company, in your name, that you can grow, scale and one day sell.",
  },
  {
    icon: Repeat,
    title: "Build recurring revenue",
    body: "Subscription billing baked in. Every client you sign becomes monthly income on autopilot.",
  },
  {
    icon: Users,
    title: "Serve local businesses",
    body: "Clinics, agencies, salons, real estate, restaurants — every local business needs AI now.",
  },
  {
    icon: ShieldCheck,
    title: "Create a real asset",
    body: "A branded, cash-flowing company with retained clients — not just freelance income.",
  },
];

export function Possibility() {
  return (
    <Section id="opportunity">
      <SectionHeader
        eyebrow="The possibility"
        title={
          <>
            Imagine running the AI company{" "}
            <span className="text-gradient-emerald italic">your town will hire.</span>
          </>
        }
        description="Most people will spend the next decade renting AI tools. A few will own the companies that sell them."
      />
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {possibilities.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-7 backdrop-blur transition hover:border-primary/40 hover:bg-card">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/60 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* SECTION 3 — You sell, we handle */
const techPillars = [
  { icon: Server, label: "Infrastructure", body: "Servers, scaling, uptime — fully managed." },
  { icon: Workflow, label: "Automation", body: "Workflows, integrations and AI orchestration." },
  { icon: Settings, label: "Provisioning", body: "New clients spun up in minutes, not weeks." },
  { icon: Rocket, label: "Setup & deploy", body: "From signup to live brand in 14 days." },
  { icon: Globe, label: "Hosting & domains", body: "Custom domains, SSL, branding — invisible." },
  { icon: Brain, label: "AI engineering", body: "Models, prompts, evals — handled for you." },
];

export function NoTech() {
  return (
    <Section className="border-y border-border/40 bg-[oklch(0.18_0.013_180)]">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" />
            The unfair part
          </div>
          <h2 className="font-display mt-5 text-4xl leading-[1.02] md:text-6xl">
            You sell.
            <br />
            <span className="text-gradient-emerald">We handle the tech.</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            No coding. No developers. No AI engineers. No servers to babysit.
            You focus on growing the business — we run everything underneath it.
          </p>
          <ul className="mt-7 space-y-3 text-sm">
            {[
              "No coding required",
              "No development team",
              "No backend complexity",
              "No infrastructure management",
              "No AI engineering",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {techPillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border/60 bg-card/60 p-6 transition hover:border-primary/40">
                <p.icon className="h-5 w-5 text-primary" />
                <div className="mt-5 font-display text-xl">{p.label}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* SECTION 4 — How the business works */
const flow = [
  { icon: Sparkles, label: "Join the platform", body: "Reserve your seat in the network." },
  { icon: Compass, label: "Launch your brand", body: "Your name. Your domain. Your identity." },
  { icon: Users, label: "Get clients", body: "Local businesses ready to deploy AI." },
  { icon: Server, label: "We run the tech", body: "Infrastructure, models, automation — covered." },
  { icon: LineChart, label: "Grow monthly revenue", body: "Stack subscriptions, compound MRR." },
];

export function HowItWorks() {
  return (
    <Section id="how">
      <SectionHeader
        eyebrow="The model"
        title={
          <>
            How the <span className="italic text-muted-foreground">business</span> works
          </>
        }
        description="Five steps. No technical ones."
      />
      <div className="relative mt-20">
        <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
        <div className="grid gap-10 lg:grid-cols-5">
          {flow.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="relative">
                <div className="relative z-10 mx-auto grid h-[84px] w-[84px] place-items-center rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-luxe)]">
                  <s.icon className="h-6 w-6 text-primary" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-accent text-[11px] font-semibold text-accent-foreground">
                    {i + 1}
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <div className="font-display text-xl">{s.label}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* SECTION 5 — White label proof */
export function WhiteLabelProof() {
  return (
    <Section className="border-y border-border/40">
      <SectionHeader
        eyebrow="White label"
        title={
          <>
            What <span className="text-gradient-emerald">you</span> see vs what{" "}
            <span className="text-gradient-gold">clients</span> see
          </>
        }
        description="They see a polished brand they trust. You see a real operating business."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-1 shadow-[var(--shadow-luxe)]">
            <div className="rounded-[20px] bg-[oklch(0.20_0.014_180)] p-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Your operator console
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">internal</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Clients", value: "42" },
                  { label: "MRR", value: "$24.1k" },
                  { label: "Retention", value: "97%" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-border/60 bg-background/50 p-4">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{m.label}</div>
                    <div className="mt-1 font-display text-2xl">{m.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2 text-sm">
                {[
                  ["Lakeside Dental", "$ 499 / mo"],
                  ["Cinco Real Estate", "$ 749 / mo"],
                  ["Halo Med Spa", "$ 299 / mo"],
                  ["North Auto Group", "$ 999 / mo"],
                ].map(([n, p]) => (
                  <div
                    key={n}
                    className="flex items-center justify-between rounded-lg border border-border/40 bg-background/40 px-4 py-3"
                  >
                    <span className="text-foreground/90">{n}</span>
                    <span className="text-muted-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-accent/30 bg-card/60 p-1 shadow-[var(--shadow-luxe)]">
            <div className="rounded-[20px] bg-[oklch(0.20_0.014_180)] p-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-[image:var(--gradient-gold)] text-xs font-semibold text-accent-foreground">
                    L
                  </span>
                  <span className="font-display text-lg">Lakeside.ai</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">client portal</span>
              </div>
              <div className="mt-6 rounded-xl border border-border/60 bg-background/40 p-5">
                <div className="flex items-center gap-3">
                  <Headphones className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm font-medium">AI Receptionist</div>
                    <div className="text-xs text-muted-foreground">Answering — 24 / 7</div>
                  </div>
                  <span className="ml-auto rounded-full bg-primary/20 px-2 py-1 text-[10px] uppercase tracking-wider text-primary">
                    Live
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  {["Voice", "SMS", "Booking", "Routing"].map((c) => (
                    <div key={c} className="rounded-md border border-border/40 bg-background/40 px-3 py-2 text-muted-foreground">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-border/60 bg-background/40 p-5">
                <div className="text-xs text-muted-foreground">Today</div>
                <div className="mt-2 font-display text-3xl">86 calls answered</div>
                <div className="mt-1 text-xs text-muted-foreground">12 booked · 0 missed</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.2}>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Same engine. Two completely different realities. <span className="text-foreground">Yours, and theirs.</span>
        </p>
      </Reveal>
    </Section>
  );
}

/* SECTION 6 — Your brand */
export function YourBrand() {
  return (
    <Section id="brand">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Ownership
          </div>
          <h2 className="font-display mt-5 text-5xl leading-[1.02] md:text-7xl">
            Your brand.
            <br />
            <span className="text-gradient-gold">Your company.</span>
            <br />
            <span className="italic text-muted-foreground">Your identity.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            No mention of us. Anywhere. Your logo on the dashboard. Your domain in the address bar.
            Your name on the invoice. This is a real company you are building — not someone else's reseller program.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-md text-sm">
            {[
              { icon: Layers, label: "Your logo" },
              { icon: Globe, label: "Your domain" },
              { icon: Sparkles, label: "Your brand name" },
              { icon: Users, label: "Your customers" },
            ].map((i) => (
              <div key={i.label} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3">
                <i.icon className="h-4 w-4 text-primary" />
                {i.label}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-[var(--shadow-luxe)]">
            <img src={brandImg} alt="Branded business identity" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* SECTION 7 — Recurring revenue */
export function Revenue() {
  const items = [
    { icon: Wallet, label: "Subscription billing", body: "Stripe-grade billing, fully white labeled." },
    { icon: Repeat, label: "Monthly recurring revenue", body: "Predictable income that compounds." },
    { icon: Zap, label: "Automated invoicing", body: "Charges, retries and receipts on autopilot." },
    { icon: Network, label: "Client retention", body: "Sticky AI workflows clients can't unplug." },
    { icon: Coins, label: "Revenue growth", body: "Stack accounts, upgrade plans, expand." },
  ];
  return (
    <Section className="border-y border-border/40 bg-[oklch(0.18_0.013_180)]">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-accent">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Recurring model
          </div>
          <h2 className="font-display mt-5 text-4xl leading-[1.02] md:text-6xl">
            Get paid every month —{" "}
            <span className="text-gradient-gold">whether you work or not.</span>
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            This isn't project work. Every client you sign becomes an automated subscription,
            invoiced and collected for you, every single month.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((i, idx) => (
              <Reveal key={i.label} delay={idx * 0.05}>
                <div className="rounded-xl border border-border/60 bg-card/50 p-5">
                  <i.icon className="h-4 w-4 text-accent" />
                  <div className="mt-3 font-medium">{i.label}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{i.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-[var(--shadow-luxe)]">
            <img src={revenueImg} alt="Recurring revenue visualization" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="rounded-2xl border border-border/60 bg-background/70 p-5 backdrop-blur-xl">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">MRR · projected · year 1</div>
                <div className="mt-1 flex items-end justify-between">
                  <span className="font-display text-3xl">$ 312,000</span>
                  <span className="text-xs text-primary">+ compounding</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* SECTION 8 — Fast launch */
const launchSteps = ["Join", "Brand", "Configure", "Launch", "Start selling"];
export function FastLaunch() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Fast launch"
        title={
          <>
            From decision to <span className="text-gradient-emerald">live company</span> in days.
          </>
        }
        description="No three-month onboarding. No engineering sprints. Just five clean steps."
      />
      <div className="mt-16 grid gap-4 md:grid-cols-5">
        {launchSteps.map((s, i) => (
          <Reveal key={s} delay={i * 0.07}>
            <div className="group relative h-full rounded-2xl border border-border/60 bg-card/50 p-6 transition hover:border-primary/40 hover:bg-card">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Step 0{i + 1}
              </div>
              <div className="mt-3 font-display text-2xl">{s}</div>
              <div className="mt-6 h-px bg-gradient-to-r from-primary/60 to-transparent" />
              <ArrowRight className="mt-4 h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.4}>
        <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-full border border-border/60 bg-card/40 px-5 py-3 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 text-primary" />
          Average operator goes live in <span className="text-foreground">14 days</span>
        </div>
      </Reveal>
    </Section>
  );
}

/* SECTION 9 — Business positioning */
const tiers = [
  {
    name: "Builder",
    line: "Start your first AI venture",
    points: ["Your own brand", "Up to 10 clients", "Core AI products", "Operator dashboard"],
    cta: "Begin building",
  },
  {
    name: "Operator",
    line: "Run a real AI company",
    points: ["Unlimited clients", "Full product suite", "Priority infrastructure", "Revenue analytics"],
    cta: "Operate at scale",
    featured: true,
  },
  {
    name: "Agency",
    line: "Lead a portfolio of brands",
    points: ["Multi-brand control", "Team seats", "Custom integrations", "Dedicated launch manager"],
    cta: "Launch agency",
  },
  {
    name: "Partner",
    line: "Own a regional market",
    points: ["Territory exclusivity", "Co-marketing", "Strategic advisory", "Equity-style upside"],
    cta: "Apply for partnership",
  },
];

export function Positioning() {
  return (
    <Section id="tiers" className="border-y border-border/40">
      <SectionHeader
        eyebrow="Business positioning"
        title={
          <>
            Which kind of company are you{" "}
            <span className="italic text-muted-foreground">here to build?</span>
          </>
        }
        description="Pick the level of ambition. Not a pricing plan — a posture."
      />
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div
              className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition ${
                t.featured
                  ? "border-primary/50 bg-card shadow-[var(--shadow-glow)]"
                  : "border-border/60 bg-card/50 hover:border-primary/30"
              }`}
            >
              {t.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-[image:var(--gradient-emerald)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Most chosen
                </span>
              )}
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Tier 0{i + 1}
              </div>
              <div className="mt-3 font-display text-3xl">{t.name}</div>
              <p className="mt-1 text-sm text-muted-foreground">{t.line}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  t.featured
                    ? "bg-[image:var(--gradient-emerald)] text-primary-foreground hover:scale-[1.02]"
                    : "border border-border bg-background/40 text-foreground hover:bg-card"
                }`}
              >
                {t.cta} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* SECTION 10 — Final CTA */
export function FinalCTA() {
  return (
    <Section id="cta" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <Reveal>
        <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-border/70 bg-card/60 p-10 text-center backdrop-blur-xl shadow-[var(--shadow-luxe)] md:p-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
            <span className="h-1 w-1 rounded-full bg-primary" />
            The window is open
          </div>
          <h2 className="font-display text-5xl leading-[1.02] md:text-7xl">
            The next business wave is{" "}
            <span className="text-gradient-emerald">already here.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Position yourself early — and own the company — instead of watching everyone else do it.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-emerald)] px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
            >
              Purchase AI Bot
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-7 py-4 text-sm font-medium text-foreground backdrop-blur transition hover:bg-card"
            >
              Book a strategy call
            </a>
          </div>
          <div className="mt-8 text-xs text-muted-foreground">
            Limited operator seats per region · No engineering required
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
        <div className="font-display text-base text-foreground">
          AI Bot
        </div>
        <div>© {new Date().getFullYear()} AI Bot · Own the future.</div>
      </div>
    </footer>
  );
}