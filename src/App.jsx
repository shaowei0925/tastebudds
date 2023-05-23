import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact";
import Subscription from "./components/Subscription";
import FAQs from "./components/FAQs";
import Login from "./components/Login";
import Register from "./components/Register";
import CollectionCard from "./components/CollectionCard";
import Carousel from "./components/Carousel";
import ProductCard from "./components/ProductCard";
function App() {
  return (
    <div className="font-sans text-yellow-900 overflow-x-hidden">
      <Header />
      <Navbar />
      {/* <ContactUs /> */}
      {/* <FAQs /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <CollectionCard /> */}
      {/* <Carousel /> */}
      {/* <Subscription /> */}
      <div className="flex gap-2 justify-center">
        <ProductCard sale={true} />
        <ProductCard sale={false} />
        <ProductCard sale={true} />
        <ProductCard sale={false} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
