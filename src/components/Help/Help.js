import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClicked, isClicked } from "../../redux/markdownSlice";

const Help = () => {
  const dispatch = useDispatch();
  const clicked = useSelector(isClicked);

  const handleClick = () => dispatch(getClicked(!clicked));
  return (
    
      <div className="absolute right-5 top-5 w-10 h-10 cursor-pointer rounded bg-[#f0f8ff] text-4xl text-center font-bold hover:shadow-[10px_10px_#646464] transition ease-out duration-300">

        <h1 onClick={handleClick}>?</h1>
        
      </div>
    
  );
};

export default Help;
