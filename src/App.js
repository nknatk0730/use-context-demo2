import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products } from './Products';
import { Cart } from './Cart';
import { Menu } from './Menu';
import { CartProvider } from './CartContext'


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
