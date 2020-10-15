import React, {Component} from 'react';
import "./../../styles/mainHome.css";
import ProductList from "../Products/ProductList";
import SlideHome from "./SlideHome";
// import { Link } from 'react-router-dom';


import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class Main extends Component{
    state = {
        favorites: "",
    }

    render(){
    return (
        <>
        <section className="slide">
            <SlideHome/>
        </section>
        <section className="produits">
            <h2 className="title">Produits du Moment</h2>
            <article className="produits-flex">
            <ProductList />
            </article> 
        </section>
</>
    )
}
}
