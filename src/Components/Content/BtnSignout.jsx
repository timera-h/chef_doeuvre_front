import React, { useContext } from 'react';
import AuthContext from "./../auth/AuthContext";

export default function BtnSignout() {
    const AuthContextValue = useContext(AuthContext);

    const handleSignout = () => {
        AuthContextValue.signout();
    };
    return (
       <div className="nav-link" style={{cursor: "pointer"}}
        onClick={handleSignout}
        >
        Se deconnecter
    </div>
    )
}
