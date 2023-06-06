import Subscription from "../components/Subscription";
import Strengths from "../components/Strengths";
import ProductCard from "../components/ProductCard";
import CollectionCard from "../components/CollectionCard";
import Carousel from "../components/Carousel";
import Tastebuddy from "../components/Tastebuddy";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Carousel />
      <div className="flex gap-2 justify-center py-8 justify-evenly w-11/12">
        <ProductCard
          id={"i1"}
          sale={true}
          name={"The Acquaintance Pack (8meals)"}
          oriPrice={76}
          sellingPrice={50}
          bg1={"/med1.png"}
          bg2={"/med1.1.png"}
        />
        <ProductCard
          id={"i2"}
          sale={false}
          name={"The Friendly Pack (8meals)"}
          oriPrice={99}
          sellingPrice={99}
          bg1={"/med2.png"}
          bg2={"/med2.1.png"}
        />
        <ProductCard
          id={"i3"}
          sale={true}
          name={"The Family Pack (8meals)"}
          oriPrice={200}
          sellingPrice={159}
          bg1={"/med3.png"}
          bg2={"/med3.1.png"}
        />
        <ProductCard
          id={"i4"}
          sale={false}
          name={"The Buddy Pack (8meals)"}
          oriPrice={188}
          sellingPrice={188}
          bg1={"/med4.png"}
          bg2={"/med4.1.png"}
        />
      </div>
      <Strengths />
      <CollectionCard />
      <Tastebuddy />
      <Subscription />
    </div>
  );
};

export default HomePage;
