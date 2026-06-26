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
          AUTO-ÉCOLE<br />
          <span className="hero__accent">OUMARIR</span>
        </h1>

        <p className="hero__subtitle">
          Votre réussite commence ici.<br />
          Formation professionnelle pour permis B, C et EC avec des moniteurs expérimentés.
        </p>

        <div className="hero__cta">
          <a href="#courses" className="btn btn--primary">Commencer</a>
          <a href="#contact" className="btn btn--outline">Nous contacter</a>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-text">Défiler</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  );
}

export default Hero;
