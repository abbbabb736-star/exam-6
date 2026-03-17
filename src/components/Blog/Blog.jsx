import BlogCard from '../BlogCard/BlogCard'

function Blog({ posts }) {
  return (
    <section className='blog'>
      <h2 className='blog__title'>Our Blog Posts</h2>
      <div className='blog__grid'>
        {posts.map((post, i) => (
          <BlogCard
            key={i}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Blog
