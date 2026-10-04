import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brass",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function TwoTone({
  first,
  second,
  className,
}: {
  first: ReactNode;
  second: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl leading-tight font-semibold tracking-[-0.01em] sm:text-4xl",
        className,
      )}
    >
      <span className="text-foreground">{first}</span>{" "}
      <span className="text-muted-foreground">{second}</span>
    </h2>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  second,
  lede,
  children,
  tone = "parchment",
  className,
  skipReveal = false,
}: {
  id?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  second?: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
  tone?: "parchment" | "raised" | "leather";
  className?: string;
  skipReveal?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-t border-border",
        tone === "raised" && "bg-card/50",
        tone === "leather" && "bg-walnut",
        className,
      )}
    >
      <div
        {...(skipReveal ? {} : { "data-reveal-group": true })}
        className="mx-auto w-full max-w-6xl border-x border-border px-6 py-16 md:px-10 md:py-20 xl:max-w-[84rem] 2xl:max-w-[96rem] min-[1800px]:max-w-[104rem]"
      >
        {(eyebrow || title) && (
          <header className="mb-10 max-w-2xl">
            {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
            {title && <TwoTone first={title} second={second} />}
            {lede && (
              <p className="mt-4 max-w-[58ch] text-[17px] leading-relaxed text-muted-foreground">
                {lede}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export function Ledger({
  rows,
  className,
}: {
  rows: { term: ReactNode; children: ReactNode }[];
  className?: string;
}) {
  return (
    <dl className={cn("border-t border-border", className)}>
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid gap-2 border-b border-border py-5 md:grid-cols-[220px_1fr] md:gap-8"
        >
          <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brass">
            {row.term}
          </dt>
          <dd className="max-w-[62ch] text-[15.5px] leading-relaxed text-foreground/90">
            {row.children}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Spec({ items }: { items: { value: string; label: string; note?: string }[] }) {
  return (
    <dl className="grid grid-cols-2 border-t border-border md:grid-cols-3 lg:grid-cols-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="border-b border-border px-1 py-6 first:pl-0 md:px-5 md:[&:not(:first-child)]:border-l"
        >
          <dd className="tabular font-heading text-xl leading-tight font-semibold break-words text-foreground">
            {item.value}
          </dd>
          <dt className="mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {item.label}
          </dt>
          {item.note && (
            <p className="mt-2 text-[13px] leading-snug text-muted-foreground/80">{item.note}</p>
          )}
        </div>
      ))}
    </dl>
  );
}

/* A dashed brass seam. GSAP animates stroke-dashoffset on [data-stitch-rect]. */
export function StitchOverlay({ className, radius = 8 }: { className?: string; radius?: number }) {
  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-[7px] h-[calc(100%-14px)] w-[calc(100%-14px)]",
        className,
      )}
    >
      <rect
        data-stitch-rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        rx={radius}
        fill="none"
        stroke="var(--brass)"
        strokeOpacity="0.5"
        strokeWidth="1"
        strokeDasharray="5 5"
      />
    </svg>
  );
}

export function StitchFrame({
  children,
  caption,
  className,
  speed,
}: {
  children: ReactNode;
  caption?: ReactNode;
  className?: string;
  speed?: number;
}) {
  return (
    <figure
      {...(speed === undefined ? {} : { "data-speed": speed })}
      className={cn("w-full", className)}
    >
      <div className="relative isolate rounded-lg bg-gradient-to-b from-[#7a4f28] to-[#54351b] p-3 shadow-[0_30px_70px_-24px_rgb(0_0_0/0.7),0_10px_30px_-16px_rgb(0_0_0/0.6)] md:p-4">
        <StitchOverlay radius={10} />
        <div className="overflow-hidden rounded-md border border-black/50">{children}</div>
      </div>
      {caption && (
        <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* A stitched panel, for cards the seam should hold together. */
export function StitchPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative rounded-md border border-border bg-card/70 p-6", className)}>
      <StitchOverlay className="inset-[6px] h-[calc(100%-12px)] w-[calc(100%-12px)]" radius={6} />
      <div className="relative">{children}</div>
    </div>
  );
}

const buttonBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-[15px] font-semibold transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

export function LeatherButton({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        buttonBase,
        "bg-leather text-parchment shadow-[inset_0_1px_0_rgb(201_160_90/0.45),0_1px_2px_rgb(0_0_0/0.4)] hover:bg-leather-light",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function OutlineButton({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        buttonBase,
        "border border-brass/50 bg-transparent text-foreground hover:bg-brass/10",
        className,
      )}
    >
      {children}
    </a>
  );
}


