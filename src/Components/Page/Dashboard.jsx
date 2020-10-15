import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faTags, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./../../styles/dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <section id="dashboard-admin">
        <h1 className="title">Tableau de bord</h1>
        <p> Bienvenue dans votre espace de gestion.</p>
        <hr />
          <article className="manage-panel">
            <h2 className="title">
              <span>
                <FontAwesomeIcon icon={faStore} />
              </span>
              Produits
            </h2>
            <Link to="/create-product">
              <div className="btn-container">
                <button className="btn">Ajouter un produit</button>
              </div>
            </Link>
            <Link to="/delete/product">
              <div className="btn-container">
                <button className="btn">Supprimer un produit</button>
              </div>
            </Link>
            <Link to="/update/product">
              <div className="btn-container">
                <button className="btn">Modifier un produit</button>
              </div>
            </Link>
          </article>
          <hr />
          <article className="manage-panel">
            <h2 className="title">
              <span>
                <FontAwesomeIcon icon={faUsers} />{" "}
              </span>
              Utilisateurs
            </h2>
            <Link to="/users">
              <div className="btn-container">
                <button className="btn">Manager les utilisateurs</button>
              </div>
            </Link>
          </article>
          <hr/>
          <article className="manage-panel">
            <h2 className="title">
              <span>
                <FontAwesomeIcon icon={faTags} />
              </span>
              Manager les Catégories
              </h2>
      
        <Link to="/create-category">
        <div className="btn-container">
            <button className="btn is-clickable">Ajouter une categorie</button>
            </div>
        </Link>
        <Link to="/delete/category">
        <div className="btn-container">
            <button className="btn">Supprimé une categorie</button>
            </div>
        </Link>
          </article>
        </section>
      </div>
    );
  }
}
