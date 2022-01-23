import React from "react";

function PlayersInfo(props) {
  return (
    <div>
      <img src={props.image} />
      <div>Name : {props.name}</div>
      <div>Nationality : {props.nationality}</div>
      <div>Position : {props.position}</div>
    </div>
  );
}

export default React.memo(PlayersInfo, (prev, next) => prev.name === next.name);
