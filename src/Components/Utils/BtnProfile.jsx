import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "./../auth/AuthContext";



export default class BtnProfile extends Component {
    static contextType = AuthContext;

    render() {
      // bug sur boutton profile ne récupère pas l'id du currentUser

        return (
            <NavLink to={"/profile/" + this.context.currentUser} className="nav-link">
          <span className="icon-user">
            <FontAwesomeIcon
              icon={faUser}
              style={{ margin: "0 10px 0" }}
              size="lg"
            />
            Mon compte
          </span>
        </NavLink>
        )
    }
}
