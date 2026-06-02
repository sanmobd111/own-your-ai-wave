import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-opportunity.jpg";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary glow-emerald" />
            The AI ownership era
          </motion.div>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display mt-6 text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]"
          >
            Launch your own{" "}
            <span className="text-gradient-emerald">AI business</span>
            <br />
            <span className="text-muted-foreground italic">before everyone else.</span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Build a fully branded AI company under your own name.
            We handle the infrastructure, automation, backend systems and deployment —
            you own the brand, the clients and the revenue.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-emerald)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
            >
              Start my AI business
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-card"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              See how it works
            </a>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-muted-foreground"
          >
            <div>
              <div className="font-display text-2xl text-foreground">$0</div>
              dev or engineering cost
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div>
              <div className="font-display text-2xl text-foreground">100%</div>
              of the revenue, your brand
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div>
              <div className="font-display text-2xl text-foreground">14 days</div>
              to a live company
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-luxe)]">
            <img
              src={heroImg}
              alt="Premium business ownership concept"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute left-6 top-6 rounded-2xl border border-border/60 bg-background/70 px-4 py-3 backdrop-blur-xl"
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">MRR · this month</div>
              <div className="font-display text-2xl">$ 24,180</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="absolute bottom-6 right-6 rounded-2xl border border-border/60 bg-background/70 px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary glow-emerald" />
                YourBrand.ai · live
              </div>
              <div className="mt-1 font-display text-xl">18 active clients</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}