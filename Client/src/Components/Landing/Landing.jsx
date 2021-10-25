import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

export function Landing() {

  return (
    <div className="landing">
        <h1>Welcome to Text Game</h1>
        <p>
            This is a text based game. You will be presented with a series of
            choices which will impact the story as you play.
        </p>

        <NavLink to='/game'>Start Game</NavLink>
    </div>
    )
}