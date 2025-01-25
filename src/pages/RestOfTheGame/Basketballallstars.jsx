import React, { useState } from "react";
import GameCard from "../../components/GameCard";
import { BiMenuAltLeft } from "react-icons/bi";
import Sidebar from "../../components/Sidebar";
import {
  assets_1to8,
  assetslogo,
  assets_9to16,
  assets_17to24,
  assets_25to32,
  assets_33to40,
  restofthegames,
} from "../../assets/assets";
import { Link } from "react-router-dom";
import GameGrid from "../../components/GameGrid";

export default function Basketballallstars() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-[#010127]">
        <div
          className="py-3 flex px-3 items-center"
          style={{ margin: "0px auto 10% auto" }}
        >
          <button onClick={toggleSidebar} className="cursor-pointer">
            <BiMenuAltLeft className="text-4xl" fill="#ffffff" />
          </button>
          <a href="/" className="flex-grow text-center">
            <img
              src={assetslogo.logo}
              className="w-[150px] m-auto"
              alt="Logo"
            />
          </a>
        </div>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* stickman fighter  */}

        <div className="w-[380px] mx-auto mt-28 mb-56">
          <div className="px-2">
            <img
              src={restofthegames.basketballallstars}
              alt="game"
              className="w-[200px] m-auto mb-2"
            />
            <h1 className="text-center text-[#fff] text-2xl">
            Basketball All Stars
            </h1>
            <Link to="https://thalagames.com/game/basketball-all-stars/play">
              <div
                className="text-center text-[#fff] p-2 rounded-xl mt-2"
                style={{
                  background:
                    "linear-gradient(110.22deg, #1E85F3 25.96%, #05429B 81.15%)",
                }}
              >
                Play Now
              </div>
            </Link>
          </div>
        </div>

        {/* 25 to 32 */}
        <GameGrid />
    {/* card  */}
      </div>
    </div>
  );
};




