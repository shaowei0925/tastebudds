import { useEffect } from "react";
import { useAuth } from "../store/auth-context";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { signup, isSignedUp, error } = useAuth();
  const navigate = useNavigate();
  const submit = async (e) => {
    console.log(e.target[0].value);
    e.preventDefault();
    const user = {
      name: e.target[0].value.trim() + " " + e.target[1].value.trim(),
      email: e.target[2].value,
      password: e.target[3].value,
    };

    signup(user);
  };
  useEffect(() => {
    if (isSignedUp) {
      navigate("/login");
    } else {
      navigate("/register");
    }
  }, [isSignedUp]);
  return (
    <div className="flex flex-col justify-center items-center py-8 ">
      {error.status && (
        <div
          id="alert-border-2"
          className="flex items-center p-4 px-8 mb-4 text-red-800 border-t-4 border-red-300 bg-red-100 "
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className="ms-3 text-sm font-medium">{error.text}</div>
        </div>
      )}
      <h1 className="font-bold md:text-5xl mb-12 text-3xl">Create account</h1>
      <form
        className="w-1/2 md:w-5/12 flex flex-col justify-center items-center"
        onSubmit={submit}
      >
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
          className="w-1/2 md:w-1/3 my-8 font-mono font-medium text-lg px-8 py-3 bg-orange-400 text-white rounded-full hover:ring-orange-400 hover:ring-2"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Register;
