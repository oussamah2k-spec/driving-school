import { useEffect, useRef } from 'react';

/* ─── Icons ───────────────────────────────────────────────────────── */
const IconShieldCheck = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconCar = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 17H3a2 2 0 0 1-2-2v-3l3.5-7h14l3.5 7v3a2 2 0 0 1-2 2h-2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const IconCalendar = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
  </svg>
);

const IconBook = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconTrophy = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

const IconHeadset = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

/* ─── Data ─────────────────────────────────────────────────────────── */
const ADVANTAGES = [
  {
    id: 1,
    icon: <IconShieldCheck />,
    title: 'Moniteurs certifiés',
    desc: 'Des formateurs expérimentés, patients et agréés.',
  },
  {
    id: 2,
    icon: <IconCar />,
    title: 'Véhicules modernes',
    desc: 'Des voitures, motos, camions et bus récents.',
  },
  {
    id: 3,
    icon: <IconCalendar />,
    title: 'Horaires flexibles',
    desc: 'Choisissez les horaires qui vous conviennent.',
  },
  {
    id: 4,
    icon: <IconBook />,
    title: 'Formation complète',
    desc: 'Cours théoriques et pratiques adaptés à tous.',
  },
  {
    id: 5,
    icon: <IconTrophy />,
    title: 'Excellent taux de réussite',
    desc: 'Une méthode efficace pour réussir rapidement.',
  },
  {
    id: 6,
    icon: <IconHeadset />,
    title: 'Suivi personnalisé',
    desc: "Nous restons disponibles jusqu'à votre réussite.",
  },
];

/* ─── Component ────────────────────────────────────────────────────── */
function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    const targets = sectionRef.current?.querySelectorAll('.fade-up');
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="why" id="why" ref={sectionRef}>
      <div className="why__container">

        {/* ── Header ── */}
        <div className="why__header">
          <p className="why__tagline fade-up">NOS AVANTAGES</p>
          <h2 className="why__heading fade-up" style={{ transitionDelay: '0.1s' }}>
            Pourquoi choisir <span>Auto-École Oumarir</span>&nbsp;?
          </h2>
          <p className="why__subtext fade-up" style={{ transitionDelay: '0.2s' }}>
            Nous accompagnons chaque élève avec une formation moderne, des moniteurs qualifiés
            et un suivi personnalisé jusqu'à l'obtention du permis.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="why__grid">
          {ADVANTAGES.map(({ id, icon, title, desc }, idx) => (
            <div
              key={id}
              className="why__card fade-up"
              style={{ transitionDelay: `${0.1 + idx * 0.1}s` }}
            >
              <span className="why__card-icon" aria-hidden="true">{icon}</span>
              <h3 className="why__card-title">{title}</h3>
              <p className="why__card-desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div className="why__banner fade-up" style={{ transitionDelay: '0.3s' }}>
          <div className="why__banner-text">
            <h3 className="why__banner-title">Prêt à obtenir votre permis&nbsp;?</h3>
            <p className="why__banner-desc">
              Inscrivez-vous aujourd'hui et commencez votre formation avec Auto-École Oumarir.
            </p>
          </div>
          <button
            className="why__banner-btn btn"
            onClick={scrollToCourses}
            aria-label="S'inscrire — aller à la section formation"
          >
            S'INSCRIRE
          </button>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
