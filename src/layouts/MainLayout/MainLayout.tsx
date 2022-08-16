import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Sidebar from "./Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <main>
      <Navigation />
      <Sidebar />
      <Outlet />
    </main>
  );
};
export default MainLayout;
