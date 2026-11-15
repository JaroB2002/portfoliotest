import { Link } from "react-router-dom";
import { projects } from "../data";

export function Work() {
  return (
    <div className="page">
      <header className="page-hero wrap reveal">
        <p className="section__label">Work</p>
        <h1 className="page-hero__title">Selected work</h1>
        <p className="page-hero__copy">
          Campaign concepts and impact pieces — the creative proof behind an
          all-round practice that now also lives in digital marketing at DIDIOM.
        </p>
      </header>

      <section className="wrap work-index">
        {projects.map((project, index) => (
          <Link
            className="work-row reveal"
            key={project.slug}
            to={`/work/${project.slug}`}
          >
            <div className="work-row__index">
              /{String(index + 1).padStart(2, "0")}
            </div>
            <div className="work-row__visual">
              <img
                src={project.image}
                alt=""
                loading="lazy"
                width={1200}
                height={850}
              />
            </div>
            <div className="work-row__copy">
              <div className="work-row__meta">
                <span>{project.year}</span>
                <span>{project.client}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.blurb}</p>
              <div className="feature__tags">
                {project.disciplines.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="work-row__arrow" aria-hidden="true">
              →
            </div>
          </Link>
        ))}
      </section>

      <section className="wrap section reveal">
        <div className="cta-panel">
          <div>
            <p className="section__label">Next</p>
            <h2 className="section__title">Want the full picture?</h2>
          </div>
          <div className="hero__actions">
            <Link className="btn btn--ink" to="/about">
              About
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
