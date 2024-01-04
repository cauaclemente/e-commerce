import React, { useState, useEffect } from 'react'
import "./Products.css"
import FetchProducts from '../api/FetchProducts'
import ProductCart from '../components/ProductCart/ProductCart'

const Products = () => {

    const [products, setProducts] = useState ([])

    useEffect(() => {
        FetchProducts("iphone").then((response) => {
            setProducts(response)
        })
    },[])

  return (
    <section className='products container'>
        {products.map((product) => <ProductCart key={product.id} data={product} />)}
    </section>
  )
}

export default Products