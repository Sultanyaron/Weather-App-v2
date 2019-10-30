import * as actionTypes from './actionTypes';

//Fatch autocomplete search
    
export const fetchSearchSuccess = (results) => {
    return {
        type: actionTypes.FETCH_SEARCH_SUCCESS,
        searchResults: results
    };
};

export const fetchSearch = (cityKey) => {
    return {
        type: actionTypes.FETCH_SEARCH,
        value: cityKey
    };
};

export const clearSearchResults = () => {
    return {
        type: actionTypes.CLEAR_SEARCH_RESULTS
    };
};

export const updateSelectedCity = (cityName, cityKey) => {
    return {
        type: actionTypes.UPDATE_SELECTED_CITY,
        cityName: cityName,
        cityKey: cityKey
    };
};

//Fetch current weather 

export const fetchCityData = ( cityKey ) => {
    return {
        type: actionTypes.FETCH_CITY_DATA,
        cityKey: cityKey
    };
};

export const fetchCityDataStart = () => {
    return {
        type: actionTypes.FETCH_CITY_DATA_START
    };
};

export const fetchCityDataSuccess = (currentWeather, forecast) => {
    return {
        type: actionTypes.FETCH_CITY_DATA_SUCCESS,
        currentWeatherData: currentWeather,
        forecastData: forecast
    };
};


//Geo location 

export const getGeoLocation = () => {
    return {
        type: actionTypes.GET_GEO_LOCATION
    };
};

export const fetchGeoLocation = (coords) => {
    return {
        type: actionTypes.FETCH_GEO_LOCATION,
        coords: coords
    };
};  

export const fetchGeoLocationSuccess = (cityName, cityKey) => {
    return {
        type: actionTypes.FETCH_GEO_LOCATION_SUCCESS,
        cityName: cityName,
        cityKey: cityKey
    };
};  

export const fetchGeoLocationFail = () => {
    return {
        type: actionTypes.FETCH_GEO_LOCATION_FAIL
    };
};











