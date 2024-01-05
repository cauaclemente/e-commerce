import React, { useContext } from 'react';
import "./ProductCart.css";
import propTypes from "prop-types"
import { FaCartPlus } from "react-icons/fa6";
import FormatCurrency from '../../utils/FormatCurrency';
import AppContext from '../../Context/AppContext';


const ProductCart = ({ data }) => {

    const { title, thumbnail, price} = data

    const { cartItems, setCartItems} = useContext(AppContext);

    const handleAddCart = () => setCartItems([ ...cartItems, data ])

  return (
    <section className='product_cart'>
        <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
         alt="product"
         className="card_img" />
    <div className='card_info'></div>
        <h2 className='card_price'>{FormatCurrency(price, "BRL")}</h2>
        <h2 className='card_title'>{title}</h2>
    <button type='button'
      className='button_add_card'
      onClick={ handleAddCart }
      >
      <FaCartPlus />
    </button>
    </section>
  )
}

export default ProductCart

ProductCart.propTypes = {
    data: propTypes.shape({}),
}.isRequired;