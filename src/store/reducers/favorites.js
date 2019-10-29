import * as actionTypes from '../actions/actionTypes';


const initialState = {
    favorites: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FAVORITES: 
            return { favorites: action.newFavorites }  
        default: return state;
    };
};

export default reducer;