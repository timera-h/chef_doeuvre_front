import React, { Component } from 'react';
import FavoriteCntext from "./FavoriteContext";
import {APIHandler} from "./../../api/handler";

const favoriteHandler = new APIHandler("/api/favorites");

export default class FavoriteProvider extends Component {
    state = {
        favorites: [],
    }

    addProducttoFavorite = (product) => {
        const clone = [...this.state.favorites];
        clone.push(product);
        this.setState({favorites: clone})
        console.log("push at favorite", clone);
    }


    getFavorites = async () => {
        try {
            const favRes = await favoriteHandler.getAll();
            console.log("mes produits fav", favRes);
            this.setState({favorites: favRes.data});
        } catch(apiErr){
            console.error(apiErr);
        }
    }

    getOneFavorite = async () => {
            const favRes = await favoriteHandler.getAll();
            console.log("mon produit favoris !!!", favRes);
            this.setState({favorites: favRes.data})
    }

    deleteFavorite = async (id) => {
        if(window.confirm("Êtes-vous sûre de vouloir supprimé ce produit de vos favoris ?")){
            await favoriteHandler.deleteOne(id);
            const favRes = await favoriteHandler.getAll();
            this.setState({favorites: favRes.data})
        }
    }

    render() {
        const values ={
            favorites : this.state.favorites,
            getFavorites: this.getFavorites,
            getOneFavorite: this.getOneFavorite,
            deleteFavorite: this.deleteFavorite,
            addTofavorite: this.addProducttoFavorite
        }
        return (
            <FavoriteCntext.Provider value={values}>
                {this.props.children}
            </FavoriteCntext.Provider>
        )
    }
}
