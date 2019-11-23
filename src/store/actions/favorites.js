import * as actionTypes from './actionTypes';

// Sync
export const initFavorites = () => {
  let favorites = [];
  const localFavorites = localStorage.getItem('userFav');
  if (localFavorites !== null) {
    favorites = JSON.parse(localFavorites);
  }
  return {
    type: actionTypes.SET_FAVORITES,
    newFavorites: favorites
  };
};

export const removeFavorite = (cityKey, favorites) => {
  const newFavorites = favorites.filter((fav) => cityKey !== fav.cityKey);
  localStorage.setItem('userFav', JSON.stringify(newFavorites));
  return {
    type: actionTypes.SET_FAVORITES,
    newFavorites
  };
};

export const addFavorite = (cityKey, cityName, favorites) => {
  const newFavorites = favorites.concat({ cityKey, cityName });
  localStorage.setItem('userFav', JSON.stringify(newFavorites));
  return {
    type: actionTypes.SET_FAVORITES,
    newFavorites
  };
};

// Async
export const fetchFavorites = (cityKeysList) => {
  return {
    type: actionTypes.FETCH_FAVORITES,
    cityList: cityKeysList
  };
};

export const fetchFavoritesStart = () => {
  return {
    type: actionTypes.FETCH_FAVORITES_START
  };
};

export const fetchFavoritesSuccess = (results) => {
  return {
    type: actionTypes.FETCH_FAVORITES_SUCCESS,
    citysData: results
  };
};

export const clearFetchedFavorites = () => {
  return {
    type: actionTypes.CLEAR_FETCHED_FAVORITES
  };
};