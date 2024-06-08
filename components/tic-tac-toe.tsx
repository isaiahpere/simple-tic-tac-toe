"use client";
import useTicTacToe from "@/hooks/use-tic-tac-toe";
import React from "react";
import { cn } from "@/lib/utils";
import clsx from "clsx";

enum BoardSizes {
  three = 3,
  four = 4,
  five = 5,
  six = 6,
}
export type BoardSizeType = keyof typeof BoardSizes;

interface IProps {
  boardSize: BoardSizes;
}
const TicTacToe = ({ boardSize }: IProps) => {
  const { board, getStatusMessage, handleClick, resetGame } =
    useTicTacToe(boardSize);

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

      <div
        dta-name="board"
        className={cn("grid grid-cols-3 justify-center gap-0", {
          "grid-cols-4": boardSize === 4,
          "grid-cols-5": boardSize === 5,
          "grid-cols-6": boardSize === 6,
        })}
      >
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
