/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CarouselCard = (props) => {
  return (
    <div className="relative">
      <img src={props.img} alt="img" className="w-screen max-h-[27rem]" />
      <div className="max-w-[50%] bg-white top-[5.5rem] left-[4rem] absolute rounded-3xl py-9 pl-12 pr-20 flex flex-col gap-4">
        <h1 className="font-semibold text-xl">{props.title}</h1>
        <p className="text-lg">{props.subtitle}</p>
        <button className="w-fit mt-4 rounded-3xl bg-orange-400 text-white py-2 px-8 hover:ring-orange-600 hover:ring-1">
          {props.btn}
        </button>
      </div>
    </div>
  );
};

const Carousel = () => {
  const data = [
    {
      title: "The Effortless Tea",
      subtitle: "Enjoy a cuppa anywhere you go, without ANY equipment!",
      btn: "Shop now",
      img: "src\\assets\\A.jpeg",
    },
    {
      title: "Dip, Steep and Stir",
      subtitle:
        "Filter bags created with Japanese tech, giving you even diffusion at your finger tips 🍵",
      btn: "Learn more",
      img: "src\\assets\\B.jpeg",
    },
    {
      title: "Shake and Go",
      subtitle: "Prepare your meal in under 20 seconds!",
      btn: "Shop now",
      img: "src\\assets\\C.jpeg",
    },
    {
      title: "Honey On-The-Go",
      subtitle: "Say goodbye to the sticky mess!",
      btn: "Shop now",
      img: "src\\assets\\D.jpg",
    },
    {
      title: "Our Hyper Convenient Boosters",
      subtitle: "Making every meal a healthy one!",
      btn: "Try today",
      img: "src\\assets\\E.jpg",
    },
  ];
  const [paused, setPaused] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const pause = () => {
    setPaused((pre) => {
      return !pre;
    });
  };

  // TODO : auto-slider
  // let slides;

  // const startInterval = () => {
  //   slides = setInterval(() => {
  //     nextSlide();
  //   }, 1000);
  // };

  // const resetInterval = () => {
  //   clearInterval(slides);
  //   startInterval();
  // };

  // useEffect(() => {
  //   if (paused) {
  //     clearInterval(slides);
  //   }
  // }, [paused]);

  const preSlide = () => {
    let isFirst = curIndex === 0;
    let newInd = isFirst ? data.length - 1 : curIndex - 1;
    setCurIndex(newInd);
  };
  const nextSlide = () => {
    let isLast = curIndex === data.length - 1;
    let newInd = isLast ? 0 : curIndex + 1;
    setCurIndex(newInd);
  };
  return (
    <div>
      <div className="relative h-auto overflow-hidden rounded-lg">
        <div className="duration-500 ease-in-out">
          <CarouselCard
            title={data[curIndex].title}
            subtitle={data[curIndex].subtitle}
            btn={data[curIndex].btn}
            img={data[curIndex].img}
          />
        </div>
      </div>

      <div className="w-screen flex justify-center py-4 gap-4">
        <button
          className="relative hover:right-[2px]"
          type="button"
          onClick={preSlide}
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {data.map((slide, index) => {
          if (index === curIndex) {
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setCurIndex(index);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            );
          } else {
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setCurIndex(index);
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
                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                  />
                </svg>
              </button>
            );
          }
        })}

        <button
          className="relative hover:left-[2px]"
          type="button"
          onClick={nextSlide}
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button onClick={pause} className="relative hover:left-[1px]">
          {!paused && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {paused && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
