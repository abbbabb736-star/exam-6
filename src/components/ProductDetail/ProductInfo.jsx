
import instagramIcon from '../../assets/icons/instagram.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import twitterIcon from '../../assets/icons/twitter.svg'








function formatPrice(price) {
  if (typeof price !== 'number') {
    return ''
  }
  return '$' + price.toFixed(2)
}

function ProductInfo({ product, quantity, onQuantityChange, size, onSizeChange }) {
  const sizes = ['S', 'M', 'L', 'XL']
  return (
    <div className="product-info">
      <h1 className="product-info__title">{product.name}</h1>
      <p className="product-info__price">{formatPrice(product.price)}</p>
      <div className="product-info__reviews">
        <span className="product-info__stars">★★★★☆</span>
        <span className="product-info__reviews-text">(19 Customer Review)</span>
      </div>
      <div className="product-info__short">
        <strong className="product-info__short-label">Short Description:</strong>
        <p className="product-info__short-text">
          {product.description || 'No description available.'}
        </p>
      </div>
      <div className="product-info__size">
        <span className="product-info__size-label">Size:</span>
        <div className="size-options">
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              className={`size-options__btn ${s === size ? 'size-options__btn--active' : ''}`}
              onClick={() => onSizeChange(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="product-info__qty">
        <span className="product-info__qty-label">Quantity:</span>
        <div className="qty-selector">
          <button
            type="button"
            className="qty-selector__btn"
            onClick={() => onQuantityChange((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <input
            type="number"
            className="qty-selector__input"
            value={quantity}
            readOnly
            min={1}
          />
          <button
            type="button"
            className="qty-selector__btn"
            onClick={() => onQuantityChange((q) => q + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="product-info__actions">
        <button type="button" className="button button--primary product-info__buy">
          BUY NOW
        </button>
        <button type="button" className="button button--outline product-info__cart">
          ADD TO CART
        </button>
        <button type="button" className="product-info__wishlist" aria-label="Wishlist">
          ♡
        </button>
      </div>
      <dl className="product-info__meta">
        <div className="product-info__meta-row">
          <dt>SKU:</dt>
          <dd>{product._id}</dd>
        </div>
        <div className="product-info__meta-row">
          <dt>Categories:</dt>
          <dd>{product.category || '—'}</dd>
        </div>
        <div className="product-info__meta-row">
          <dt>Tags:</dt>
          <dd>Home, Garden, Plants</dd>
        </div>
      </dl>
      <div className="product-info__share">
        <span className="product-info__share-label">Share this products:</span>
        <div className="product-info__share-icons">

          
          <a href="#" aria-label="Facebook">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={twitterIcon} alt="Twitter" />
          </a>
       
          <a href="#" aria-label="Email">
            <img src={instagramIcon} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
