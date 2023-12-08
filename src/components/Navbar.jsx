import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { useAuth } from "../store/auth-context";
import Backdrop from "./Backdrop";

const Hamburger = (props) => {
  const ctx = useContext(CartContext);
  const { isLoggedIn } = useAuth();
  const [firstDropped, setFirstDropped] = useState(false);
  const [secondDropped, setSecondDropped] = useState(false);
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
    <>
      <nav className="absolute bg-white w-[65%] z-20 left-0 flex flex-col py-12 gap-20 h-screen">
        <div className="flex flex-col text-2xl">
          <Link
            className="hover:bg-gray-100 py-4 px-12"
            to="/"
            onClick={props.isClicked}
          >
            Home
          </Link>
          <div
            className="flex justify-between items-center hover:bg-gray-100 py-4 px-12 hover:cursor-pointer"
            onClick={firstDrop}
          >
            <Link>Shop</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <Link
            className="hover:bg-gray-100 py-4 px-12"
            to="/faqs"
            onClick={props.isClicked}
          >
            FAQs
          </Link>
          <Link
            className="hover:bg-gray-100 py-4 px-12"
            to="/contact"
            onClick={props.isClicked}
          >
            Let's Be Buddies
          </Link>
        </div>
        <Link
          to={isLoggedIn ? "/profile" : "/login"}
          className="flex px-12 py-4 hover:bg-gray-100 text-yellow-900 gap-4 text-2xl justify-start items-center"
          onClick={props.isClicked}
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
          <p>Log In</p>
        </Link>
      </nav>
      {firstDropped && (
        <div className="absolute bg-white w-[65%] z-20  left-0 flex flex-col py-12 h-full text-xl font-medium">
          <button
            className="flex text-lg items-center px-8 gap-4 py-2 bg-gray-50 hover:bg-gray-100"
            onClick={firstDrop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <p>Shop</p>
          </button>
          <Link
            to="/products"
            className="px-8 py-4 hover:bg-gray-100 "
            onClick={props.isClicked}
          >
            Shop All
          </Link>
          <button
            className="flex items-center justify-between px-8 py-4 hover:bg-gray-100 "
            onClick={secondDrop}
          >
            <p>Collections</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
      {secondDropped && (
        <div className="absolute bg-white w-[65%] z-20  left-0 flex flex-col py-12 h-full text-xl font-medium">
          <button
            className="flex text-lg items-center px-8 gap-4 py-2 bg-gray-50 hover:bg-gray-100"
            onClick={secondDrop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <p>Collections</p>
          </button>
          <Link
            to="/"
            className="px-8 py-4 hover:bg-gray-100 "
            onClick={props.isClicked}
          >
            The 15 Second Meal (Version 2.0)
          </Link>
          <Link
            to="/"
            className="px-8 py-4 hover:bg-gray-100 "
            onClick={props.isClicked}
          >
            The Effortless Tea
          </Link>
          <Link
            to="/"
            className="px-8 py-4 hover:bg-gray-100 "
            onClick={props.isClicked}
          >
            The Mess Free Honey
          </Link>
          <Link
            to="/"
            className="px-8 py-4 hover:bg-gray-100 "
            onClick={props.isClicked}
          >
            The Versatile Booster
          </Link>
        </div>
      )}
    </>
  );
};

const Navbar = () => {
  const [firstDropped, setFirstDropped] = useState(false);
  const [secondDropped, setSecondDropped] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

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
    <>
      <nav className="z-90 w-screen h-[80px] relative py-4 px-12 flex items-center justify-between lg:text-xl bg-white">
        {/* Brand Name */}

        <div className="flex flex-row w-full lg:flex-row justify-between items-center lg:w-fit">
          <button
            className="lg:invisible"
            onClick={() => {
              setShowHamburger((pre) => {
                return !pre;
              });
              ctx.toggleHideOverflow();
            }}
          >
            {!showHamburger ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          <Link
            to="/"
            onClick={() => {
              setFirstDropped(false);
            }}
          >
            <img
              className="h-[15px] md:h-[35px] min-w-fit lg:mr-4"
              src="/logo.png"
              alt="logo"
            />
          </Link>
          <div className="flex lg:flex-row-reverse items-center justify-center">
            <div className="flex invisible justify-center lg:relative lg:flex-row absolute lg:visible">
              <Link
                to="/"
                className="text-yellow-900 px-4 hover:underline hover:text-black"
                onClick={() => {
                  setFirstDropped(false);
                }}
              >
                Home
              </Link>
              <div className="text-yellow-900 px-4">
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
                  <div className="text-base flex flex-col border rounded-xl  absolute mt-2 bg-stone-50 py-4 z-50">
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
          </div>
        </div>

        {/* Search button */}
        <div className="flex items-center justify-center">
          <button
            className="px-2 hover:scale-110 text-yellow-900"
            onClick={ctx.toggleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 md:w-6 md:h-6"
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
              className="w-3 h-3 md:w-6 md:h-6"
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
              className="w-3 h-3 md:w-6 md:h-6"
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
      {showHamburger && (
        <Hamburger
          isClicked={() => {
            setShowHamburger((pre) => {
              return !pre;
            });
            ctx.toggleHideOverflow();
          }}
        />
      )}
      {showHamburger && (
        <Backdrop
          isClicked={() => {
            setShowHamburger((pre) => {
              return !pre;
            });
            ctx.toggleHideOverflow();
          }}
        />
      )}
    </>
  );
};

export default Navbar;
