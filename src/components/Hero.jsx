import heroBg from '../assets/images/hero.png';

function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__headline">
          مدرسة أومارير<br />
          <span className="hero__accent">للسياقة</span>
        </h1>

        <p className="hero__subtitle">
          من هنا كتبدا الرحلة ديالك.<br />
          تكوين احترافي لـ Permis B، C، CE، D وDE مع أساتذة مجازين ومحترفين.
        </p>

        <div className="hero__cta">
          <a href="#courses" className="btn btn--primary">ابدا دابا</a>
          <a href="#contact" className="btn btn--outline">تواصل معنا</a>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-text">نزّل</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  );
}

export default Hero;
