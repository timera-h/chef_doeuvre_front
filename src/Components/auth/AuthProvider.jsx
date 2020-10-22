import React, { Component } from "react";
import { apiHandler } from "../../api/handlers";
import AuthContext from "./AuthContext";

const handler = apiHandler();
const tokenName = "authToken";

// ATTENTION, ce fichier dépend de ./AuthContext, défini dans ce même dossier

export default class AuthProvider extends Component {
  state = {
    currentUser: null,
    isSignedIn: false,
  };

  componentDidMount() {
    if (!this.state.currentUser && this.getLocalAuthToken()) {
      this.getUserByToken();
    }
  }

  /**
   * Récupère le token d'authentification dans le localStorage du client
   * @return {(String|null)} the auth token if found, null otherwise
   */
  getLocalAuthToken = () => window.localStorage.getItem(tokenName);

  getUserByToken = () => {
    handler
      .get("/api/auth/get-user-by-token")
      .then(({ data }) => {
        this.setState({ currentUser: data, isSignedIn: true });
      })
      .catch((apiErr) => {
        this.setState({ currentUser: null, isSignedIn: false });
        console.error(apiErr.message);
      });
  };

  /**
   * Ecrit le token d'authentification dans le localStorage du client
   * @param {String} token un jeton JWT généré côté server (/auth/index.js)
   * @return {undefined}
   */
  setLocalAuthToken = (token) => window.localStorage.setItem(tokenName, token);

  /**
   * Supprime le token d'authentification dans le localStorage du client
   * @return {undefined}
   */
  deleteLocalAuthToken = () => window.localStorage.removeItem(tokenName);


  isAdmin = () => this.state.currentUser && this.state.currentUser === "admin";

  /**
   * Met à jour l'user courant dans le Contexte
   */
  setCurrentUser = (infos, clbk) => {
    // on met à jour le state du AuthProvider avec les infos user mises à jour, mais :
    this.setState({ currentUser: infos }, () => {
      // setState est ASYNC !!!
      if (clbk) clbk(); // on utilise le callback du SetState AVANT d'exécuter le callback fourni par le component Signin, Signout ou autre !
    });
  };

  /**
   * Tente de signin côté server via AJAX,
   * créé le token d'authentification si succès
   * @return {undefined}
   */
  signin = async (infos, clbk) => {
    const { email, password } = infos;
    try {
      const apiRes = await handler.post("/api/auth/signin", {
        email,
        password,
      });
      // si le signin se passe bien ...
      this.setLocalAuthToken(apiRes.data.token); // écrit le token dans localStorage
      this.setCurrentUser(apiRes.data.user, clbk);
    } catch (err) {
     // console.error(err.response.data); // si erreur ...
    }
  };

  /**
   * Supprime le token d'authentification et détruit la session côté backend
   * @return {undefined}
   */
  signup = async (infos, clbk) => {
    try {
      await handler.post("/api/auth/signup", infos);
      clbk(); // so ok : appel du callback défini @ Signup
    } catch (err) {
      const method = err.response.status.toString().startsWith("4")
        ? "warn"
        : "error"; // facultatif : outup un console.error OU console.warn en fonction du status retourné par le backend
      console[method](err.response.data);
    }
  };

  /**
   * Supprime le token d'authentification et détruit la session côté backend
   * @return {undefined}
   */
  signout = (clbk) => {
    this.deleteLocalAuthToken();
    this.setCurrentUser(null);
  };

  /**
   * Vérifie si l'user courant est authentifié en vérifiant la présence ou non du token dans localStorage
   * @return {Boolean} True if user is logged in, false otherwise
   */
  isSignedIn = function () {
    return Boolean(this.getLocalAuthToken());
  };

  render() {
    //  Setup all the values/functions you want to expose to anybody reading
    // from the AuthContext.
    // écrire ici les méthodes et propriétés que vous souhaitez rendre accessible depuis les Consumers du Context d'authentification
    const authValues = {
      currentUser: this.state.currentUser,
      setCurrentUser: this.setCurrentUser,
      signin: this.signin,
      signup: this.signup,
      signout: this.signout,
      isAdmin: this.isAdmin(),
      isSignedIn: this.isSignedIn()
    };

    return (
      <AuthContext.Provider value={authValues}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
