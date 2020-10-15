import React, { Component } from 'react';
import { APIHandler } from "./../../api/handler";

const apiCatHandler = new APIHandler("/api/categories");

export default class DeleteCategory extends Component {
    state = {
        category: [],
      };

      async componentDidMount() {
          const catRes = await apiCatHandler.getAll();
          this.setState({category: catRes.data})
      }
    
    
      handleDelete = async (id) => {
          if(window.confirm("Êtes-vous sûre de vouloir supprimé cette catégorie ?")) {
              await apiCatHandler.deleteOne(id)
              const apiRes = await apiCatHandler.getAll();
              this.setState({ category: apiRes.data });
          }
      };

    render(){
        const {category} = this.state;
    return (
        <div>
            <h1 className="title">Supprimer une catégorie</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Supprimé</th>
                    </tr>
                </thead>
                <tbody>
                    {category.map((cat, i) => (
                        <tr key={i}>
                        <td>{cat.name}</td>
                        <td> <button className="btn" onClick={() => this.handleDelete(cat._id)}>x</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
}