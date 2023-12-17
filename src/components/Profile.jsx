import { useEffect } from "react";
import { useAuth } from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import OrderHistory from "./OrderHistory";
const Profile = () => {
  const { logout, isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return (
    <div className="flex flex-col px-16 py-8">
      <div className="flex flex-col">
        <h1 className="font-bold text-[3rem]">Account</h1>
        <button
          className="flex w-fit justify-center item-center gap-4"
          onClick={logout}
        >
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          <p className="underline">Log out</p>
        </button>
      </div>
      <div className="flex justify-between py-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[2rem]">Order history</h2>
          <OrderHistory />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[2rem]">Account details</h2>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
