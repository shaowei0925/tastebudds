import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact";
import FAQs from "./components/FAQs";
import Login from "./components/Login";
import Register from "./components/Register";
import Terms from "./components/Terms";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./components/Cart";
import { useContext } from "react";
import CartContext from "./store/cart-context";
import Backdrop from "./components/Backdrop";
import { AddProductCard } from "./components/ProductCard";
import Alert from "./util/Alert";
import Profile from "./components/Profile";

function App() {
  const ctx = useContext(CartContext);
  return (
    <div
      className={`relative font-sans text-yellow-900 overflow-x-hidden h-screen w-screen`}
    >
      <Cart />
      {ctx.showCart && <Backdrop isClicked={ctx.toggleCart} />}
      {ctx.showAddProduct && <Backdrop isClicked={ctx.toggleProduct} />}
      {ctx.showAddProduct && (
        <AddProductCard
          name={ctx.details.name}
          price={ctx.details.price}
          img={ctx.details.img}
          id={ctx.details.id}
        />
      )}
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
