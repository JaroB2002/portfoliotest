import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageMotion(deps: unknown[] = []) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(
          [
            ".reveal",
            ".reveal-line",
            ".hero-line",
            ".stagger-up",
            ".page-enter",
          ],
          { clearProps: "all", opacity: 1, y: 0, yPercent: 0 },
        );
        return;
      }

      gsap.fromTo(
        root,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" },
      );

      const pageEnter = root.querySelectorAll(".page-enter");
      if (pageEnter.length) {
        gsap.from(pageEnter, {
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.05,
        });
      }

      const heroLines = root.querySelectorAll(".hero-line");
      if (heroLines.length) {
        gsap.from(heroLines, {
          yPercent: 115,
          duration: 1.15,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.15,
        });
      }

      const stagger = root.querySelectorAll(".stagger-up");
      if (stagger.length) {
        gsap.from(stagger, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      root.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      root.querySelectorAll<HTMLElement>(".reveal-line").forEach((el) => {
        gsap.from(el, {
          yPercent: 110,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top 90%",
          },
        });
      });

      root.querySelectorAll<HTMLElement>(".parallax-img").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.12, yPercent: 4 },
          {
            scale: 1.02,
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".parallax-wrap") || img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => {
        if (root.contains(t.trigger as Element)) t.kill();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rootRef;
}
