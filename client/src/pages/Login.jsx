import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...SummaryApi.login,
        data: data
      });
      if (response.data.error) {
        toast.error(response.data.message);
      }
      if (response.data.success) {
        localStorage.setItem("accessToken", response.data.data.accessToken)
        localStorage.setItem("refreshToken", response.data.data.refreshToken)
        toast.success(response.data.message);
        setData({
          email: "",
          password: ""
        });
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      AxiosToastError(error);
    }
  };

  const validateData = Object.values(data).every((elem) => elem);

  return (
    <section className="w-full rounded-2xl container mx-auto px-2">
      <div className="my-4 w-full max-w-sm  bg-slate-300 mx-auto rounded-lg p-4 text-center">
        <p className="text-2xl my-5 font-bold text-slate-700">
          Login to your account
        </p>
        <hr className="h-1 bg-white my-1 " />

        <form
          onSubmit={handleSubmit}
          className="text-start mt-6 grid gap-4 font-bold text-md text-slate-600"
        >
          <div className="grid gap-2">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              className="bg-white p-2 rounded-lg outline-none"
              id="email"
              autoComplete="off"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Password :</label>
            <div className="w-full bg-white rounded-lg flex items-center pr-5 justify-between">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-white p-2 rounded-lg w-5/6 outline-none"
                id="password"
                autoComplete="new-password"
                value={data.password}
                onChange={handleChange}
              />
              <button
                onClick={(e) => {
                  handleShowPassword();
                  e.preventDefault();
                }}
                className="p-1"
              >
                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </button>
            </div>
            <Link to={"/forgot-password"}>
              <p className="text-xs w-1/ font-normal text-start text-black hover:text-red-500">
                forgot password
              </p>
            </Link>
          </div>
          <button
            disabled={!validateData}
            className={`${
              validateData
                ? "bg-green-600 hover:bg-green-700 hover: cursor-pointer"
                : "bg-gray-500 hover:cursor-not-allowed"
            } text-white p-2 rounded-lg my-3  `}
          >
            Login
          </button>
        </form>
        <div className="mt-2 text-sm my-4">
          <p>
            Don't have an account?
            <Link
              to={"/register"}
              className="bg-blue-600 mx-2 text-white py-1 px-4 rounded-md font-semibold text-md"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
