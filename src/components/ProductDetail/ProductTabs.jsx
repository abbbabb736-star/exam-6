import { useState } from 'react'

function starsToText(stars) {
  let text = ''
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      text += '★'
    } else {
      text += '☆'
    }
  }
  return text
}

function ProductTabs({ description, reviews, reviewsCount }) {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <>
      <div className="product-tabs">
        <button
          type="button"
          className={'product-tabs__tab' + (activeTab === 'description' ? ' product-tabs__tab--active' : '')}
          onClick={() => setActiveTab('description')}
        >
          Product Description
        </button>
        <button
          type="button"
          className={'product-tabs__tab' + (activeTab === 'reviews' ? ' product-tabs__tab--active' : '')}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews ({reviewsCount})
        </button>
      </div>
      <div className="product-tabs__content">
        {activeTab === 'description' && (
          <div className="product-description">
            <p className="product-description__text">
              {description || 'No description available.'}
            </p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className="reviews-list">
            {reviews.length === 0 ? (
              <p className="product-description__text">No reviews yet.</p>
            ) : (
              reviews.map((r) => (
                <div key={r._id} className="reviews-list__item">
                  <div className="reviews-list__head">
                    <span className="reviews-list__name">{r.reviewerName}</span>
                    <span className="reviews-list__stars">{starsToText(r.stars)}</span>
                  </div>
                  <p className="reviews-list__comment">{r.comment}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default ProductTabs
