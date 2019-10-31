import reducer from './favorites';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/updateObject';

describe('Favorite reducer', () => {
    const initialState  = {
        favorites: [],
        fetchedFavorites: [],
        fetchFavoritesLoading: true
    };

    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
     
    it('Should SET_FAVORITES', () => {
        expect(reducer(initialState, {
            type: actionTypes.SET_FAVORITES,
            newFavorites: 'some-data'
        })).toEqual(updateObject(initialState, {
            favorites: 'some-data',
            fetchFavoritesLoading: true
        }));
    });

    it('should FETCH_FAVORITES_SUCCESS', () => {
        expect(reducer(initialState, {
            type: actionTypes.FETCH_FAVORITES_SUCCESS, 
            citysData: 'some-data'
        })).toEqual(updateObject(initialState, {
            fetchedFavorites: 'some-data',
            fetchFavoritesLoading: false
        }));
    });

    it('Should CLEAR_FETCHED_FAVORITES', () => {
        expect(reducer(initialState, {
            type: actionTypes.CLEAR_FETCHED_FAVORITES
        })).toEqual(updateObject(initialState, {
                fetchedFavorites: [],
                fetchFavoritesLoading: true
            }));
    });

    it('Should FETCH_FAVORITES_START', () => {
        expect(reducer(initialState, {
            type: actionTypes.FETCH_FAVORITES_START
        })).toEqual(updateObject(initialState, {fetchFavoritesLoading: true}));
    });
});