import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchSearchSaga } from './home';


export function* watchHome() {
    yield all ([
        takeLatest(actionTypes.FETCH_SEARCH, fetchSearchSaga)
    ]);
};