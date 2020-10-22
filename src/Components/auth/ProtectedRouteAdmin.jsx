import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./AuthContext";

export const ProtectedRouteAdmin = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ isAdmin2 }) => ( // destructuration de isSignedIn (une valeur du contexte ...)
      <Route
        render={(props) => {
          return isAdmin2 ? (
            //   Si l'user est signedIn, retourne le component prévu pour ce path...
            <Component {...props} />
          ) : (
            // sinon, redirige vers la page signin
            <Redirect to="/signin" />
          );
        }}
        {...rest} // on spread les autres props passée à la route
      />
    )}
  </AuthContext.Consumer>
);