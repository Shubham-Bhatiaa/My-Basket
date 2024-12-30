import React, { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...SummaryApi.forgot_password,
        data: data
      });
      if (response.data.error) {
        toast.error(response.data.message);
      }
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/verify-forgot-password-otp",{
          state:data
        });
        setData({
          email: ""
        });
        
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
          Forgot Password
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
          <button
            disabled={!validateData}
            className={`${
              validateData
                ? "bg-green-600 hover:bg-green-700 hover: cursor-pointer"
                : "bg-gray-500 hover:cursor-not-allowed"
            } text-white p-2 rounded-lg my-3  `}
          >
            Send OTP
          </button>
        </form>
        <div className="my-4 text-sm">
          <p>
            Create a new account
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

export default ForgotPassword;
