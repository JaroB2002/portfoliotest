import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { projects, stats } from "./data";

gsap.registerPlugin(ScrollTrigger);

const menuLinks = [
  { href: "#info", label: "Info" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

function PlayfairO({ children = "o" }: { children?: string }) {
  return <span className="playfair-o">{children}</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeWork, setActiveWork] = useState(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
      if (reduced) return;

      gsap.from(".header-top > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(".header-intro__wrap > *", {
        y: 24,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.25,
      });

      gsap.from(".hero-title .hero-line", {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.35,
      });

      gsap.from(".hero-portrait img", {
        scale: 1.15,
        duration: 1.6,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    });

    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    };
    onHash();
    window.addEventListener("hashchange", onHash);

    return () => {
      ctx.revert();
      window.removeEventListener("hashchange", onHash);
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    window.location.hash = href;
  };

  const project = projects[activeWork];

  return (
    <div className="page-wrapper">
      <div className={`menu-overlay${menuOpen ? " is-open" : ""}`}>
        <div className="menu-overlay__links">
          {menuLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              className="menu-link"
              onClick={() => go(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <nav className="navbar" aria-label="Floating">
        <a className="nav-button" href="#header" aria-label="Home">
          <span className="nav-mark">j</span>
        </a>
        <button
          className="nav-button is-menu"
          type="button"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span className="menu-dot" />
            <span className="menu-dot" />
            <span className="menu-dot" />
            <span className="menu-dot" />
            <span className="menu-dot" />
          </span>
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </nav>

      <section id="header" className="section-header">
        <div className="padding-global">
          <div className="hero-sequence" aria-hidden="true">
            <div className="hero-sequence__sticky">
              <div className="hero-portrait">
                <img
                  src="/media/profile.webp"
                  alt=""
                  width={900}
                  height={1125}
                />
              </div>
            </div>
          </div>

          <div className="section__header">
            <div className="header-top">
              <h6>jarobrichau.work</h6>
              <h6>portfolio 2026</h6>
            </div>

            <div className="header-bottom">
              <div className="header-intro__wrap">
                <h6 className="hide-mobile">Hi there</h6>
                <div className="header-text-wrapper">
                  <svg
                    className="star-icon"
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M21 0L22.1089 20.2315C22.1536 21.0354 23.0188 21.5299 23.7418 21.1641L42 11.999L24.8507 23.0654C24.1683 23.5036 24.1683 24.4924 24.8507 24.9346L42 36.001L23.7418 26.8359C23.0147 26.4701 22.1536 26.9646 22.1089 27.7685L21 48L19.8911 27.7685C19.8464 26.9646 18.9812 26.4701 18.2582 26.8359L0 35.997L17.1493 24.9306C17.8317 24.4924 17.8317 23.5036 17.1493 23.0614L0 11.999L18.2582 21.1641C18.9853 21.5299 19.8464 21.0354 19.8911 20.2315L21 0Z"
                      fill="#F34213"
                    />
                  </svg>
                  <p>
                    I turn sharp ideas into brands, stories and
                    <br />
                    channels that actually stick.
                  </p>
                </div>
              </div>
              <div className="line" />
              <h1 className="hero-title">
                <span className="line-mask">
                  <span className="hero-line">jarobrichau</span>
                </span>
                <span className="line-mask">
                  <span className="hero-line text-orange">.work</span>
                </span>
              </h1>
            </div>
          </div>

          <div id="info" className="section__info">
            <div className="col-2 is-intro">
              <h6>About</h6>
              <div className="info-right">
                <div className="stats-stack reveal">
                  {stats.map((item) => (
                    <div className="stats-wrapper" key={item.label}>
                      <h6>{item.label}</h6>
                      <h6 className="text-right">
                        {item.value.split("\n").map((part) => (
                          <span key={part}>
                            {part}
                            <br />
                          </span>
                        ))}
                      </h6>
                      <div className="line is-top" />
                    </div>
                  ))}
                </div>
                <a className="button-097" href="#work">
                  <span className="button-097__hover">
                    <span className="button-097__bg is-hover" />
                    <span className="button-097__inner">
                      <span className="button-097__text">Click here</span>
                    </span>
                  </span>
                  <span className="button-097__default" aria-hidden="true">
                    <span className="button-097__bg is-default" />
                    <span className="button-097__inner">
                      <span className="button-097__text">View work</span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-about">
        <div className="padding-global">
          <div className="about-pad">
            <h2 className="heading-2 reveal">
              I build ideas that stick —{" "}
              <em>
                <PlayfairO />nline
              </em>{" "}
              and bey
              <PlayfairO />
              nd
            </h2>
            <div className="line" />
            <div className="about-grid reveal">
              <h6>Because</h6>
              <p className="text-2-col">
                I’m Jaro Brichau — an all-round digital creative and Digital
                Marketing Consultant at DIDIOM in Antwerp. I bring advertising
                thinking, UX/UI, brand craft and channel execution together so
                ideas don’t die in a deck. From Creative Belgium School and
                YoungDogs to Fightclub and Berlin Creative Studio, I’ve learned
                to move from insight to idea to something people actually see,
                click or share. One brain. Several desks. Work that lands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-work">
        <div className="padding-global">
          <div className="work-head reveal">
            <h6>What you’re here for (I guess)</h6>
            <h2 className="heading-work">Work</h2>
          </div>
        </div>

        <div className="work-stage">
          <div className="work-stage__media">
            <img key={project.slug} src={project.image} alt="" />
          </div>
          <div className="work-stage__ui">
            <div className="work-stage__copy">
              <h3>{project.title}</h3>
              <p>{project.label}</p>
            </div>
            <div className="work-stage__counter">
              {String(activeWork + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </div>
          </div>
          <div className="work-stage__nav">
            <button
              type="button"
              onClick={() =>
                setActiveWork((i) => (i - 1 + projects.length) % projects.length)
              }
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => setActiveWork((i) => (i + 1) % projects.length)}
            >
              Next
            </button>
          </div>
        </div>

        <div className="padding-global">
          <div className="work-list reveal">
            {projects.map((item, index) => (
              <button
                type="button"
                className={`work-list__row${index === activeWork ? " is-active" : ""}`}
                key={item.slug}
                onClick={() => setActiveWork(index)}
              >
                <span>/{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <em>{item.label}</em>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-footer">
        <div className="footer-base">
          <div className="padding-global">
            <div className="footer-top reveal">
              <h6>Jarobrichau.work</h6>
              <h6>Portfolio 2026</h6>
            </div>
            <div className="footer-contacts reveal">
              <div>
                <div className="footer-block">
                  <h6>Phone</h6>
                  <a href="tel:+32479398678">+32 (0)479 39 86 78</a>
                </div>
                <div className="footer-block">
                  <h6>Mail</h6>
                  <a href="mailto:jaro.brichau@outlook.com">
                    jaro.brichau@outlook.com
                  </a>
                </div>
              </div>
              <div className="text-right">
                <div className="footer-block">
                  <h6>Linkedin</h6>
                  <a
                    href="https://www.linkedin.com/in/jaro-brichau-2a20b118a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @JaroBrichau
                  </a>
                </div>
                <div className="footer-block">
                  <h6>Currently</h6>
                  <a href="https://didiom.be/" target="_blank" rel="noreferrer">
                    DIDIOM · Antwerp
                  </a>
                </div>
              </div>
            </div>
            <div className="line" />
          </div>

          <div className="marquee" aria-hidden="true">
            <div className="marquee__track">
              {Array.from({ length: 6 }).map((_, i) => (
                <h3 className="marquee-text" key={i}>
                  jarobrichau<span className="text-orange">.work</span>
                </h3>
              ))}
            </div>
          </div>
          <div className="footer-gradient" />
        </div>
      </section>
    </div>
  );
}
