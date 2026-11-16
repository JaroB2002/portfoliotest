import { Link } from "react-router-dom";
import { projects } from "../data";
import { usePageMotion } from "../hooks/usePageMotion";

export function Work() {
  const rootRef = usePageMotion([]);

  return (
    <main ref={rootRef} className="page page--inner">
      <header className="page-hero padding-global">
        <h6 className="page-enter">Work</h6>
        <h1 className="page-hero__title">
          <span className="line-mask"><span className="hero-line">Selected</span></span>
          <span className="line-mask"><span className="hero-line">work</span></span>
        </h1>
        <p className="page-hero__copy page-enter">
          Campaign concepts and impact pieces from the creative side of an all-round practice —
          now also living in digital marketing at DIDIOM.
        </p>
      </header>

      <section className="padding-global work-index">
        {projects.map((project, index) => (
          <Link key={project.slug} to={`/work/${project.slug}`} className="work-row reveal">
            <div className="work-row__index">/{String(index + 1).padStart(2, "0")}</div>
            <div className="work-row__visual parallax-wrap">
              <img className="parallax-img" src={project.image} alt="" loading="lazy" />
            </div>
            <div className="work-row__copy">
              <div className="feature-card__meta">
                <span>{project.year}</span>
                <span>{project.client}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.blurb}</p>
              <div className="tag-row">
                {project.disciplines.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="work-row__arrow" aria-hidden="true">→</div>
          </Link>
        ))}
      </section>
    </main>
  );
}
