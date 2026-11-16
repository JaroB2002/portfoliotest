import { Link } from "react-router-dom";
import { disciplines, timeline } from "../data";
import { usePageMotion } from "../hooks/usePageMotion";

export function About() {
  const rootRef = usePageMotion([]);

  return (
    <main ref={rootRef} className="page page--inner">
      <header className="page-hero padding-global">
        <h6 className="page-enter">About</h6>
        <h1 className="page-hero__title">
          <span className="line-mask"><span className="hero-line">Idea machine</span></span>
          <span className="line-mask"><span className="hero-line">with channel</span></span>
          <span className="line-mask"><span className="hero-line text-orange">sense.</span></span>
        </h1>
        <p className="page-hero__copy page-enter">
          Advertising, UX/UI, brand and digital marketing in one head. Currently consulting at DIDIOM,
          after Creative Belgium School, DXD and Digital Communication &amp; AI.
        </p>
      </header>

      <section className="padding-global about-spread">
        <div className="about__visual reveal parallax-wrap">
          <img className="parallax-img" src="/media/profile.webp" alt="Portrait of Jaro Brichau" />
        </div>
        <div className="reveal">
          <h2 className="about__lead">
            Fueled by ideas. Driven by chaos. Saved by deadlines. Backed by channels.
          </h2>
          <p className="about__copy">
            At DIDIOM I work as a Digital Marketing Consultant — in-house support for strategy,
            channels and execution. Around that sits a creative practice shaped by Berlin Creative
            Studio, Fightclub, YoungDogs and years of making things people actually click, share or remember.
          </p>
          <p className="about__copy">
            Pronounce Brichau like French <em>chaud</em> — warm/hot. Useful when the brief is cold.
          </p>
        </div>
      </section>

      <section className="skills-band">
        <div className="padding-global">
          <div className="work-head reveal">
            <h6>All-round</h6>
            <h2 className="heading-work heading-work--sm">
              <span className="line-mask"><span className="reveal-line">Desks I can</span></span>
              <span className="line-mask"><span className="reveal-line">sit at</span></span>
            </h2>
          </div>
          <div className="skills reveal">
            {disciplines.map((item, i) => (
              <article className="skill" key={item.label}>
                <span className="skill__index">/{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.label}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="padding-global section-pad">
        <div className="work-head reveal">
          <h6>Path</h6>
          <h2 className="heading-work heading-work--sm">
            <span className="line-mask"><span className="reveal-line">How I got</span></span>
            <span className="line-mask"><span className="reveal-line">here</span></span>
          </h2>
        </div>
        <ul className="timeline reveal">
          {timeline.map((item) => (
            <li key={`${item.year}-${item.title}`}>
              <span className="timeline__year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="timeline__place">
                  {item.place.includes("DIDIOM") ? (
                    <>
                      <a href="https://didiom.be/" target="_blank" rel="noreferrer">DIDIOM</a>
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
        <div className="cta-row reveal">
          <Link className="button-097" to="/contact">
            <span className="button-097__hover">
              <span className="button-097__bg is-hover" />
              <span className="button-097__inner"><span className="button-097__text">Got a brief?</span></span>
            </span>
            <span className="button-097__default" aria-hidden="true">
              <span className="button-097__bg is-default" />
              <span className="button-097__inner"><span className="button-097__text">Let’s talk</span></span>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
