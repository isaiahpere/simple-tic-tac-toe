"use client";
import { useEffect, useState } from "react";

const initialBoard = (size: number) => {
  return Array(size * size).fill(null);
};

const useTicTacToe = (boardSize: number) => {
  const [board, SetBoard] = useState(initialBoard(boardSize));
  const [isXNext, setIsXNext] = useState(true);

  // update board when size of board changes
  useEffect(() => {
    SetBoard(initialBoard(boardSize));
  }, [boardSize]);

  const generateWinningPattern = () => {
    const pattern = [];

    for (let i = 0; i < boardSize; i++) {
      const horizontalPattern = [];
      const verticalPattern = [];
      for (let j = 0; j < boardSize; j++) {
        horizontalPattern.push(i * boardSize + j);
        verticalPattern.push(j * boardSize + i);
      }
      pattern.push(horizontalPattern, verticalPattern);
    }

    const diagnal1 = [];
    const diagnal2 = [];
    for (
      let i = 0, j = 0, k = boardSize - 1;
      i < boardSize && j < boardSize && k >= 0;
      i++, j++, k--
    ) {
      diagnal1.push(i * boardSize + j);
      diagnal2.push(i * boardSize + k);
    }
    pattern.push(diagnal1, diagnal2);
    return pattern;
  };

  const winningPatterns = generateWinningPattern();

  const calculateWinner = (currentBoard: any) => {
    for (let i = 0; i < winningPatterns.length; i++) {
      // const [a, b, c] = winningPatterns[i];
      let pattern = winningPatterns[i];
      let countX = 0;
      let countO = 0;

      for (let j = 0; j < pattern.length; j++) {
        let cellValue = board[pattern[j]];
        cellValue === "X" && countX++;
        cellValue === "O" && countO++;
      }
      if (countX === boardSize) return "X";
      if (countO === boardSize) return "O";
    }
    return null;
  };

  const handleClick = (index: number) => {
    generateWinningPattern();
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
    SetBoard(initialBoard(boardSize));
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
