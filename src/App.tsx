import "material-symbols/rounded.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Nav } from "./Components/Nav";
import { Home } from "./Pages/Home";
import { Publications } from "./Pages/Publications";

const root = document.getElementById("root")!;
createRoot(root).render(
  <HashRouter>
    <StrictMode>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="publications" element={<Publications />} />
      </Routes>
      <Footer />
    </StrictMode>
  </HashRouter>,
);
