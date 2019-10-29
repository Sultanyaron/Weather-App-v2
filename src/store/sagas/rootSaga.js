import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { 
    fetchSearchSaga, 
    fetchCurrentWeatherSaga, 
    getGeoLocationSaga, 
    fetchGeoLocationSaga,
    fetchForecastSaga 
} from './home';
import { fetchFavoritesSaga } from './favorites'


export function* watchHome() {
    yield all ([
        takeLatest(actionTypes.FETCH_SEARCH, fetchSearchSaga),
        takeLatest(actionTypes.FETCH_CURRENT_WEATHER, fetchCurrentWeatherSaga),
        takeEvery(actionTypes.GET_GEO_LOCATION, getGeoLocationSaga),
        takeEvery(actionTypes.FETCH_GEO_LOCATION, fetchGeoLocationSaga),
        takeLatest(actionTypes.FETCH_FORECAST, fetchForecastSaga)
    ]);
};

export function* watchFavorites() {
    yield all ([
        takeLatest(actionTypes.FETCH_FAVORITES, fetchFavoritesSaga)
    ]);
};

