import axios from "axios";

const Subscription = () => {
  const handleSubscribe = async (e) => {
    try {
      const email = e.target[0].value;

      await axios.post("http://localhost:3000/subscribe", {
        email: email,
      });

      e.preventDefault();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex flex-col items-center py-8 bg-orange-50 w-screen">
      <h1 className="font-bold text-5xl">Hey Buddy!</h1>
      <p className="my-8 text-lg px-80 text-center">
        Become a TasteBuddy today and find out more about our new collections
        and exclusive offers.
      </p>
      <form className="w-1/3" onSubmit={handleSubscribe}>
        <div className="flex justify-between items-center px-4 relative w-full mb-6 border border-yellow-900 rounded-3xl py-2 group hover:ring-1 hover:ring-yellow-900">
          <input
            type="email"
            name="email1"
            id="email1"
            className="font-medium w-full block mt-2 py-2 text-sm text-yellow-900 bg-transparent appearance-none focus:outline-none peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email1"
            className="absolute text-md text-yellow-900 duration-200 transform -translate-y-3 scale-75 top-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:translate-y-0"
          >
            Email
          </label>
          <button type={"submit"}>
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
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscription;
