import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()

    if(data.password !== data.confirmPassword){
       toast.error(
        "Password and Confirm Password must be same"
       )
       return
    }
  }

  const validateData = Object.values(data).every(elem=>elem)


  return (
    <section className="w-full rounded-2xl container mx-auto px-2">
      <div className="my-4 w-full max-w-sm  bg-slate-300 mx-auto rounded-lg p-4 text-center">
        <p className="text-2xl my-5 font-bold text-slate-700">
          Welcome to MY BASKET
        </p>
        <hr className="h-1 bg-white my-1 " />

        <form
          onSubmit={handleSubmit}
          className="text-start mt-6 grid gap-4 font-bold text-md text-slate-600"
        >
          <div className="grid gap-2">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              autoFocus
              className="bg-white p-2 rounded-lg outline-none"
              id="name"
              autoComplete="off"
              value={data.name}
              onChange={handleChange}
            />
          </div>
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
          </div>
          <div className="grid gap-2">
            <label htmlFor="confirmPassword">Confirm Password :</label>
            <div className="w-full bg-white rounded-lg flex items-center pr-5 justify-between">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="bg-white p-2 rounded-lg w-5/6 outline-none"
                id="confirmPassword"
                autoComplete="new-password"
                value={data.confirmPassword}
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
          <button disabled={!validateData} className={ `${validateData?"bg-green-600 hover:bg-green-700 hover: cursor-pointer":"bg-gray-500 hover:cursor-not-allowed"} text-white p-2 rounded-lg my-3  `}>
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
