import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useLocation, useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const inputRef = useRef([]);
  const location = useLocation();

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/forgot-password");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...SummaryApi.verify_forgot_password_otp,
        data: {
          otp: data.join(""),
          email: location?.state?.email
        }
      });
      if (response.data.error) {
        toast.error(response.data.message);
      }
      if (response.data.success) {
        console.log(location.state.email)
        toast.success(response.data.message);
        setData(["", "", "", "", "", ""]);
        navigate("/reset-password",{
          state:{
            data:response.data,
            email:location?.state?.email
          }}
        );
      }
      console.log(response);
    } catch (error) {
      AxiosToastError(error);
    }
  };

  const validateData = data.every((elem) => elem);

  return (
    <section className="w-full rounded-2xl container mx-auto px-2">
      <div className="my-4 w-full max-w-sm  bg-slate-300 mx-auto rounded-lg p-4 text-center">
        <p className="text-2xl my-5 font-bold text-slate-700">Enter OTP</p>
        <hr className="h-1 bg-white my-1 " />

        <form
          onSubmit={handleSubmit}
          className="text-start mt-6 grid gap-4 font-bold text-md text-slate-600"
        >
          <div className="grid gap-2">
            <label htmlFor="otp">Enter your OTP :</label>
            <div className="flex justify-between ">
              {data.map((element, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    ref={(ref) => {
                      inputRef.current[index] = ref;
                      return ref;
                    }}
                    value={data[index]}
                    onChange={(e) => {
                      const value = e.target.value;

                      const newData = [...data];
                      newData[index] = value;
                      setData(newData);

                      if (value && index < 5) {
                        inputRef.current[index + 1].focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      // Check if Backspace is pressed and the current input is empty
                      if (e.key === "Backspace" && !data[index] && index > 0) {
                        inputRef.current[index - 1].focus();
                      }
                    }}
                    className="bg-white w-14 p-2 rounded-lg outline-none text-center"
                    id="otp"
                    autoComplete="off"
                    maxLength={1}
                  />
                );
              })}
            </div>
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
        <div className="mt-2 text-sm my-4">
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

export default OtpVerification;
