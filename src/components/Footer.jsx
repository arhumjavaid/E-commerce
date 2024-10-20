// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"; // Import useState
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Footer = ({ setMenu }) => {
  const navigate = useNavigate();
  const link = ["Company", "Products", "Offices", "About", "Contact"];

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div
        onClick={() => {
          setMenu("Shop");
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="logo flex items-center gap-2 cursor-pointer"
      >
        <img src={footer_logo} alt="" />
        <p className="text-[#383838] text-[2.875rem] font-[600]">SHOPPER</p>
      </div>
      <ul className="links flex list-none gap-12 text-[#252525] text-xl">
        {link.map((item, index) => {
          return (
            <li key={index} className="cursor-pointer">
              {item}
            </li>
          );
        })}
      </ul>
      <div className="icon flex gap-5">
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 w-full mb-[30px] text-[#1a1a1a] text-xl">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p className="font-semibold">Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
