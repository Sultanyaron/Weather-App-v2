import { put, call } from 'redux-saga/effects';
import * as actions from '../actions/rootActions';
import axios from '../../shared/axios-weather';
import * as actionTypes from '../actions/actionTypes';
import { autoCompleteEndpoint, currentWeatherEndpoint, getoLocationEndpoint } from '../../shared/urlCreator';

export function* fetchSearchSaga(action) {
    const searchEndpoint =  yield autoCompleteEndpoint(action.value);
    try{
        const response = yield axios.get(searchEndpoint);
        yield put(actions.fetchSearchSuccess(response.data));
    } catch (error) {
        console.log(error);
    };        
};

export function* fetchCurrentWeatherSaga(action) {
    const weatherEndpoint = yield currentWeatherEndpoint(action.cityKey);
    yield put(actions.fetchCurrentWeatherStart);
    try {
        const response = yield axios.get(weatherEndpoint);
        yield put(actions.fetchCurrentWeatherSuccess(response.data));
    } catch (error) {
        console.error(error);
    }
};


const getUserLocation = () => new Promise((resolve) => {
    
    navigator.geolocation.getCurrentPosition(
        location => resolve(location),
        error => resolve(error),
    );
});

export function* getGeoLocationSaga(action) {
    const location  = yield call(getUserLocation);
    if ( location.coords ) {
        yield put(actions.fetchGeoLocation(location.coords));
    } else {
        yield put(actions.updateSelectedCity('Tel-Aviv', '215854'));
    };
};

export function* fetchGeoLocationSaga (action) {
    const { latitude, longitude } = action.coords;
    const geoEndpoint = getoLocationEndpoint(latitude, longitude);
    try {
        const response = yield axios.get(geoEndpoint); 
        const { EnglishName, Key } = response.data;
        yield put(actions.fetchGeoLocationSuccess(EnglishName, Key));
    } catch (error) {
        yield put(actions.updateSelectedCity('Tel-Aviv', '215854'));
    };
}
