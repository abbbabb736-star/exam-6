import promoImg from '../../assets/images/sidebar.png'

function Sidebar({ categories }) {
  return (
    <aside className='sidebar'>
      <div className='sidebar__section'>
        <h3 className='sidebar__title'>Categories</h3>
        <ul className='categories'>
          {categories.map((cat, i) => (
            <li key={cat}>
              <a
                href='#'
                className={`categories__item ${
                  i === 0 ? 'categories__item--active' : ''
                }`}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='sidebar__section'>
        <h3 className='sidebar__title'>Price Range</h3>
        <div className='price-range'>
          <div className='price-range__slider' />
          <p className='price-range__text'>Range: $39 - $1230</p>
          <button
            type='button'
            className='button button--primary price-range__btn'
          >
            Filter
          </button>
        </div>
      </div>
      <div className='sidebar__section'>
        <h3 className='sidebar__title'>Size</h3>
        <ul className='size-list'>
          <li>
            <a href='#' className='size-list__item'>
              Small (119)
            </a>
          </li>
          <li>
            <a href='#' className='size-list__item'>
              Medium (86)
            </a>
          </li>
          <li>
            <a href='#' className='size-list__item'>
              Large (78)
            </a>
          </li>
        </ul>
      </div>

      <div className='sidebar__promo-img'>
        <img src={promoImg} alt='Promo' />
      </div>
    </aside>
  )
}

export default Sidebar
