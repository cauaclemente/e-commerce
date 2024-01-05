import { useContext } from "react";
import "./Cart.css";
import AppContext from "../../Context/AppContext";
import CartItem from "./CartItem";
import FormatCurrency from "../../utils/FormatCurrency";
import { BsCartCheckFill } from "react-icons/bs";


function Cart () {

  const { cartItems, isCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  },0);

  return (
    <section className={`cart ${isCartVisible ? "cart_active" : ""}`}>
        <div className='cart_items'>
       {cartItems.map((cartItem) => 
          <CartItem key={cartItem.id} data={cartItem} />
        )}
        </div>
        
        <div className='cart_resumo'>{FormatCurrency(totalPrice, "BRL")}</div>
        <button 
          type="submit"
          className="btt_compra">
          Efetuar compra
          <BsCartCheckFill className="cart_compra" />
        </button>
    </section>
  )
}

export default Cart