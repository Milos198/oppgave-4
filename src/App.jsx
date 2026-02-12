import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { FavoritesProvider } from "./context/FavoritesContext";


export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
  <FavoritesProvider>
    <Header setSearchQuery={setSearchQuery} />
    <main style={{ padding: "20px" }}>
      <Outlet context={{ searchQuery }} />
    </main>
  </FavoritesProvider>
);

}

