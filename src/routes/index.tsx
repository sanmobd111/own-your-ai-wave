import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import {
  Possibility,
  NoTech,
  HowItWorks,
  WhiteLabelProof,
  YourBrand,
  Revenue,
  FastLaunch,
  Positioning,
  FinalCTA,
  Footer,
} from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aether — Launch your own AI business" },
      {
        name: "description",
        content:
          "Own a fully branded AI company while we handle infrastructure, automation and deployment. Build recurring revenue under your own brand.",
      },
      { property: "og:title", content: "Aether — Launch your own AI business" },
      {
        property: "og:description",
        content:
          "Own a fully branded AI company while we handle infrastructure, automation and deployment.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Possibility />
        <NoTech />
        <HowItWorks />
        <WhiteLabelProof />
        <YourBrand />
        <Revenue />
        <FastLaunch />
        <Positioning />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
