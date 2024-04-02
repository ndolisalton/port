import React from "react";
import { RiSketching,  } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaPhone, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
let year = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Get to Know</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <MdLocationOn />
              <a href="#skills" className="text-[15px] ml-[6px]">Rwamagana,Rwanda</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaPhone />
              <span className="text-[15px] ml-[6px]">+250736703858</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaEnvelope />
              <span className="text-[15px] ml-[6px]">
                saltondeveloper@gmail.com
              </span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Services</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RiSketching />
              <span className="text-[15px] ml-[6px]">UI/UX Design</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaMobileAlt />
              <span className="text-[15px] ml-[6px]">
                Mobile App Developement
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLaptopCode />
              <span className="text-[15px] ml-[6px]">Web App development</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About Me</div>
            <p className="my-[15px] 2-[50px] h-[50px]cursor-pointer whitespace-pre-wrap">
              #innovative
            </p>
            <p className="my-[15px] 2-[50px] h-[50px]cursor-pointer whitespace-pre-wrap">
              #adaptable
            </p>
            <p className="my-[15px] 2-[50px] h-[50px]cursor-pointer whitespace-pre-wrap">
              #collaborative 
            </p>
          </div>
        </div>

        <div className="my-[20px] text-[15px] text-center">
          &copy; Salton {year} Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
