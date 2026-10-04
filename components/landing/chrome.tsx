import Image from "next/image";
import { LeatherButton } from "@/components/landing/bits";
import logo from "@/assets/logo.png";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width="19" height="19" className={className} fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

const REPO = "https://github.com/HappyVoxel/granny";

// The header stays at three words; the page's sections 01-05 all hang off
// "Engine". The footer keeps the full list.
const NAV_HEADER = [
  { href: "#day", label: "A day with her" },
  { href: "#difference", label: "Engine" },
  { href: "#faq", label: "FAQ" },
];

const NAV_FOOTER = [
  { href: "#day", label: "A day with her" },
  { href: "#difference", label: "The difference" },
  { href: "#layers", label: "Four layers" },
  { href: "#honesty", label: "Honesty" },
  { href: "#install", label: "Install" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 border-x border-border px-6 md:px-10 xl:max-w-7xl">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src={logo}
            alt="granny"
            width={28}
            height={28}
            className="rounded-[7px]"
            priority
          />
          <span className="font-heading text-lg font-semibold tracking-tight">granny</span>
        </a>
        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV_HEADER.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[14.5px] text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-200 hover:text-foreground hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            aria-label="granny on GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubMark />
          </a>
          <LeatherButton href="#install" className="h-9 px-4 text-[14px]">
            Install granny
          </LeatherButton>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10 xl:max-w-7xl">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src={logo} alt="" width={24} height={24} className="rounded-[6px]" />
            <span className="font-heading text-base font-semibold">granny</span>
          </div>
          <p className="mt-3 max-w-[36ch] text-[14.5px] leading-relaxed text-muted-foreground">
            A strict macOS task enforcer. Work first, play after.
          </p>
        </div>
        <nav aria-label="Product" className="text-[14.5px]">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
            Product
          </p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {NAV_FOOTER.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Elsewhere" className="text-[14.5px]">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
            Elsewhere
          </p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <a href={REPO} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`${REPO}/releases`}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Releases
              </a>
            </li>
            <li>
              <a
                href={`${REPO}/blob/master/docs/INSTALL.md`}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Install guide
              </a>
            </li>
            <li>
              <a
                href={`${REPO}/blob/master/LICENSE`}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                AGPL-3.0
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div aria-hidden className="relative h-[17vw] min-h-[88px] select-none overflow-hidden">
        <span
          data-wordmark
          className="absolute bottom-0 left-6 block font-heading text-[22vw] leading-[0.82] font-semibold tracking-tight text-brass/25 md:left-10"
        >
          granny
        </span>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-6xl px-6 py-5 font-mono xl:max-w-7xl text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:px-10">
          Free and open source · AGPL-3.0 · Built natively for macOS
        </p>
      </div>
    </footer>
  );
}
