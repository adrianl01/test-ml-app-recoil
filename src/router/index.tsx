import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/home";
import { SearchResultItem } from "../pages/searchResults";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<SearchResultItem />} />
      </Route>
    </Routes>
  );
}
