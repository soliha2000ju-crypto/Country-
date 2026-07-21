import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Uzbekistan from "./pages/Uzbekistan";
import USA from "./pages/USA";
import Nav from "./components/Nav";
import Japan from "./pages/Japan";
import France from "./pages/France";


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Uzbekistan />} />
        <Route path="/usa" element={<USA />} />
        <Route path="/japan" element={<Japan />} />
        <Route path="/france" element={<France />} />
      </Routes>
    </>
  );
};

export default App;
