function PromoCard({ title, description, image }) {
  return (
    <article className='promo-card'>
      <div />
      <div className='promo-card__image'>
        <img src={image} alt={title} className='promo-card__img' />
      </div>
      <div className='promo-card__content'>
        <h3 className='promo-card__title'>{title}</h3>
        <p className='promo-card__text'>{description}</p>
        <a href='#' className='promo-card__btn'>
          Find More 
        </a>
      </div>
    </article>
  )
}

export default PromoCard
