import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { disciplines, projects, timeline } from "./data";

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
          duration: 1.05,
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
      if (reduced) {
        gsap.set(
          [".hero__name em", ".hero__kicker", ".hero__claim", ".hero__row", ".reveal"],
          { clearProps: "all", opacity: 1, y: 0 },
        );
        return;
      }

      gsap.to(".hero__name em", {
        y: 0,
        duration: 1.1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.1,
      });

      gsap.to([".hero__kicker", ".hero__claim", ".hero__row"], {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.55,
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".project__media img").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.14 },
          {
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".project"),
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
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site" ref={rootRef}>
      <header className={`nav${menuOpen ? " open" : ""}`}>
        <div className="wrap">
          <div className="nav__bar">
            <a className="nav__brand" href="#top" onClick={closeMenu}>
              Jaro Brichau
            </a>
            <p className="nav__role">
              <strong>DIDIOM</strong> · Digital Marketing Consultant
            </p>
            <nav className="nav__links" aria-label="Primary">
              <a href="#work" onClick={closeMenu}>
                Work
              </a>
              <a href="#skills" onClick={closeMenu}>
                Skills
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
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap" aria-label="Introduction">
          <div className="hero__main">
            <p className="hero__kicker">
              <span className="hero__kicker-dot" aria-hidden="true" />
              Antwerp · Available for projects &amp; collaborations
            </p>
            <h1 className="hero__name">
              <span>
                <em>Jaro</em>
              </span>
              <span>
                <em>Brichau</em>
              </span>
            </h1>
            <p className="hero__claim">
              All-round digital creative.{" "}
              <mark>Ideas, craft &amp; channels.</mark>
            </p>
            <div className="hero__row">
              <p className="hero__copy">
                I connect advertising thinking, UX/UI and digital marketing —
                from sharp concepts to campaigns that actually perform. Currently
                Digital Marketing Consultant at{" "}
                <a href="https://didiom.be/" target="_blank" rel="noreferrer">
                  DIDIOM
                </a>
                .
              </p>
              <a className="hero__cta" href="#work">
                <span>Selected work</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="hero__status" aria-label="Current status">
            <div className="hero__status-item">
              <span>Now</span>
              <strong>
                Digital Marketing Consultant @{" "}
                <a href="https://didiom.be/" target="_blank" rel="noreferrer">
                  DIDIOM
                </a>
              </strong>
            </div>
            <div className="hero__status-item">
              <span>Based</span>
              <strong>Antwerp, Belgium</strong>
            </div>
            <div className="hero__status-item">
              <span>Focus</span>
              <strong>Creative × Performance × Product</strong>
            </div>
            <div className="hero__status-item">
              <span>Highlight</span>
              <strong>3rd · YoungDogs Belgium</strong>
            </div>
          </div>
        </section>

        <section className="section section--panel" id="skills" aria-label="Skills">
          <div className="wrap">
            <div className="section__head reveal">
              <div>
                <p className="section__label">All-round</p>
                <h2 className="section__title">One brain. Several desks.</h2>
              </div>
              <p className="section__aside">
                Not just concepts. Not just ads. Not just interfaces. I move
                across creative, digital marketing and product so ideas survive
                the real world.
              </p>
            </div>
            <div className="skills reveal">
              {disciplines.map((item, i) => (
                <article className="skill" key={item.label}>
                  <span className="skill__index">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="skill__label">{item.label}</h3>
                  <p className="skill__note">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work" aria-label="Selected work">
          <div className="wrap">
            <div className="section__head reveal">
              <div>
                <p className="section__label">Work</p>
                <h2 className="section__title">Selected proof</h2>
              </div>
              <p className="section__aside">
                Campaign concepts and impact pieces — the creative side of an
                all-round practice.
              </p>
            </div>
            <div className="work-list">
              {projects.map((project, index) => (
                <article className="project reveal" key={project.slug}>
                  <div className="project__media" aria-hidden="true">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      width={1600}
                      height={1131}
                    />
                  </div>
                  <div className="project__body">
                    <div>
                      <div className="project__meta">
                        <b>/{String(index + 1).padStart(2, "0")}</b>
                        <span>{project.client}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="project__title">{project.title}</h3>
                    </div>
                    <p className="project__blurb">{project.blurb}</p>
                    <div>
                      <div className="project__tags">
                        {project.disciplines.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <p style={{ marginTop: "1.1rem" }}>
                        <a
                          className="project__link"
                          href={project.caseUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Open case</span>
                          <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-label="About">
          <div className="wrap about-grid">
            <div className="about__visual reveal">
              <img
                src="/media/profile.webp"
                alt="Portrait of Jaro Brichau"
                loading="lazy"
                width={900}
                height={1125}
              />
            </div>
            <div className="reveal">
              <p className="section__label">About</p>
              <h2 className="about__lead">
                Idea machine with channel sense — currently consulting at DIDIOM.
              </h2>
              <p className="about__copy">
                DXD · Creative Belgium School · Digital Communication &amp; AI.
                I’ve concepted at Berlin Creative Studio, mixed data and design
                at Fightclub, and now bring that creative + digital mix into
                in-house marketing support at DIDIOM.
              </p>
              <ul className="timeline">
                {timeline.map((item) => (
                  <li key={`${item.year}-${item.title}-${item.place}`}>
                    <span className="timeline__year">{item.year}</span>
                    <div>
                      <h3 className="timeline__title">{item.title}</h3>
                      <p className="timeline__place">
                        {item.place.includes("DIDIOM") ? (
                          <>
                            <a
                              href="https://didiom.be/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              DIDIOM
                            </a>
                            {" — Antwerp"}
                          </>
                        ) : (
                          item.place
                        )}
                      </p>
                      <p className="timeline__detail">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-label="Contact">
          <div className="wrap">
            <p className="contact__label reveal">Let’s talk</p>
            <h2 className="contact__title reveal">
              <a href="mailto:jaro.brichau@outlook.com">Got a brief?</a>
            </h2>
            <div className="contact__row reveal">
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
                <a href="https://didiom.be/" target="_blank" rel="noreferrer">
                  DIDIOM
                </a>
              </div>
              <p className="contact__note">
                Open to creative collaborations, product/UX side quests, and
                digital marketing challenges — on top of my DIDIOM work.
              </p>
            </div>
            <footer className="footer">
              <span>© {new Date().getFullYear()} Jaro Brichau</span>
              <span>Creative × Digital Marketing</span>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
