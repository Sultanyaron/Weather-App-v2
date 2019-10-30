import { put, all } from 'redux-saga/effects';
import axios from '../../shared/axios-weather';
import { currentWeatherEndpoint } from '../../shared/urlCreator';
import * as actions from '../actions/rootActions';


export function* fetchFavoritesSaga(action) {
    yield put(actions.fetchFavoritesStart());
    let results = [];
    const apiCalls = yield action.cityList.map(key => fetchSingleFav(key));
    results = yield all(apiCalls);
    let checkErrors = false;
    for (let i = 0; i < results.length; i++) {
        if (typeof results[i] === "undefined" ) {
            checkErrors = true;
        }
    };
    if (!checkErrors) {
        yield put(actions.fetchFavoritesSuccess(results));
    }
};

function* fetchSingleFav(cityKey) {
    const fetchEndpoint = currentWeatherEndpoint(cityKey);
    try {
        const response = yield axios.get(fetchEndpoint);
        const transformedData = {cityKey: cityKey, data: response.data};
        return transformedData;
    } catch (error) {
        console.error('Error fetching Favorite: ' + cityKey);
    };
};

