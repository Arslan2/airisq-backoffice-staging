import React from "react";
import { useNavigate } from "react-router-dom";
import AppLogo from "../../assets/img/AirisQ-HiRes.png";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    sessionStorage.setItem("AuthToken", "EmptyTok");
    navigate("/");
  };

  return (
    <div className="bg-hawkes-blue min-h-screen flex items-center justify-center">
      <div className="w-1/4 flex items-center flex-col">
        <img src={AppLogo} alt="App logo" className="h-64 w-52" />
        <h1 className="text-4xl text-poster-blue my-6">
          Login To Your Account
        </h1>
        <input
          placeholder="Email"
          type="email"
          className="bg-white p-4 rounded-full w-full border-2 border-pacific-blue placeholder:text-poster-blue mb-4 focus:outline-none focus:ring focus:ring-pacific-blue"
        />
        <input
          placeholder="Password"
          type="password"
          className="bg-white p-4 rounded-full w-full border-2 border-pacific-blue placeholder:text-poster-blue focus:outline-none focus:ring focus:ring-pacific-blue"
        />
        <div className="flex items-center justify-between text-poster-blue w-full my-6">
          <div className="flex items-center">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="checked-checkbox" className="ms-2">
              Remember me
            </label>
          </div>
          <span>Forgot Password?</span>
        </div>
        <button
          className="h-16 bg-pacific-blue rounded-full w-full text-white font-bold"
          onClick={handleLogin}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}
