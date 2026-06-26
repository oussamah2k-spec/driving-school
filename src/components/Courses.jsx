import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

/* ── Permis images ── */
import imgA       from '../assets/images/permis/a.jpg';
import imgB       from '../assets/images/permis/b.jpg';
import imgCE      from '../assets/images/permis/ce.jpg';
import imgD       from '../assets/images/permis/d.jpg';
import imgDE      from '../assets/images/permis/de.jpg';
import imgCode    from '../assets/images/permis/code.jpg';
import imgParking from '../assets/images/permis/parking.jpg';

/* ── Course catalogue ── */
const COURSES = [
  { id: 'A',       label: 'Permis A',                   desc: 'الدراجات والسكوتير — الحرية بزوج دواليب.',                       img: imgA       },
  { id: 'B',       label: 'Permis B',                   desc: 'رخصة السيارة الخاصة — الرخصة اللي كيطلبها الجميع.',        img: imgB       },
  { id: 'CE',      label: 'Permis CE',                  desc: 'الشاحنة الكبيرة مع المقطورة — تكوين احترافي.',         img: imgCE      },
  { id: 'D',       label: 'Permis D',                   desc: 'النقل الجماعي — سياقة الحافلات والطوبيسات.',      img: imgD       },
  { id: 'DE',      label: 'Permis DE',                  desc: 'الحافلة المفصلية ونقل المسافرين المتخصص.',             img: imgDE      },
  { id: 'code',    label: 'كود الطريق',            desc: 'فهم القوانين والإشارات ديال الطريق بالكامل.',           img: imgCode    },
  { id: 'parking', label: 'الباركينغ والتحسين', desc: 'المناورات، التوقف، وتحسين مهارات السياقة.',         img: imgParking },
];

/* ── WhatsApp icon ── */
const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

/* ── WhatsApp message builder ── */
const buildWaUrl = (selected, form) => {
  const msg = [
    'السلام عليكم مدرسة أومارير،',
    '',
    'بغيت نسجل.',
    '',
    `الرخصة: ${selected ? selected.label : '—'}`,
    '',
    `الاسم: ${form.nom}`,
    `العنوان: ${form.adresse}`,
    `الهاتف: ${form.telephone}`,
    `التاريخ المرغوب: ${form.date}`,
    '',
    'شكراً.',
  ].join('\n');
  return `https://wa.me/212668724918?text=${encodeURIComponent(msg)}`;
};

/* ── Component ── */
function Courses() {
  const [selected, setSelected]   = useState(null);
  const [form, setForm]           = useState({ nom: '', adresse: '', telephone: '', date: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const [closing, setClosing]     = useState(false);
  const sectionRef                = useRef(null);

  /* Intersection observer for fade-up */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Escape key + body scroll lock when modal is open */
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const handleSelect = (course) => {
    setSelected(course);
    setClosing(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => { setModalOpen(false); setClosing(false); }, 260);
  };

  const handleInput = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <>
    <section className="courses" id="courses" ref={sectionRef}>
      <div className="courses__container">

        {/* ── Section header ── */}
        <div className="courses__header">
          <p className="courses__tagline fade-up">تكويناتنا</p>
          <h2 className="courses__heading fade-up" style={{ transitionDelay: '0.1s' }}>
            اختار التكوين ديالك
          </h2>
          <p className="courses__subtext fade-up" style={{ transitionDelay: '0.2s' }}>
            كليك على التكوين اللي باغيه باش تفتح فورمولير التسجيل.
          </p>
        </div>

        {/* ── Course cards ── */}
        <div className="courses__grid fade-up" style={{ transitionDelay: '0.25s' }}>
          {COURSES.map(({ id, label, desc, img }) => {
            const isActive = selected?.id === id;
            return (
              <div
                key={id}
                className={`courses__card${isActive ? ' courses__card--active' : ''}`}
                onClick={() => handleSelect({ id, label })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelect({ id, label }); }
                }}
                aria-pressed={isActive}
              >
                <div className="courses__card-media">
                  <img src={img} alt={label} className="courses__card-img" />
                  <div className="courses__card-overlay" aria-hidden="true" />
                  {isActive && (
                    <span className="courses__card-selected" aria-hidden="true">✓ مختار</span>
                  )}
                </div>
                <div className="courses__card-body">
                  <h3 className="courses__card-label">{label}</h3>
                  <p className="courses__card-desc">{desc}</p>
                  <span className="courses__card-btn" aria-hidden="true">سجل دابا ←</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>

    {modalOpen && createPortal(
      <div
        className={`modal-backdrop${closing ? ' modal-backdrop--closing' : ''}`}
        onClick={closeModal}
        role="presentation"
      >
        <div
          className={`modal${closing ? ' modal--closing' : ''}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close */}
          <button className="modal__close" onClick={closeModal} aria-label="أغلق">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Header */}
          <div className="modal__header">
            <h3 className="modal__title" id="modal-title">فورمولير التسجيل</h3>
              <div className="modal__permit">
                <span className="modal__permit-label">الرخصة المختارة</span>
              <span className="modal__permit-value">{selected?.label ?? '—'}</span>
            </div>
          </div>

          {/* Fields */}
          <div className="modal__fields">
            <div className="modal__field">
              <label className="modal__label" htmlFor="m-nom">الاسم الكامل</label>
              <input id="m-nom" className="modal__input" type="text" name="nom"
                placeholder="اسمك الكامل" value={form.nom}
                onChange={handleInput} autoComplete="name" />
            </div>
            <div className="modal__field">
              <label className="modal__label" htmlFor="m-adresse">العنوان</label>
              <input id="m-adresse" className="modal__input" type="text" name="adresse"
                placeholder="عنوانك بالكامل" value={form.adresse}
                onChange={handleInput} autoComplete="street-address" />
            </div>
            <div className="modal__field">
              <label className="modal__label" htmlFor="m-tel">الهاتف</label>
              <input id="m-tel" className="modal__input" type="tel" name="telephone"
                placeholder="+212 6XX XXX XXX" value={form.telephone}
                onChange={handleInput} autoComplete="tel" />
            </div>
            <div className="modal__field">
              <label className="modal__label" htmlFor="m-date">التاريخ المرغوب</label>
              <input id="m-date" className="modal__input modal__input--date" type="date"
                name="date" value={form.date} onChange={handleInput} />
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href={buildWaUrl(selected, form)}
            target="_blank"
            rel="noopener noreferrer"
            className="modal__whatsapp"
          >
            <IconWhatsApp />
            أرسل على واتساب
          </a>

          <p className="modal__note">
            الرسالة غادي تتبعث على واتساب مع جميع المعلومات.
          </p>
        </div>
      </div>,
      document.body
    )}
    </>
  );
}

export default Courses;

