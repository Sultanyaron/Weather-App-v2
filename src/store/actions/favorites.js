import * as actionTypes from './actionTypes';

export const initFavorites = () => {
    let favorites = [];
    const localFavorites = localStorage.getItem('userFav');
    if (localFavorites !== null) {
        favorites = JSON.parse(localFavorites);
    };
    return {
        type: actionTypes.SET_FAVORITES,
        newFavorites: favorites
    };
};

export const removeFavorite = (cityKey, favorites) => {
    let newFavorites = favorites.filter(fav => cityKey !== fav.cityKey);
    localStorage.setItem('userFav', JSON.stringify(newFavorites));
    return {
        type: actionTypes.SET_FAVORITES,
        newFavorites: newFavorites
    };
};

export const addFavorite = (cityKey, cityName, favorites) => {
    let newFavorites = favorites.concat({cityKey: cityKey, cityName: cityName});
    localStorage.setItem('userFav', JSON.stringify(newFavorites));
    return {
        type: actionTypes.SET_FAVORITES,
        newFavorites: newFavorites
    };
};