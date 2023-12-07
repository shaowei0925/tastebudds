import { useState, useContext, useEffect, useRef } from "react";
import CartContext from "../store/cart-context";
const Backdrop = () => {
  return <div className="fixed bg-orange-300 z-10 w-screen h-screen"></div>;
};

const Search = () => {
  const ctx = useContext(CartContext);
  const [myClass, setMyClass] = useState("invisible translate-x-full");
  const searchRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    searchRef.current.value = "";
  };

  useEffect(() => {
    ctx.showSearch
      ? setMyClass("visible")
      : setMyClass("invisible translate-x-full ");
  }, [ctx.showSearch]);
  return (
    <div className={`absolute h-screen w-screens ${myClass}`}>
      <img
        className="h-[35px] min-w-fit mr-4 absolute z-20 top-10 left-10 scale-110 animate-moving-text"
        src="/logo.png"
        alt="logo"
      />

      <button
        className="absolute text-black z-20 right-10 top-10 hover:animate-ping"
        onClick={ctx.toggleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex justify-center h-screen w-screen items-center">
        <Backdrop />
        <form
          className="flex relative z-20 justify-center h-fit"
          onSubmit={submitHandler}
        >
          <input
            ref={searchRef}
            type="text"
            className="placeholder-yellow-900 placeholder-opacity-50 pb-2 font-medium block mt-2 text-3xl text-yellow-900 bg-transparent border-yellow-900 border-b-2  focus:outline-0"
            placeholder="Search our store"
            required
          />
          <button
            className="px-2 hover:animate-bounce text-yellow-900"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
