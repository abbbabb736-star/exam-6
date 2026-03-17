import blog1 from '../assets/images/blogs/01.png'
import blog2 from '../assets/images/blogs/02.png'
import blog3 from '../assets/images/blogs/03.png'
import blog4 from '../assets/images/blogs/04.png'
import promo1 from '../assets/images/promo/01.png'
import promo2 from '../assets/images/promo/02.png'
import info1 from '../assets/images/plants/01.png'
import info2 from '../assets/images/plants/02.png'
import info3 from '../assets/images/plants/03.png'
export const categories = [
  'House Plants (33)',
  'Potter Plants (12)',
  'Seeds (6)',
  'Small Plants (12)',
  'Big Plants (12)',
  'Succulents (17)',
  'Terrariums (19)',
  'Gardening (13)',
  'Accessories (18)'
]

export const products = [
  { id: '1', name: 'Barberton Daisy', price: '$119.00', off: null },
  { id: '2', name: 'Angel Wing Begonia', price: '$169.00', off: null },
  { id: '3', name: 'African Violet', price: '$199.00', off: '20% OFF' },
  { id: '4', name: 'Beach Spider Lily', price: '$129.00', off: null },
  { id: '5', name: 'Blushing Bromeliad', price: '$139.00', off: null },
  { id: '6', name: 'Aluminum Plant', price: '$179.00', off: null },
  { id: '7', name: "Bird's Nest Fern", price: '$99.00', off: null },
  { id: '8', name: 'Broadleaf Lady Palm', price: '$59.00', off: null },
  { id: '9', name: 'Mini Plants', price: '$39.00', off: '20% OFF' }
]

export const relatedProducts = [
  { id: '10', name: 'Peach Seldon Hy', price: '$129.00' },
  { id: '11', name: 'Angel Wing Begonia', price: '$169.00' },
  { id: '12', name: 'African Violet', price: '$199.00' },
  { id: '13', name: 'Barberton Daisy', price: '$119.00' },
  { id: '14', name: 'Blushing Bromeliad', price: '$139.00' }
]

export function getProductById(id) {
  return (
    products.find((p) => p.id === id) ||
    relatedProducts.find((p) => p.id === id) ||
    products[0]
  )
}

export const blogPosts = [
  {
    title: 'Cactus & Succulent Care Tips',
    excerpt: 'Cacti and succulents are easy to care for...',
    image: blog1
  },
  {
    title: 'Top 10 Succulents for Your Home',
    excerpt: 'Succulents are a great choice for indoor...',
    image: blog2
  },
  {
    title: 'Cacti & Succulent Care Tips',
    excerpt: 'Learn how to keep your plants healthy...',
    image: blog3
  },
  {
    title: 'Best Houseplants for Beginners',
    excerpt: 'Start your plant journey with these...',
    image: blog4
  }
]

export const promoCards = [
  {
    title: 'SUMMER CACTUS & SUCCULENTS',
    imageMod: '1',
    description:
      'We are an online plant shop offering a wide range of cheap and trendy plants.',
    image: promo1
  },
  {
    title: 'STYLING TRENDS & MUCH MORE',
    imageMod: '2',
    description:
      'We are an online plant shop offering a wide range of cheap and trendy plants.',
    image: promo2
  }
]

export const infoBlocks = [
  { title: 'Garden Care', image: info1 },
  { title: 'Plant Renovation', image: info2 },
  { title: 'Watering Graden', image: info3 }
]

export const footerCols = {
  myAccount: ['My Account', 'Order stores', 'Contact us', 'Career', 'Specials'],
  helpGuide: [
    'Help Center',
    'How to Buy',
    'Shipping & Delivery',
    'Product Policy',
    'How to Return'
  ],
  categories: [
    'House Plants',
    'Potter Plants',
    'Seeds',
    'Small Plants',
    'Accessories'
  ]
}
