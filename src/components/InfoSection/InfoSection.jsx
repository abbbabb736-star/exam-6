import { infoBlocks } from "../../data/mockData";

const infoText =
  "We are an online plant shop offering a wide range of cheap and trendy plants.";

function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-section__inner">
        <div className="info-section__cols">
          {infoBlocks.map((block, i) => (
            <div key={i} className="info-block">
              <img
                src={block.image}
                alt={block.title}
                className="info-block__image"
              />
              <h3 className="info-block__title">{block.title}</h3>
              <p className="info-block__text">{infoText}</p>
            </div>
          ))}
        </div>
        <div className="newsletter">
          <p className="newsletter__question">
            Would you like to join newsletter?
          </p>
          <div className="newsletter__form">
            <input
              type="email"
              className="newsletter__input"
              placeholder="Enter your email..."
            />
            <button
              type="button"
              className="button button--primary newsletter__btn"
            >
              Join
            </button>
          </div>

          <p>
            We usually post offers and challenges in newsletter. We’re <br /> your
            online houseplant destination. We offer a wide range  <br /> of houseplants
            and accessories shipped directly from our <br /> (green)house to yours!
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
