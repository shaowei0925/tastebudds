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
import Cart from "./components/Cart";
import Strengths from "./components/Strengths";
function App() {
  return (
    <div className="font-sans text-yellow-900 overflow-x-hidden">
      <Header />
      <Navbar />
      {/* <ContactUs /> */}
      {/* <FAQs /> */}
      <Login />
      {/* <Register /> */}
      {/* <Strengths /> */}
      {/* <Carousel /> */}
      {/* <CollectionCard /> */}
      {/* <Subscription /> */}
      {/* <div className="flex gap-2 justify-center py-8">
        <ProductCard
          sale={true}
          name={"The Acquaintance Pack (8meals)"}
          oriPrice={76}
          sellingPrice={50}
        />
        <ProductCard
          sale={false}
          name={"The Acquaintance Pack (8meals)"}
          oriPrice={76}
          sellingPrice={50}
        />
        <ProductCard
          sale={true}
          name={"The Acquaintance Pack (8meals)"}
          oriPrice={76}
          sellingPrice={50}
        />
        <ProductCard
          sale={false}
          name={"The Acquaintance Pack (8meals)"}
          oriPrice={76}
          sellingPrice={50}
        />
      </div> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  );
}

export default App;
