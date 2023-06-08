import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import { useEffect } from "react";

const Login = () => {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const onLogin = async (e) => {
    const user = {
      email: e.target.form[0].value,
      password: e.target.form[1].value,
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
      <h1 className="font-bold text-5xl mb-12">Login</h1>
      <form className="w-1/3 flex flex-col justify-center items-center">
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
          onClick={onLogin}
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
