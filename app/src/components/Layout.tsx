import { Outlet, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { to: "/", label: "Info" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const tl = gsap.timeline();
    tl.fromTo(
      ".menu-overlay",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.35, ease: "power2.out" },
    ).from(
      ".menu-link",
      { y: 60, opacity: 0, duration: 0.55, stagger: 0.07, ease: "power3.out" },
      "-=0.1",
    );
    return () => {
      tl.kill();
    };
  }, [menuOpen]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduced
      ? null
      : new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

    let rafId = 0;
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="site">
      <div className={`menu-overlay${menuOpen ? " is-open" : ""}`}>
        <div className="menu-overlay__links">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="menu-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <header className="topbar">
        <div className="padding-global topbar__inner">
          <Link to="/" className="topbar__brand">
            jarobrichau.work
          </Link>
          <span className="topbar__meta">portfolio 2026</span>
        </div>
      </header>

      <nav className="navbar" aria-label="Floating">
        <Link className="nav-button" to="/" aria-label="Home">
          <span className="nav-mark">j</span>
        </Link>
        <button
          className="nav-button is-menu"
          type="button"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span className="menu-dot" />
            <span className="menu-dot" />
            <span className="menu-dot" />
            <span className="menu-dot" />
            <span className="menu-dot" />
          </span>
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </nav>

      <Outlet />
    </div>
  );
}
