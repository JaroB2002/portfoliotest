import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { capabilities, projects } from "./data";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (!root) return;

    const lenis = reduced
      ? null
      : new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

    let rafId = 0;
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    const ctx = gsap.context(() => {
      const nameLines = gsap.utils.toArray<HTMLElement>(".hero__brand em");
      const heroBits = gsap.utils.toArray<HTMLElement>([
        ".hero__role",
        ".hero__line",
        ".hero__cta",
      ]);

      if (!reduced) {
        gsap.to(".hero__media img", {
          scale: 1,
          duration: 2.2,
          ease: "power3.out",
        });

        gsap.to(nameLines, {
          y: 0,
          duration: 1.15,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.15,
        });

        gsap.to(heroBits, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.75,
        });

        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          });
        });

        gsap.utils.toArray<HTMLElement>(".project").forEach((project) => {
          const img = project.querySelector("img");
          if (!img) return;
          gsap.fromTo(
            img,
            { scale: 1.18, yPercent: 6 },
            {
              scale: 1.05,
              yPercent: 0,
              ease: "none",
              scrollTrigger: {
                trigger: project,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      } else {
        gsap.set([...nameLines, ...heroBits, ".reveal-up"], {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
      }
    }, root);

    return () => {
      ctx.revert();
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site" ref={rootRef}>
      <header className={`nav${menuOpen ? " open" : ""}`}>
        <div className="container nav__inner">
          <a className="nav__brand" href="#top" onClick={closeMenu}>
            Jaro Brichau
          </a>
          <p className="nav__place">Antwerp — Belgium</p>
          <nav className="nav__links" aria-label="Primary">
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero__media" aria-hidden="true">
            <img
              src="/media/hero.webp"
              alt=""
              width={1920}
              height={1080}
              fetchPriority="high"
            />
            <div className="hero__veil" />
          </div>
          <div className="hero__content">
            <h1 className="hero__brand">
              <span>
                <em>Jaro</em>
              </span>
              <span>
                <em>Brichau</em>
              </span>
            </h1>
            <p className="hero__role">Creative</p>
            <div className="hero__meta">
              <p className="hero__line">
                A 24-year-old Belgian creative making ideas matter — brands,
                stories, and digital things that stick.
              </p>
              <a className="hero__cta" href="#work">
                <span className="hero__cta-dot" aria-hidden="true" />
                <span>See the work</span>
                <span className="hero__cta-bar" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...capabilities, ...capabilities].map((item, i) => (
              <span key={`${item}-${i}`}>
                {item}
                <i>✲</i>
              </span>
            ))}
          </div>
        </div>

        <section className="intro" aria-label="Positioning">
          <div className="container intro__grid">
            <div className="reveal-up">
              <p className="intro__label">Now</p>
              <h2 className="intro__title">I think in impact.</h2>
            </div>
            <div className="reveal-up">
              <p className="intro__copy">
                Obsessed with creative ideas. Focused on turning them into{" "}
                <strong>brands, stories and digital things</strong> that matter.
                DXD · Creative Belgium School · Digital Communication &amp; AI —
                and 3rd place at YoungDogs Belgium.
              </p>
              <div className="intro__meta">
                <span>
                  Creative since <b>/’24</b>
                </span>
                <span>
                  Status <b>Looking for work</b>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="work" id="work" aria-label="Selected work">
          <div className="work__head reveal-up">
            <h2 className="work__title">Selected work</h2>
            <p className="work__count">{String(projects.length).padStart(2, "0")} projects</p>
          </div>
          <div className="work__list">
            {projects.map((project, index) => (
              <article className="project" key={project.slug}>
                <div className="project__media" aria-hidden="true">
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    width={1600}
                    height={1131}
                  />
                  <div className="project__shade" />
                </div>
                <div className="project__body">
                  <div className="project__meta">
                    <span className="project__index">
                      /{String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{project.tag}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="project__name">{project.title}</h3>
                  <div className="project__foot">
                    <p className="project__blurb">{project.blurb}</p>
                    <a
                      className="project__link"
                      href={`https://jarobrichau.be/work/${
                        project.slug === "masked-giant"
                          ? "themaskedgiant"
                          : project.slug === "missing-kidt"
                            ? "themissingkidt"
                            : project.slug === "aging-murals"
                              ? "agingmurals"
                              : "naperol"
                      }.html`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Open case</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-label="About">
          <div className="container about__grid">
            <div className="about__visual reveal-up">
              <img
                src="/media/profile.webp"
                alt="Portrait of Jaro Brichau"
                loading="lazy"
                width={900}
                height={1200}
              />
            </div>
            <div className="reveal-up">
              <p className="about__label">About</p>
              <h2 className="about__title">
                Fueled by ideas. Driven by chaos. Saved by deadlines.
              </h2>
              <p className="about__copy">
                I’m Jaro — advertising, UX/UI and brand thinking in one head.
                I mix creative guts with sharp strategy so the work doesn’t just
                look good; it lands.
              </p>
              <ul className="about__list">
                <li>
                  <span>2026</span>
                  <p>Digital Communication &amp; AI · Internship @ Fightclub</p>
                </li>
                <li>
                  <span>2025</span>
                  <p>Creative Belgium School · Berlin Creative Studio</p>
                </li>
                <li>
                  <span>2024</span>
                  <p>Digital Experience Design · Internship @ Strarex</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-label="Contact">
          <div className="container">
            <p className="contact__eyebrow reveal-up">Available for roles &amp; projects</p>
            <h2 className="contact__title reveal-up">
              <a href="mailto:jaro.brichau@outlook.com">Let’s make it stick.</a>
            </h2>
            <div className="contact__row reveal-up">
              <div className="contact__links">
                <a href="mailto:jaro.brichau@outlook.com">jaro.brichau@outlook.com</a>
                <a href="tel:+32479398678">+32 (0)479 39 86 78</a>
                <a
                  href="https://www.linkedin.com/in/jaro-brichau-2a20b118a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <p className="contact__note">
                Antwerp-based. Open to agencies, in-house creative teams, and
                sharp freelance briefs.
              </p>
            </div>
          </div>
          <footer className="footer">
            <span>© {new Date().getFullYear()} Jaro Brichau</span>
            <span>Built as a portfolio experiment</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
