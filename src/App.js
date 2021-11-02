import React from "react";
import Header from "./components/Header";
import WishProvider from "./components/WishContext";
import Libros from "./components/Libros";
import Lista from "./components/Lista";
import "./styles/App.css";
const App = () => {
  return (
    <div>
      <Header />
      <WishProvider>
        <Libros />
        <Lista />
      </WishProvider>
    </div>
  );
};

export default App;
