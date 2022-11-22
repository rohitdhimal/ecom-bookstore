import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../src/Pages/Home/Home'
import Products from '../src/Pages/Products/Products'
import Cart from "../src/Pages/Cart/Cart";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Products />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
