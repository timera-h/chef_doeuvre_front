import React from 'react';
import Logo from "./../../Assets/img/logo-v5.png";
import { NavLink } from "react-router-dom";


export default function logo() {
    return (
        <NavLink exact to="/">
        <div className="logo">
          <img src={Logo} alt="logo mali tijara" />
          {/* <figcaption>MALI TIJARA</figcaption> */}
        </div>
      </NavLink>
    )
}
