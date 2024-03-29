import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../img/logo_dark.png";
//import { Link } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "150px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="skills">Skills</Link>
        </li>
        <li>
          <Link to="work">Work</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work">
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact">
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 p-2 text-decoration-none hover:text-white"
              href="https://www.linkedin.com/in/kaushal-rijal-772902213"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] p-2 text-decoration-none hover:text-white"
              href="https://github.com/kaushalrijal"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] p-2 text-decoration-none hover:text-white"
              href="mailto:kaushalrijal091@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00acee] p-2 text-decoration-none hover:text-white"
              href="https://twitter.com/kaushalsym"
            >
              Resume <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="twitter logo" width="30" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
