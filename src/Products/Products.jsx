import React, { useContext, useEffect } from 'react'
import "./Products.css"
import FetchProducts from '../api/FetchProducts'
import ProductCart from '../components/ProductCart/ProductCart'
import Loading from '../components/Loading/Loading'
import AppContext from '../Context/AppContext'

const Products = () => {

   const {products, setProducts, loading, setLoading} = useContext(AppContext)

    useEffect(() => {
        FetchProducts("iphone").then((response) => {
            setProducts(response)
            setLoading(false)
        })
    },[])

  return (
    (loading ? <Loading /> : <section className='products container'>
    {products.map((product) => <ProductCart key={product.id} data={product} />)}
</section>)
    
  )
}

export default Products