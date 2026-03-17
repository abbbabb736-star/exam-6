import { apiClient } from './client'

export function getProducts(params) {
  const query = {
    page: params.page || 1,
    limit: params.limit || 9,
  }

  if (params.search) {
    query.search = params.search
  }
  if (params.priceFrom) {
    query['price-from'] = params.priceFrom
  }
  if (params.priceTo) {
    query['price-to'] = params.priceTo
  }
  if (params.category) {
    query.category = params.category
  }
  if (params.size) {
    query.size = params.size
  }
  if (params.sort) {
    query.sort = params.sort
  }

  return apiClient.get('/products', { params: query }).then((response) => {
    const data = response.data
    const count = data.count || 0
    const limit = query.limit
    const totalPages = limit > 0 ? Math.ceil(count / limit) : 1

    return {
      products: data.products || [],
      totalCount: count,
      page: query.page,
      limit: limit,
      totalPages: totalPages,
    }
  })
}

export function getProductById(id) {
  return apiClient.get('/products/' + id).then((response) => {
    return response.data
  })
}
