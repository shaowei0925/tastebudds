import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { useAuth } from "../store/auth-context";

const Navbar = () => {
  const [firstDropped, setFirstDropped] = useState(false);
  const [secondDropped, setSecondDropped] = useState(false);

  const ctx = useContext(CartContext);
  const { isLoggedIn } = useAuth();

  const firstDrop = () => {
    setFirstDropped((pre) => {
      return !pre;
    });
  };
  const secondDrop = () => {
    setSecondDropped((pre) => {
      return !pre;
    });
  };

  return (
    <nav className="relative z-99 w-screen h-[80px] bg-white border py-4 px-12 flex items-center justify-between text-xl">
      <div className="flex items-center justify-center gap-4">
        <Link
          to="/"
          onClick={() => {
            setFirstDropped(false);
          }}
        >
          <img className="h-[35px] min-w-fit mr-4" src="/logo.png" alt="logo" />
        </Link>

        <Link
          to="/"
          className="text-yellow-900 px-4 hover:underline hover:text-black"
          onClick={() => {
            setFirstDropped(false);
          }}
        >
          Home
        </Link>
        <div className="text-yellow-900 px-">
          <button
            className="flex items-center justify-center gap-2 hover:text-black hover:underline"
            onClick={firstDrop}
          >
            <p>Shop</p>
            {!firstDropped && (
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
            )}
            {firstDropped && (
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
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </button>
          {firstDropped && (
            <div className="text-base flex flex-col border rounded-xl  absolute mt-2 bg-stone-50 py-4 z-50 w-1/6">
              <Link
                to="/products"
                className="hover:text-black py-2 px-8"
                onClick={() => {
                  setFirstDropped(false);
                }}
              >
                Shop All
              </Link>
              <button
                onClick={secondDrop}
                className="flex justify-between hover:text-black hover:underline py-2 px-8"
              >
                <p>Collections</p>
                {!secondDropped && (
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
                )}
                {secondDropped && (
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
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                )}
              </button>
              {secondDropped && (
                <div className="bg-amber-50 py-4 px-8 flex flex-col gap-4">
                  <Link
                    className="hover:text-black"
                    to="/collections/med1"
                    onClick={() => {
                      setFirstDropped(false);
                    }}
                  >
                    The 20 Seconds Meal
                  </Link>
                  <Link
                    className="hover:text-black"
                    to="/collections/med1"
                    onClick={() => {
                      setFirstDropped(false);
                    }}
                  >
                    The Effortless Tea
                  </Link>
                  <Link
                    className="hover:text-black"
                    to="/collections/med1"
                    onClick={() => {
                      setFirstDropped(false);
                    }}
                  >
                    The Mess Free Honey
                  </Link>
                  <Link
                    className="hover:text-black"
                    to="/collections/med1"
                    onClick={() => {
                      setFirstDropped(false);
                    }}
                  >
                    The Versatile Booster
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        <Link
          to="/faqs"
          className=" text-yellow-900 px-4 hover:underline hover:text-black"
          onClick={() => {
            setFirstDropped(false);
          }}
        >
          FAQs
        </Link>
        <Link
          to="/contact"
          className="text-yellow-900 px-4 hover:underline hover:text-black"
          onClick={() => {
            setFirstDropped(false);
          }}
        >
          Let&#39;s Be Buddies
        </Link>
      </div>

      {/* Search button */}
      <div className="flex items-center justify-center">
        <button className="px-2 hover:scale-110 text-yellow-900">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>

        {/* Profile button */}
        <Link
          to={isLoggedIn ? "/profile" : "/login"}
          className="px-2 hover:scale-110 text-yellow-900"
        >
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </Link>

        {/* Cart button */}
        <button
          className="px-2 hover:scale-110 text-yellow-900"
          onClick={() => {
            ctx.toggleCart();
            setFirstDropped(false);
          }}
        >
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
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
