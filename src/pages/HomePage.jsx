import Subscription from "../components/Subscription";
import Strengths from "../components/Strengths";
import ProductCard from "../components/ProductCard";
import CollectionCard from "../components/CollectionCard";
import Carousel from "../components/Carousel";
import Tastebuddy from "../components/Tastebuddy";
import list from "./productList";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Carousel />
      <div className="flex gap-2 p-8 justify-evenly w-11/12  overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-gray-100">
        {list.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              sale={product.sale}
              bg1={product.bg1}
              bg2={product.bg2}
              oriPrice={product.oriPrice}
              sellingPrice={product.sellingPrice}
              name={product.name}
            />
          );
        })}
      </div>
      <Strengths />
      <CollectionCard />
      <Tastebuddy />
      <Subscription />
    </div>
  );
};

export default HomePage;
