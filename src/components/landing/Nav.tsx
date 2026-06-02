import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/60 px-5 py-3 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-2 font-display text-xl">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[image:var(--gradient-emerald)] text-primary-foreground text-sm font-semibold">A</span>
          <span>Aether<span className="text-gradient-gold">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#opportunity" className="hover:text-foreground transition">Opportunity</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#brand" className="hover:text-foreground transition">Your brand</a>
          <a href="#tiers" className="hover:text-foreground transition">Positioning</a>
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
        >
          Start my business
        </a>
      </div>
    </motion.header>
  );
}