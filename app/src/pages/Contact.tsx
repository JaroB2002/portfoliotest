import { usePageMotion } from "../hooks/usePageMotion";

export function Contact() {
  const rootRef = usePageMotion([]);

  return (
    <main ref={rootRef} className="page page--inner">
      <header className="page-hero padding-global">
        <h6 className="page-enter">Contact</h6>
        <h1 className="page-hero__title">
          <span className="line-mask"><span className="hero-line">Got a</span></span>
          <span className="line-mask"><span className="hero-line text-orange">brief?</span></span>
        </h1>
        <p className="page-hero__copy page-enter">
          Open to creative collaborations, product/UX side quests and digital marketing
          challenges — on top of my work at DIDIOM.
        </p>
      </header>

      <section className="padding-global contact-grid">
        <a className="contact-card reveal" href="mailto:jaro.brichau@outlook.com">
          <span>Email</span>
          <strong>jaro.brichau@outlook.com</strong>
        </a>
        <a className="contact-card reveal" href="tel:+32479398678">
          <span>Phone</span>
          <strong>+32 (0)479 39 86 78</strong>
        </a>
        <a
          className="contact-card reveal"
          href="https://www.linkedin.com/in/jaro-brichau-2a20b118a/"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <strong>@JaroBrichau</strong>
        </a>
        <a className="contact-card reveal" href="https://didiom.be/" target="_blank" rel="noreferrer">
          <span>Currently</span>
          <strong>DIDIOM · Antwerp</strong>
        </a>
      </section>

      <section className="padding-global section-pad reveal">
        <div className="contact-note">
          <h2>What I’m useful for</h2>
          <ul>
            <li>Campaign concepts &amp; creative support</li>
            <li>Digital marketing execution (performance, search, social)</li>
            <li>UX/UI and landing experiences</li>
            <li>Bridging creative ideas with channel reality</li>
          </ul>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 6 }).map((_, i) => (
            <h3 className="marquee-text" key={i}>
              jarobrichau<span className="text-orange">.work</span>
            </h3>
          ))}
        </div>
      </div>
    </main>
  );
}
