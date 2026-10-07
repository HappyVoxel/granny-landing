import { SiteFooter, SiteHeader } from "@/components/landing/chrome";
import { Motion } from "@/components/landing/motion";
import {
  Blog,
  Browsers,
  ClosingCta,
  DayCycle,
  Difference,
  Faq,
  Hero,
  Honesty,
  Install,
  Layers,
  Privacy,
  SpecStrip,
  Story,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="flex-1">
            <Hero />
            <Story />
            <SpecStrip />
            <DayCycle />
            <Difference />
            <Layers />
            <Browsers />
            <Honesty />
            <Privacy />
            <Install />
            <Blog />
            <Faq />
            <ClosingCta />
          </main>
          <SiteFooter />
        </div>
      </div>
      <div
        aria-hidden
        data-progress
        className="pointer-events-none fixed top-0 right-0 z-[70] h-full w-px bg-brass/15"
      >
        <div data-progress-fill className="h-full w-full origin-top bg-brass/70" />
      </div>
      <Motion />
    </>
  );
}
