import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as FaHeartEmpty } from "@fortawesome/free-regular-svg-icons";

export default function ProductCard({ infos }) {
  const res = (infos.price * infos.sold) / 100;

  return (
    <li className="product card">
      <img className="imgProduct" src={infos.image} alt="Product" />
      {infos.sold > 0 ? (
        <div className="baniere-sold">Produit soldé !</div>
      ) : (
        ""
      )}
      <figcaption className="figcaption-product">{infos.name}</figcaption>
      <div className="container-fav-price">
        <div className="prix">
          {infos.sold > 0 ? (
            <span style={{ textDecorationLine: "line-through" }}>
              {infos.price} €
            </span>
          ) : (
            ""
          )}{" "}
          {infos.sold > 0 ? infos.price - res : infos.price}
          <span>€</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={FaHeartEmpty}
            size="2x"
            className="favorite-icon"
          />
        </div>
      </div>
    </li>
  );
}
