import React, { Component } from 'react';
import FavoriteCntext from "./FavoriteContext";
import {APIHandler} from "./../../api/handler";

const favoriteHandler = new APIHandler("/api/favorites");

export default class FavoriteProvider extends Component {
    state = {
        favorites: [],
    }

    getFavorites = async () => {
        try {
            const favRes = await favoriteHandler.getAll();
            this.setState({favorites: favRes.data});
        } catch(apiErr){
            console.error(apiErr);
        }
    }

    getOneFavorite = async () => {
            const favRes = await favoriteHandler.getAll();
            this.setState({favorites: favRes.data})
     
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
