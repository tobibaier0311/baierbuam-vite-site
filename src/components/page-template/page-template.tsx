import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import { Home } from "../Home";
import { Sidebar } from "../sidebar/sidebar";

import "./page-template.css";

export function PageTemplate() {
  return (
    <div className="template">
      <Sidebar />
      <Outlet />
    </div>
  );
}
