import ProductCard from "../components/ProductCard";
const list = [
  {
    id: "i1",
    sale: true,
    name: "The Acquaintance Pack (8meals)",
    oriPrice: 76,
    sellingPrice: 50,
    bg1: "/med1.png",
    bg2: "/med1.1.png",
  },
  {
    id: "i2",
    sale: true,
    name: "The Friend Pack (12meals)",
    oriPrice: 118.8,
    sellingPrice: 110.4,
    bg1: "/med2.png",
    bg2: "/med2.1.png",
  },
  {
    id: "i3",
    sale: false,
    name: "The Stranger Pack (4meals)",
    oriPrice: 39.6,
    sellingPrice: 39.6,
    bg1: "/med3.png",
    bg2: "/med3.1.png",
  },
  {
    id: "i4",
    sale: true,
    name: "The Buddy Pack (16meals)",
    oriPrice: 158.4,
    sellingPrice: 142.4,
    bg1: "/med4.png",
    bg2: "/med4.1.png",
  },
  {
    id: "i5",
    sale: true,
    name: "Tastebudds Family Pack(Save 10%)",
    oriPrice: 328,
    sellingPrice: 296,
    bg1: "/med5.png",
    bg2: "/med5.1.png",
  },
];
const ProductsPage = () => {
  return (
    <div className="px-12 py-8">
      <h1 className="font-bold text-5xl">Shop All</h1>
      <div className="flex justify-between items-center py-8">
        <div className="flex w-1/4 gap-6 items-center">
          <p>Filter:</p>
          <button className="flex gap-2 w-1/3 items-center hover:underline hover:text-black">
            <p>Availabilty</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mt-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button className="flex gap-2 w-1/3 items-center hover:underline hover:text-black">
            <p>Price</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mt-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex w-1/3 gap-6 items-center">
          <p>Sort by:</p>
          <button className="flex justify-between items-center w-1/2">
            <p>Featured</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mt-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <p>14 products</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-start py-8 gap-12">
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
    </div>
  );
};

export default ProductsPage;
