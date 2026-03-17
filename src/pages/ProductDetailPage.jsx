import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import InfoSection from '../components/InfoSection/InfoSection'
import {
  Breadcrumb,
  ProductGallery,
  ProductInfo,
  ProductTabs,
  RelatedProducts
} from '../components/ProductDetail'
import { getProductById, getProducts } from '../api/products'
import { getReviewsByProductId } from '../api/reviews'
import '../styles/ProductDetailPage.scss'

function ProductDetailPage() {
  const params = useParams()
  const id = params.id

  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [reviews, setReviews] = useState([])
  const [reviewsCount, setReviewsCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('M')

  useEffect(() => {
    if (!id) return

    let isCurrent = true

    Promise.resolve()
      .then(() => {
        setLoading(true)
      })
      .then(() => getProductById(id))
      .then((data) => {
        if (!isCurrent) return
        setProduct(data)
        if (data.size) {
          setSize(data.size)
        }
      })
      .catch(() => {
        if (!isCurrent) return
        setProduct(null)
      })
      .finally(() => {
        if (isCurrent) setLoading(false)
      })

    return () => {
      isCurrent = false
    }
  }, [id])

  useEffect(() => {
    if (!id) return

    getProducts({ limit: 5 })
      .then((result) => {
        const list = result.products || []
        const newRelated = []
        for (let i = 0; i < list.length; i++) {
          const p = list[i]
          if (p._id === id) continue
          if (newRelated.length >= 5) break
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
          newRelated.push({
            id: p._id,
            name: p.name,
            price: priceText,
            off: offText,
            image: img
          })
        }
        setRelated(newRelated)
      })
      .catch(() => {
        setRelated([])
      })
  }, [id])

  useEffect(() => {
    if (!id) return

    getReviewsByProductId(id, 1, 10)
      .then((result) => {
        setReviews(result.reviews || [])
        setReviewsCount(result.count || 0)
      })
      .catch(() => {
        setReviews([])
        setReviewsCount(0)
      })
  }, [id])

  if (loading) {
    return (
      <div className='page page--product'>
        <Header />
        <div className='product-detail'>
          <Breadcrumb />
          <div className='product-detail__loading'>
            <div className='product-detail__spinner' aria-hidden />
            <span className='product-detail__loading-text'>Loading...</span>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className='page page--product'>
      <Header />
      <div className='product-detail'>
        <Breadcrumb />
        <div className='product-detail__main'>
          <ProductGallery pictures={product.pictures} />
          <ProductInfo
            product={product}
            quantity={quantity}
            onQuantityChange={setQuantity}
            size={size}
            onSizeChange={setSize}
          />
        </div>
        <ProductTabs
          description={product.description}
          reviews={reviews}
          reviewsCount={reviewsCount}
        />
        <RelatedProducts products={related} />
      </div>
      <InfoSection />
      <Footer />
    </div>
  )
}

export default ProductDetailPage
