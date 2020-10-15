import React from "react";

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
      <figcaption>{infos.name}</figcaption>
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
     
    </li>
  );
}
