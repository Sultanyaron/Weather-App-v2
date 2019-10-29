import * as actionTypes from '../actions/actionTypes';


const initialState = {
    favorites: [],
    fetchedFavorites: [],
    fetchFavoritesLoading: true
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FAVORITES: 
            return { 
                ...state,
                favorites: action.newFavorites 
            };
        case actionTypes.FETCH_FAVORITES_START:
            return {
                ...state,
                fetchFavoritesLoading: true
            }
        case actionTypes.FETCH_FAVORITES_SUCCESS:
            return {
                ...state,
                fetchedFavorites: action.citysData,
                fetchFavoritesLoading: false
            };
        default: return state;
    };
};

export default reducer;