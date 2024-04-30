import React from 'react'
import { ProductCard } from './ProductCard'

export const Products = () => {
  const productList = [
    {
      title: 'HTML,CSS',
      price: 1000,
    },
    {
      title: 'Javascript',
      price: 1500,
    },
    {
      title: 'Python',
      price: 2000
    },
  ]
  return (
    <div>
      <h1>Book List</h1>
    {productList.map((product) => (
      <ProductCard
        title={product.title}
        price={product.price}
        key={product.title}
      />
    ))}
    </div>
  )
}