import PromoCard from '../PromoCard/PromoCard'

function PromoCards({ cards }) {
  return (
    <section className="promo-cards">
      <div className="promo-cards__inner">
        {cards.map((card, i) => (
          <PromoCard
            key={i}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </section>
  )
}

export default PromoCards
