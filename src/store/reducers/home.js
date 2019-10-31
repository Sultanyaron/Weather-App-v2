import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/updateObject';

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
            return updateObject(state, {searchResults: action.searchResults});
        case actionTypes.CLEAR_SEARCH_RESULTS:
            return updateObject(state, {searchResults: []});
        case actionTypes.UPDATE_SELECTED_CITY:
            return updateObject(state, {
                selectedCityKey: action.cityKey, 
                selectedCityName: action.cityName
            });
        case actionTypes.FETCH_CITY_DATA_START:
            return updateObject(state, {fetchCityDataLoading: true});
        case actionTypes.FETCH_CITY_DATA_SUCCESS:
            return updateObject(state, {
                currentWeather: action.currentWeatherData,
                forecasts: action.forecastData,
                fetchCityDataLoading: false
            });
        case actionTypes.FETCH_GEO_LOCATION_SUCCESS:
            return updateObject(state, {
                selectedCityKey: action.cityKey,
                selectedCityName: action.cityName,
                geoLocationArrived: true
            });
        case actionTypes.FETCH_GEO_LOCATION_FAIL:
            return updateObject(state, {geoLocationArrived: true});
        default: return state;
    };
};

export default reducer;