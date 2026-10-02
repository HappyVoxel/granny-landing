"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
      });

      // Anchors glide instead of jumping.
      const anchors = gsap.utils.toArray<HTMLAnchorElement>('a[href^="#"]');
      const onClick = (event: Event) => {
        const href = (event.currentTarget as HTMLAnchorElement).getAttribute("href");
        if (!href || href.length < 2) return;
        const target = document.querySelector(href);
        if (!(target instanceof HTMLElement)) return;
        event.preventDefault();
        const y = target.getBoundingClientRect().top + smoother.scrollTop() - 80;
        smoother.scrollTo(y, true);
      };
      anchors.forEach((anchor) => anchor.addEventListener("click", onClick));

      // Hero: a quiet entrance, one beat each.
      const heroRoot = document.querySelector("[data-hero]");
      const heroItems = heroRoot
        ? [
            ...Array.from(heroRoot.querySelectorAll(":scope > div > *")),
            heroRoot.querySelector("figure"),
          ].filter((el): el is HTMLElement => el instanceof HTMLElement)
        : [];
      if (heroItems.length) {
        gsap.from(heroItems, {
          y: 26,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.05,
        });
      }

      // Headlines arrive word by word from behind a mask.
      gsap.utils.toArray<HTMLElement>("[data-reveal-group] h2").forEach((heading) => {
        const split = SplitText.create(heading, {
          type: "lines,words",
          mask: "lines",
          linesClass: "split-line",
        });
        gsap.from(split.words, {
          yPercent: 120,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.045,
          scrollTrigger: { trigger: heading, start: "top 88%", once: true },
        });
      });

      // Everything else in a section rises in together, once.
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const kids = Array.from(group.children).filter(
          (el) => el.tagName !== "HEADER",
        ) as HTMLElement[];
        const header = group.querySelector("header");
        if (header) {
          gsap.from(header, {
            autoAlpha: 0,
            y: 14,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 82%", once: true },
          });
        }
        if (!kids.length) return;
        gsap.from(kids, {
          y: 24,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.09,
          scrollTrigger: { trigger: group, start: "top 82%", once: true },
        });
      });

      // The day cycle ledger pins while its hours light up (desktop only:
      // on a phone the pinned moment costs more than it gives).
      const dayLedger = document.querySelector("#day dl");
      if (dayLedger) {
        const rows = Array.from(dayLedger.children).filter(
          (el): el is HTMLElement => el instanceof HTMLElement,
        );
        if (rows.length) {
          const mm = gsap.matchMedia();
          mm.add("(min-width: 768px)", () => {
            gsap.from(rows, {
              autoAlpha: 0.12,
              y: 26,
              duration: 1,
              ease: "power2.out",
              stagger: 0.45,
              scrollTrigger: {
                trigger: dayLedger,
                start: "top 12%",
                end: "+=70%",
                pin: dayLedger,
                scrub: 1,
                anticipatePin: 1,
              },
            });
          });
        }
      }

      // The seam sews itself as the panel scrolls in.
      gsap.utils.toArray<SVGRectElement>("[data-stitch-rect]").forEach((rect) => {
        const panel = rect.closest("figure, div") ?? rect;
        gsap.fromTo(
          rect,
          { strokeDashoffset: 44, autoAlpha: 0.15 },
          {
            strokeDashoffset: 0,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 92%",
              end: "top 45%",
              scrub: true,
            },
          },
        );
      });

      // The footer signature drifts up as it enters.
      gsap.utils.toArray<HTMLElement>("[data-wordmark]").forEach((mark) => {
        gsap.from(mark, {
          yPercent: 26,
          autoAlpha: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: mark,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });
      });

      // Scroll progress in the margin.
      const fill = document.querySelector("[data-progress-fill]");
      if (fill) {
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3,
            },
          },
        );
      }

      return () => {
        anchors.forEach((anchor) => anchor.removeEventListener("click", onClick));
      };
    });

    return () => ctx.revert();
  }, []);

  return null;
}
