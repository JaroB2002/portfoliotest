import { Link } from "react-router-dom";
import { projects, stats } from "../data";
import { usePageMotion } from "../hooks/usePageMotion";

function PlayfairO({ children = "o" }: { children?: string }) {
  return <span className="playfair-o">{children}</span>;
}

export function Home() {
  const rootRef = usePageMotion([]);

  return (
    <main ref={rootRef} className="page">
      <section className="section-header">
        <div className="padding-global">
          <div className="hero-sequence" aria-hidden="true">
            <div className="hero-sequence__sticky">
              <div className="hero-portrait parallax-wrap">
                <img className="parallax-img" src="/media/profile.webp" alt="" width={900} height={1125} />
              </div>
            </div>
          </div>

          <div className="section__header">
            <div className="header-spacer" />
            <div className="header-bottom">
              <div className="header-intro__wrap stagger-up">
                <h6 className="hide-mobile">Hi there</h6>
                <div className="header-text-wrapper">
                  <svg className="star-icon" width="42" height="48" viewBox="0 0 42 48" fill="none" aria-hidden="true">
                    <path d="M21 0L22.1089 20.2315C22.1536 21.0354 23.0188 21.5299 23.7418 21.1641L42 11.999L24.8507 23.0654C24.1683 23.5036 24.1683 24.4924 24.8507 24.9346L42 36.001L23.7418 26.8359C23.0147 26.4701 22.1536 26.9646 22.1089 27.7685L21 48L19.8911 27.7685C19.8464 26.9646 18.9812 26.4701 18.2582 26.8359L0 35.997L17.1493 24.9306C17.8317 24.4924 17.8317 23.5036 17.1493 23.0614L0 11.999L18.2582 21.1641C18.9853 21.5299 19.8464 21.0354 19.8911 20.2315L21 0Z" fill="#F34213" />
                  </svg>
                  <p>
                    I turn sharp ideas into brands, stories and
                    <br />
                    channels that actually stick.
                  </p>
                </div>
              </div>
              <div className="rule" />
              <h1 className="hero-title">
                <span className="line-mask"><span className="hero-line">jarobrichau</span></span>
                <span className="line-mask"><span className="hero-line text-orange">.work</span></span>
              </h1>
            </div>
          </div>

          <div className="section__info">
            <div className="col-2 is-intro">
              <h6 className="stagger-up">About</h6>
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
                      <div className="rule is-top" />
                    </div>
                  ))}
                </div>
                <Link className="button-097 reveal" to="/work">
                  <span className="button-097__hover">
                    <span className="button-097__bg is-hover" />
                    <span className="button-097__inner"><span className="button-097__text">Click here</span></span>
                  </span>
                  <span className="button-097__default" aria-hidden="true">
                    <span className="button-097__bg is-default" />
                    <span className="button-097__inner"><span className="button-097__text">View work</span></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-about band">
        <div className="padding-global">
          <div className="about-pad">
            <h2 className="heading-2">
              <span className="line-mask"><span className="reveal-line">I build ideas that</span></span>
              <span className="line-mask">
                <span className="reveal-line">
                  stick — <em><PlayfairO />nline</em> and
                </span>
              </span>
              <span className="line-mask">
                <span className="reveal-line">
                  bey<PlayfairO />nd
                </span>
              </span>
            </h2>
            <div className="rule reveal" />
            <div className="about-grid reveal">
              <h6>Because</h6>
              <p className="text-2-col">
                I’m Jaro Brichau — an all-round digital creative and Digital Marketing Consultant at DIDIOM in Antwerp. I bring advertising thinking, UX/UI, brand craft and channel execution together so ideas don’t die in a deck. From Creative Belgium School and YoungDogs to Fightclub and Berlin Creative Studio, I’ve learned to move from insight to idea to something people actually see, click or share. One brain. Several desks. Work that lands.
              </p>
            </div>
            <div className="cta-row reveal">
              <Link className="text-link" to="/about">Full about →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-work-preview">
        <div className="padding-global">
          <div className="work-head reveal">
            <h6>What you’re here for (I guess)</h6>
            <h2 className="heading-work">
              <span className="line-mask"><span className="reveal-line">Work</span></span>
            </h2>
          </div>
        </div>

        <div className="feature-stack">
          {projects.slice(0, 3).map((project, index) => (
            <Link key={project.slug} to={`/work/${project.slug}`} className="feature-card reveal">
              <div className="feature-card__media parallax-wrap">
                <img className="parallax-img" src={project.image} alt="" loading="lazy" />
              </div>
              <div className="feature-card__body">
                <div className="feature-card__meta">
                  <span>/{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.year}</span>
                  <span>{project.label}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.blurb}</p>
                <span className="feature-card__cta">Open case →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="padding-global">
          <div className="cta-row reveal">
            <Link className="button-097" to="/work">
              <span className="button-097__hover">
                <span className="button-097__bg is-hover" />
                <span className="button-097__inner"><span className="button-097__text">All projects</span></span>
              </span>
              <span className="button-097__default" aria-hidden="true">
                <span className="button-097__bg is-default" />
                <span className="button-097__inner"><span className="button-097__text">All projects</span></span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-footer home-footer">
        <div className="padding-global">
          <div className="footer-contacts reveal">
            <div>
              <div className="footer-block">
                <h6>Mail</h6>
                <a href="mailto:jaro.brichau@outlook.com">jaro.brichau@outlook.com</a>
              </div>
            </div>
            <div className="text-right">
              <div className="footer-block">
                <h6>Currently</h6>
                <a href="https://didiom.be/" target="_blank" rel="noreferrer">DIDIOM · Antwerp</a>
              </div>
            </div>
          </div>
          <div className="rule" />
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
      </section>
    </main>
  );
}
