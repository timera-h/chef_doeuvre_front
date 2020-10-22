import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ProductContext from "../Products/ProductContext";
import Products from "./../Products/Products";

export default class SearchBar extends Component {

  state = {
    search: "",
  };

  static contextType = ProductContext;


   handleSearch = async (evt) => {
    // evt.preventDefault();
    //  this.setState(evt.target.value);
  };

 
render(){
  if (this.state.search.length > 0) {
    this.context.products = this.context.products.filter(
      (product) => {
        return product.name.toLowerCase().match(this.state.search);
      }
    );
  }
  return (
    <div className="nav-top-search">
      <input
        //  onChange={this.handleInput}
        type="text"
        className="input-search active"
        placeholder="Rechercher un produit ..."
        onChange={this.handleSearch}
        value={this.state.search}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" size="lg"/>
      <div className="search-products " style={{display: "none"}}>
        <Products />
      </div>
    </div>
  );
}
}