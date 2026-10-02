"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyCommand({
  text,
  variant = "default",
  className,
}: {
  text: string;
  variant?: "default" | "dark";
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <code
        className={cn(
          "block overflow-x-auto rounded-md border py-3 pr-12 pl-4 font-mono text-[13px] leading-relaxed",
          variant === "dark"
            ? "border-parchment/25 bg-black/20 text-parchment/90"
            : "border-border bg-foreground/[0.05] text-foreground",
        )}
      >
        {text}
      </code>
      <button
        type="button"
        aria-label={copied ? "Copied" : "Copy command"}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          } catch {
            /* clipboard unavailable; the command stays selectable */
          }
        }}
        className={cn(
          "absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center rounded border transition-colors",
          variant === "dark"
            ? "border-parchment/25 text-parchment/60 hover:border-brass/60 hover:text-brass"
            : "border-border text-muted-foreground hover:border-brass/60 hover:text-brass",
        )}
      >
        {copied ? <Check className="size-3.5 text-brass" /> : <Copy className="size-3.5" />}
      </button>
    </div>
  );
}
