import { Link, NavLink } from 'react-router-dom'

function MobileBottomNav() {
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <div className="mobile-nav__bar">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            'mobile-nav__item' + (isActive ? ' mobile-nav__item--active' : '')
          }
          aria-label="Home"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </NavLink>
        <Link to="/wishlist" className="mobile-nav__item" aria-label="Favorites">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </Link>
        <div className="mobile-nav__fab-wrap">
          <button type="button" className="mobile-nav__fab" aria-label="Compare or Scan">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <line x1="6.5" y1="21" x2="6.5" y2="14" />
              <line x1="17.5" y1="21" x2="17.5" y2="14" />
              <line x1="3" y1="17.5" x2="10" y2="17.5" />
              <line x1="14" y1="17.5" x2="21" y2="17.5" />
            </svg>
          </button>
        </div>
        <Link to="/cart" className="mobile-nav__item" aria-label="Cart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </Link>
        <Link to="/profile" className="mobile-nav__item" aria-label="Profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Link>
      </div>
    </nav>
  )
}

export default MobileBottomNav
