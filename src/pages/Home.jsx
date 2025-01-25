import React, { useState } from "react";
import GameCard from "../components/GameCard";
import { BiMenuAltLeft } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import {
  assets_1to8,
  assetslogo,
  assets_9to16,
  assets_17to24,
  assets_25to32,
  assets_33to40,
  restofthegames,
} from "../assets/assets";

const Home = () => {
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
        {/* 1 to 8  */}
        <div className="h-[100vh] p-auto m-auto w-90">
          <div
            className="grid grid-cols-4 gap-x-2 gap-y-14 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <GameCard
              imgSrc={assets_1to8.stickmanfighter}
              redirectedpage="/stickmanfighter"
              title="Stickman Fighter"
            />
            <GameCard
              imgSrc={assets_1to8.uphillracing}
              redirectedpage="/uphillracing"
              title="Up Hill Racing"
            />
            <GameCard
              imgSrc={assets_1to8.archeryking}
              redirectedpage="/archeryking"
              title="Archery King"
            />
            <GameCard
              imgSrc={assets_1to8.midnightpoolclassic}
              redirectedpage="/midnightpoolclassic"
              title="Midnight Pool Classic"
            />
            <GameCard
              imgSrc={assets_1to8.gameloftsportsminigame}
              redirectedpage="/gameloftsportsminigame"
              title="Gameloft Sports Minigame"
            />
            <GameCard
              imgSrc={assets_1to8.asphaltretro}
              redirectedpage="/asphaltretro"
              title="Asphalt Retro"
            />
            <GameCard
              imgSrc={assets_1to8.bikeracing}
              redirectedpage="/bikeracing"
              title="Bike Racing"
            />
            <GameCard
              imgSrc={assets_1to8.solitairechampions}
              redirectedpage="/solitairechampions"
              title="Solitaire Champions"
            />
          </div>
        </div>

        {/* 9 to 16  */}
        <div className="h-[100vh] p-auto m-auto w-90">
          <div
            className="grid grid-cols-4 gap-x-2 gap-y-14 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <GameCard
              imgSrc={assets_9to16.bubblefall}
              redirectedpage="/bubblefall"
              title="Bubble Fall"
            />
            <GameCard
              imgSrc={assets_9to16.masterchess}
              redirectedpage="/masterchess"
              title="Master Chess"
            />
            <GameCard
              imgSrc={assets_9to16.idleminingempire}
              redirectedpage="/idleminingempire"
              title="Idle Mining Empire"
            />
            <GameCard
              imgSrc={assets_9to16.harboroperator}
              redirectedpage="/harboroperator"
              title="Harbor Operator"
            />
            <GameCard
              imgSrc={assets_9to16.backgammon}
              redirectedpage="/backgammon"
              title="Backgammon"
            />
            <GameCard
              imgSrc={assets_9to16.hotelmanager}
              redirectedpage="/hotelmanager"
              title="Hotel Manager"
            />
            <GameCard
              imgSrc={assets_9to16.ultimatetictactoe}
              redirectedpage="/ultimatetictactoe"
              title="Ultimate Tic Tac Toe"
            />
            <GameCard
              imgSrc={assets_9to16.islandoftreasures}
              redirectedpage="/islandoftreasures"
              title="Island of Treasures"
            />
          </div>
        </div>

        {/* 17 to 24 */}
        <div className="h-[100vh] p-auto m-auto w-90">
          <div
            className="grid grid-cols-4 gap-x-2 gap-y-14 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <GameCard
              imgSrc={assets_17to24.blackjack}
              redirectedpage="/blackjack"
              title="Blackjack"
            />
            <GameCard
              imgSrc={assets_17to24.rouletteroyale}
              redirectedpage="/rouletteroyale"
              title="Roulette Royale"
            />
            <GameCard
              imgSrc={assets_17to24.mk48}
              redirectedpage="/mk48"
              title="Mk48"
            />
            <GameCard
              imgSrc={assets_17to24.parkingblock}
              redirectedpage="/parkingblock"
              title="Parking Block"
            />
            <GameCard
              imgSrc={assets_17to24.codebananas}
              redirectedpage="/codebananas"
              title="Code Bananas"
            />
            <GameCard
              imgSrc={assets_17to24.balldrop}
              redirectedpage="/balldrop"
              title="Ball Drop"
            />
            <GameCard
              imgSrc={assets_17to24.stackthecontainers}
              redirectedpage="/stackthecontainers"
              title="Stack The Containers"
            />
            <GameCard
              imgSrc={assets_17to24.secretsofcharmland}
              redirectedpage="/secretsofcharmland"
              title="Secrets of Charmland"
            />
          </div>
        </div>

        {/* 25 to 32 */}
        <div className="h-[100vh] p-auto m-auto w-90">
          <div
            className="grid grid-cols-4 gap-x-2 gap-y-14 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <GameCard
              imgSrc={assets_25to32.stickmanbrawl}
              redirectedpage="/stickmanbrawl"
              title="Stickman Brawl"
            />
            <GameCard
              imgSrc={assets_25to32.bricksbreakerdeluxecrusher}
              redirectedpage="/bricksbreakerdeluxecrusher"
              title="Bricks Breaker Deluxe Crusher"
            />
            <GameCard
              imgSrc={assets_25to32.planetchaos}
              redirectedpage="/planetchaos"
              title="Planet Chaos"
            />
            <GameCard
              imgSrc={assets_25to32.skybridgeclassic}
              redirectedpage="/skybridgeclassic"
              title="Sky Bridge Classic"
            />
            <GameCard
              imgSrc={assets_25to32.jewelacademy}
              redirectedpage="/jewelacademy"
              title="Jewel Academy"
            />
            <GameCard
              imgSrc={assets_25to32.tileconnectmaster}
              redirectedpage="/tileconnectmaster"
              title="Tile Connect Master"
            />
            <GameCard
              imgSrc={assets_25to32.fourpics1}
              redirectedpage="/fourpics1"
              title="4 Pics 1 Word"
            />
            <GameCard
              imgSrc={assets_25to32.candyworldmatch3mania}
              redirectedpage="/candyworldmatch3mania"
              title="Candy World : match3 mania"
            />
          </div>
        </div>

        {/* 33 to 40 */}
        <div className="h-[100vh] p-auto m-auto w-90">
          <div
            className="grid grid-cols-4 gap-x-2 gap-y-14 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <GameCard
              imgSrc={assets_33to40.spades}
              redirectedpage="/spades"
              title="Spades"
            />
            <GameCard
              imgSrc={assets_33to40.candyriddlesfreematch3puzzle}
              redirectedpage="/candyriddlesfreematch3puzzle"
              title="Candy Riddles: Free Match 3 Puzzle"
            />
            <GameCard
              imgSrc={assets_33to40.fruitchopper}
              redirectedpage="/fruitchopper"
              title="Fruit Chopper"
            />
            <GameCard
              imgSrc={assets_33to40.cricketfrvr}
              redirectedpage="/cricketfrvr"
              title="Cricket FRVR"
            />
            <GameCard
              imgSrc={assets_33to40.rallychampion}
              redirectedpage="/rallychampion"
              title="Rally Champion"
            />
            <GameCard
              imgSrc={assets_33to40.masterchessss}
              redirectedpage="/masterchessss"
              title="Master Chess"
            />
            <GameCard
              imgSrc={assets_33to40.hunterhitman}
              redirectedpage="/hunterhitman"
              title="Hunter Hitman"
            />
            <GameCard
              imgSrc={assets_33to40.penaltychallengemultiplayer}
              redirectedpage="/penaltychallengemultiplayer"
              title="Penalty Challenge Multiplayer"
            />
          </div>
        </div>

        {/* rest of the games  */}
        <div className=" p-auto m-auto w-90">
          <div
            className="grid grid-cols-4 gap-x-2 gap-y-14 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <GameCard
              imgSrc={restofthegames.bubbles}
              redirectedpage="/bubbles"
              title="Bubbles"
            />
            <GameCard
              imgSrc={restofthegames.kiteplay}
              redirectedpage="/kiteplay"
              title="Kite Play"
            />
            <GameCard
              imgSrc={restofthegames.idlehotelempire}
              redirectedpage="/idlehotelempire"
              title="Idle Hotel Empire"
            />
            <GameCard
              imgSrc={restofthegames.blockbusteradventurespuzzle}
              redirectedpage="/blockbusteradventurespuzzle"
              title="BlockBuster: Adventures Puzzle"
            />
            <GameCard
              imgSrc={restofthegames.ludoclassicadicegame}
              redirectedpage="/ludoclassicadicegame"
              title="Ludo classic : a dice game"
            />
            <GameCard
              imgSrc={restofthegames.basketballallstars}
              redirectedpage="/midnightpoolclassic"
              title="Basketball All Stars"
            />
            <GameCard
              imgSrc={restofthegames.designville}
              redirectedpage="/designville"
              title="Designville"
            />
            <GameCard
              imgSrc={restofthegames.dartspro}
              redirectedpage="/dartspro"
              title="Darts Pro"
            />
            <GameCard
              imgSrc={restofthegames.pinballbasketball}
              redirectedpage="/asphaltretro"
              title="Pinball Basketball"
            />
            <GameCard
              imgSrc={restofthegames.midnightpoolclassiccc}
              redirectedpage="/pinballbasketball"
              title="Midnight Pool Classic"
            />
            <GameCard
              imgSrc={restofthegames.dinosaursmergemaster}
              redirectedpage="/dinosaursmergemaster"
              title="Dinosaurs Merge Master"
            />
            <GameCard
              imgSrc={restofthegames.driftboss}
              redirectedpage="/driftboss"
              title="Drift Boss"
            />
            <GameCard
              imgSrc={restofthegames.santaparkour}
              redirectedpage="/santaparkour"
              title="Santa Parkour"
            />
            <GameCard
              imgSrc={restofthegames.rachelholmesfinddifferences}
              redirectedpage="/rachelholmesfinddifferences"
              title="Rachel Holmes: find differences"
            />
            <GameCard
              imgSrc={restofthegames.liquidpuzzlesortthecolors}
              redirectedpage="/liquidpuzzlesortthecolors"
              title="Liquid puzzle: sort the colors"
            />
            <GameCard
              imgSrc={restofthegames.puzzledaily}
              redirectedpage="/puzzledaily"
              title="Puzzle Daily"
            />
            <GameCard
              imgSrc={restofthegames.woodblockpuzzle}
              redirectedpage="/woodblockpuzzle"
              title="Wood Block Puzzle"
            />
            <GameCard
              imgSrc={restofthegames.monopolysudoku}
              redirectedpage="/monopolysudoku"
              title="Monopoly Sudoku"
            />
            <GameCard
              imgSrc={restofthegames.solitairemahjongjuicy}
              redirectedpage="/solitairemahjongjuicy"
              title="Solitaire Mahjong Juicy"
            />
            <GameCard
              imgSrc={restofthegames.mergealphabet}
              redirectedpage="/mergealphabet"
              title="Merge Alphabet"
            />
            <GameCard
              imgSrc={restofthegames.classicnonogram}
              redirectedpage="/classicnonogram"
              title="Classic Nonogram"
            />
            <GameCard
              imgSrc={restofthegames.ultimatesudoku}
              redirectedpage="/ultimatesudoku"
              title="Ultimate Sudoku"
            />
            <GameCard
              imgSrc={restofthegames.kubok999}
              redirectedpage="/kubok999"
              title="Kubok 999"
            />
            <GameCard
              imgSrc={restofthegames.lights}
              redirectedpage="/lights"
              title="lights"
            />
            <GameCard
              imgSrc={restofthegames.parkingpanic}
              redirectedpage="/parkingpanic"
              title="Parking panic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
