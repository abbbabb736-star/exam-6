function BlogCard({ title, excerpt, image }) {
  return (
    <article className='blog-card'>
      <div className='blog-card__image'>
        <img src={image} alt={title} />
      </div>
      <h3 className='blog-card__title'>{title}</h3>
      <p className='blog-card__excerpt'>{excerpt}</p>
      <a href='#' className='blog-card__link'>
        Read More
      </a>
    </article>
  )
}

export default BlogCard
