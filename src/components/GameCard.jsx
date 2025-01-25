import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ imgSrc, redirectedpage, title }) => {
  return (
    <div className="p-3 bg-[#121237] rounded-2xl max-w-[160px] sm:max-w-[200px]">
      <img
        src={imgSrc}
        alt={title}
        className="rounded-xl w-full"
        loading="lazy"
      />
      <Link to={redirectedpage}>
        <img
          src="https://thalagames.com/image/play_button.png"
          alt={`Play ${title} Game`}
          className="w-[60px] m-auto mt-[-25px]"
        />
      </Link>
      <div className="text-center text-[#ffffff] font-medium">{title}</div>
    </div>
  );
};

export default GameCard;
