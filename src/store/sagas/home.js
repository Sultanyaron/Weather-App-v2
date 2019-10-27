import { put } from 'redux-saga/effects';
import * as actions from '../actions/rootActions';
import axios from '../../shared/axios-weather';
import { autoCompleteEndPoint } from '../../shared/urlCreator';

export function* fetchSearchSaga(action) {
    const searchEndPoint =  yield autoCompleteEndPoint(action.value);
    try{
        const response = yield axios.get(searchEndPoint);
        yield put(actions.fetchSearchSuccess(response.data));
    } catch (error) {
        console.log(error);
        yield put(actions.fetchSearchFail);
    };        
};