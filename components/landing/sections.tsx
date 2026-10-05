import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Eyebrow,
  LeatherButton,
  Ledger,
  OutlineButton,
  Section,
  Spec,
  StitchFrame,
  StitchOverlay,
  TwoTone,
} from "@/components/landing/bits";
import { CopyCommand } from "@/components/landing/copy-command";
import appShot from "@/assets/app-dark.png";
import settingsShot from "@/assets/settings-dark.png";

const REPO = "https://github.com/HappyVoxel/granny";
const DOWNLOAD_DMG = `${REPO}/releases/latest/download/granny-macos.dmg`;

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl border-x border-border px-6 pt-16 pb-14 md:px-10 md:pt-24 xl:max-w-[84rem] 2xl:max-w-[96rem] min-[1800px]:max-w-[104rem]">
        <div data-hero className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow className="mb-5">macOS 14+ · native Swift · AGPL-3.0</Eyebrow>
            <h1 className="text-5xl leading-[1.02] font-semibold tracking-tight sm:text-6xl">
              <span className="block text-foreground">Work first.</span>
              <span className="block text-muted-foreground">Play after.</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-foreground/85">
              She asks what you are doing today, blocks the entertainment while the list
              is open, and unlocks the fun only when it is done.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LeatherButton href="#install">Install granny</LeatherButton>
              <OutlineButton href={REPO} external>
                Read the source
              </OutlineButton>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Free and open source · No account · Bring your own keys
            </p>
          </div>
          <StitchFrame
            speed={0.95}
            caption="The notebook: today's tasks, each with the URLs that serve it"
            className="lg:translate-y-2"
          >
            <Image
              src={appShot}
              alt="granny's notebook showing today's tasks, the streak badge and their allowed URL surfaces"
              width={1060}
              height={1000}
              className="h-auto w-full"
              priority
            />
          </StitchFrame>
        </div>
      </div>
    </section>
  );
}

export function Story() {
  return (
    <Section id="story" className="bg-card/30">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow className="mb-6">Why granny</Eyebrow>
        <p className="font-heading text-[26px] leading-snug font-semibold sm:text-4xl">
          When you were little, she kept you.
        </p>
        <p className="mt-3 font-heading text-[26px] leading-snug text-muted-foreground sm:text-4xl">
          Sweets and games - after the homework.
        </p>
        <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.18em] text-brass">
          You grew up. The deal didn&rsquo;t.
        </p>
      </div>
    </Section>
  );
}

export function SpecStrip() {
  return (
    <section className="border-b border-border bg-card/50">
      <div className="mx-auto w-full max-w-6xl border-x border-border px-6 py-10 md:px-10 xl:max-w-[84rem] 2xl:max-w-[96rem] min-[1800px]:max-w-[104rem]">
        <Spec
          items={[
            { value: "3 tiers", label: "destiny", note: "rules, classifier, model" },
            { value: "4 layers", label: "enforcement", note: "hosts, extension, janitor, killer" },
            { value: "5 s", label: "app sweep", note: "entertainment apps, closed" },
            { value: "microseconds", label: "rules tier", note: "known red flags, no network" },
            { value: "BYOK", label: "AI keys", note: "OpenRouter, Laya, Jev - optional" },
            { value: "AGPL-3.0", label: "licence", note: "read it, change it" },
          ]}
        />
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Every navigation is judged by content, cached per URL, and written to the
          decision log.
        </p>
      </div>
    </section>
  );
}

export function DayCycle() {
  return (
    <Section
      id="day"
      eyebrow="01 · The day cycle"
      title="A day with granny."
      second="She runs the clock."
      skipReveal
    >
      <Ledger
        rows={[
          {
            term: "07:00 · intake",
            children: <>She asks for the list. Each line becomes a task with its URLs.</>,
          },
          {
            term: "All day · blocks on",
            children: (
              <>Facebook, Instagram, TikTok, porn and game portals die at the network layer.</>
            ),
          },
          {
            term: "List done · reward",
            children: (
              <>Blocks lift until bedtime. Unfinished tasks return tomorrow wearing a frog.</>
            ),
          },
          {
            term: "23:00 · bedtime",
            children: <>Blocks return. She nags about sleep, too.</>,
          },
          {
            term: "Any day · day off",
            children: <>One confirming question, no blocks, the chain frozen.</>,
          },
          {
            term: "🔥 streak",
            children: (
              <>
                A day banks when it ends with no frog left behind. Two clean days and the
                flame shows.
              </>
            ),
          },
        ]}
      />
    </Section>
  );
}

export function Difference() {
  const pairs = [
    { allowed: "A full YouTube video", judged: "YouTube Shorts (extension)", verdict: "blocked" },
    { allowed: "Focus music on YouTube", judged: "A movie on YouTube (extension)", verdict: "negotiable" },
    { allowed: "A tutorial", judged: "A vlog (extension)", verdict: "negotiable" },
  ] as const;
  return (
    <Section
      id="difference"
      eyebrow="02 · Content-aware"
      title="She knows the difference."
      second="A hard list cannot."
      lede="Same domain, different page. granny reads the page."
      tone="raised"
    >
      <div className="border-t border-border">
        {pairs.map(({ allowed, judged, verdict }) => (
          <div
            key={judged}
            className="grid grid-cols-1 gap-2 border-b border-border py-5 md:grid-cols-2 md:gap-8"
          >
            <p className="flex items-baseline gap-3 text-[15.5px] text-foreground">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brass">
                allowed
              </span>
              {allowed}
            </p>
            <p className="flex items-baseline gap-3 text-[15.5px] text-muted-foreground">
              <span
                className={`font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${
                  verdict === "blocked" ? "text-vermilion" : "text-brass"
                }`}
              >
                {verdict}
              </span>
              {judged}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-[64ch] text-[15px] leading-relaxed text-muted-foreground">
        Tasks carry their own allowed surfaces, so work can open a blocked site. A doubtful
        page is asked about, not shut.
      </p>
    </Section>
  );
}

function SafariMark() {
  return (
    <svg viewBox="0 0 24 24" width="52" height="52" aria-hidden>
      <defs>
        <linearGradient id="safari-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2AC9FA" />
          <stop offset="100%" stopColor="#1B6EF3" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#safari-grad)" />
      <circle cx="12" cy="12" r="8.9" fill="none" stroke="#fff" strokeWidth="1.2" />
      <path d="M15.96 8.04 11.01 11.01 12.99 12.99Z" fill="#FF3B30" />
      <path d="M8.04 15.96 11.01 11.01 12.99 12.99Z" fill="#fff" />
    </svg>
  );
}

function ChromeMark() {
  return (
    <svg viewBox="0 0 24 24" width="52" height="52" aria-hidden>
      <path d="M2.474 6.5A11 11 0 0 1 21.526 6.5L12 12Z" fill="#EA4335" />
      <path d="M2.474 6.5A11 11 0 0 0 12 23L12 12Z" fill="#FBBC05" />
      <path d="M21.526 6.5A11 11 0 0 1 12 23L12 12Z" fill="#34A853" />
      <circle cx="12" cy="12" r="5.5" fill="#fff" />
      <circle cx="12" cy="12" r="4.3" fill="#4285F4" />
    </svg>
  );
}

export function Browsers() {
  const browsers = [
    { name: "Safari", mark: <SafariMark /> },
    { name: "Google Chrome", mark: <ChromeMark /> },
  ];
  return (
    <Section id="browsers" eyebrow="Current supported browsers" tone="raised">
      <ul className="flex items-start justify-center gap-16 pt-2 sm:gap-24">
        {browsers.map((browser) => (
          <li key={browser.name} className="group flex flex-col items-center gap-4">
            <span className="opacity-45 grayscale transition-all duration-200 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0">
              {browser.mark}
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors group-hover:text-foreground">
              {browser.name}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        More are on the way.
      </p>
    </Section>
  );
}

export function Layers() {
  return (
    <Section
      id="layers"
      eyebrow="03 · The engine"
      title="Four layers, one verdict."
      second="Fast when it can be, careful when it must be."
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <Ledger
          className="mt-0"
          rows={[
            {
              term: "1 · rules",
              children: <>Known red flags in microseconds. Offline, always on.</>,
            },
            {
              term: "2 · classifier",
              children: <>Laya - or Jev - reads the page and answers in a typed verdict.</>,
            },
            {
              term: "3 · model",
              children: <>DeepSeek writes the intake and covers the unsure cases.</>,
            },
            {
              term: "4 · enforcement",
              children: <>Hosts, extension, janitor, killer - one verdict, four hands.</>,
            },
          ]}
        />
        <StitchFrame
          speed={1.04}
          caption="Settings: keys, classifier, tracing, language, watchlists"
        >
          <Image
            src={settingsShot}
            alt="granny's Settings window: keys, classifier, tracing, language and watchlists"
            width={1120}
            height={1700}
            className="h-auto w-full"
          />
        </StitchFrame>
      </div>
    </Section>
  );
}

export function Honesty() {
  return (
    <Section
      id="honesty"
      eyebrow="04 · No pretending"
      title="She is honest about her limits."
      second="That is the point."
    >
      <Ledger
        rows={[
          {
            term: "sudo exists",
            children: <>You can always bypass her. She makes it loud and slow instead.</>,
          },
          {
            term: "Safari caches",
            children: <>Only Safari can purge its own stores - the extension does it on block.</>,
          },
          {
            term: "Private Relay",
            children: <>A tunnel opened before the block survives. She blocks the ingress and tells you.</>,
          },
          {
            term: "Fail open",
            children: <>Daemon down? The hard list still blocks; nothing else does.</>,
          },
        ]}
      />
    </Section>
  );
}

export function Privacy() {
  return (
    <Section
      id="privacy"
      eyebrow="05 · BYOK"
      title="Your keys. Your machine."
      second="No account."
      tone="raised"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <Ledger
          className="mt-0"
          rows={[
            {
              term: "Local by default",
              children: (
                <>
                  127.0.0.1 only. The extension pairs over loopback - no token to paste.
                </>
              ),
            },
            {
              term: "AI optional",
              children: <>No keys? rules still run. Keys? page context goes to your provider, nothing else.</>,
            },
            {
              term: "Config stays home",
              children: (
                <>
                  <code className="font-mono text-[13px]">
                    ~/.config/granny/config.json
                  </code>
                  , mode 600. The helper owns /etc/hosts and nothing else.
                </>
              ),
            },
          ]}
        />
        <div className="relative rounded-md border border-border bg-card/70 p-6">
          <StitchOverlay radius={5} />
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
            Optional tiers
          </p>
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-foreground/90">
            <li>
              <strong className="font-semibold">OpenRouter</strong> - intake and the
              fallback model.
            </li>
            <li>
              <strong className="font-semibold">Laya or Jev</strong> - the classifier.
            </li>
            <li>
              <strong className="font-semibold">Langfuse</strong> - traces, if you want
              them.
            </li>
          </ul>
          <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">
            Pasted once in Settings, checked live, stored locally.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Install() {
  return (
    <Section
      id="install"
      eyebrow="06 · Install"
      title="Install it."
      second="She will take it from there."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
            Homebrew
          </p>
          <div className="mt-3 space-y-2">
            <CopyCommand text="brew tap happyvoxel/tap" />
            <CopyCommand text="brew install --cask granny" />
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
            Not notarised yet - right-click Open once if macOS hesitates.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LeatherButton href={DOWNLOAD_DMG} external>
              Download for Mac
            </LeatherButton>
            <OutlineButton href="/blog/install-extension/">
              Extension guide
            </OutlineButton>
            <OutlineButton href={`${REPO}/blob/master/docs/INSTALL.md`} external>
              Install guide
            </OutlineButton>
          </div>
        </div>
        <div className="relative rounded-md border border-border bg-card/70 p-6">
          <StitchOverlay radius={5} />
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
            Then, honestly
          </p>
          <ol className="mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/90">
            <li>
              <span className="font-semibold">1.</span> Approve the admin prompt once -
              the helper takes /etc/hosts.
            </li>
            <li>
              <span className="font-semibold">2.</span> Two toggles stay manual: Safari&rsquo;s
              checkbox, Chrome&rsquo;s Load unpacked.
            </li>
            <li>
              <span className="font-semibold">3.</span> Paste keys, or don&rsquo;t - she works
              either way.
            </li>
          </ol>
          <p className="mt-5 border-t border-border pt-4 text-[14px] text-muted-foreground">
            Free. No licence, no trial. Sponsor if she earns it.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Faq() {
  const items = [
    {
      q: "Is granny really free?",
      a: "Yes. AGPL-3.0, full app, no feature gate. Sponsors pay for the next release.",
    },
    {
      q: "Does granny see my browsing?",
      a: "The extension sends the page URL, title, channel and description to a daemon on your Mac. With AI keys, that context goes to your provider for a verdict; without, only the offline rules run.",
    },
    {
      q: "Can I bypass it?",
      a: "Yes - sudo always wins, by design. She is not security software; she makes the bypass loud and slow.",
    },
    {
      q: "Do I need AI keys?",
      a: "No. Rules alone work. OpenRouter adds intake and fallback; Laya or Jev add the classifier.",
    },
    {
      q: "What can it block?",
      a: "Whole domains via /etc/hosts, URL patterns like YouTube Shorts, and entertainment apps, swept every 5 seconds.",
    },
    {
      q: "What happens at bedtime?",
      a: "Blocks return at 23:00, the day resets at 07:00. The streak banks only a day that ends with no frog left behind.",
    },
  ];
  return (
    <Section id="faq" eyebrow="07 · Questions" title="Asked, answered." second="No marketing voice.">
      <Accordion className="border-t border-border">
        {items.map((item) => (
          <AccordionItem key={item.q} className="border-b border-border">
            <AccordionTrigger className="py-5 text-[16px] text-foreground hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent>
              <p className="max-w-[68ch] text-[15px] leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

export function ClosingCta() {
  return (
    <section className="border-t border-border bg-leather text-parchment">
      <div className="mx-auto w-full max-w-6xl border-x border-border px-6 py-20 md:px-10 xl:max-w-[84rem] 2xl:max-w-[96rem] min-[1800px]:max-w-[104rem]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <TwoTone
              first="Install it."
              second="Tell her what you are doing today."
              className="text-3xl sm:text-4xl [&>span:first-child]:text-parchment [&>span:last-child]:text-parchment/60"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <LeatherButton href={DOWNLOAD_DMG} external className="bg-brass text-walnut hover:bg-brass-dark">
                Download for Mac
              </LeatherButton>
              <OutlineButton
                href={REPO}
                external
                className="border-brass/60 text-parchment hover:bg-brass/15"
              >
                Read the source
              </OutlineButton>
            </div>
          </div>
          <div className="relative rounded-md border border-parchment/20 bg-black/20 p-6">
            <StitchOverlay radius={5} />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
              Or one line
            </p>
            <div className="mt-3">
              <CopyCommand variant="dark" text="brew install --cask happyvoxel/tap/granny" />
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-parchment/70">
              macOS 14+, Apple silicon or Intel. She is waiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
