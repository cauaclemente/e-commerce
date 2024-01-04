import React from 'react'
import "./CartButton.css"
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  return (
    <>
        <button type='button' className='cart_button'>
        <FaShoppingCart />
        <span className='cart_status'>1</span>
        </button>
    </>
  )
}

export default CartButton