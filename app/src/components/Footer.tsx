import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <p className="site-footer__brand">Jaro Brichau</p>
          <p className="site-footer__tag">
            All-round digital creative · Consultant at DIDIOM
          </p>
        </div>
        <div className="site-footer__cols">
          <div>
            <p className="site-footer__label">Navigate</p>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <p className="site-footer__label">Elsewhere</p>
            <a
              href="https://www.linkedin.com/in/jaro-brichau-2a20b118a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://didiom.be/" target="_blank" rel="noreferrer">
              DIDIOM
            </a>
            <a href="mailto:jaro.brichau@outlook.com">Email</a>
          </div>
        </div>
      </div>
      <div className="wrap site-footer__bottom">
        <span>© {new Date().getFullYear()} Jaro Brichau</span>
        <span>Antwerp — Belgium</span>
      </div>
    </footer>
  );
}
