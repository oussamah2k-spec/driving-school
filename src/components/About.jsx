import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import aboutImg from '../assets/images/about.jpg';
import { fadeUp, scaleIn, stagger, viewportOnce } from '../utils/animations';

/* ─── Data ─── */
const FEATURES = [
  { emoji: '👨‍🏫', title: 'أساتذة محترفين',    desc: 'خبرة كبيرة وطريقة شرح بسيطة وسهلة.' },
  { emoji: '🚗',   title: 'تكوين نظري وعملي', desc: 'من الكود حتى السياقة فالطريق بخطوات واضحة.' },
  { emoji: '📅',   title: 'مواعيد مرنة',       desc: 'اختار الوقت اللي مناسب ليك.' },
  { emoji: '🏆',   title: 'نسبة نجاح عالية',   desc: 'هدفنا هو نجاحك من أول محاولة.' },
];

const STATS = [
  { end: 10,   prefix: '+', suffix: '',  label: 'سنوات الخبرة' },
  { end: 1500, prefix: '+', suffix: '',  label: 'متدرب نجح'    },
  { end: 100,  prefix: '',  suffix: '%', label: 'نسبة النجاح'  },
  { end: 7,    prefix: '',  suffix: '',  label: 'أنواع الرخص'  },
];

/* ─── Animated counter ─── */
function Counter({ end, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, end]);

  return (
    <span ref={ref}>{prefix}{count}{suffix}</span>
  );
}

/* ─── Component ─── */
function About() {
  return (
    <section
      className="about"
      id="about"
      style={{ backgroundImage: `url(${aboutImg})` }}
    >
      <div className="about__overlay" aria-hidden="true" />

      <div className="about__container">

        {/* Header */}
        <motion.div
          className="about__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="about__tagline">علاش حنا؟</p>
          <h2 className="about__heading">علاش تختار مدرسة أومارير؟</h2>
          <p className="about__subtitle">
            ماشي غير باش تدوز البرمي…
            <br />
            حنا بغينا نكونو سبب فالنجاح ديالك.
          </p>
        </motion.div>

        {/* Paragraphs */}
        <motion.div
          className="about__paragraphs"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p className="about__text" variants={fadeUp}>
            فمدرسة أومارير، كنرافقوك من أول حصة حتى كتشد البرمي ديالك بثقة. أساتذة مجازين،
            شرح واضح، تدريب عملي، ومواكبة خطوة بخطوة حتى تكون واجد للامتحان.
          </motion.p>
          <motion.p className="about__text" variants={fadeUp}>
            سواء كنت باغي Permis B أو C أو CE أو D أو DE، غادي تلقى تكوين احترافي، مواعيد
            مرنة، وأجواء مريحة كتشجعك تحقق النجاح بسرعة.
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.ul
          className="about__features"
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {FEATURES.map(({ emoji, title, desc }) => (
            <motion.li key={title} className="about__card" variants={scaleIn}>
              <span className="about__card-emoji">{emoji}</span>
              <h4 className="about__card-title">{title}</h4>
              <p className="about__card-desc">{desc}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Statistics */}
        <motion.div
          className="about__stats"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {STATS.map(({ end, prefix, suffix, label }) => (
            <motion.div key={label} className="about__stat" variants={scaleIn}>
              <p className="about__stat-value">
                <Counter end={end} prefix={prefix} suffix={suffix} />
              </p>
              <p className="about__stat-label">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="about__cta"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h3 className="about__cta-title">واش واجد تبدا الرحلة ديالك؟</h3>
          <p className="about__cta-text">
            سجل دابا وخلي فريق مدرسة أومارير يرافقك حتى تحقق حلمك فالقيادة.
          </p>
          <div className="about__cta-btns">
            <a
              href="#courses"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              بدا التسجيل
            </a>
            <a
              href="#contact"
              className="btn btn--outline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
