import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import {BrowserRouter} from 'react-router-dom';

// import "../../src/styles/common_rules/__main";

import App from './app'

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
);
