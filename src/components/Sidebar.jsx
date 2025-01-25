import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import logoimg from "../assets/logo/logo.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-85 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 left-0 w-[24%] h-full bg-[#010127] backdrop-blur-md bg-opacity-35 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } py-4 px-5`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between">
            <div></div>
            <button onClick={toggleSidebar}>
              <IoCloseOutline className="text-4xl text-white" />
            </button>
          </div>
          <img src={logoimg} alt="Logo" className="w-[150px] m-auto" />
          <hr className="border-white my-4" />
          <ul className="flex-grow text-white">
            <li className="text-white px-4 py-3">
              <a href="/" className="flex items-center text-[18px]">
                <img
                  src="https://thalagames.com/icon/home.png"
                  alt="Home Icon"
                  className="w-[45px] mr-3"
                />
                <span>Home</span>
              </a>
            </li>
            <li className="px-4 py-3">
              <a href="/other" className="flex items-center text-[18px]">
                <img
                  src="https://thalagames.com/icon/home.png"
                  alt="Other Page Icon"
                  className="w-[45px] mr-3"
                />
                <span>Action</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
