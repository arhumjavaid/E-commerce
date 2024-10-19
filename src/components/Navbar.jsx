// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(
    localStorage.getItem("activeMenu") || "shop"
  );
  const nav = ["Shop", "Men", "Women", "Kids"];
  const routes = ["/", "/mens", "/womens", "/kids"];

  useEffect(() => {
    localStorage.setItem("activeMenu", menu);
  }, [menu]);

  return (
    <div className="flex justify-around p-4 shadow-[0_1px_3px_-2px_black]">
      <div className="logo flex items-center gap-[10px]">
        <img src={logo} alt="" />
        <p className="text-[#171717] text-[38px] font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center gap-12 list-none text-[#626262] text-xl font-medium">
        {nav.map((item, index) => {
          return (
            <li
              onClick={() => {
                setMenu(item);
                navigate(routes[index]);
              }}
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer gap-1"
            >
              {item}
              {menu === nav[index] && (
                <hr className="border-none w-[80%] h-[3px] rounded-xl bg-[#FF4141]" />
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-11">
        <button
          onClick={() => navigate("/login")}
          className="w-36 h-12 outline-none border-[1px] border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl font-medium bg-white cursor-pointer active:bg-[#f3f3f3] active:scale-95"
        >
          Log In
        </button>
        <img onClick={() => navigate("/cart")} src={cart_icon} alt="" />
        <div className="count w-6 h-6 flex items-center justify-center mt-[-35px] ml-[-55px] rounded-xl text-sm bg-red-700 text-white">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
