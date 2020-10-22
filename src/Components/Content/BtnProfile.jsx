import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "./../auth/AuthContext";



export default class BtnProfile extends Component {
    static contextType = AuthContext;
    
//   async componentDidMount() {
//     // console.log(">>>>>>>>>>>>>set user >>>", this.context.currentUser);
//   const isSignedIn = this.context.isSignedIn;
//   if (!isSignedIn) {
//   await  this.isNotSignedIn();
//   }
// }

// isNotSignedIn = () => {
//   this.props.history.push("/signin");
// };

    render() {
        const currentUser = this.context.currentUser;
        return (
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
        )
    }
}
