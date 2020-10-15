import React, { Component } from "react";
import { APIHandler } from "./../../api/handler";

const catHandler = new APIHandler("/api/categories");

export default class CreateCategory extends Component {
  state = {
        category: {
            name: "test",
        }
  };

  handleChange = (evt) => {
      // console.log("ne foctionne pas comme on le veut !");
      this.setState({ [evt.target.name]: evt.target.value})
  };
  

  handleSubmit = async (evt) => {
    evt.preventDefault();
 
    const catRes = await catHandler.createOne(this.state, () => {
      console.log("category >>>", catRes);
      
    });
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <form
        className="form"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <h1 className="title">Créer une nouvelle catégory</h1>
        <div className="block-create-cat">
          <label htmlFor="category">Catégory :</label>
          <input
            type="text"
            // className="input"
            name="name"
            placeholder="Nom de la catégory"
            defaultValue={this.state.category.name}

          />
          <button className="btn">Créer</button>
        </div>
      </form>
    );
  }
}
