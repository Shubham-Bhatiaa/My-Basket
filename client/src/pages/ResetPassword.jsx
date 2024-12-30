import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";

const ResetPassword = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [data,setData] = useState({
        newPassword:"",
        confirmPassword:""
    })
    const validateData = Object.values(data).every((elem) => elem);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    useEffect(()=>{
        if(!(location?.state?.data?.success)){
            navigate("/")
        }

        if(location?.state?.email){
            setData((prev)=>{
                return{
                    ...prev,
                    email:location?.state?.email,
                }
            })
        }
    },[])

    const handleChange = (e) => {
      const { id, value } = e.target;
      console.log(id,value)
      setData((prevData) => ({
        ...prevData,
        [id]: value
      }));
    };

    const handleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };
    const handleShowConfirmPassword = () => {
      setShowConfirmPassword((prev) => !prev);
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await Axios({
         ...SummaryApi.reset_password,
          data: data
        });
        if (response.data.error) {
          toast.error(response.data.message);
        }
        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/login", {
            state: data
          });
          setData({
            newPassword: "",
            confirmPassword: ""
          });
        }
      } catch (error) {
        AxiosToastError(error);
        console.log(error)
      }
    };

  return (
    <section className="w-full rounded-2xl container mx-auto px-2">
      <div className="my-4 w-full max-w-sm  bg-slate-300 mx-auto rounded-lg p-4 text-center">
        <p className="text-2xl my-5 font-bold text-slate-700">
          Enter new password
        </p>
        <hr className="h-1 bg-white my-1 " />

        <form
          onSubmit={handleSubmit}
          className="text-start mt-6 grid gap-4 font-bold text-md text-slate-600"
        >
          <div className="grid gap-2">
            <label htmlFor="newpassword">New Password :</label>
            <div className="w-full bg-white rounded-lg flex items-center pr-5 justify-between">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-white p-2 rounded-lg w-5/6 outline-none"
                id="newPassword"
                autoComplete="off"
                value={data.newPassword}
                onChange={handleChange}
                autoFocus
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
          </div>
          <div className="grid gap-2">
            <label htmlFor="confirmPassword">Confirm new Password :</label>
            <div className="w-full bg-white rounded-lg flex items-center pr-5 justify-between">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="bg-white p-2 rounded-lg w-5/6 outline-none"
                id="confirmPassword"
                autoComplete="off"
                value={data.confirmNewPassword}
                onChange={handleChange}
              />
              <button
                onClick={(e) => {
                  handleShowConfirmPassword();
                  e.preventDefault();
                }}
                className="p-1"
              >
                {showConfirmPassword ? (
                  <FaEye size={20} />
                ) : (
                  <FaEyeSlash size={20} />
                )}
              </button>
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
            Reset password
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
}

export default ResetPassword