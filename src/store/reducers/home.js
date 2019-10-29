import * as actionTypes from '../actions/actionTypes';

// '215854' 'Tel-Aviv'
const initialState = {
    selectedCityKey: null,
    selectedCityName: null,
    searchResults: [],
    currentWeather: null,
    currentWeatherLoading: true,
    geoLocationArrived: false,
    forecasts: null,
    forecastLoading: true
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
                selectedCityName: action.cityName,
                geoLocationArrived: true
            };
        case actionTypes.FETCH_GEO_LOCATION_FAIL:
            return {
                ...state,
                geoLocationArrived: true
            }
        case actionTypes.FETCH_FORECAST_START:
            return {
                ...state, 
                forecastLoading: true
            };
        case actionTypes.FETCH_FORECAST_SUCCESS:
            return {
                ...state,
                forecasts: action.data,
                forecastLoading: false
            };
        default: return state;
    };
};

export default reducer;