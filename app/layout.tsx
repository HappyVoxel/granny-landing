import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ogImage from "@/assets/og.png";

const body = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const label = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-label",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://granny.happyvoxel.com"),
  title: "granny - the strict macOS task enforcer",
  description:
    "Work first, play after. granny blocks the entertainment while your tasks are open, checks your claims, and unlocks the fun only when the list is done.",
  openGraph: {
    title: "granny - work first, play after",
    description:
      "A strict macOS task enforcer. Free and open source, native Swift, no account.",
    images: [{ url: ogImage.src, width: 1280, height: 640 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "granny - work first, play after",
    description:
      "A strict macOS task enforcer. Free and open source, native Swift, no account.",
    images: [ogImage.src],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        body.variable,
        display.variable,
        label.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-sans">
        <div aria-hidden className="paper-grain" />
        {children}
      </body>
    </html>
  );
}
