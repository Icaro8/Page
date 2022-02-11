import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles/global.scss";
import { RoutesApplication } from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApplication />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
