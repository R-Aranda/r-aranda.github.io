import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
          <a
            className="flex justify-between items-center w-full text-gray-100"
            href="https://www.linkedin.com/in/rupert-aranda/"
            target="_blank"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-gray-100"
            href="https://github.com/R-Aranda"
            target="_blank"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3f786b]">
          <a
            className="flex justify-between items-center w-full text-gray-100"
            href="/"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6688ae]">
          <a
            className="flex justify-between items-center w-full text-gray-100"
            href="/"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
