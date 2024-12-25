import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import useMobile from "../hooks/useMobile";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setSearchPage] = useState(false);
  const [isMobile] = useMobile();

  useEffect(() => {
    const isSearch = location.pathname === "/search";
    setSearchPage(isSearch);
  }, [location]);

  const redirectToSearchPage = () => {
    navigate("/search");
  };

  console.log("search", isSearchPage);

  return (
    <div className="w-full min-w-[300px]  lg:min-w-[520px]   h-10 lg:h-12 rounded-xl text-neutral-500 font-semibold flex items-center  bg-zinc-200 group focus-within:ring-2 focus-within:ring-primary-200">
      <div>
        {isMobile && isSearchPage ? (
          <Link
            to={"/"}
            className="h-full flex items-center p-2 m-1 text-xl group-focus-within:text-primary-200 bg-white rounded-full"
          >
            <IoMdArrowRoundBack size={22} />
          </Link>
        ) : (
          <Link to={"/search"} className="h-full flex items-center p-2 text-xl group-focus-within:text-primary-200">
            <IoSearch />
          </Link>
        )}
      </div>
      <div className="w-full h-full">
        {!isSearchPage ? (
          // not in search page
          <div
            onClick={redirectToSearchPage}
            className="w-full h-full flex items-center "
          >
            <TypeAnimation
              sequence={[
                "Search 'Milk'",
                1000,
                "Search 'Bread'",
                1000,
                "Search 'Eggs'",
                1000,
                "Search 'Butter'",
                1000,
                "Search 'Chips'",
                1000,
                "Search 'Paneer'",
                1000,
                "Search 'Maggie'",
                1000,
                "Search 'Cakes'",
                1000,
                "Search 'Cream'",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        ) : (
          // inside searchpage
          <div className="w-full h-full">
            <input
              type="text"
              autoFocus
              placeholder="Search for groceries, electronics and more"
              className="w-full bg-transparent h-full outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
