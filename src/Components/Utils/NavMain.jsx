import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import BtnDashboard from "../Utils/BtnDashboard";
import MenuDropDown from "./../Utils/MenuDropDown";
import AuthContext from "./../auth/AuthContext";

export default function NavMain() {
  const AuthContextValue = useContext(AuthContext);
  return (
    <>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>{" "}
      </li>
      <li className="link-hover">
        <NavLink to="/our-products" className="nav-link link-drop">
          Nos Produits
        </NavLink>
        <div className="menu-drop-down">
          <MenuDropDown />
        </div>
      </li>
      <li className="nav-link">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        {AuthContextValue.isAdmin && (
          <>
            {"\u00A0"} <BtnDashboard />
          </>
        )}
      </li>
    </>
  );
}
