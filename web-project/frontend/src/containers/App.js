import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomPage from "./pages/CustomPage";
import ToDo from "../components/ToDo";
import BoxAuth from "../components/BoxAuth";
import BoxWallpapersList from "../components/BoxWallpapersList";

export default function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomPage mainPage={BoxWallpapersList} />} />
        <Route
          path="/todo"
          element={<CustomPage title="To-do list" mainPage={ToDo} />}
        />
        <Route
          path="/login"
          element={<CustomPage title="Logowanie" mainPage={BoxAuth} />}
        />
      </Routes>
    </Router>
  );
}
