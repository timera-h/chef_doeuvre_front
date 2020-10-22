import React, { Component } from "react";
import AuthContext from "./../auth/AuthContext";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

// import moment from "moment";
import Country from "../Utils/Country";

export default class Signup extends Component {
  state = {
    gender: "Female",
    firstName: "test firstname",
    lastName: "test lastname",
    birthDate: Date,
    email: "test@test.test",
    address: {
      streetNumber: 2,
      streetName: "Rue des lilas",
      zipCode: 93600,
      city: "aulnay",
      country: "france",
    },
    password: "12345",
    passwordConfirme: "12345",
    products: [],
  };

  // moment().format('DD MM YYYY') date de naissance

  static contextType = AuthContext; // la classe Signup est désormais 'abonnée' au AuthProvider, il consome les infos du provider


  // handleChange = e => {
  //   if (e.target.id === "country" || e.target.id === "city") {
  //     let address = Object.assign({}, this.state.address); 
  //     address[e.target.id] = e.target.value; 
  //     this.setState({ address });
  //     console.log("NewState", this.state);

  //   } else {
  //     console.log("Target is not city or country");
  //    this.setState({
  //       [e.target.id]: e.target.value
  //     });
  //   }
  // };

  handleInput = (evt) => {
    if(evt.target.name === "streetNumber" || evt.target.name === "streetName" || evt.target.name === "zipCode" || evt.target.name === "city" || evt.target.name === "country" ) {
      const address = Object.assign({}, this.state.address);
      address[evt.target.name] = evt.target.value;
      this.setState({address})
    } else {
      console.log("ce n'est pas un une adresse");
      this.setState({
        [evt.target.name]: evt.target.value,
      });
    }
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.context.signup(this.state);
    this.props.history.push("/signin"); // redirection vers la page de signin
  };

  render() {
    return (
      <section id="signup-container">
        <form
          onChange={this.handleInput}
          onSubmit={this.handleSubmit}
          className="form-signup"
        >
          <h2 className="title">Créer un compte</h2>
          <div className="input-radio">
            <h4 className="title-gender">Genre:</h4>
            <div className="input-male">
              <input type="radio" id="gender" name="gender" value="Male" />
              <label htmlFor="gender">Male</label>
            </div>
            <div className="input-female">
              <input type="radio" id="gender" name="gender" value="Female" />
              <label htmlFor="gender">Female</label>
            </div>
          </div>
          <div className="form__group field">
            <span className="icon-flex">
              <FontAwesomeIcon
                icon={faUser}
                style={{ width: "20px", height: "auto" }}
              />
              <input
                className="form__field"
                type="text"
                name="firstName"
                id="input-first-name"
                placeholder="Prénom"
                required
              />
              <label htmlFor="firstName" className="label">
                Prénom
              </label>
            </span>
          </div>
          <div className="form__group field">
            <span className="icon-flex">
              <FontAwesomeIcon
                icon={faUser}
                style={{ width: "20px", height: "auto" }}
              />
              <input
                className="form__field"
                type="text"
                name="lastName"
                id="input-last-name"
                placeholder="Nom"
                required
              />
              <label htmlFor="lastName" className="label">
                Nom
              </label>
            </span>
          </div>
          <div className="form__group field">
            <span className="icon-flex">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ width: "20px", height: "auto" }}
              />
              <input
                className="form__field"
                type="date"
                name="birthDate"
                id="input-birth-date"
                placeholder="Date de naissance"
                required
              />
              <label htmlFor="birthDate" className="label">
                Date de naissance
              </label>
            </span>
          </div>
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
          <div className="adress-form">
            <label htmlFor="">Adresse: </label>
            <div className="form__group field">
              <span className="icon-flex">
                <input
                  className="form__field"
                  type="number"
                  name="streetNumber"
                  id="input-street-number"
                  placeholder="Numéro de la rue"
                  required
                />
                <label htmlFor="streetNumber" className="label">
                  Numéro de la rue
                </label>
              </span>
            </div>
            <div className="form__group field">
              <span className="icon-flex">
                <input
                  className="form__field"
                  type="text"
                  name="streetName"
                  id="input-street-name"
                  placeholder="Nom de la rue"
                  required
                />
                <label htmlFor="streetName" className="label">
                  Nom de la rue
                </label>
              </span>
            </div>
            <div className="form__group field">
              <span className="icon-flex">
                <input
                  className="form__field"
                  type="number"
                  name="zipCode"
                  id="input-zip-code"
                  placeholder="Code postal"
                  required
                />
                <label htmlFor="zipCode" className="label">
                  Code postal
                </label>
              </span>
            </div>
            <div className="form__group field">
              <span className="icon-flex">
                <input
                  className="form__field"
                  type="text"
                  name="city"
                  id="input-city"
                  placeholder="Ville"
                  required
                />
                <label htmlFor="city" className="label">
                  Ville
                </label>
              </span>
            </div>
            <Country />
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
          <div className="form__group field">
            <span className="icon-flex">
              <FontAwesomeIcon
                icon={faKey}
                style={{ width: "20px", height: "auto" }}
              />
              <input
                className="form__field"
                type="password"
                name="passwordConfirme"
                id="input-password"
                placeholder="Confirmer votre de passe"
                required
              />
              <label htmlFor="passwordConfirme" className="label">
                Confirmer votre mot de passe
              </label>
            </span>
            <div className="btn-container">
              <button className="btn">S'inscrire</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
