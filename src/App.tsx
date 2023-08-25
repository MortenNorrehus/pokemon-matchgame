import { useState, useEffect } from "react";
import { BoardGame } from "./components/BoardGame";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { fetchPokemon } from "./components/fetchPokemon";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>Pokemons</h1>
        <BoardGame />
      </QueryClientProvider>
    </>
  );
}

export default App;
