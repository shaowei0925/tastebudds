import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import { useEffect } from "react";

const Login = () => {
  const { login, isLoggedIn, isSignedUp, error } = useAuth();
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    login(user);
    e.preventDefault();
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
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
      {isSignedUp && (
        <div
          id="alert-border-4"
          className="flex items-center p-4 px-10 rounded-sm mb-4 text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50 "
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
          <div className="ms-3 text-sm font-medium">
            Account successfully registered
          </div>
        </div>
      )}
      <h1 className="font-bold text-5xl mb-12">Login</h1>
      <form
        className="w-1/3 flex flex-col justify-center items-center"
        onSubmit={onLogin}
      >
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
        <div className="justify-left w-full">
          <a href="#" className="border-black border-b hover:border-b-2">
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          className="w-fit px-8 my-8 font-mono font-medium text-lg  py-3 bg-orange-400 text-white rounded-full hover:ring-orange-400 hover:ring-2"
        >
          Sign In
        </button>

        <div>
          <Link
            to="/register"
            className="border-black border-b hover:border-b-2"
          >
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
