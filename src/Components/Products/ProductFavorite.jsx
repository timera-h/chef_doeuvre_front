import React from 'react';
import ShopCart from "./../../Assets/img/shopping-bag.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export default function ProductFavorite({infos}) {
    return (
        <li className="product favorite-card">
            <img className="imgProduct" src={infos.image} alt="produit favori"/>
    <figcaption>{infos.name}</figcaption>
    <hr/>
    <div className="prix">{infos.price}<span>€</span></div>
    <div className="add-product">
        <span className="add-in-shop-cart">Ajouter au panier</span>
        <img src={ShopCart} alt="panier" style={{width: "40px", height: "auto"}}/>
    </div>
    <FontAwesomeIcon icon={faHeart}/>
        </li>
    )
}
