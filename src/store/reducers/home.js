import * as actionTypes from '../actions/actionTypes';

// '215854' 'Tel-Aviv'
const initialState = {
    selectedCityKey: null,
    selectedCityName: null,
    searchResults: [],
    currentWeather: null,
    currentWeatherLoading: false
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
        case actionTypes.FETCH_CURRENT_WEATHER_START:
            return {
                ...state,
                currentWeatherLoading: true
            };
        case actionTypes.FETCH_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                currentWeatherLoading: false,
                currentWeather: action.data

            };
        case actionTypes.FETCH_GEO_LOCATION_SUCCESS:
            return {
                ...state,
                selectedCityKey: action.cityKey,
                selectedCityName: action.cityName
            };
        default: return state;
    };
};

export default reducer;