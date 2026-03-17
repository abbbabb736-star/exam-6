import { Link } from 'react-router-dom'

function ProductCard({ id, name, price, off, image }) {
  const content = (
    <>
      {off && <span className="product-card__badge">{off}</span>}
      <button type="button" className="product-card__wishlist" aria-label="Add to favorites" onClick={(e) => e.stopPropagation()}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <div className="product-card__image">
        {image ? <img src={image} alt="" className="product-card__img" /> : null}
      </div>
      <h3 className="product-card__title">{name}</h3>
      <p className="product-card__price">{price}</p>
    </>
  )
  const className = 'product-card'
  if (id != null) {
    return (
      <Link to={`/product/${id}`} className={className}>
        {content}
      </Link>
    )
  }
  return <article className={className}>{content}</article>
}

export default ProductCard
