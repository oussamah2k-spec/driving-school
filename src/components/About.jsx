import { useEffect, useRef } from 'react';
import aboutImg from '../assets/images/about.jpg';

/* ─── Inline SVG icons (stroke="currentColor" — colour set via CSS) ─── */
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconCar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 17H3a2 2 0 0 1-2-2v-3l3.5-7h14l3.5 7v3a2 2 0 0 1-2 2h-2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const IconBook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const IconWheel = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="9" x2="12" y2="2" />
    <line x1="9.21" y1="13.5" x2="2" y2="17.5" />
    <line x1="14.79" y1="13.5" x2="22" y2="17.5" />
  </svg>
);

const FEATURES = [
  {
    Icon: IconShield,
    title: 'Moniteurs certifiés',
    desc: 'Nos formateurs agréés vous guident avec expertise et bienveillance à chaque étape.',
  },
  {
    Icon: IconCar,
    title: 'Véhicules modernes',
    desc: 'Une flotte récente et bien entretenue pour apprendre en toute sérénité.',
  },
  {
    Icon: IconBook,
    title: 'Formation théorique',
    desc: 'Cours interactifs et supports numériques pour maîtriser le code de la route.',
  },
  {
    Icon: IconWheel,
    title: 'Formation pratique',
    desc: 'Conduite encadrée avec suivi personnalisé pour progresser rapidement.',
  },
];

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = sectionRef.current?.querySelectorAll('.fade-up');
    targets?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__container">

        {/* ── Left: image ── */}
        <div className="about__image-wrap fade-up">
          <div className="about__image-frame">
            <img
              src={aboutImg}
              alt="Auto-École Oumarir — formation à la conduite"
              className="about__image"
            />
            <div className="about__image-badge">
              <span className="about__badge-number">10<sup>+</sup></span>
              <span className="about__badge-text">Ans d'expérience</span>
            </div>
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className="about__content">
          <p className="about__tagline fade-up">À PROPOS DE NOUS</p>

          <h2 className="about__heading fade-up" style={{ transitionDelay: '0.1s' }}>
            AUTO-ÉCOLE OUMARIR
          </h2>

          <div className="about__paragraphs fade-up" style={{ transitionDelay: '0.2s' }}>
            <p className="about__text">
              Fondée par des passionnés de la route, l'Auto-École Oumarir s'est imposée comme une
              référence en formation à la conduite dans la région. Nous mettons à votre disposition
              des moniteurs agréés et une approche pédagogique adaptée à chaque profil d'apprenant.
            </p>
            <p className="about__text">
              Que vous prépariez le permis B, C ou EC, notre équipe vous accompagne à chaque étape :
              code de la route, conduite accompagnée et examen final. Votre réussite est notre priorité absolue.
            </p>
          </div>

          <ul className="about__features fade-up" style={{ transitionDelay: '0.3s' }}>
            {FEATURES.map(({ Icon, title, desc }) => (
              <li key={title} className="about__feature-card">
                <div className="about__feature-icon">
                  <Icon />
                </div>
                <div className="about__feature-body">
                  <h4 className="about__feature-title">{title}</h4>
                  <p className="about__feature-desc">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="fade-up" style={{ transitionDelay: '0.4s' }}>
            <a href="#contact" className="btn btn--primary">Découvrir plus</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
