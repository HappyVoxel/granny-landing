import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/landing/chrome";
import { Ledger, LeatherButton, OutlineButton, Section, StitchPanel } from "@/components/landing/bits";

const REPO = "https://github.com/HappyVoxel/granny";

export const metadata: Metadata = {
  title: "Install the browser extension - granny",
  description:
    "The extension is what reads the page: a movie on YouTube, a feed, a LinkedIn scroll. A five-minute guide for Chrome, Brave, Edge, Arc and Safari.",
};

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-sm bg-card px-1.5 py-0.5 font-mono text-[13px] text-foreground">
      {children}
    </code>
  );
}

function Step({ n, children }: { n: number; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="font-heading text-lg font-semibold text-brass">{n}.</span>
      <span className="max-w-[62ch] text-[15.5px] leading-relaxed text-foreground/90">{children}</span>
    </li>
  );
}

export default function InstallExtension() {
  return (
    <>
      <SiteHeader base="/" />
      <main className="flex-1 pt-16">
        <Section
          skipReveal
          id="install-extension"
          eyebrow="Guide · Browser extension"
          title="The extension."
          second="The part that reads the page."
          lede="granny blocks the obvious at the network layer with no extension at all. The extension is what judges content: a movie on YouTube, an endless feed, a LinkedIn scroll. One folder, two toggles, five minutes."
        >
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
            <div className="space-y-12">
              <div>
                <h3 className="font-heading text-xl font-semibold">Chrome, Brave, Edge, Arc</h3>
                <ol className="mt-5 space-y-5">
                  <Step n={1}>
                    In the granny menu choose <em>Install browser extension…</em> then{" "}
                    <em>Open browser settings</em>. granny copies the extension to{" "}
                    <Code>~/Applications/granny-extension</Code> and reveals it in Finder.
                  </Step>
                  <Step n={2}>
                    In <Code>chrome://extensions</Code>, turn on <em>Developer mode</em>.
                  </Step>
                  <Step n={3}>
                    Press <em>Load unpacked</em> and pick{" "}
                    <Code>~/Applications/granny-extension</Code>.
                  </Step>
                  <Step n={4}>
                    Pin granny to the toolbar. Open a YouTube video: the warning offers{" "}
                    <em>Close the tab</em> and <em>Continue</em>, both immediate.
                  </Step>
                </ol>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold">Safari</h3>
                <p className="mt-3 max-w-[62ch] text-[15.5px] leading-relaxed text-foreground/90">
                  Safari cannot sideload extensions - Apple&rsquo;s rule, not granny&rsquo;s.
                  The Safari build needs the source app signed with your Apple Development
                  team (a free Apple ID is enough).
                </p>
                <ol className="mt-5 space-y-5">
                  <Step n={1}>
                    Run <Code>scripts/install-extension.sh</Code> from the source checkout;
                    it builds and installs the signed app.
                  </Step>
                  <Step n={2}>
                    Run the app once, then open <em>Safari &gt; Settings &gt; Extensions</em>{" "}
                    and tick <em>granny</em>.
                  </Step>
                  <Step n={3}>
                    Grant website access: <em>Always Allow on Every Website</em>. The grant
                    and the toggle are one-time.
                  </Step>
                </ol>
              </div>

              <p className="max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
                Not on the Chrome Web Store or the App Store yet. This is the pilot path:
                when the extension ships on the stores, both browsers will be one click.
              </p>
            </div>

            <StitchPanel className="lg:sticky lg:top-24">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
                What the extension adds
              </p>
              <Ledger
                className="mt-4"
                rows={[
                  {
                    term: "Content verdicts",
                    children: (
                      <>
                        A movie or vlog on YouTube gets a negotiable warning -{" "}
                        <em>Close the tab</em> or <em>Continue</em>. Feeds get the same.
                        Shorts stay a hard block.
                      </>
                    ),
                  },
                  {
                    term: "Without it",
                    children: (
                      <>
                        Facebook, Instagram and TikTok die at <Code>/etc/hosts</Code>; the
                        tab janitor closes YouTube Shorts and the curated red-flag list;
                        entertainment apps are closed on launch. No content-aware overlays.
                      </>
                    ),
                  },
                  {
                    term: "Pairing",
                    children: (
                      <>
                        The extension finds the app on loopback and fetches its token.
                        Nothing to paste.
                      </>
                    ),
                  },
                  {
                    term: "Privacy",
                    children: (
                      <>
                        Verdicts are cached on your Mac. Classifier calls happen only if you
                        configured keys.
                      </>
                    ),
                  },
                ]}
              />
            </StitchPanel>
          </div>
        </Section>

        <Section
          skipReveal
          tone="raised"
          title="Check it works."
          second="And when it does not."
        >
          <Ledger
            rows={[
              {
                term: "No warning on a video",
                children: (
                  <>
                    Reload the extension (<Code>chrome://extensions</Code> -&gt; granny
                    -&gt; Reload). A task&rsquo;s allowed surfaces can legitimately open a
                    site - check the task list first.
                  </>
                ),
              },
              {
                term: "The warning never leaves",
                children: (
                  <>
                    The granny app must be running. Without it the extension fails closed
                    on the hard list only.
                  </>
                ),
              },
              {
                term: "Safari lists no granny",
                children: (
                  <>
                    Safari loads signed extensions only. Build from source and run the app
                    once, then look again in Safari &gt; Settings &gt; Extensions.
                  </>
                ),
              },
              {
                term: "After a granny update",
                children: (
                  <>
                    Use the menu again: it copies the fresh extension to{" "}
                    <Code>~/Applications/granny-extension</Code>. Then Reload in{" "}
                    <Code>chrome://extensions</Code>.
                  </>
                ),
              },
            ]}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <LeatherButton href="/#install">Install granny</LeatherButton>
            <OutlineButton href={`${REPO}/blob/master/docs/INSTALL.md`} external>
              Full install guide
            </OutlineButton>
          </div>
        </Section>
      </main>
      <SiteFooter base="/" />
    </>
  );
}
