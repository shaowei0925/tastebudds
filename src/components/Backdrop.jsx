const Backdrop = (props) => {
  return (
    <div
      onClick={props.isClicked}
      className="fixed bg-orange-300 z-10 w-screen h-screen opacity-80"
    ></div>
  );
};

export default Backdrop;
