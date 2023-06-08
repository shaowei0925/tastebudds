const Strengths = () => {
  const list = [
    {
      title: "Convenience",
      caption: "Created to accommodate the lifestyle of the modern individual.",
    },
    {
      title: "Wellness",
      caption:
        "For those too busy to take care of themselves, let us take care of you.",
    },
    {
      title: "Quality",
      caption:
        "Get more done in less time without compromising on the quality.",
    },
  ];

  return (
    <div className="grid grid-cols-3 bg-amber-50 py-8 px-32 gap-4 w-screen">
      {list.map((strength, index) => {
        return (
          <div key={index} className="py-2">
            <h1 className="font-bold text-xl py-4">{strength.title}</h1>
            <p>{strength.caption}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Strengths;
