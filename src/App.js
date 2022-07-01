import React, { useState } from "react";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  const [isBarOpen, setIsBarOpen] = useState(false);

  const openSideBar = () => {
    setIsBarOpen(true);
  };

  const closeSideBar = () => {
    setIsBarOpen(false);
  };
  return (
    <>
      <Navbar openSideBar={openSideBar} />
      <Sidebar closeSideBar={closeSideBar} isBarOpen={isBarOpen} />
      <Hero />
    </>
  );
}

export default App;
