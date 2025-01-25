import React from "react";
import {
  BrowserRouter as RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
// 1 to 8
import Stickmanfighter from "./01_08gamespages/Stickmanfighter";
import Uphillracing from "./01_08gamespages/Uphillracing";
import Archeryking from "./01_08gamespages/Archeryking";
import Midnightpoolclassic from "./01_08gamespages/Midnightpoolclassic";
import Gameloftsportsminigame from "./01_08gamespages/Gameloftsportsminigame";
import Asphaltretro from "./01_08gamespages/Asphaltretro";
import Bikeracing from "./01_08gamespages/Bikeracing";
import Solitairechampions from "./01_08gamespages/Solitairechampions";
// 9 to 16
import Backgammon from "../pages/09_16gamespages/Backgammon";
import Bubblefall from "../pages/09_16gamespages/Bubblefall";
import Harboroperator from "../pages/09_16gamespages/Harboroperator";
import Hotelmanager from "../pages/09_16gamespages/Hotelmanager";
import Idleminingempire from "../pages/09_16gamespages/Idleminingempire";
import Islandoftreasures from "../pages/09_16gamespages/Islandoftreasures";
import Mmasterchess from "../pages/09_16gamespages/Mmasterchess";
import Ultimatetictactoe from "../pages/09_16gamespages/Ultimatetictactoe";
// 17 to 24
import Balldrop from "../pages/17_24_gamespages/Balldrop";
import Blackjack from "../pages/17_24_gamespages/Blackjack";
import Codebananas from "../pages/17_24_gamespages/Codebananas";
import Mk48 from "../pages/17_24_gamespages/Mk48";
import Parkingblock from "../pages/17_24_gamespages/Parkingblock";
import Rouletteroyale from "../pages/17_24_gamespages/Rouletteroyale";
import Secretsofcharmland from "../pages/17_24_gamespages/Secretsofcharmland";
import Stackthecontainers from "../pages/17_24_gamespages/Stackthecontainers";
// 25 to 32
import Bricksbreakerdeluxecrusher from "../pages/25_32_gamespages/Bricksbreakerdeluxecrusher";
import Candyworldmatch3mania from "../pages/25_32_gamespages/Candyworldmatch3mania";
import Fourpics1 from "../pages/25_32_gamespages/Fourpics1";
import Jewelacademy from "../pages/25_32_gamespages/Jewelacademy";
import Planetchaos from "../pages/25_32_gamespages/Planetchaos";
import Skybridgeclassic from "../pages/25_32_gamespages/Skybridgeclassic";
import Stickmanbrawl from "../pages/25_32_gamespages/Stickmanbrawl";
import Tileconnectmaster from "../pages/25_32_gamespages/Tileconnectmaster";
// 33 to 40
import Candyriddlesfreematch3puzzle from "../pages/33_40_gamespages/Candyriddlesfreematch3puzzle";
import Cricketfrvr from "../pages/33_40_gamespages/Cricketfrvr";
import Fruitchopper from "../pages/33_40_gamespages/Fruitchopper";
import Hhunterhitman from "../pages/33_40_gamespages/Hhunterhitman";
import Masterchessss from "../pages/33_40_gamespages/Masterchessss";
import Penaltychallengemultiplayer from "../pages/33_40_gamespages/Penaltychallengemultiplayer";
import Rallychampion from "../pages/33_40_gamespages/Rallychampion";
import Spades from "../pages/33_40_gamespages/Spades";
// rest of the games
import Basketballallstars from "../pages/RestOfTheGame/Basketballallstars";
import Blockbusteradventurespuzzle from "../pages/RestOfTheGame/Blockbusteradventurespuzzle";
import Bubbles from "../pages/RestOfTheGame/Bubbles";
import Classicnonogram from "../pages/RestOfTheGame/Classicnonogram";
import Dartspro from "../pages/RestOfTheGame/Dartspro";
import Ddesignville from "../pages/RestOfTheGame/Ddesignville";
import Dinosaursmergemaster from "../pages/RestOfTheGame/Dinosaursmergemaster";
import Driftboss from "../pages/RestOfTheGame/Driftboss";
import Idlehotelempire from "../pages/RestOfTheGame/Idlehotelempire";
import Kiteplay from "../pages/RestOfTheGame/Kiteplay";
import Kubok999 from "../pages/RestOfTheGame/Kubok999";
import Lights from "../pages/RestOfTheGame/Lights";
import Liquidpuzzlesortthecolors from "../pages/RestOfTheGame/Liquidpuzzlesortthecolors";
import Ludoclassicadicegame from "../pages/RestOfTheGame/Ludoclassicadicegame";
import Mergealphabet from "../pages/RestOfTheGame/Mergealphabet";
import Midnightpoolclassiccc from "../pages/RestOfTheGame/Midnightpoolclassiccc";
import Monopolysudoku from "../pages/RestOfTheGame/Monopolysudoku";
import Parkingpanic from "../pages/RestOfTheGame/Parkingpanic";
import Pinballbasketball from "../pages/RestOfTheGame/Pinballbasketball";
import Puzzledaily from "../pages/RestOfTheGame/Puzzledaily";
import Rachelholmesfinddifferences from "../pages/RestOfTheGame/Rachelholmesfinddifferences";
import Santaparkour from "../pages/RestOfTheGame/Santaparkour";
import Solitairemahjongjuicy from "../pages/RestOfTheGame/Solitairemahjongjuicy";
import Ultimatesudoku from "../pages/RestOfTheGame/Ultimatesudoku";
import Woodblockpuzzle from "../pages/RestOfTheGame/Woodblockpuzzle";

const Router = () => {
  return (
    <RouterProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 1 to 8  */}
        <Route path="/stickmanfighter" element={<Stickmanfighter />} />
        <Route path="/uphillracing" element={<Uphillracing />} />
        <Route path="/archeryking" element={<Archeryking />} />
        <Route path="/midnightpoolclassic" element={<Midnightpoolclassic />} />
        <Route
          path="/gameloftsportsminigame"
          element={<Gameloftsportsminigame />}
        />
        <Route path="/asphaltretro" element={<Asphaltretro />} />
        <Route path="/bikeracing" element={<Bikeracing />} />
        <Route path="/solitairechampions" element={<Solitairechampions />} />
        {/* 9 to 16  */}
        <Route path="/backgammon" element={<Backgammon />} />
        <Route path="/bubblefall" element={<Bubblefall />} />
        <Route path="/harboroperator" element={<Harboroperator />} />
        <Route path="/hotelmanager" element={<Hotelmanager />} />
        <Route path="/idleminingempire" element={<Idleminingempire />} />
        <Route path="/islandoftreasures" element={<Islandoftreasures />} />
        <Route path="/masterchess" element={<Mmasterchess />} />
        <Route path="/ultimatetictactoe" element={<Ultimatetictactoe />} />
        {/* 17 to 24  */}
        <Route path="/balldrop" element={<Balldrop />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/codebananas" element={<Codebananas />} />
        <Route path="/mk48" element={<Mk48 />} />
        <Route path="/parkingblock" element={<Parkingblock />} />
        <Route path="/rouletteroyale" element={<Rouletteroyale />} />
        <Route path="/secretsofcharmland" element={<Secretsofcharmland />} />
        <Route path="/stackthecontainers" element={<Stackthecontainers />} />
        {/* 25 to 32  */}
        <Route path="/bricksbreakerdeluxecrusher" element={<Bricksbreakerdeluxecrusher />} />
        <Route path="/candyworldmatch3mania" element={<Candyworldmatch3mania />} />
        <Route path="/fourpics1" element={<Fourpics1 />} />
        <Route path="/jewelacademy" element={<Jewelacademy />} />
        <Route path="/planetchaos" element={<Planetchaos />} />
        <Route path="/skybridgeclassic" element={<Skybridgeclassic />} />
        <Route path="/stickmanbrawl" element={<Stickmanbrawl />} />
        <Route path="/tileconnectmaster" element={<Tileconnectmaster />} />
        {/* 33 to 40  */}
        <Route path="/candyriddlesfreematch3puzzle" element={<Candyriddlesfreematch3puzzle />} />
        <Route path="/cricketfrvr" element={<Cricketfrvr />} />
        <Route path="/fruitchopper" element={<Fruitchopper />} />
        <Route path="/hunterhitman" element={<Hhunterhitman />} />
        <Route path="/masterchessss" element={<Masterchessss />} />
        <Route path="/penaltychallengemultiplayer" element={<Penaltychallengemultiplayer />} />
        <Route path="/rallychampion" element={<Rallychampion />} />
        <Route path="/spades" element={<Spades />} />
        {/* rest of the games  */}
        <Route path="/basketballallstars" element={<Basketballallstars />} />
        <Route path="/blockbusteradventurespuzzle" element={<Blockbusteradventurespuzzle />} />
        <Route path="/bubbles" element={<Bubbles />} />
        <Route path="/classicnonogram" element={<Classicnonogram />} />
        <Route path="/dartspro" element={<Dartspro />} />
        <Route path="/designville" element={<Ddesignville />} />
        <Route path="/dinosaursmergemaster" element={<Dinosaursmergemaster />} />
        <Route path="/driftboss" element={<Driftboss />} />
        <Route path="/idlehotelempire" element={<Idlehotelempire />} />
        <Route path="/kiteplay" element={<Kiteplay />} />
        <Route path="/kubok999" element={<Kubok999 />} />
        <Route path="/lights" element={<Lights />} />
        <Route path="/liquidpuzzlesortthecolors" element={<Liquidpuzzlesortthecolors />} />
        <Route path="/ludoclassicadicegame" element={<Ludoclassicadicegame />} />
        <Route path="/mergealphabet" element={<Mergealphabet />} />
        <Route path="/midnightpoolclassiccc" element={<Midnightpoolclassiccc />} />
        <Route path="/monopolysudoku" element={<Monopolysudoku />} />
        <Route path="/parkingpanic" element={<Parkingpanic />} />
        <Route path="/pinballbasketball" element={<Pinballbasketball />} />
        <Route path="/puzzledaily" element={<Puzzledaily />} />
        <Route path="/rachelholmesfinddifferences" element={<Rachelholmesfinddifferences />} />
        <Route path="/santaparkour" element={<Santaparkour />} />
        <Route path="/solitairemahjongjuicy" element={<Solitairemahjongjuicy />} />
        <Route path="/ultimatesudoku" element={<Ultimatesudoku />} />
        <Route path="/woodblockpuzzle" element={<Woodblockpuzzle />} />
      </Routes>
    </RouterProvider>
  );
};

export default Router;