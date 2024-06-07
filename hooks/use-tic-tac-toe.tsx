"use client";
import React, { useState } from "react";

const INITIAL_STATE = Array(9).fill(null);

const useTicTacToe = () => {
  const [board, SetBoard] = useState(INITIAL_STATE);
  const [isXNext, setIsXNext] = useState(true);

  const WINNER_PATTERNS = [
    // Horizontal Patterns
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Vertical Patterns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagnoal Patterns
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard: any) => {
    for (let i = 0; i < WINNER_PATTERNS.length; i++) {
      const [a, b, c] = WINNER_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    const winner = calculateWinner(board);
    console.log(winner);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    SetBoard(newBoard);
    setIsXNext((prev) => !prev);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} Wins!`;
    if (!board.includes(null)) return "It's a draw";
    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    SetBoard(INITIAL_STATE);
    setIsXNext(true);
  };

  return {
    board,
    isXNext,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
  };
};

export default useTicTacToe;
