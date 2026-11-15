import { Link, Navigate, useParams } from "react-router-dom";
import { getProject, projects } from "../data";

export function Case() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

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
    <article className="case">
      <header className="case-hero">
        <div className="case-hero__media">
          <img src={project.image} alt="" width={1600} height={1131} />
          <div className="case-hero__veil" />
        </div>
        <div className="wrap case-hero__content">
          <p className="case-hero__meta">
            <Link to="/work">Work</Link>
            <span>/</span>
            <span>{project.year}</span>
            <span>/</span>
            <span>{project.client}</span>
          </p>
          <h1 className="case-hero__title">{project.title}</h1>
          <p className="case-hero__blurb">{project.blurb}</p>
          <div className="feature__tags feature__tags--on-dark">
            {project.disciplines.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </header>

      <section className="wrap case-intro reveal">
        <div>
          <p className="section__label">Role</p>
          <p className="case-intro__role">{project.role}</p>
        </div>
        <div>
          <p className="section__label">In short</p>
          <p className="lead">{project.blurb}</p>
        </div>
      </section>

      <section className="wrap case-blocks">
        {blocks.map((block) => (
          <div className="case-block reveal" key={block.label}>
            <h2>{block.label}</h2>
            <p>{block.body}</p>
          </div>
        ))}
      </section>

      <section className="wrap case-stage reveal">
        <img src={project.image} alt={`${project.title} visual`} />
      </section>

      <nav className="wrap case-next" aria-label="More work">
        <Link className="case-next__card reveal" to={`/work/${prev.slug}`}>
          <span>Previous</span>
          <strong>{prev.title}</strong>
        </Link>
        <Link className="case-next__card reveal" to={`/work/${next.slug}`}>
          <span>Next</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
    </article>
  );
}
