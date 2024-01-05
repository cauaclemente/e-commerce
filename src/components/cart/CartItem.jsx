import React, { useContext } from 'react'
import "./Cartitem.css"
import { BsCartDashFill } from "react-icons/bs";
import FormatCurrency from '../../utils/FormatCurrency';
import propTypes from "prop-types"
import AppContext from '../../Context/AppContext';


const CartItem = ({ data }) => {

  const { cartItems, setCartItems} = useContext(AppContext)
  
  const{ thumbnail, title, price, id} = data

    const handleRemoveItem = () => {
      const updatedItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedItems);
    }

  return (
    <section className='cart_item'>
        <img 
        src={thumbnail} 
        alt="imagem do produto"
        className='cart_item_img' 
        />
        <div className='cart_item_content'>
            <h3 className='cart_item_title'>{title}</h3>
            <h3 className='cart_item_price'>{FormatCurrency(price, "BRL")}</h3>
        <button
        type='button'
        className='button_remove_item'
        onClick={ handleRemoveItem}
        >
        <BsCartDashFill />
        </button>
        </div>
    </section>
  )
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;