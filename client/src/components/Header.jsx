import React from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import useMobile from "../hooks/useMobile";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";

  return (
    <header className="h-24 lg:h-20 shadow-md sticky top-0 flex flex-col gap-2 items-center justify-center">
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto justify-between flex items-center px-2">
          {/**logo */}
          <div className="h-full">
            <Link to={"/"} className="h-full flex items-center justify-center">
              <img
                src={logo}
                width={170}
                height={60}
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
            <button className="lg:hidden text-zinc-600">
              <FaRegUser size={18} />
            </button>
            <div className="hidden lg:block">cart and login</div>
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
