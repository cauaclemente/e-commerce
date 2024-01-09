import { useContext, useState } from "react";
import "./Cart.css";
import AppContext from "../../Context/AppContext";
import CartItem from "./CartItem";
import FormatCurrency from "../../utils/FormatCurrency";
import { BsCartCheckFill } from "react-icons/bs";
import Cartao from "../CartaoBancario/Cartao";



function Cart () {

  const { cartItems, isCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  },0);

  const handleAlert = () => {
    if(totalPrice === 0){
      alert("Seu carrinho esta vazio")
    } else {
      alert (
        `
          Obrigado pela a sua compra!
          Valor do pedido:${FormatCurrency(totalPrice, "BRL")}
          Volte sempre
        `
      )
    }

  }

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
          className="btt_compra"
          onClick={handleAlert}
          >
          Finalizar compra
          
          <BsCartCheckFill className="cart_compra" />
        </button>
    </section>
  )
}

export default Cart