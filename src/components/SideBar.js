import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

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
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex justify-between items-center w-full text-gray-100"
          >
            Email <HiOutlineMail size={30} />
          </Link>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6688ae]">
          <a
            className="flex justify-between items-center w-full text-gray-100"
            href="Rupert Aranda Resume.pdf"
            download="Rupert Aranda Resume.pdf"
            target="_blank"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
