import { useEffect, useRef } from 'react';

/* ─── SVG icons ─────────────────────────────────────────────────── */
const IconCard = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="3" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="6" y1="15" x2="10" y2="15" />
    <line x1="14" y1="15" x2="18" y2="15" />
  </svg>
);

const IconClipboard = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="12" y2="17" />
  </svg>
);

const IconPhone = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconWheel = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2"    x2="12" y2="9" />
    <line x1="4.22" y1="4.22" x2="7.76" y2="7.76" />
    <line x1="19.78" y1="4.22" x2="16.24" y2="7.76" />
  </svg>
);

/* ─── Data ───────────────────────────────────────────────────────── */
const STEPS = [
  {
    id: 1,
    icon: <IconCard />,
    title: 'اختار الرخصة ديالك',
    desc: 'اختار الكاتيغوري اللي تناسبك وتبدا عليها.',
  },
  {
    id: 2,
    icon: <IconClipboard />,
    title: 'عمّر الفورمولير',
    desc: 'دخل معلوماتك فدقيقة عبر فورمولير التسجيل.',
  },
  {
    id: 3,
    icon: <IconPhone />,
    title: 'كنتصلو بيك',
    desc: 'الفريق ديالنا كيتصل بيك بسرعة باش يأكد طلبك ويجاوب على جميع أسئلتك.',
  },
  {
    id: 4,
    icon: <IconWheel />,
    title: 'ابدا التكوين',
    desc: 'اختار التاريخ وابدا تتعلم السياقة مع أساتذة مختصين.',
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 }
    );
    const targets = sectionRef.current?.querySelectorAll('.fade-up');
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCta = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="process" id="process" ref={sectionRef}>
      <div className="process__container">

        {/* ── Section header ── */}
        <div className="process__header">
          <p className="process__tagline fade-up">كيفاش تسجل؟</p>
          <h2 className="process__heading fade-up" style={{ transitionDelay: '0.1s' }}>
            التسجيل في <span>4 خطوات بسيطة</span>
          </h2>
          <p className="process__subtext fade-up" style={{ transitionDelay: '0.2s' }}>
            ابدا التكوين ديالك بسرعة من خلال عملية سهلة واحترافية.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="process__timeline">
          {STEPS.map(({ id, icon, title, desc }, idx) => (
            <div
              key={id}
              className="process__step fade-up"
              style={{ transitionDelay: `${0.25 + idx * 0.13}s` }}
            >
              {/* Watermark number */}
              <span className="process__step-number" aria-hidden="true">
                {String(id).padStart(2, '0')}
              </span>

              {/* Icon circle */}
              <div className="process__icon-wrap">{icon}</div>

              {/* Text */}
              <h3 className="process__step-title">{title}</h3>
              <p className="process__step-desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="process__cta fade-up" style={{ transitionDelay: '0.7s' }}>
          <button className="btn btn--primary process__cta-btn" onClick={handleCta}>
            ابدا التسجيل ديالي
          </button>
        </div>

      </div>
    </section>
  );
}

export default Process;
