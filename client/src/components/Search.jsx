import React from "react";
import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { useNavigate, useLocation } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location: ", location)
  const redirectToSearchPage = () => {
    navigate("/search");
  };

  return (
    <div
      onClick={redirectToSearchPage}
      className="w-full min-w-[300px]  lg:min-w-[420px] h-8 rounded-2xl text-neutral-500 font-semibold flex items-center  bg-zinc-200 "
    >
      <button className="h-full flex items-center p-2 text-xl">
        <IoSearch />
      </button>
      <div>
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
    </div>
  );
};

export default Search;
