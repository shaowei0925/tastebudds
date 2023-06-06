const ContactUs = () => {
  return (
    <div className="flex flex-col px-80 items-left py-16">
      <h1 className="font-bold text-6xl">Contact Us</h1>
      <p className="mt-16 text-lg">
        Hey TasteBuddy, we&#39;re always happy to respond to any queries you may
        have, whether it&#39;s about our products, services or even if
        you&#39;re just looking for a buddy to speak to!
      </p>
      <p className="mt-4 text-lg">
        Send us a message and we&#39;ll get back to you as soon as we can!
      </p>
      <div className="mt-8">
        <form>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative w-full mb-6 border border-yellow-900 rounded-3xl py-2 group hover:ring-1 hover:ring-yellow-900">
              <input
                type="text"
                name="username"
                id="username"
                className="font-medium w-full block mt-2 py-2.5 px-4 text-sm text-yellow-900 bg-transparent appearance-none focus:ring-0 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="username"
                className="px-4 absolute text-md text-yellow-900 duration-300 transform -translate-y-3 scale-75  top-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:translate-y-0"
              >
                Name
              </label>
            </div>
            <div className="relative w-full mb-6 border border-yellow-900 rounded-3xl py-2 group hover:ring-1 hover:ring-yellow-900">
              <input
                type="email"
                name="email"
                id="email"
                className="font-medium w-full block mt-2 py-2.5 px-4 text-sm text-yellow-900 bg-transparent appearance-none focus:ring-0 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="px-4 absolute text-md text-yellow-900 duration-300 transform -translate-y-3 scale-75 top-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:translate-y-0"
              >
                Email *
              </label>
            </div>
          </div>
          <div className="relative w-full mb-6 border border-yellow-900 rounded-3xl py-2 group hover:ring-1 hover:ring-yellow-900">
            <input
              type="text"
              name="phone"
              id="phone"
              className="font-medium w-full block mt-2 py-2.5 px-4 text-sm text-yellow-900 bg-transparent appearance-none focus:ring-0 focus:outline-none peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="px-4 absolute text-md text-yellow-900 duration-300 transform -translate-y-3 scale-75  top-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:translate-y-0"
            >
              Phone Number
            </label>
          </div>
          <div className="relative w-full mb-6 border border-yellow-900 rounded-3xl py-2 group hover:ring-1 hover:ring-yellow-900">
            <textarea
              rows="4"
              className="font-medium w-full block mt-2 py-2.5 px-4 text-sm text-yellow-900 bg-transparent appearance-none focus:ring-0 focus:outline-none peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="username"
              className="px-4 absolute text-md text-yellow-900 duration-300 transform -translate-y-3 scale-75  top-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:translate-y-0"
            >
              Comment
            </label>
          </div>

          <button className="font-mono py-3 px-12 rounded-3xl text-white text-xl bg-amber-600 hover:ring-amber-700">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
