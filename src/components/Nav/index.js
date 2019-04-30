import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav>
        <div>Clicky Game</div>
        <div>Click an image to begin!</div>
        <div>Score: {props.score} | Top Score: {props.maxScore}</div>
    </nav>
  );
}

export default Nav;