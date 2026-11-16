import { Link, Navigate, useParams } from "react-router-dom";
import { getProject, projects } from "../data";
import { usePageMotion } from "../hooks/usePageMotion";

export function Case() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const rootRef = usePageMotion([slug]);

  if (!project) return <Navigate to="/work" replace />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const blocks = [
    { label: "Brief", body: project.brief },
    { label: "Insight", body: project.insight },
    { label: "Idea", body: project.idea },
    { label: "Impact", body: project.impact },
  ];

  return (
    <main ref={rootRef} className="page">
      <header className="case-hero">
        <div className="case-hero__media parallax-wrap">
          <img className="parallax-img" src={project.image} alt="" />
          <div className="case-hero__veil" />
        </div>
        <div className="padding-global case-hero__content">
          <p className="case-hero__meta page-enter">
            <Link to="/work">Work</Link>
            <span>/</span>
            <span>{project.year}</span>
            <span>/</span>
            <span>{project.client}</span>
          </p>
          <h1 className="case-hero__title">
            <span className="line-mask"><span className="hero-line">{project.title}</span></span>
          </h1>
          <p className="case-hero__blurb page-enter">{project.blurb}</p>
          <div className="tag-row tag-row--on-dark page-enter">
            {project.disciplines.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </header>

      <section className="padding-global case-intro reveal">
        <div>
          <h6>Role</h6>
          <p className="case-intro__role">{project.role}</p>
        </div>
        <div>
          <h6>In short</h6>
          <p className="lead">{project.blurb}</p>
        </div>
      </section>

      <section className="padding-global case-blocks">
        {blocks.map((block) => (
          <div className="case-block reveal" key={block.label}>
            <h2>{block.label}</h2>
            <p>{block.body}</p>
          </div>
        ))}
      </section>

      <section className="padding-global case-stage reveal parallax-wrap">
        <img className="parallax-img" src={project.image} alt="" />
      </section>

      <nav className="padding-global case-next" aria-label="More work">
        <Link className="case-next__card reveal" to={`/work/${prev.slug}`}>
          <span>Previous</span>
          <strong>{prev.title}</strong>
        </Link>
        <Link className="case-next__card reveal" to={`/work/${next.slug}`}>
          <span>Next</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
    </main>
  );
}
