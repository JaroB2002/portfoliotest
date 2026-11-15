import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { projects, services } from "../data";

export function Home() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.to(".hero__name em", { y: 0, duration: 1.05, stagger: 0.1, delay: 0.05 })
      .to(
        [".hero__kicker", ".hero__claim", ".hero__row", ".hero__status"],
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
        "-=0.45",
      );
    return () => {
      tl.kill();
    };
  }, []);

  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero wrap" aria-label="Introduction">
        <div className="hero__main">
          <p className="hero__kicker">
            <span className="hero__kicker-dot" aria-hidden="true" />
            Antwerp · Creative × Digital Marketing
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
              I connect advertising thinking, UX/UI and digital marketing — from
              sharp concepts to campaigns that perform. Currently Digital
              Marketing Consultant at{" "}
              <a href="https://didiom.be/" target="_blank" rel="noreferrer">
                DIDIOM
              </a>
              .
            </p>
            <div className="hero__actions">
              <Link className="btn btn--ink" to="/work">
                <span>View work</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="btn btn--ghost" to="/about">
                About me
              </Link>
            </div>
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

      <section className="band band--dark">
        <div className="wrap band__row reveal">
          <p className="band__label">What I do</p>
          <div className="marquee-line" aria-hidden="true">
            <div className="marquee-line__track">
              {[...services, ...services].map((item, i) => (
                <span key={`${item}-${i}`}>
                  {item}
                  <i>✲</i>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section__head reveal">
          <div>
            <p className="section__label">Selected work</p>
            <h2 className="section__title">Proof over pitch.</h2>
          </div>
          <Link className="text-link" to="/work">
            All projects →
          </Link>
        </div>

        <div className="feature-list">
          {featured.map((project, index) => (
            <Link
              className="feature reveal"
              to={`/work/${project.slug}`}
              key={project.slug}
            >
              <div className="feature__media">
                <img
                  src={project.image}
                  alt=""
                  loading={index === 0 ? "eager" : "lazy"}
                  width={1600}
                  height={1131}
                />
              </div>
              <div className="feature__body">
                <div className="feature__meta">
                  <span>/{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.year}</span>
                  <span>{project.client}</span>
                </div>
                <h3 className="feature__title">{project.title}</h3>
                <p className="feature__blurb">{project.blurb}</p>
                <div className="feature__tags">
                  {project.disciplines.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="feature__cta">
                  Open case <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--split wrap">
        <div className="reveal">
          <p className="section__label">Position</p>
          <h2 className="section__title">One brain. Several desks.</h2>
        </div>
        <div className="reveal">
          <p className="lead">
            Not just concepts. Not just ads. Not just interfaces. I move across
            creative, digital marketing and product so ideas survive the real
            world — briefs, budgets, channels and all.
          </p>
          <div className="pill-row">
            <span>Advertising</span>
            <span>Digital marketing</span>
            <span>UX / UI</span>
            <span>Brand</span>
            <span>Frontend</span>
            <span>AI workflow</span>
          </div>
          <div className="hero__actions" style={{ marginTop: "1.75rem" }}>
            <Link className="btn btn--ink" to="/about">
              Full story
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Start a brief
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
