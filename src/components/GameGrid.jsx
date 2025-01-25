import React from "react";
import GameCard from "./GameCard"
import {
    assets_25to32,
} from "../assets/assets";

const GameGrid = () => {
  const gameAssets = [
    {
      imgSrc: assets_25to32.stickmanbrawl,
      redirectedpage: "/bikeracing",
      title: "Bike Racing",
    },
    {
      imgSrc: assets_25to32.bricksbreakerdeluxecrusher,
      redirectedpage: "/solitairechampions",
      title: "Solitaire Champions",
    },
    {
      imgSrc: assets_25to32.planetchaos,
      redirectedpage: "/stickmanfighter",
      title: "Stickman Fighter",
    },
    {
      imgSrc: assets_25to32.skybridgeclassic,
      redirectedpage: "/uphillracing",
      title: "Up Hill Racing",
    },
    {
      imgSrc: assets_25to32.jewelacademy,
      redirectedpage: "/archeryking",
      title: "Archery King",
    },
    {
      imgSrc: assets_25to32.tileconnectmaster,
      redirectedpage: "/midnightpoolclassic",
      title: "Midnight Pool Classic",
    },
    {
      imgSrc: assets_25to32.fourpics1,
      redirectedpage: "/gameloftsportsminigame",
      title: "Gameloft Sports Minigame",
    },
    {
      imgSrc: assets_25to32.candyworldmatch3mania,
      redirectedpage: "/asphaltretro",
      title: "Asphalt Retro",
    },
  ];

  return (
    <div className="h-[100vh] p-auto m-auto w-90">
      <div
        className="grid grid-cols-4 gap-x-2 gap-y-14 mx-auto"
        style={{ maxWidth: "900px" }}
      >
        {gameAssets.map((asset, index) => (
          <GameCard
            key={index}
            imgSrc={asset.imgSrc}
            redirectedpage={asset.redirectedpage}
            title={asset.title}
          />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;