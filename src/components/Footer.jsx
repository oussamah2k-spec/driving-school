import { motion } from 'framer-motion';
import logo from '../assets/logo/logo.png';
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from '../utils/animations';

/* ─── Icons ─────────────────────────────────────────────────────── */
const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const IconMapPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/* ─── Data ─────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Accueil',      href: '#home' },
  { label: 'À Propos',     href: '#about' },
  { label: 'Formations',   href: '#courses' },
  { label: 'Notre Process',href: '#process' },
  { label: 'Témoignages',  href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

/* ─── Component ─────────────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* ── Top content ── */}
      <div className="footer__top">
        <div className="footer__container">
          <motion.div
            className="footer__grid"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >

            {/* Col 1 – Brand */}
            <motion.div className="footer__brand" variants={fadeLeft}>
              <img src={logo} alt="Auto-École Oumarir" className="footer__logo" loading="lazy" />
              <p className="footer__brand-desc">
                Auto-École Oumarir — votre partenaire de confiance pour obtenir votre permis
                à Taroudant, Maroc. Formation sérieuse, moniteurs agréés.
              </p>
              <div className="footer__socials">
                <a
                  href="https://www.facebook.com/profile.php?id=100083215574587"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Facebook"
                >
                  <IconFacebook />
                </a>
                <a
                  href="https://wa.me/212668724918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link footer__social-link--wa"
                  aria-label="WhatsApp"
                >
                  <IconWhatsApp />
                </a>
              </div>
            </motion.div>

            {/* Col 2 – Navigation */}
            <motion.div className="footer__col" variants={fadeUp}>
              <h3 className="footer__col-title">Navigation</h3>
              <ul className="footer__nav-links">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="footer__nav-link">{label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Col 3 – Contact */}
            <motion.div className="footer__col" variants={fadeRight}>
              <h3 className="footer__col-title">Contact</h3>
              <ul className="footer__info-list">
                <li className="footer__info-item">
                  <IconMapPin />
                  <span>Taroudant, Maroc</span>
                </li>
                <li className="footer__info-item">
                  <IconPhone />
                  <a href="tel:+212668724918">+212 668 724 918</a>
                </li>
                <li className="footer__info-item">
                  <IconClock />
                  <span>Lun – Sam &nbsp;·&nbsp; 08:00 – 19:00</span>
                </li>
              </ul>
              <a
                href="https://wa.me/212668724918"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__wa-btn"
              >
                <IconWhatsApp />
                Contacter sur WhatsApp
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="footer__container footer__bottom-inner">
          <p className="footer__copy">
            © {year} Auto-École Oumarir. Tous droits réservés.
          </p>
          <p className="footer__legal">
            Taroudant, Maroc &nbsp;·&nbsp;{' '}
            <a href="https://wa.me/212668724918" target="_blank" rel="noopener noreferrer">
              +212 668 724 918
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;

