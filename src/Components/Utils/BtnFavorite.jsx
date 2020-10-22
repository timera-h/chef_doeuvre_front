import React, {useContext} from 'react';
import FavoriteContext from "./../Favorites/FavoriteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as FaHeartEmpty } from "@fortawesome/free-regular-svg-icons";


export default function BtnFavorite({infos}) {
    const FavoriteContextValue = useContext(FavoriteContext);
    return (
        <FontAwesomeIcon
            icon={FaHeartEmpty}
            size="2x"
            className="favorite-icon"
            onClick={() => FavoriteContextValue.addTofavorite(infos)}
          />
    )
}
