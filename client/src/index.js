import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GlobalStyle } from "./globalstyle";
import { router } from "./paths";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
        <RouterProvider router={router} />
        <GlobalStyle whiteColor />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
