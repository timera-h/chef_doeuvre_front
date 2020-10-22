import React from "react";
import { NavLink } from "react-router-dom";

export default function BtnDashboard() {
  return (
  
      <NavLink to="/dashboard" className="nav-link">
        Tableau de bord
      </NavLink>
  
  );
}
