import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Home from "./pages/Home.jsx";
import Nahwu from "./pages/nahwu/Nahwu.jsx";
import Sorof from "./pages/sorof/Sorof.jsx";
import Tajwid from "./pages/tajwid/Tajwid.jsx";
import Doa from "./pages/doa/Doa.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="tajwid" element={<Tajwid />} />
      <Route path="nahwu" element={<Nahwu />} />
      <Route path="sorof" element={<Sorof />} />
      <Route path="doa" element={<Doa />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
