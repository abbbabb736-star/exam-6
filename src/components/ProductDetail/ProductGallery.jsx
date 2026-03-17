import { useState } from 'react'

function ProductGallery({ pictures = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const mainSrc = pictures[selectedIndex] ?? pictures[0]
  const hasPictures = Array.isArray(pictures) && pictures.length > 0

  return (
    <div className="product-gallery">
      <div className="product-gallery__thumbs">
        {hasPictures
          ? pictures.map((src, i) => (
              <button
                key={i}
                type="button"
                className={`product-gallery__thumb ${i === selectedIndex ? 'product-gallery__thumb--active' : ''}`}
                aria-label={`Thumbnail ${i + 1}`}
                onClick={() => setSelectedIndex(i)}
              >
                <img src={src} alt="" className="product-gallery__thumb-img" />
              </button>
            ))
          : [1, 2, 3, 4].map((i) => (
              <button
                key={i}
                type="button"
                className="product-gallery__thumb"
                aria-label={`Thumbnail ${i}`}
              >
                <span className="product-gallery__thumb-img product-gallery__thumb-img--placeholder" />
              </button>
            ))}
      </div>
      <div className="product-gallery__main">
        {mainSrc ? (
          <img src={mainSrc} alt="" className="product-gallery__main-img" />
        ) : (
          <div className="product-gallery__main-img product-gallery__main-img--placeholder" />
        )}
        <button
          type="button"
          className="product-gallery__wishlist"
          aria-label="Add to wishlist"
        >
          ♡
        </button>
      </div>
    </div>
  )
}

export default ProductGallery
