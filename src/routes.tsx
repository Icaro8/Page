import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

export function RoutesApplication() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
