import React from "react";
import "./style.css";

function SimpsonsCard(props) {
  return (
    <div className="box">
      <img src={props.image} onClick={()=>props.shuffle(props.id)} alt={`${props.name}.jpg`}/>
    </div>
  );
}

export default SimpsonsCard;
