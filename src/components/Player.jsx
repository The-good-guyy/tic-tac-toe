import React from "react";
import { useState } from "react";
function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    setIsEditing(!isEditing);
  }
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" required value={name}></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "edit" : "save"}</button>
    </li>
  );
}

export default Player;
