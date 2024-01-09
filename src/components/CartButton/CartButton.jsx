import React, { useContext } from 'react'
import "./CartButton.css"
import { FaShoppingCart } from "react-icons/fa";
import AppContext from '../../Context/AppContext';

const CartButton = () => {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <>
        <button 
          type='button'
          className='cart_button'
          onClick={() => setIsCartVisible(!isCartVisible)}
         >
        <FaShoppingCart className='cart_bttn'/>
        {cartItems.length > 0 && <span className='cart_status'>{cartItems.length}</span>}
        </button>
    </>
  )
}

export default CartButton