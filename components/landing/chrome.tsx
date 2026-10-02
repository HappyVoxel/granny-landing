import Image from "next/image";
import { LeatherButton } from "@/components/landing/bits";

const REPO = "https://github.com/HappyVoxel/granny";

const NAV = [
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
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 border-x border-border px-6 md:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="granny"
            width={28}
            height={28}
            className="rounded-[7px]"
            priority
          />
          <span className="font-heading text-lg font-semibold tracking-tight">granny</span>
        </a>
        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[14.5px] text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-200 hover:text-foreground hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            GitHub
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
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={24} height={24} className="rounded-[6px]" />
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
            {NAV.map((item) => (
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
        <p className="mx-auto w-full max-w-6xl px-6 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:px-10">
          Free and open source · AGPL-3.0 · Built natively for macOS
        </p>
      </div>
    </footer>
  );
}
