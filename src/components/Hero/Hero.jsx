import hero from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__badge">WELCOME TO GREENSHOP</p>
        <h1 className="hero__title">
          LET'S MAKE A <br /> BETTER
          <span className="hero__title-accent"> PLANET</span>
        </h1>
        <p className="hero__desc">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <a
          href="#shop"
          className="button button--primary hero__cta hero__cta--link"
        >
          SHOP NOW{" "}
        </a>

      </div>
      <div className="hero__media">
        <img src={hero} alt="Hero" className="hero__image" />
      </div>
              <div className="hero__dots">
          <span className="hero__dot" />
          <span className="hero__dot hero__dot--active" />
          <span className="hero__dot" />
        </div>
    </section>
  );
}

export default Hero;
