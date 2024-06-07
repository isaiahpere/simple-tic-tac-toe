"use client";
import useTicTacToe from "@/hooks/use-tic-tac-toe";
import React from "react";

const TicTacToe = () => {
  const { board, getStatusMessage, handleClick, resetGame } = useTicTacToe();

  return (
    <div data-name="game" className="my-0 mx-auto text-center p-5">
      <h2 className="text-xl font-semibold mb-10">Enjoy The game</h2>
      <div
        data-name="status"
        className="text-xl flex items-center justify-between mb-5 mt-2"
      >
        {getStatusMessage()}
        <button
          className="py-1.5 px-3 text-sm bg-gray-300 hover:bg-gray-200 rounded-md transition"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>

      <div dta-name="board" className="grid grid-cols-3 justify-center gap-0">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-[100px] h-[100px] text-[36px] text-slate-600 bg-gray-100/50 hover:bg-[#f0f0d5] border border-slate-700 transition-colors "
            onClick={() => handleClick(index)}
            disabled={value !== null}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
