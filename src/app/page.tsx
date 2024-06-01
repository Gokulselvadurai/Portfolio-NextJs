"use client";

import React, { useContext, useEffect, useRef } from "react";
import About from "./About/page";
import Contact from "./Contact/page";
import Intro from "./Intro/page";
import ProductList from "./ProductList/page";
import Toggle from "./Toggle/page";
import { ThemeContext } from "./context";

const App: React.FC = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "black",
        overflow: 'hidden',
      }}
    >
      <Toggle />
      <div>
      <Intro />
      <About />
      <ProductList />
      <br></br>
      <br></br>
      <br></br>
      <Contact />
      </div>
    </div>
  );
};

export default App;
