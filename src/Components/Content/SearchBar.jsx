import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ProductContext from "../Products/ProductContext";
import Products from "./../Products/Products";

export default function SearchBar() {
  const ProductContextValue = useContext(ProductContext);

  const [search, setSearch] = useState("");

  const handleSearch = (evt) => {
    evt.preventDefault();
    setSearch(evt.target.value);
    evt.target.style.display = "block"
  };

  if (search.length > 0) {
    ProductContextValue.products = ProductContextValue.products.filter(
      (product) => {
        return product.name.toLowerCase().match(search);
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
        onChange={handleSearch}
        value={search}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" size="lg"/>
      <div className="search-products " style={{display: "none"}}>
        <Products />
      </div>
    </div>
  );
}
