import { useEffect, useRef } from 'react';
import testimonialVideo from '../assets/video/testimonial.mp4';

/* ─── Quote icon ───────────────────────────────────────────────── */
const IconQuote = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

/* ─── Stat icons ────────────────────────────────────────────────── */
const IconGrad = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
    <path d="M6 12v5c3.6 2 8.4 2 12 0v-5" />
  </svg>
);

const IconTrophy = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

const IconStar = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconCar = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 17H3a2 2 0 0 1-2-2v-3l3.5-7h14l3.5 7v3a2 2 0 0 1-2 2h-2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

/* ─── Data ─────────────────────────────────────────────────────── */
const REVIEWS = [
  {
    id: 1,
    name: 'Ahmed B.',
    permit: 'Permis B',
    review: "Excellente auto-école ! Les moniteurs sont très patients et pédagogues. J'ai réussi mon permis du premier coup.",
  },
  {
    id: 2,
    name: 'Fatima A.',
    permit: 'Permis D',
    review: "Formation sérieuse et très bien organisée. Je recommande vivement cette auto-école.",
  },
  {
    id: 3,
    name: 'Yassine M.',
    permit: 'Permis CE',
    review: "Les explications sont claires et les véhicules sont modernes. Merci pour votre professionnalisme.",
  },
  {
    id: 4,
    name: 'Khadija L.',
    permit: 'Code de la Route',
    review: "Grâce aux examens blancs et aux conseils des formateurs, j'ai obtenu mon code rapidement.",
  },
  {
    id: 5,
    name: 'Omar E.',
    permit: 'Parking',
    review: "Les séances de perfectionnement m'ont permis de reprendre confiance au volant.",
  },
];

const STATS = [
  { icon: <IconGrad />,   value: '+1500', label: 'طالب تكوّن' },
  { icon: <IconTrophy />, value: '98%',   label: 'نسبة النجاح' },
  { icon: <IconStar />,   value: '10+',   label: 'سنوات الخبرة' },
  { icon: <IconCar />,    value: '7',     label: 'أنواع الرخص' },
];

/* ─── Component ────────────────────────────────────────────────── */
function Testimonials() {
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

  return (
    <section className="testi" id="testimonials" ref={sectionRef}>
      <div className="testi__container">

        {/* ── Header ── */}
        <div className="testi__header">
          <p className="testi__tagline fade-up">آراء الزبناء</p>
          <h2 className="testi__heading fade-up" style={{ transitionDelay: '0.1s' }}>
            شنو كيقولو <span>طلابنا</span>
          </h2>
          <p className="testi__subtext fade-up" style={{ transitionDelay: '0.2s' }}>
            مئات ديال الطلاب وثقو فينا. شوف تجاربهم مع مدرسة أومارير.
          </p>
        </div>

        {/* ── Two-column body ── */}
        <div className="testi__body">

          {/* LEFT – sticky video */}
          <div className="testi__video-col fade-up" style={{ transitionDelay: '0.3s' }}>
            <div className="testi__video-wrap">
              <video
                className="testi__video"
                src={testimonialVideo}
                controls
                playsInline
                preload="metadata"
                aria-label="فيديو شهادة — مدرسة أومارير"
              />
            </div>
          </div>

          {/* RIGHT – testimonial cards */}
          <div className="testi__cards-col">
            {REVIEWS.map(({ id, name, permit, review }, idx) => (
              <article
                key={id}
                className="testi__card fade-up"
                style={{ transitionDelay: `${0.35 + idx * 0.1}s` }}
              >
                <span className="testi__quote" aria-hidden="true"><IconQuote /></span>
                <span className="testi__stars" aria-label="5 نجوم">★★★★★</span>
                <p className="testi__review">{review}</p>
                <footer className="testi__card-footer">
                  <span className="testi__name">{name}</span>
                  <span className="testi__permit">{permit}</span>
                </footer>
              </article>
            ))}
          </div>

        </div>

        {/* ── Stats bar ── */}
        <div className="testi__stats fade-up" style={{ transitionDelay: '0.4s' }}>
          {STATS.map(({ icon, value, label }) => (
            <div key={label} className="testi__stat">
              <span className="testi__stat-icon">{icon}</span>
              <span className="testi__stat-value">{value}</span>
              <span className="testi__stat-label">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;

