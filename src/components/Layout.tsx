import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "./SearchForm";

export function Layout() {
  return (
    <div className="layout">
      <SearchForm />
      <Outlet />
    </div>
  );
}
