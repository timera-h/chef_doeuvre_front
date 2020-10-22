import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./../../Assets/img/logo-v5.png";
import ShopCart from "./../../Assets/img/shopping-bag.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "./../auth/AuthContext";
import BtnSignout from "./../Utils/BtnSignout";

// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import navBurger from "./../../js/NavBurger";

export default class NavBurger extends Component {
  static contextType = AuthContext;
  state = {
    active: false,
  };

  menuClose = () => {
    window.close();
  }

  toggleClassName = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const classActive = this.state.active ? "active" : "";
    const classNavActive = this.state.active ? "nav-active" : "";
    return (
      <div className="header-nav-burger">
        <div
          className={`bar-burger ${classActive}`}
          onClick={this.toggleClassName}
        >
          <span></span>
        </div>
        <div className="burger-nav-top">
          <NavLink exact to="/" onClick={() => this.menuClose()}>
            <div className="logo">
              <img src={Logo} alt="logo mali tijara" />
              {/* <figcaption>MALI TIJARA</figcaption> */}
            </div>
          </NavLink>
          <Link to="/basketShop">
            <figure className="basket-burger">
              <img src={ShopCart} alt="panier" style={{ width: "50px" }} />
            </figure>
          </Link>
        </div>
        <nav className={`nav-burger-container ${classNavActive}`}>
          <ul className="list-nav-burger">
            <li>
              <NavLink to="/">
                <FontAwesomeIcon
                  icon={faHome}
                  size="2x"
                  color="var(--color-white)"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/signin" className="nav-link">
                <span className="icon-user">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ margin: "0 10px 0" }}
                    size="lg"
                  />
                </span>
              </NavLink>
            </li>
            <li>
              {this.context.isSignedIn && (
                <>
                  {"\u00A0"} <BtnSignout />
                </>
              )}
            </li>
            <li>
              <NavLink to="/our-products" className="nav-link link-drop-down">
                Nos produits
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-products/soins-naturels"
                className="nav-link link-drop-down"
              >
                Produits de soins naturels
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-products/miels"
                className="nav-link link-drop-down"
              >
                Mièls
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/our-products/plantes-locales"
                className="nav-link link-drop-down"
              >
                Plantes locales
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/our-products/huiles-vegetales"
                className="nav-link link-drop-down"
              >
                Huiles végétales
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard" className="nav-link">
                Tableau de bord
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
