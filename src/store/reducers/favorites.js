import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/updateObject';

const initialState = {
  favorites: [],
  fetchedFavorites: [],
  fetchFavoritesLoading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FAVORITES:
      return updateObject(state, { favorites: action.newFavorites });
    case actionTypes.FETCH_FAVORITES_START:
      return updateObject(state, { fetchFavoritesLoading: true });
    case actionTypes.FETCH_FAVORITES_SUCCESS:
      return updateObject(state, {
        fetchedFavorites: action.citysData,
        fetchFavoritesLoading: false
      });
    case actionTypes.CLEAR_FETCHED_FAVORITES:
      return updateObject(state, {
        fetchedFavorites: [],
        fetchFavoritesLoading: true
      });
    default: return state;
  }
};

export default reducer;