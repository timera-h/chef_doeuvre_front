import React from "react";
import "./../../styles/headerMain.css";
import SearchBar from "./../Utils/SearchBar";
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import NavBurger from "./NavBurger";
import Logo from "./../Utils/Logo";
import NavTop from "./../Utils/NavTop";
import NavMain from "./../Utils/NavMain";

export default function HeaderMain() {
  return (
    <div className="main-container">
      <div className="burger-nav-main">
        <NavBurger />
      </div>
      <header className="header-main nav-desktop">
        <div className="logo-main ">
          <div className="flex-header">
            <Logo />
            <div className="nav-top">
              <ul className="list-nav-top">
              <SearchBar />
               <NavTop />
              </ul>
            </div>
          </div>
        </div>
        <nav className="nav-main">
          <ul className="list-nav">
          <NavMain />
          </ul>
        </nav>
      </header>
    </div>
  );
}
