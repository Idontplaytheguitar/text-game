import React from "react";
import { useSelector } from "react-redux";
import { MainText } from "../MainText/MainText";

export function Game() {

  const mainText = useSelector((state) => state.mainText);
  const stage = useSelector((state) => state.stage);

  return (
    <div className="Game">
      <div className="MainTextDiv">
        <MainText mainText={mainText} />
      </div>
    </div>
  );
}
