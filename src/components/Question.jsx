/* eslint-disable react/prop-types */
import { useState } from "react";
const Question = (props) => {
  const [dropped, setDropped] = useState(false);

  const drop = () => {
    setDropped((pre) => {
      return !pre;
    });
  };
  return (
    <div
      className="flex flex-col justify-between items-center hover:bg-gray-50 px-4 py-4 cursor-pointer border-y"
      onClick={drop}
    >
      <div className="flex flex-row justify-between items-center w-full ">
        <h1 className="font-bold text-xl">{props.title}</h1>
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
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
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </div>
      {dropped && (
        <div className="mt-4 leading-8">
          <h2 className="font-semibold underline text-lg">{props.question}</h2>
          <ul className="list-disc italic">
            <li className="ml-4">{props.answer}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Question;
