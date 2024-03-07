import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function GameBoard({ onSelectSquare, turns }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleSelectSquare(rowIndes, colIndex) {
  //   setGameBoard((prestate) => {
  //     const updatedBoard = [...prestate.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndes][colIndex] = activePlayer;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    onSelectSquare(rowIndex, colIndex);
                  }}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
