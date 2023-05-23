/* eslint-disable react/prop-types */
const ProductCard = (props) => {
  return (
    <div className="w-fit p-4 border border-black rounded-2xl flex flex-col justify-between">
      <div className="relative h-60 w-50 bg-[url('/src/assets/product1.png')] bg-cover hover:ease-in-out hover:duration-500 hover:bg-[url('/src/assets/product4.jpg')] hover:cursor-pointer">
        {props.sale && (
          <p className="absolute bg-orange-400 px-8 py-0.5 text-white">Sale</p>
        )}
      </div>

      <h1 className="font-bold hover:underline hover:cursor-pointer py-2">
        The Acquaintance Pack (8meals)
      </h1>
      {props.sale && <h2 className="text-sm line-through">RM 76.00 MYR</h2>}
      <h2 className="font-semibold ">RM 76.00 MYR</h2>

      <button className="text-lg border-2 border-amber-800 rounded-3xl px-4 py-2 hover:ring-2 hover:ring-amber-900 mt-8">
        Choose options
      </button>
    </div>
  );
};

export default ProductCard;
