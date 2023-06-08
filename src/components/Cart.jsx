/* eslint-disable react/prop-types */
import { useRef, useState, useContext, useEffect } from "react";
import CartContext from "../store/cart-context";

const CartItem = (props) => {
  const quantityRef = useRef();
  const [quantity, setQuantity] = useState(props.quantity);
  console.log(quantity, "CartItem");

  useEffect(() => {
    setQuantity(props.quantity);
  }, [props.quantity]);

  const add = () => {
    setQuantity((pre) => {
      return pre + 1;
    });
    props.onAdd();
  };
  const subtract = () => {
    setQuantity((pre) => {
      return pre === 0 ? 0 : pre - 1;
    });
    props.onRemove();
  };

  const del = () => {
    setQuantity(0);
    props.onDelete();
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <img src={props.img} alt="product" className="w-auto" />
      <div className="flex flex-col justify-center px-4">
        <h2 className="font-semibold mb-2">{props.name}</h2>
        <p className="my-2">RM{props.price.toFixed(2)} MYR</p>
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
          <p ref={quantityRef} value={quantity} className="w-12 text-center">
            {quantity}
          </p>
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
      <div className="flex flex-col items-end justify-center">
        <h2>RM{(quantity * props.price).toFixed(2)}</h2>
        <h2 className="font-semibold">MYR</h2>
      </div>
    </div>
  );
};

const Cart = () => {
  const ctx = useContext(CartContext);
  const [myClass, setMyClass] = useState("invisible translate-x-full");
  const [myEffect, setMyEffect] = useState("");
  const hasItems = ctx.items.length > 0;

  const cartAdd = (item) => {
    ctx.addItem({ ...item, quantity: 1 });
  };

  const cartRemove = (id) => {
    ctx.removeItem(id);
  };
  const cartDelete = (id) => {
    ctx.deleteItem(id);
  };

  useEffect(() => {
    setMyEffect("animate-jump");
    setTimeout(() => {
      setMyEffect("");
    }, 1000);
  }, [ctx.totalAmount]);

  useEffect(() => {
    ctx.showCart
      ? setMyClass("visible")
      : setMyClass("invisible translate-x-full");
  }, [ctx.showCart]);

  const cartItems = (
    <div className=" flex flex-col gap-8 py-8">
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            img={item.img}
            onRemove={cartRemove.bind(null, item.id)}
            onAdd={cartAdd.bind(null, item)}
            onDelete={cartDelete.bind(null, item.id)}
          />
        );
      })}
    </div>
  );

  return (
    <div
      className={`fixed right-0 z-20 bg-white h-screen overflow-y-auto overflow-x-hidden w-2/5 px-4 py-4 pb-12 ease-in-out duration-500 ${myClass}`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Your cart</h1>
        <button onClick={ctx.toggleCart}>
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
      {hasItems && cartItems}
      {!hasItems && (
        <h1 className="font-semibold text-[2rem] font-mono text-center py-12">
          Your cart is empty
        </h1>
      )}
      <div className="border-t border-black flex flex-col gap-3">
        <div className="flex justify-between items-center text-lg pt-4">
          <h2 className="font-semibold">Subtotal</h2>
          <h2 className={myEffect}>RM{ctx.totalAmount.toFixed(2)} MYR</h2>
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
