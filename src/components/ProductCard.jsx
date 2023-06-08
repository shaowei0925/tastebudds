/* eslint-disable react/prop-types */
import { useContext, useState, useRef, useEffect } from "react";
import CartContext from "../store/cart-context";

export const AddProductCard = (props) => {
  const ctx = useContext(CartContext);
  const quantityRef = useRef();
  const [quantity, setQuantity] = useState(1);
  const [myEffect, setMyEffect] = useState();

  const addToCart = () => {
    ctx.addItem({
      id: props.id,
      price: props.price,
      quantity: quantity,
      name: props.name,
      img: props.img,
    });
    ctx.toggleProduct();
    ctx.toggleCart();
  };

  useEffect(() => {
    setMyEffect("animate-jump");
    setTimeout(() => {
      setMyEffect("");
    }, 1000);
  }, [quantity]);

  const change = () => {
    const val = parseInt(quantityRef.current.value);
    val ? setQuantity(val) : setQuantity("");
  };
  const add = () => {
    setQuantity((pre) => {
      return pre + 1;
    });
  };
  const subtract = () => {
    setQuantity((pre) => {
      return pre === 1 ? 1 : pre - 1;
    });
  };

  return (
    <div className="animate-jump-in fixed top-[13%] left-[15%] bg-white w-3/5 h-[30rem] rounded-2xl px-12 py-4 z-30 grid grid-cols-3 gap-8 items-center flex justify-center">
      <img src={props.img} alt="img" className="h-3/4 w-fit" />
      <div className="col-span-2 flex flex-col gap-4">
        <h1 className="font-bold text-[2rem]">{props.name}</h1>
        <p className="font-medium text-[1.2rem]">
          RM {props.price.toFixed(2)} MYR
        </p>
        <div>
          <p className="font-mono py-2">Quantity</p>
          <div className="relative w-fit flex justify-center items-center border border-black rounded-3xl px-4 py-2">
            <button onClick={subtract}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </button>
            <input
              onChange={change}
              type="tel"
              min={0}
              ref={quantityRef}
              value={quantity}
              className={`w-12 text-center ${myEffect} bg-transparent`}
            />
            <button onClick={add}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
        <button
          className="w-full py-3 border-2 border-amber-900 rounded-full hover:ring-1 hover:ring-amber-900"
          onClick={addToCart}
        >
          Add to cart
        </button>
        {/* <button className="w-full py-3 bg-orange-500 text-white hover:ring hover:ring-orange-600 rounded-full">
          Buy it now
        </button> */}
        <a href="#" className="flex gap-8 items-center w-fit">
          <p className="hover:underline peer">View full details</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="relative w-6 h-6 peer-hover:left-[10px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProductCard = (props) => {
  const ctx = useContext(CartContext);

  const handleClick = (name, price, img, id) => {
    ctx.toggleProduct(name, price, img, id);
  };

  return (
    <div>
      <div className=" min-w-[250px] max-w-[250px] min-h-[460px] max-h-[460px] p-4 border border-black rounded-2xl flex flex-col justify-between hover:cursor-pointer">
        <div
          className={
            " group bg-cover relative h-60 w-50 bg-cover  hover:ease-in-out hover:duration-500 hover:cursor-pointer flex justify-center"
          }
        >
          <img
            src={props.bg1}
            alt="image"
            className="h-60 w-50 absolute group-hover:invisible group-hover:duration-500 transition ease-in-out"
          />
          <img
            src={props.bg2}
            alt="image"
            className="invisible absolute h-60 w-50 group-hover:visible group-hover:duration-500 transition group-hover:ease-in-out"
          />
          {props.sale && (
            <p className="absolute bg-orange-400 px-8 py-0.5 text-white left-2 top-3">
              Sale
            </p>
          )}
        </div>

        <h1 className="font-bold hover:underline hover:cursor-pointer py-2 group-hover:underline group">
          {props.name}
        </h1>
        {props.sale && (
          <h2 className="text-sm line-through">
            RM {props.oriPrice.toFixed(2)} MYR
          </h2>
        )}
        <h2 className="font-semibold ">
          RM {props.sellingPrice.toFixed(2)} MYR
        </h2>

        <button
          onClick={() => {
            handleClick(props.name, props.sellingPrice, props.bg1, props.id);
          }}
          className="text-lg border-2 border-amber-800 rounded-3xl px-4 py-2 hover:ring-2 hover:ring-amber-900 mt-8"
        >
          Choose options
        </button>
      </div>{" "}
    </div>
  );
};

export default ProductCard;
