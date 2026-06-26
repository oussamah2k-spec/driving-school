import { useEffect, useRef } from 'react';

/* ─── Icons ─────────────────────────────────────────────────────── */
const IconMapPin = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconPhone = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconFacebook = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconClock = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const IconExternalLink = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ─── Google Maps embed src ─────────────────────────────────────── */
const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.7!2d-8.876!3d30.469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb1737b1ef43853%3A0xcba31de4571fb03c!2sAuto-%C3%89cole%20Oumarir!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma';

const MAPS_LINK =
  'https://www.google.com/maps?q=Auto-%C3%89cole+Oumarir+Taroudant&ftid=0xdb1737b1ef43853:0xcba31de4571fb03c';

/* ─── Component ─────────────────────────────────────────────────── */
function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.08 }
    );
    const targets = sectionRef.current?.querySelectorAll('.fade-up');
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__container">

        {/* ── Header ── */}
        <div className="contact__header">
          <p className="contact__tagline fade-up">تواصل معنا</p>
          <h2 className="contact__heading fade-up" style={{ transitionDelay: '0.1s' }}>
            تواصل مع <span>مدرسة أومارير</span>
          </h2>
          <p className="contact__subtext fade-up" style={{ transitionDelay: '0.2s' }}>
            الفريق ديالنا حاضر باش يجاوب على جميع أسئلتك ويرافقك فالتسجيل.
          </p>
        </div>

        {/* ── Body: info cards + map ── */}
        <div className="contact__body">

          {/* LEFT – info cards */}
          <div className="contact__cards">

            {/* Address */}
            <div className="contact__card fade-up" style={{ transitionDelay: '0.15s' }}>
              <span className="contact__card-icon"><IconMapPin /></span>
              <div className="contact__card-content">
                <h3 className="contact__card-title">العنوان</h3>
                <p className="contact__card-text">
                  مدرسة أومارير<br />تارودانت، المغرب
                </p>
              </div>
            </div>

            {/* Phone / WhatsApp */}
            <div className="contact__card fade-up" style={{ transitionDelay: '0.25s' }}>
              <span className="contact__card-icon"><IconPhone /></span>
              <div className="contact__card-content">
                <h3 className="contact__card-title">الهاتف / واتساب</h3>
                <p className="contact__card-text">+212 668 724 918</p>
                <a
                  href="https://wa.me/212668724918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__btn contact__btn--whatsapp"
                >
                  <IconWhatsApp />
                  تواصل على واتساب
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="contact__card fade-up" style={{ transitionDelay: '0.35s' }}>
              <span className="contact__card-icon"><IconFacebook /></span>
              <div className="contact__card-content">
                <h3 className="contact__card-title">فيسبوك</h3>
                <a
                  href="https://www.facebook.com/profile.php?id=100083215574587"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__btn contact__btn--facebook"
                >
                  <IconExternalLink />
                  زور صفحتنا على فيسبوك
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="contact__card fade-up" style={{ transitionDelay: '0.45s' }}>
              <span className="contact__card-icon"><IconClock /></span>
              <div className="contact__card-content">
                <h3 className="contact__card-title">أوقات العمل</h3>
                <p className="contact__card-text">
                  <strong>الاثنين – السبت</strong><br />08:00 – 19:00
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT – map */}
          <div className="contact__map-col fade-up" style={{ transitionDelay: '0.3s' }}>
            <div className="contact__map-wrap">
              <iframe
                className="contact__map-iframe"
                src={MAP_SRC}
                title="موقع مدرسة أومارير — تارودانت"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-btn"
              >
                <IconExternalLink />
                افتح فالخريطة
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

