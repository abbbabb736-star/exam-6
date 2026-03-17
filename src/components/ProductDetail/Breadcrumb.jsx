import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb__link">
        Home
      </Link>
      <span className="breadcrumb__sep">/</span>
      <span className="breadcrumb__current">Shop</span>
    </nav>
  )
}

export default Breadcrumb
