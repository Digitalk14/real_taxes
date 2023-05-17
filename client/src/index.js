import React from "react";
import ReactDOM from "react-dom/client";
import {  RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalstyle";
import { router } from "./paths";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
      <RouterProvider router={router} />
      <GlobalStyle whiteColor />
    </ThemeProvider>
  </React.StrictMode>
);
