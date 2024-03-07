import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/pages/Home.jsx";
import Fetch from "./components/pages/Fetch.jsx";
import Axcius from "./components/pages/Axcius.jsx";
import Reactquery from "./components/pages/Reactquery.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },

  {
    path: "fetch",
    element: <App />,
  },
  {
    path: "axcius",
    element: <Axcius />,
  },
  {
    path: "reactquery",
    element: <Reactquery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
