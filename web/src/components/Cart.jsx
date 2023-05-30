import { useRef, useState } from "react";
const CartItem = (props) => {
  const quantityRef = useRef();
  const [quantity, setQuantity] = useState(0);

  const add = () => {
    setQuantity((pre) => {
      return pre + 1;
    });
  };
  const subtract = () => {
    setQuantity((pre) => {
      return pre === 0 ? 0 : pre - 1;
    });
  };

  const del = () => {
    setQuantity(0);
  };
  const change = () => {
    const val = parseInt(quantityRef.current.value);
    val ? setQuantity(val) : setQuantity("");
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      <img src="src\assets\product1.png" alt="product" />
      <div>
        <h2 className="font-semibold mb-2">
          Bundle of 3 (Save 8%) - The Effortless Tea
        </h2>
        <p className="my-2">RM99.35 MYR</p>
        <ul>
          <li>Box 1: Heavenly Bliss Green Tea</li>
          <li>Box 2: Heavenly Bliss Green Tea</li>
          <li>Box 3: Heavenly Bliss Green Tea</li>
        </ul>
        <div className="relative w-fit flex justify-center items-center border border-black rounded-3xl px-4 py-2 mt-4">
          <button onClick={subtract}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          <input
            onChange={change}
            type="tel"
            min={0}
            ref={quantityRef}
            value={quantity}
            className="w-12 text-center "
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
          <button className="absolute left-40" onClick={del}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h2>RM99.35</h2>
        <h2 className="font-semibold">MYR</h2>
      </div>
    </div>
  );
};

const Cart = (props) => {
  return (
    <div className="border border-black h-screen overflow-y-auto overflow-x-hidden w-1/3 px-3 py-3">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Your cart</h1>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-between items-center border-b border-black py-4 font-mono text-sm">
        <h2 className="font-thin">PRODUCT</h2>
        <h2 className="font-thin">TOTAL</h2>
      </div>
      <div className="flex flex-col gap-8 py-4">
        <CartItem />
        <CartItem />
      </div>
      <div className="border-t border-black flex flex-col gap-3">
        <div className="flex justify-between items-center text-lg pt-4">
          <h2 className="font-semibold">Subtotal</h2>
          <h2>RM75.60 MYR</h2>
        </div>
        <p className="text-sm font-mono">
          Taxes and shipping calculated at checkout
        </p>
        <button className="py-3 px-8 bg-amber-600 text-white rounded-3xl hover:ring-amber-600 hover:ring-2">
          Check out
        </button>
      </div>
    </div>
  );
};

export default Cart;
