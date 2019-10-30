import * as actionTypes from '../actions/actionTypes';

// '215854' 'Tel-Aviv'
const initialState = {
    selectedCityKey: null,
    selectedCityName: null,
    searchResults: [],
    fetchCityDataLoading: true,
    currentWeather: null,
    forecasts: null,
    geoLocationArrived: false,
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
        case actionTypes.FETCH_CITY_DATA_START:
            return {
                ...state,
                fetchCityDataLoading: true
            };
        case actionTypes.FETCH_CITY_DATA_SUCCESS:
            return {
                ...state,
                currentWeatherLoading: false,
                currentWeather: action.currentWeatherData,
                forecasts: action.forecastData,
                fetchCityDataLoading: false

            };
        case actionTypes.FETCH_GEO_LOCATION_SUCCESS:
            return {
                ...state,
                selectedCityKey: action.cityKey,
                selectedCityName: action.cityName,
                geoLocationArrived: true
            };
        case actionTypes.FETCH_GEO_LOCATION_FAIL:
            return {
                ...state,
                geoLocationArrived: true
            }
        default: return state;
    };
};

export default reducer;