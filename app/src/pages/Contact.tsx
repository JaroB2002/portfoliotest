export function Contact() {
  return (
    <div className="page contact-page">
      <header className="page-hero wrap reveal">
        <p className="section__label">Contact</p>
        <h1 className="page-hero__title">Got a brief?</h1>
        <p className="page-hero__copy">
          Open to creative collaborations, product/UX side quests and digital
          marketing challenges — on top of my work at DIDIOM.
        </p>
      </header>

      <section className="wrap contact-grid">
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
          <strong>jaro-brichau</strong>
        </a>
        <a
          className="contact-card reveal"
          href="https://didiom.be/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Currently</span>
          <strong>DIDIOM · Antwerp</strong>
        </a>
      </section>

      <section className="wrap section reveal">
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
    </div>
  );
}
