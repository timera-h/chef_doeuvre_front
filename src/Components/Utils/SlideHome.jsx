import React, { Component } from "react";
// import Carousel from 'react-bootstrap/Carousel'
import Slide1 from "./../../Assets/img/bg-slide-1.png";
import Slide2 from "./../../Assets/img/bg-slide.jpg";
import Slide3 from "./../../Assets/img/bg-slide-1.jpg";
import "./../../styles/slide.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const slideImages = [Slide1, Slide2, Slide3];

export default class SlideHome extends Component {
  render() {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})`}} className="image-container">
              <Link className="btn" to="/our-products/soins-naturels"><span>Voir ici</span></Link>
            </div>
          </div> 
          <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})`}} className="image-container">
                <Link className="btn" to="/our-products/soins-naturels">  <span>Je découvre !</span></Link>
              </div>
            
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[2]})`}} className="image-container">
              <Link className="btn" to="/our-products/miels"><span>Je craque !</span></Link>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}
