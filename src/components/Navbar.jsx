import { useState, useEffect } from 'react';
import logo from '../assets/logo/logo.png';

const NAV_LINKS = [
  { label: 'الديار',         href: '#home' },
  { label: 'علاش حنا',       href: '#about' },
  { label: 'التكوينات',     href: '#courses' },
  { label: 'آراء الزبناء', href: '#testimonials' },
  { label: 'تواصل معنا',   href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="Auto-École Oumarir" className="navbar__logo-img" />
        </div>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label} className="navbar__item">
              <a
                href={href}
                className="navbar__link"
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="افتح/أغلق القائمة"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
