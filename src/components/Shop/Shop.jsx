import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { getProducts } from '../../api/products'

function Shop() {
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState('')

  const limit = 9

  useEffect(() => {
    const params = {
      page: page,
      limit: limit
    }
    if (sort) {
      params.sort = sort
    }

    getProducts(params)
      .then((result) => {
        const list = result.products || []
        const newProducts = []

        for (let i = 0; i < list.length; i++) {
          const p = list[i]
          let priceText = '$0.00'
          if (typeof p.price === 'number') {
            priceText = '$' + p.price.toFixed(2)
          }
          let offText = null
          if (p.discount) {
            offText = p.discount + '% OFF'
          }
          let img = null
          if (p.pictures && p.pictures.length > 0) {
            img = p.pictures[0]
          }
          newProducts.push({
            id: p._id,
            name: p.name,
            price: priceText,
            off: offText,
            image: img
          })
        }

        setProducts(newProducts)
        setTotalPages(result.totalPages || 1)
      })
      .catch(() => {
        setProducts([])
        setTotalPages(1)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page, sort])

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  const handleSortChange = (e) => {
    setSort(e.target.value)
    setPage(1)
  }

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <main className='shop'>
      <div className='shop__toolbar'>
        <div className='shop__tabs'>
          <a href='#' className='shop__tab shop__tab--active'>
            All Plants
          </a>
          <a href='#' className='shop__tab'>
            New Arrivals
          </a>
          <a href='#' className='shop__tab'>
            Sale
          </a>
        </div>
        <div className='shop__sort'>
          <label className='shop__sort-label'>Sort By:</label>
          <select
            className='shop__sort-select'
            value={sort}
            onChange={handleSortChange}
          >
            <option value=''>Default sorting</option>
            <option value='most-popular'>Most popular</option>
            <option value='recently-added'>Recently added</option>
            <option value='starts'>Starts</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className='shop__loading'>
          <div className='shop__spinner' aria-hidden />
          <span className='shop__loading-text'>Loading...</span>
        </div>
      ) : (
        <>
          <div className='product-grid'>
            {products.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                off={p.off}
                image={p.image}
              />
            ))}
          </div>

          <nav className='pagination' aria-label='Product pagination'>
            <button
              type='button'
              className={
                'pagination__item' +
                (page <= 1 ? ' pagination__item--disabled' : '')
              }
              disabled={page <= 1}
              onClick={handlePrev}
              aria-label='Previous page'
            >
              ←
            </button>

            {pages.map((num) => (
              <button
                key={num}
                type='button'
                className={
                  'pagination__item' +
                  (num === page ? ' pagination__item--active' : '')
                }
                onClick={() => setPage(num)}
                aria-label={'Page ' + num}
                aria-current={num === page ? 'page' : undefined}
              >
                {num}
              </button>
            ))}

            <button
              type='button'
              className={
                'pagination__item pagination__item--next' +
                (page >= totalPages ? ' pagination__item--disabled' : '')
              }
              disabled={page >= totalPages}
              onClick={handleNext}
              aria-label='Next page'
            >
              →
            </button>
          </nav>
        </>
      )}
    </main>
  )
}

export default Shop
