import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import SearchContainer from "./components/SearchContainer.jsx";
import PlayListContainer from "./components/PlayListContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/search",
        element: <SearchContainer />,
      },
      {
        path: "/playlist",
        element: <PlayListContainer />,
      },
      {
        path: "/playlist/:plid",
        element: <PlayListContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
