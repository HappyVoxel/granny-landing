"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Copy, FileText, Sparkles } from "lucide-react";

const MARKDOWN = "/blog/install-extension.md";
const SKILL = "/skills/granny-extension/SKILL.md";
const PROMPT =
  "Install the granny browser extension on this Mac. Follow this skill: https://granny.happyvoxel.com" +
  SKILL;

export function CopyForAgent() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<"page" | "skill" | null>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (root.current && !root.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  async function copy(url: string, which: "page" | "skill") {
    try {
      const text = await fetch(url).then((response) => response.text());
      await navigator.clipboard.writeText(text);
      setCopied(which);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard or fetch unavailable; the markdown link still works */
    }
    setOpen(false);
  }

  const itemClass =
    "flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-brass/10";

  return (
    <div ref={root} className="relative inline-block text-left">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 items-center gap-2 rounded-md border border-brass/50 px-5 text-[15px] font-semibold text-foreground transition-colors hover:bg-brass/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
      >
        {copied ? <Check className="size-4 text-brass" /> : <Copy className="size-4" />}
        Copy for your agent
        <ChevronDown className={`size-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute z-50 mt-2 w-[22rem] divide-y divide-border rounded-md border border-border bg-popover shadow-[0_18px_50px_-18px_rgb(0_0_0/0.7)]"
        >
          <button type="button" role="menuitem" className={itemClass} onClick={() => copy(MARKDOWN, "page")}>
            <FileText className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>
              <span className="block text-[14.5px] font-semibold text-foreground">
                Copy page as Markdown
              </span>
              <span className="block text-[13px] text-muted-foreground">
                The guide as plain text, for an LLM
              </span>
            </span>
          </button>
          <button type="button" role="menuitem" className={itemClass} onClick={() => copy(SKILL, "skill")}>
            <Sparkles className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>
              <span className="block text-[14.5px] font-semibold text-foreground">
                Copy as skill
              </span>
              <span className="block text-[13px] text-muted-foreground">
                SKILL.md, ready for any agent
              </span>
            </span>
          </button>
          <a href={MARKDOWN} target="_blank" rel="noreferrer" role="menuitem" className={itemClass}>
            <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>
              <span className="block text-[14.5px] font-semibold text-foreground">
                View as Markdown
              </span>
              <span className="block text-[13px] text-muted-foreground">/blog/install-extension.md</span>
            </span>
          </a>
          <a
            href={`https://claude.ai/new?q=${encodeURIComponent(PROMPT)}`}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
            className={itemClass}
          >
            <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>
              <span className="block text-[14.5px] font-semibold text-foreground">Open in Claude</span>
              <span className="block text-[13px] text-muted-foreground">
                Ask Claude to do it
              </span>
            </span>
          </a>
          <a
            href={`https://chatgpt.com/?q=${encodeURIComponent(PROMPT)}`}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
            className={itemClass}
          >
            <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>
              <span className="block text-[14.5px] font-semibold text-foreground">
                Open in ChatGPT
              </span>
              <span className="block text-[13px] text-muted-foreground">
                Ask ChatGPT to do it
              </span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
