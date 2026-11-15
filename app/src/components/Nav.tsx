import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

type Props = {
  menuOpen: boolean;
  setMenuOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
};

export function Nav({ menuOpen, setMenuOpen }: Props) {
  return (
    <header className={`nav${menuOpen ? " open" : ""}`}>
      <div className="wrap">
        <div className="nav__bar">
          <Link className="nav__brand" to="/" onClick={() => setMenuOpen(false)}>
            Jaro Brichau
          </Link>
          <p className="nav__role">
            <strong>DIDIOM</strong> · Digital Marketing Consultant
          </p>
          <nav className="nav__links" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
