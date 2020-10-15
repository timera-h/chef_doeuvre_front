import React, { Component } from "react";
// import {Link} from "react-router-dom";
import { APIHandler } from "../../api/handler";
// import CategoryList from "./CategoryList";
import "./../../styles/categoryCard.css";
// import ParticlesBg from 'particles-bg';
import "./../../styles/vars.css";

const categoryHandler = new APIHandler("/api/category");

export default class CategoryCard extends Component {
  state = {
    category: "",
  };

  async componentDidMount() {
    const apiRes = await categoryHandler.getAll();
    this.setState({ category: apiRes.data });
  }
  render() {
    const {category} = this.state;
    return (
      <div className={`card-category ${this.props.categoryClass}`}>
        {/* <ParticlesBg color="var(--color-gradient)" type="lines" bg={true} /> */}
        {this.props.text}
        {category.name}
      </div>
    );
  }
}
