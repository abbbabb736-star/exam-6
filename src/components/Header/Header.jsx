import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import korzinka from '../../assets/icons/korzinka.svg'
import logout from '../../assets/icons/logout.svg'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const isShopActive = location.pathname.startsWith('/product')

  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='GreenShop Logo' />
      </Link>
      <nav className='header__nav'>
        <NavLink
          to='/'
          end
          className={({ isActive }) =>
            isActive
              ? 'header__nav-link header__nav-link--active'
              : 'header__nav-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/'
          className={`header__nav-link ${
            isShopActive ? 'header__nav-link--active' : ''
          }`}
        >
          Shop
        </NavLink>
        <a href='#care' className='header__nav-link'>
          Plant Care
        </a>
        <a href='#blog' className='header__nav-link'>
          Blogs
        </a>
      </nav>
      <div className='header__actions'>
        <button type='button' className='header__icon' aria-label='Search'>
          <img src={search} alt='Search' />
        </button>
        <button type='button' className='header__icon' aria-label='Cart'>
          <img src={korzinka} alt='Cart' />
        </button>
        <button type='button' className='header__btn-login'>
          <img src={logout} alt='Logout' />
          Login
        </button>
      </div>
    </header>
  )
}

export default Header
