import { put, call, all } from 'redux-saga/effects';
import * as actions from '../actions/rootActions';
import axios from '../../utils/axios-weather';
import * as urlCreator from '../../utils/urlCreator';

export function* fetchSearchSaga(action) {
    const searchEndpoint =  yield urlCreator.autoCompleteEndpoint(action.value);
    try{
        const response = yield axios.get(searchEndpoint);
        yield put(actions.fetchSearchSuccess(response.data));
    } catch (error) {
        console.error(error);
    };        
};

export function* fetchCityDataSaga(action) {
    const currentWeatherEndpoint = yield urlCreator.currentWeatherEndpoint(action.cityKey);
    const forecastEndpoint = yield urlCreator.forecastEndpoint(action.cityKey);
    yield put(actions.fetchCityDataStart());
    try {
        const [currentWeatherRes, forecastRes ] = yield all([
            call(axios.get, currentWeatherEndpoint),
            call(axios.get, forecastEndpoint)
        ]);
        yield put(actions.fetchCityDataSuccess(currentWeatherRes.data, forecastRes.data));
    } catch (error) {
        console.error(error);
    };
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
        yield put(actions.fetchGeoLocationFail());
    };
};

export function* fetchGeoLocationSaga (action) {
    const { latitude, longitude } = action.coords;
    const geoEndpoint = yield urlCreator.getoLocationEndpoint(latitude, longitude);
    try {
        const response = yield axios.get(geoEndpoint); 
        const { EnglishName, Key } = response.data;
        yield put(actions.fetchGeoLocationSuccess(EnglishName, Key));
    } catch (error) {
        yield put(actions.updateSelectedCity('Tel-Aviv', '215854'));
        yield put(actions.fetchGeoLocationFail());
    };
};


