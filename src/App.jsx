import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact";
import Subscription from "./components/Subscription";
import FAQs from "./components/FAQs";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <div className="font-sans text-yellow-900">
      <Header />
      <Navbar />
      {/* <ContactUs /> */}
      {/* <FAQs /> */}
      {/* <Login /> */}
      <Register />
      {/* <Subscription /> */}
      <Footer />
    </div>
  );
}

export default App;
