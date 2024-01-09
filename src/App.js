import React from 'react';
import Header from './components/Header/Header';
import Products from './Products/Products';
import Provider from './Context/Provider';
import Cart from './components/cart/Cart';



function App() {
  return (
    <>
      <Provider>
      <Header />
      <Products />
      <Cart />
      </Provider>
      
    </>
  );
}

export default App;
