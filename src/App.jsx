import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [menu, setMenu] = useState(
    localStorage.getItem("activeMenu") || "shop"
  );

  useEffect(() => {
    localStorage.setItem("activeMenu", menu);
  }, [menu]);

  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu} />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/womens" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer setMenu={setMenu} />
    </div>
  );
};

export default App;
