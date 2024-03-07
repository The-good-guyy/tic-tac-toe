import React from "react";
import { useState } from "react";
function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEdit() {
    setIsEditing((isEditing) => !isEditing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "edit" : "save"}</button>
    </li>
  );
}

export default Player;
