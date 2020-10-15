import React from "react";
import { NavLink } from "react-router-dom";


export default function MenuDropDown() {

  return (
    <ul className="list-nav-drop-down">
      <li>
        <NavLink to="/our-products/soins-naturels" className="nav-link link-drop-down">
          Soins naturels
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-products/miels" className="nav-link link-drop-down">
          Miels
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-products/plantes-locales" className="nav-link link-drop-down">
          Plantes locales
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-products/huiles-vegetales" className="nav-link link-drop-down">
          Huiles végétales
        </NavLink>
      </li>
      {/* <div className="img-menu">
        <img src={ImageMiel} alt="miel" />
        <span>Découvrez nos mièls</span>
      </div>
      <div className="img-menu">
        <span></span>
      </div>
      <div className="img-menu">
        <span></span>
      </div> */ }
    </ul>
  );
}
