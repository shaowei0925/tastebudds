const Register = () => {
  const submit = (e) => {
    const user = {
      fname: e.target.form[0].value,
      lname: e.target.form[1].value,
      email: e.target.form[2].value,
      password: e.target.form[3].value,
    };
    console.log(user);
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center py-8 ">
      <h1 className="font-bold text-5xl mb-12">Create account</h1>
      <form className="w-5/12 flex flex-col justify-center items-center">
        <div className="relative px-8 w-full mb-6 border border-yellow-900 rounded-full py-2 group hover:ring-1 hover:ring-yellow-900">
          <input
            type="text"
            className="font-medium w-full block mt-2 py-2.5 px-4 text-sm text-yellow-900 bg-transparent appearance-none focus:ring-0 focus:outline-none peer"
            placeholder=" "
            required
          />
          <label className="absolute text-md text-yellow-900 duration-300 transform -translate-y-3 scale-75  top-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:translate-y-0">
            First Name
          </label>
        </div>
        <div className="relative px-8 w-full mb-6 border border-yellow-900 rounded-full py-2 group hover:ring-1 hover:ring-yellow-900">
          <input
            type="text"
            className="font-medium w-full block mt-2 py-2.5 px-4 text-sm text-yellow-900 bg-transparent appearance-none focus:ring-0 focus:outline-none peer"
            placeholder=" "
            required
          />
          <label className="absolute text-md text-yellow-900 duration-300 transform -translate-y-3 scale-75  top-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:translate-y-0">
            Last Name
          </label>
        </div>
        <div className="flex justify-between items-center px-8 relative w-full mb-6 border border-yellow-900 rounded-full py-2 group hover:ring-1 hover:ring-yellow-900">
          <input
            type="email"
            className="font-medium w-full block mt-2 py-2 text-sm text-yellow-900 bg-transparent appearance-none focus:outline-none peer"
            placeholder=" "
            required
          />
          <label className="absolute text-md text-yellow-900 duration-200 transform -translate-y-3 scale-75 top-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:translate-y-0">
            Email
          </label>
        </div>
        <div className="flex justify-between items-center px-8 relative w-full mb-6 border border-yellow-900 rounded-full py-2 group hover:ring-1 hover:ring-yellow-900">
          <input
            type="password"
            className="font-medium w-full block mt-2 py-2 text-sm text-yellow-900 bg-transparent appearance-none focus:outline-none peer"
            placeholder=" "
            required
          />
          <label className="absolute text-md text-yellow-900 duration-200 transform -translate-y-3 scale-75 top-4 peer-focus:scale-75 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:translate-y-0">
            Password
          </label>
        </div>

        <button
          type="submit"
          onClick={submit}
          className="w-1/3 my-8 font-mono font-medium text-lg px-8 py-3 bg-orange-400 text-white rounded-full hover:ring-orange-400 hover:ring-2"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Register;
