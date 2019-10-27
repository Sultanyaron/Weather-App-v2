import * as actionTypes from './actionTypes';

export const fetchSearchFail = () => {
    return {
        type: actionTypes.FETCH_SEARCH_FAIL
    };
};
    
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
    }
};  






