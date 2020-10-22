import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

import "./../../styles/signin.css";

export default class Signin extends Component {
  state = {
    // definition des valeurs de base pour la phase de dev
    email: "hawa@mail.com",
    password: "12345",
    date: Date.now
  }

  static contextType = AuthContext; // on associe le ccontexte d'authentification à la classe Signin

  handleInput = (evt) => this.setState({ [evt.target.name ]: evt.target.value });
  handleSubmit = (evt) => {
    evt.preventDefault();
    const currentUser = this.context.currentUser;
    console.log(">>>> currentUser", currentUser);
    this.context.signin(this.state, () => {
      console.log("mon user >>>> ", this.state);
      this.props.history.push("/profile/" + this.context.currentUser._id);
    })
  }

  isNotSignup = () => {
    this.props.history.push("/signup")
  };

  render() {
  return (
   <>
      <div className="bg-signin">
    </div>
    <div className="form-container">
      <section id="signin-container">
        <form action="" className="form-signin"
          onChange={this.handleInput}
          onSubmit={this.handleSubmit}>
          <h2 className="title">J'ai déjà un compte ?</h2>
          <div className="form__group field">
            <span className="icon-flex">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: "20px", height: "auto" }}
              />
              <input
                className="form__field"
                type="email"
                name="email"
                id="input-email"
                placeholder="Email"
                required
              />
              <label htmlFor="email" className="label">
                Email
              </label>
            </span>
          </div>
          <div className="form__group field">
            <span className="icon-flex">
              <FontAwesomeIcon
                icon={faKey}
                style={{ width: "20px", height: "auto" }}
              />
              <input
                className="form__field"
                type="password"
                name="password"
                id="input-password"
                placeholder="Mot de passe"
                required
              />
              <label htmlFor="password" className="label">
                Mot de passe
              </label>
            </span>
          </div>
          <Link to="/"> Mot de passe oublier</Link>
          <div className="btn-container">
            <button className="btn">Se connecter</button>
          </div>
        </form>
      </section>
    
        <span className="separation-signin"></span>
        <div>
          <h2 className="title">Je n'ai pas de compte ?</h2>
        <button className="btn"
        onClick={() => this.isNotSignup()}>
          Créer un compte
        </button>
        </div>
    </div>
  </>
  );
}
}