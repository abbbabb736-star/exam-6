import ProductCard from '../ProductCard/ProductCard'

function RelatedProducts({ products }) {
  return (
    <section className="related">
      <h2 className="related__title">Related Products</h2>
      <div className="related__grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            off={p.off ?? null}
            image={p.image ?? null}
          />
        ))}
      </div>
      <div className="related__dots">
        <span className="related__dot related__dot--active" />
        <span className="related__dot" />
      </div>
    </section>
  )
}

export default RelatedProducts
