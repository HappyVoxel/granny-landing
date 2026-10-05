import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/landing/chrome";
import { Ledger, LeatherButton, OutlineButton, Section, StitchFrame, StitchPanel } from "@/components/landing/bits";

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

function Step({
  n,
  text,
  children,
}: {
  n: number;
  text: ReactNode;
  children?: ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="font-heading text-lg font-semibold text-brass">{n}.</span>
      <div className="min-w-0 flex-1 space-y-5">
        <p className="max-w-[62ch] text-[15.5px] leading-relaxed text-foreground/90">{text}</p>
        {children}
      </div>
    </li>
  );
}

function Shot({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <StitchFrame caption={caption}>
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
    </StitchFrame>
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
          <div className="max-w-4xl space-y-14">
            <div>
              <h3 className="font-heading text-xl font-semibold">Chrome, Brave, Edge, Arc</h3>
              <ol className="mt-6 space-y-10">
                <Step
                  n={1}
                  text={
                    <>
                      In the granny menu choose <em>Install browser extension…</em> then{" "}
                      <em>Open browser settings</em>. granny copies the extension to{" "}
                      <Code>~/Applications/granny-extension</Code> and reveals it in Finder.
                    </>
                  }
                />
                <Step
                  n={2}
                  text={
                    <>
                      Open <Code>chrome://extensions</Code>. <em>Developer mode</em> is off
                      by default - it is the switch in the top-right corner.
                    </>
                  }
                >
                  <Shot
                    src="/guide/chrome-extensions-off.png"
                    alt="chrome://extensions with Developer mode off"
                    caption="Developer mode starts off"
                    width={1440}
                    height={900}
                  />
                </Step>
                <Step
                  n={3}
                  text={
                    <>
                      Turn on <em>Developer mode</em>.
                    </>
                  }
                >
                  <Shot
                    src="/guide/chrome-dev-mode.png"
                    alt="chrome://extensions with Developer mode on and the Load unpacked button visible"
                    caption="Developer mode on"
                    width={1440}
                    height={900}
                  />
                </Step>
                <Step
                  n={4}
                  text={
                    <>
                      Click <em>Load unpacked</em> and pick{" "}
                      <Code>~/Applications/granny-extension</Code>.
                    </>
                  }
                >
                  <Shot
                    src="/guide/chrome-picker.png"
                    alt="The folder picker with granny-extension selected"
                    caption="Pick the granny-extension folder"
                    width={1844}
                    height={952}
                  />
                </Step>
                <Step
                  n={5}
                  text={
                    <>
                      granny appears in the list, switched on. Every navigation goes through
                      granny; work first, play after.
                    </>
                  }
                >
                  <Shot
                    src="/guide/chrome-loaded.png"
                    alt="The extensions list showing granny loaded and enabled"
                    caption="Loaded and on"
                    width={1440}
                    height={900}
                  />
                </Step>
                <Step
                  n={6}
                  text={
                    <>
                      Open the extensions menu - the puzzle piece next to the address bar.
                      granny is there; pin it if you want the face on your toolbar.
                    </>
                  }
                />
                <Step
                  n={7}
                  text={
                    <>
                      Open a YouTube video. The warning offers <em>Close the tab</em> and{" "}
                      <em>Continue</em>, both immediate - and <em>Go back</em> to the feed.
                      Shorts stay a hard block.
                    </>
                  }
                >
                  <Shot
                    src="/guide/chrome-warn.png"
                    alt="The granny warning on a YouTube video with Close the tab, Continue and Go back"
                    caption="A movie on YouTube gets the negotiable warning"
                    width={1440}
                    height={900}
                  />
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
              <ol className="mt-6 space-y-10">
                <Step
                  n={1}
                  text={
                    <>
                      Run <Code>scripts/install-extension.sh</Code> from the source
                      checkout; it builds the Safari app signed with your team and installs
                      it.
                    </>
                  }
                />
                <Step
                  n={2}
                  text={
                    <>
                      Run <em>granny for Safari</em> once, then open{" "}
                      <em>Safari &gt; Settings &gt; Extensions</em> and tick <em>granny</em>.
                    </>
                  }
                >
                  <Shot
                    src="/guide/safari-extensions.png"
                    alt="Safari Settings, Extensions pane, with granny ticked"
                    caption="Safari > Settings > Extensions"
                    width={1896}
                    height={1424}
                  />
                </Step>
                <Step
                  n={3}
                  text={
                    <>
                      When Safari asks for website access, choose{" "}
                      <em>Always Allow on Every Website</em>. It lives later in{" "}
                      <em>Settings &gt; Websites &gt; granny</em>: <em>For other websites</em>,{" "}
                      <em>Allow</em>.
                    </>
                  }
                >
                  <Shot
                    src="/guide/safari-websites.png"
                    alt="The For other websites dropdown set to Allow in Safari's Websites settings"
                    caption="For other websites: Allow"
                    width={1140}
                    height={190}
                  />
                </Step>
                <Step
                  n={4}
                  text={
                    <>
                      Open a YouTube video: the same warning, same two immediate answers.
                    </>
                  }
                >
                  <Shot
                    src="/guide/safari-warn.png"
                    alt="The granny warning on a YouTube video in Safari"
                    caption="The warning, in Safari"
                    width={2872}
                    height={1946}
                  />
                </Step>
              </ol>
            </div>

            <StitchPanel>
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

            <p className="max-w-[62ch] text-[15.5px] leading-relaxed text-muted-foreground">
              Not on the Chrome Web Store or the App Store yet. This is the pilot path:
              when the extension ships on the stores, both browsers will be one click.
            </p>
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
