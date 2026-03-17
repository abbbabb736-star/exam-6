import {
  Header,
  Hero,
  Sidebar,
  Shop,
  PromoCards,
  Blog,
  InfoSection,
  Footer,
  MobileBottomNav,
} from '../components'
import { categories, blogPosts, promoCards } from '../data/mockData'
import '../styles/HomePage.scss'

function HomePage() {
  return (
    <div className="page page--with-mobile-nav">
      <Header />
      <div className="mobile-search" aria-hidden="true">
        <span className="mobile-search__icon" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </span>
        <input type="search" className="mobile-search__input" placeholder="Find your plants" aria-label="Search plants" />
      </div>
      <Hero />
      <div className="layout">
        <Sidebar categories={categories} />
        <Shop />
      </div>
      <PromoCards cards={promoCards} />
      <Blog posts={blogPosts} />
      <InfoSection />
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

export default HomePage
