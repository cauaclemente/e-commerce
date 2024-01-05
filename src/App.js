import React from 'react';
import Header from './components/Header/Header';
import Products from './Products/Products';
import Provider from './Context/Provider';


function App() {
  return (
    <>
      <Provider>
      <Header />
      <Products />
      </Provider>

    </>
  );
}

export default App;
