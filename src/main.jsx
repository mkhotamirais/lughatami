import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Home from "./pages/Home.jsx";
import Doa from "./pages/doa/Doa.jsx";
import Kaidah from "./pages/kaidah/Kaidah.jsx";
import Quran from "./pages/quran/Quran.jsx";
import KaidahHome from "./pages/kaidah/KaidahHome.jsx";
import Isim from "./pages/kaidah/Isim.jsx";
import Fiil from "./pages/kaidah/Fiil.jsx";
import Huruf from "./pages/kaidah/Huruf.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="quran" element={<Quran />} />
      <Route path="kaidah" element={<Kaidah />}>
        <Route index element={<KaidahHome />} />
        <Route path="isim" element={<Isim />} />
        <Route path="fiil" element={<Fiil />} />
        <Route path="huruf" element={<Huruf />} />
      </Route>
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
