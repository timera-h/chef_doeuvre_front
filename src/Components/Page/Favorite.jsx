import React, { Component } from 'react';
import FavoriteContext from "./../Favorites/FavoriteContext";

export default class Favorite extends Component {
    static contextType = FavoriteContext;
    
    render() {
        const favorite = this.context.favorites;

        return (
            <div>
               {
                   favorite.length === 0 ? (
                       <p>Vous n'avez pas encore ajouter de produit favoris !</p>
                   ) : (
                        <ul className="list-favorite">
                   {favorite.map((product, i) => (
                       <li key={i} className="item-favorite" >
                           <img src={product.image} alt={product.name} />
                   <h5>{product.name}</h5>
                       </li>
                   ))}
        
                   </ul> 
                   )
               }
                
              
            </div>
        )
    }
}
