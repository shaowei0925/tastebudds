/* eslint-disable react/prop-types */
const CollectionCardLeft = (props) => {
  return (
    <div className="grid grid-cols-3">
      <img
        src={props.img}
        alt="collection"
        className="rounded-tl-3xl rounded-bl-3xl w-full h-full"
      />
      <div className="col-span-2 py-4 px-24 flex flex-col justify-center gap-8 bg-orange-500 rounded-tr-3xl rounded-br-3xl text-white">
        <h1 className="text-[2rem] font-bold">{props.title}</h1>
        <p className="text-[1rem]">{props.subtitle}</p>
        <button className="text-[1rem] w-fit py-2 px-6 bg-white text-amber-800 rounded-3xl text-orange-600 w-1/3 hover:ring-white hover:ring-1">
          View Collection
        </button>
      </div>
    </div>
  );
};
const CollectionCardRight = (props) => {
  return (
    <div className="grid grid-cols-3 h-fit">
      <div className="col-span-2 py-4 px-24 flex flex-col justify-center gap-8 bg-red-50 rounded-tl-3xl rounded-bl-3xl">
        <h1 className="text-[2rem] font-bold">{props.title}</h1>
        <p className="text-[1rem]">{props.subtitle}</p>
        <button className="py-2 px-6 bg-orange-400 rounded-3xl text-white w-fit hover:ring-orange-600 hover:ring-1 text-[1rem]">
          View Collection
        </button>
      </div>
      <img
        src={props.img}
        alt="collection"
        className="rounded-tr-3xl rounded-br-3xl w-full h-full"
      />
    </div>
  );
};

const CollectionCard = () => {
  const list = [
    {
      title: "Honey On-The-Go",
      subtitle:
        "TasteBudds' honey is 100% natural and unadulterated! We put our money where our mouth is with a 100% money-back guarantee.",
      img: "/pic4.png",
    },
    {
      title: "20-Second Meal",
      subtitle:
        "Get your meal ready in just two steps. (Probably) The quickest meal you can make! Nutritious, tasty and convenient, what's not to love?",
      img: "/pic3.png",
    },
    {
      title: "Invest In Your Health",
      subtitle:
        "Never miss your daily supplements again! Our Boosters are unflavoured and can be incorporated with any of your favourite food or drink.",
      img: "/pic2.png",
    },
    {
      title: "Modernized Tea",
      subtitle:
        "Say goodbye to boring traditional tea bags and hello to our new and exciting tea sticks! Our tea sticks are perfect for on-the-go consumption.",
      img: "/pic1.png",
    },
  ];
  return (
    <div className="flex flex-col px-16 py-16 gap-8 w-2/3">
      {list.map((collection, index) => {
        return index % 2 ? (
          <CollectionCardLeft
            key={index}
            title={collection.title}
            subtitle={collection.subtitle}
            img={collection.img}
          />
        ) : (
          <CollectionCardRight
            key={index}
            title={collection.title}
            subtitle={collection.subtitle}
            img={collection.img}
          />
        );
      })}
    </div>
  );
};

export default CollectionCard;
