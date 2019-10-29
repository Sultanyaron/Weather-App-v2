import { put, all } from 'redux-saga/effects';
import axios from '../../shared/axios-weather';
import { currentWeatherEndpoint } from '../../shared/urlCreator';
import * as actions from '../actions/rootActions';


export function* fetchFavoritesSaga(action) {
    yield put(actions.fetchFavoritesStart());
    const apiCalls = yield action.cityList.map(key => fetchSingleFav(key));
    const results = yield all(apiCalls);
    yield put(actions.fetchFavoritesSuccess(results));
};

function* fetchSingleFav(cityKey) {
    const fetchEndpoint = currentWeatherEndpoint(cityKey);
    try {
        const response = yield axios.get(fetchEndpoint);
        const transformedData = {cityKey: cityKey, data: response.data};
        return transformedData;
    } catch (error) {
        console.error('error Fetching favorite ' + cityKey)
    };
};

