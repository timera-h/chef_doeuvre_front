import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./../../Assets/img/logo-v5.png";
import ShopCart from "./../../Assets/img/shopping-bag.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import navBurger from "./../../js/NavBurger";




export default class  NavBurger extends Component {
  state = {
    active: false,
  }

  toggleClassName = () => {
    this.setState({active : !this.state.active})
  }

  render() {

    const classActive = this.state.active ? "active" : "";
    const classNavActive = this.state.active ? "nav-active" : "";
  return (
    <div className="header-nav-burger">
      <div className={`bar-burger ${classActive}`}  onClick={this.toggleClassName}>
        <span></span>
      </div>
      <div className="burger-nav-top">
        <NavLink exact to="/">
          <div className="logo">
            <img src={Logo} alt="logo mali tijara" />
            {/* <figcaption>MALI TIJARA</figcaption> */}
          </div>
        </NavLink>
        <FontAwesomeIcon
          icon={faSearch}
          size="2x"
          style={{ cursor: "pointer" }}
        />
        <Link to="/basketShop">
          <figure className="basket-burger">
            <img src={ShopCart} alt="panier" style={{ width: "50px" }} />
            <figcaption>Mon panier</figcaption>
          </figure>
        </Link>
      </div>
      <nav className={`nav-burger-container ${classNavActive}`}>
        <ul className="list-nav-burger">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="2x" color="var(--color-white)" />
        </Link>
          <NavLink to="/signin" className="nav-link">
            <span className="icon-user">
              <FontAwesomeIcon
                icon={faUser}
                style={{ margin: "0 10px 0" }}
                size="lg"
              />
            </span>
          </NavLink>

          <NavLink to="/signout" className="nav-link">
            <li>Se deconnecter</li>
          </NavLink>
          <NavLink to="/ourProducts" className="nav-link link-drop-down">
            <li>Nos produits</li>
          </NavLink>
          <NavLink to="/produitSoinNaturel" className="nav-link link-drop-down">
            <li>Produits de soins naturels</li>
          </NavLink>
          <NavLink to="/miels" className="nav-link link-drop-down">
            <li>Mièls</li>
          </NavLink>
          <NavLink to="/plantesLocale" className="nav-link link-drop-down">
            <li>Plantes locales</li>
          </NavLink>
          <NavLink to="/huilesVegetal" className="nav-link link-drop-down">
            <li>Huiles végétales</li>
          </NavLink>

          <NavLink to="/contact">
            <li className="nav-link"> Contact</li>
          </NavLink>
          <NavLink to="/dashboard" className="nav-link">
            <li>Tableau de bord</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
}