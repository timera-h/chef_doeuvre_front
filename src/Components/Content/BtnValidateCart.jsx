import React, { Component } from 'react';
import AuthContext from "./../auth/AuthContext";

export default class BtnValidateCart extends Component {
    static contextType = AuthContext;
    // validateCart = () => {
    //     const isSignedIn = this.context.isSignedIn;

    //     !isSignedIn ? this.props.history.push("/signin") : this.props.history.push("/payement")
    // }

    render() {
    //   const validate = this.validateCart();
        return (
           
                <button className="btn">Valider mon panier</button>
            
        )
    }
}
