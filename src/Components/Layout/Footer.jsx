import React from "react";
import "./../../styles/footer.scss";
// import { Link } from "react-dom";
import Instagram from "./../../Assets/img/instagram.jpeg";
import Linkedin from "./../../Assets/img/linkedin.jpeg";
import Facebook from "./../../Assets/img/facebook.jpeg";

export default function Footer() {
  return (
    <div className="footer-container">
    <footer>
      <section className="footer-main">
        <article className="reseaux">
          <h3 className="title">Rejoignez nous</h3>
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
          <img src={Linkedin} alt="linkedin" />
        </article>
      </section>
      <section className="footer-main">
        <article>
          <h3 className="title">Contatez nous</h3>
          <form method="POST" action="" className="form">
              <input
                type="input"
                className="input"
                placeholder="Nom"
                name="lastName"
                id="last-name"
                required
              />
        
    
              <input
                type="input"
                className="input"
                placeholder="Prénom"
                name="firstName"
                id="first-name"
                required
              />

              <input
                type="input"
                className="input"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
            
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <div className="btn-container">
            <button className="btn">Envoyer</button>
            </div>
          </form>
        </article>
      </section>
      <section className="footer-main">
        <article>
          <h3 className="title">News Letters</h3>
        </article>
      </section>
    </footer>
    </div>
  );
}
