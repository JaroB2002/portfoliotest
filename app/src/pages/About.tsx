import { Link } from "react-router-dom";
import { disciplines, timeline } from "../data";

export function About() {
  return (
    <div className="page">
      <header className="page-hero wrap reveal">
        <p className="section__label">About</p>
        <h1 className="page-hero__title">
          Idea machine with channel sense.
        </h1>
        <p className="page-hero__copy">
          I’m Jaro — advertising, UX/UI, brand and digital marketing in one head.
          Currently consulting at DIDIOM, after Creative Belgium School, DXD and
          a magna cum laude finish in Digital Communication &amp; AI.
        </p>
      </header>

      <section className="wrap about-spread">
        <div className="about__visual reveal">
          <img
            src="/media/profile.webp"
            alt="Portrait of Jaro Brichau"
            width={900}
            height={1125}
          />
        </div>
        <div className="reveal">
          <h2 className="about__lead">
            Fueled by ideas. Driven by chaos. Saved by deadlines. Backed by
            channels.
          </h2>
          <p className="about__copy">
            At DIDIOM I work as a Digital Marketing Consultant — in-house support
            for strategy, channels and execution. Around that sits a creative
            practice shaped by Berlin Creative Studio, Fightclub, YoungDogs and
            years of making things people actually click, share or remember.
          </p>
          <p className="about__copy">
            Pronounce Brichau like French <em>chaud</em> — warm/hot. Useful when
            the brief is cold.
          </p>
        </div>
      </section>

      <section className="section band--dark">
        <div className="wrap">
          <div className="section__head reveal">
            <div>
              <p className="section__label">All-round</p>
              <h2 className="section__title">Desks I can sit at</h2>
            </div>
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

      <section className="section wrap">
        <div className="section__head reveal">
          <div>
            <p className="section__label">Path</p>
            <h2 className="section__title">How I got here</h2>
          </div>
        </div>
        <ul className="timeline reveal">
          {timeline.map((item) => (
            <li key={`${item.year}-${item.title}-${item.place}`}>
              <span className="timeline__year">{item.year}</span>
              <div>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__place">
                  {item.place.includes("DIDIOM") ? (
                    <>
                      <a href="https://didiom.be/" target="_blank" rel="noreferrer">
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
      </section>

      <section className="wrap section reveal">
        <div className="cta-panel">
          <div>
            <p className="section__label">Contact</p>
            <h2 className="section__title">Got a brief?</h2>
          </div>
          <Link className="btn btn--ink" to="/contact">
            Let’s talk
          </Link>
        </div>
      </section>
    </div>
  );
}
