const Tastebuddy = () => {
  return (
    <div className="flex flex-col w-screen items-center gap-6 py-12">
      <h1 className="text-yellow-600 text-3xl font-bold py-4">
        Be a Tastebuddy !
      </h1>
      <div className="grid grid-cols-4 ">
        <a
          href="https://www.instagram.com/reel/CtBOF84v3Mx/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/pic1.png" alt="img" className="w-full h-[480px]" />
        </a>{" "}
        <a
          href="https://www.instagram.com/reel/CtBOF84v3Mx/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/pic2.png" alt="img" className="w-full h-[480px]" />
        </a>{" "}
        <a
          href="https://www.instagram.com/reel/CtBOF84v3Mx/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/pic3.png" alt="img" className="w-full h-[480px]" />
        </a>{" "}
        <a
          href="https://www.instagram.com/reel/CtBOF84v3Mx/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/pic4.png" alt="img" className="w-full h-[480px]" />
        </a>{" "}
      </div>
      <a
        href="#"
        className="bg-yellow-500 text-white py-3 px-4 hover:ring hover:ring-yellow-500"
      >
        Follow us
      </a>
    </div>
  );
};

export default Tastebuddy;
