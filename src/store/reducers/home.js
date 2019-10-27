import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchResults: [],
    searchError: null,
    selectedCityKey: '215854',
    selectedCityName: 'Tel-Aviv'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                searchResults: action.searchResults
            }
        case actionTypes.CLEAR_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: []
            }
        case actionTypes.UPDATE_SELECTED_CITY:
            return {
                ...state,
                selectedCityKey: action.cityKey,
                selectedCityName: action.cityName
            };
        default: return state;
    };
};

export default reducer;