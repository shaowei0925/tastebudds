import { useState } from "react";

const Navbar = () => {
  const [dropped, setDropped] = useState(true);

  const drop = () => {
    setDropped((pre) => {
      return !pre;
    });
  };

  return (
    <nav className="w-screen h-[80px] bg-white border py-4 px-12 flex items-center justify-between text-xl">
      <div className="flex items-center justify-center">
        <button>
          <img
            className="h-[35px] w-auto mr-4"
            src="src\assets\logo.png"
            alt="logo"
          />
        </button>

        <a
          href="/home"
          className="text-yellow-900 px-4 hover:underline hover:text-black"
        >
          Home
        </a>
        <div className="text-yellow-900 px-4 ">
          <button
            className="flex items-center justify-center gap-2 hover:text-black hover:underline"
            onClick={drop}
          >
            <p>Shop</p>
            {dropped && (
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
            {!dropped && (
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
          {!dropped && (
            <div className="flex flex-col border rounded-xl px-8 absolute mt-2 bg-orange-50 py-4">
              <a href="#" className="hover:text-black py-2">
                Shop All
              </a>
              <a href="#" className="hover:text-black hover:underline py-2">
                Collections
              </a>
            </div>
          )}
        </div>

        <a
          href="/faqs"
          className="text-yellow-900 px-4 hover:underline hover:text-black"
        >
          FAQs
        </a>
        <a
          href="/buddies"
          className="text-yellow-900 px-4 hover:underline hover:text-black"
        >
          Let&#39;s Be Buddies
        </a>
      </div>
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
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
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
