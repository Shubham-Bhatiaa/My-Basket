import React from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import useMobile from "../hooks/useMobile";
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const navigate = useNavigate
  const redirectToLoginPage=()=>{
    navigate("/Login")
  }

  return (
    <header className="h-24 lg:h-20 shadow-md sticky top-0 flex flex-col gap-2 items-center justify-center">
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto justify-between flex items-center px-2">
          {/**logo */}
          <div className="h-full">
            <Link to={"/"} className="h-full flex items-center justify-center">
              <img
                src={logo}
                width={250}
                height={50}
                alt="logo"
                className="hidden lg:block"
              />
              <img
                src={logo}
                width={120}
                height={60}
                alt="logo"
                className="lg:hidden"
              />
            </Link>
          </div>

          {/**search */}
          <div className="hidden lg:block">
            <Search />
          </div>
          {/**login and my cart */}
          <div className="">
            {/* user icon display only in mobile version */}
            <button className="lg:hidden text-zinc-600">
              <FaRegUser size={18} />
            </button>

            {/* desktop version shows cart and login */}
            <div className="hidden lg:flex items-center gap-10">
              <button onClick={redirectToLoginPage} className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-8 py-3 font-bold">Login</button>
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 rounded-md px-3 py-3 text-white font-bold">
                {/* add to cart icon */}
                <div className="animate-bounce ">
                  <TiShoppingCart size={24} />
                </div>
                <div>
                 <p>My Cart</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className=" container mx-auto px-5 lg:hidden">
        <Search />
      </div>
    </header>
  );
};

export default Header;
