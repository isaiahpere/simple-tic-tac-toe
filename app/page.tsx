import TicTacToe from "@/components/tic-tac-toe";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <h1 className="text-3xl font-bold mb-10">Tic Tac Toe</h1>
      <TicTacToe boardSize={4} />
    </main>
  );
}
