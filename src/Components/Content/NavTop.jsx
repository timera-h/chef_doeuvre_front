import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import CartContext from "./../CartContext/CartContext";
import AuthContext from "./../auth/AuthContext";
import BtnSignout from "./BtnSignout";
import ShopCart from "./../../Assets/img/shopping-bag.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";




export default function NavTop() {
  const CartContextValue = useContext(CartContext);
  const AuthContextValue = useContext(AuthContext);

  const currentUser = AuthContextValue.currentUser;
    return (
        <>
        <li>
        <NavLink to={`/profile/${currentUser}`} className="nav-link">
          <span className="icon-user">
            <FontAwesomeIcon
              icon={faUser}
              style={{ margin: "0 10px 0" }}
              size="lg"
            />
            Mon compte
          </span>
        </NavLink>
      </li>
      <li style={{display: "flex"}}>
        {AuthContextValue.isSignedIn && (
          <>
            {"\u00A0"}  <BtnSignout />
          </>
        )}
      </li>
      <li>
        <Link to="/favorites">
          <FontAwesomeIcon
            icon={faHeart}
            color="var(--color-1)"
            size="1x"
          />
        </Link>
      </li>
      <li>
        <NavLink to="/basketShop">
          <div id="basket-shop">
            <img
              src={ShopCart}
              style={{ width: "40px", height: "auto" }}
              alt="panier"
            />
            {/* <img src={ShopCart} alt="panier" /> */}
            <span>{CartContextValue.cart.length}</span>
            <figcaption className="panier">Mon panier</figcaption>
          </div>
        </NavLink>
      </li>
      </>
    )
}
