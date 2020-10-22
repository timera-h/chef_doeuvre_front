import React, { Component } from 'react';
import AuthContext from "./../auth/AuthContext";

export default class BtnValidateCart extends Component {
    static contextType = AuthContext;
    // validateCart = () => {
    // this.props.history.push("/signin")
    // }

    render() {
    //   const validate = this.validateCart();
        return (
           <>
                {/* // <button className="btn" onClick={() => validate}>Valider mon panier</button> */}
           </> 
        )
    }
}
