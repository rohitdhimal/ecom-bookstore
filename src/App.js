import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../src/Pages/Home/Home';
import Products from '../src/Pages/Products/Products';
import Product from "./Pages/Product/Product";
import Cart from "../src/Pages/Cart/Cart";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
