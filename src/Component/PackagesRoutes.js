import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Packages.css";
import Packages from "./Packages";
import ConcreteBlocks from "./ConcreteBlocks"; 
import RedClayBricks from "./RedClayBricks"; 

const PackagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Packages />}>
        <Route path="concreteblocks" element={<ConcreteBlocks />} />
        <Route path="redclaybricks" element={<RedClayBricks />} />
      </Route>
    </Routes>
  );
};

export default PackagesRoutes;
