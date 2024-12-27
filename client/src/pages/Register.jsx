import React, { useState } from 'react'

const Register = () => {

  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    confimrPassword:""
  })
  return (
    <section className="w-full rounded-2xl container mx-auto px-2">
      <div className="my-4 w-full max-w-lg bg-slate-300 mx-auto rounded-lg p-4 text-center">
        <p className="text-3xl my-5 font-bold text-slate-700">
          Welcome to MY BASKET
        </p>
        <hr className="h-1 bg-blue-50 my-1 " />

        <form className="text-start my-10 font-bold text-lg text-slate-600">
          <div className="grid">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              autoFocus
              className="bg-blue-50 p-2 rounded-lg outline-none"
              id="name"
              autoComplete="off"
              value={data.name}
            />
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              className="bg-blue-50 p-2 rounded-lg outline-none"
              id="email"
              autoComplete="off"
              value={data.email}
            />
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              className="bg-blue-50 p-2 rounded-lg outline-none"
              id="password"
              value={data.password}
            />
            <label htmlFor="confirm-password">Confirm Password :</label>
            <input
              type="password"
              className="bg-blue-50 p-2 rounded-lg outline-none"
              id="confirm-password"
              value={data.confimrPassword}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register