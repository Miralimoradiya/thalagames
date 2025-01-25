import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Sidebar from "../../components/Sidebar";
import {
  assets_1to8,
  assetslogo,
} from "../../assets/assets";
import { Link } from "react-router-dom";
import GameGrid from "../../components/GameGrid"; 

const Stickmanfighter = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
<>
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
              src={assets_1to8.stickmanfighter}
              alt="game"
              className="w-[200px] m-auto mb-2"
            />
            <h1 className="text-center text-[#fff] text-2xl">
              Stickman Fighter
            </h1>
            <Link to="https://thalagames.com/game/stickman-fighter/play">
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


           <GameGrid />
      </div>
    </div>

</>
  );
};

export default Stickmanfighter;
