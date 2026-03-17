import { apiClient } from './client'

export function getReviewsByProductId(productId, page, limit) {
  const params = {}
  if (page) params.page = page
  if (limit) params.limit = limit

  return apiClient.get('/reviews/product/' + productId, { params }).then((response) => {
    const data = response.data
    return {
      reviews: data.reviews || [],
      count: data.count || 0,
    }
  })
}
