import Question from "./Question";
const FAQs = () => {
  return (
    <div className="flex flex-col px-60 items-left py-16">
      <h1 className="font-bold text-6xl">FAQs</h1>
      <p className="mt-16 text-lg leading-8">
        Wondering about shipping, returns, payment options or anything in
        between? Look no further and find your answers here!
      </p>
      <p className="mt-4 text-lg  leading-8">
        Psst! If you don&#39;t find your answer here, you can always drop us a
        message at heybuddy@yulifoods.com.
      </p>
      <div className="mt-8">
        <Question
          title={"Order Information"}
          question={"Can I cancel or edit my order?"}
          answer={
            "Our warehouse fulfils orders as soon as possible to ensure everyone receives their orders quickly. However, in the event that we've not processed your order just yet, you can still cancel or amend your order. So if you have a change of mind, please contact us as quickly as possible!"
          }
        />
        <Question
          title={"Return and Exchange"}
          question={"How do I make a return?"}
          answer={
            "We are sorry to hear that you need to make a return. Generally, we do not accept returns due to the nature of our product. However, return issues are dealt with on a case-by-case basis. Please take a look at our Return & Refund Policy page for more information."
          }
        />
        <Question
          title={"Shipping Information"}
          question={"How long should I expect my order to arrive?"}
          answer={
            "After our courier partner picks up your order, it may take 2-7 working days to arrive at your doorstep, depending on your location. Once dispatched, you will receive an email containing a tracking number or tracking link, which you can use to monitor your order."
          }
        />
        <Question
          title={"Product"}
          question={"TasteBudds Honey Products Money-Back Guarantee"}
          answer={
            "We put our money where our mouth is with out 100% money-back guarantee for all our honey products! As all our honey is lab tested after being collected and infused, we're 100% certain about the authenticity and purity of our delicious honey. If you can prove otherwise with evidence and including the batch number of the honey you've purchased from us, we'll gladly give you a 100% refund!"
          }
        />
      </div>
    </div>
  );
};

export default FAQs;
