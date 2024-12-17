import HomePage from "./HomePage/HomePage";
import "./App.css";
import Navbar from "../src/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Electronics from "./Elecrtonics/Electronics";
import Jewelery from "./Jewelery/Jewelery";
import Men from "./Men/Men";
import Women from "./Women/Women";
import Verj from "./Verj/Verj";
import Cart from "./Cart/Cart";

function App() {
  // Fetch CARTITEMS from localStorage or initialize with an empty array
  const CARTITEMS = JSON.parse(localStorage.getItem('products')) || [];

  return (
    <div className="App">
      {/* Pass cartItems to Navbar */}
      <Navbar cartItems={CARTITEMS} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        {/* Pass cartItems as props to Cart */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Verj />
    </div>
  );
}

export default App;
