import React, { Component } from "react";
import { apiHandler } from "./../../api/handlers";
import "./../../styles/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSeedling,
  faUser,
  faPhoneAlt,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import BgImage from "./../../Assets/img/bg-contact3.jpg";

// author input design https://codepen.io/lucasyem/pen/ZEEYKdj

const handler = apiHandler();

export default class Contact extends Component {
  state = {
    firstName: "toto",
    lastName: "tata",
    tel: "0610000000",
    email: "timera.barry@gmail.com",
    subject: "commande",
    message: "Bonjour je vous contact concernant une commande ....",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, tel, email, subject, message } = this.state;
    try {
      await handler.post("/api/contact", {
        firstName,
        lastName,
        tel,
        email,
        subject,
        message,
      });
      this.props.history.push("/contact");
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    return (
      <div className="container-form-contact">
        <img className="bg-contact" src={BgImage} alt="" />{" "}
        <form
          action=""
          className="form contact"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <h1 className="title">Contactez-nous</h1>
          <FontAwesomeIcon
            icon={faFileContract}
            style={{ width: "50px", height: "auto" }}
          />
          <div className="form__group field">
            <span className="icon-flex">
              <FontAwesomeIcon
                icon={faUser}
                style={{ width: "20px", height: "auto" }}
              />
              <input
                type="text"
                className="form__field"
                placeholder="Prénom"
                name="firstName"
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
                type="text"
                className="form__field"
                placeholder="Nom"
                name="lastName"
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
                icon={faPhoneAlt}
                style={{ width: "20px", height: "auto" }}
              />
              <input
                type="tel"
                className="form__field"
                placeholder="Téléphone"
                name="tel"
                required
              />
              <label htmlFor="tel" className="label">
                Téléphone
              </label>
            </span>
          </div>

          <div className="form__group field">
            <span className="icon-flex">
              <FontAwesomeIcon
                className="icon"
                icon={faEnvelope}
                style={{ width: "20px", height: "auto" }}
              />
              <input
                type="email"
                className="form__field"
                placeholder="Email"
                name="email"
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
                icon={faSeedling}
                style={{ width: "20px", height: "auto" }}
              />
              <input
                type="text"
                className="form__field"
                placeholder="Sujet du message"
                name="subject"
                required
              />

              <label htmlFor="subject" className="label">
                Subject du message
              </label>
            </span>
          </div>

          <textarea
            placeholder="Message"
            name="message"
            cols="30"
            rows="10"
          ></textarea>

          <div className="btn-container">
            <button className="btn">Envoyer</button>
          </div>
        </form>
      </div>
    );
  }
}
