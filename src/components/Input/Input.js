import React from "react";
import Output from "../Output/Output";
import { useDispatch, useSelector } from "react-redux";
import {
  getText,
  input,
  isClicked,
  initialInput,
} from "../../redux/markdownSlice";

const Input = () => {
  const clicked = useSelector(isClicked);
  const inputArea = useSelector(input);
  const initText = useSelector(initialInput);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5 mx-auto">
      <div className="justify-center grid grid-cols-2 gap-10">
        <div className="grid-cols-6">
          <textarea
            disabled={!clicked}
            id="textarea"
            className="w-full h-136 bg-[#FFDD67] p-5 shadow-[10px_10px_#646464] resize-none"
            value={clicked ? inputArea : initText}
            onChange={(e) => dispatch(getText(e.target.value))}
          />
        </div>
        <div className="grid-cols-6">
          <Output />
        </div>
      </div>
    </div>
  );
};



export default Input;
