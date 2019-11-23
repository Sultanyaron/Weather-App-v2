import reducer from './home';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/updateObject';

describe('Home reducer', () => {
  const initialState = {
    selectedCityKey: null,
    selectedCityName: null,
    searchResults: [],
    fetchCityDataLoading: true,
    currentWeather: null,
    forecasts: null,
    geoLocationArrived: false,
  };

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
    
  it('Should FETCH_SEARCH_SUCCESS', () => {
    expect(reducer(initialState, {
      type: actionTypes.FETCH_SEARCH_SUCCESS,
      searchResults: 'some-data'
    })).toEqual(updateObject(initialState, { searchResults: 'some-data' }));
  });

  it('should CLEAR_SEARCH_RESULTS', () => {
    expect(reducer(initialState, {
      type: actionTypes.CLEAR_SEARCH_RESULTS
    })).toEqual(updateObject(initialState, { searchResults: [] }));
  });

  it('Should UPDATE_SELECTED_CITY', () => {
    expect(reducer(initialState, {
      type: actionTypes.UPDATE_SELECTED_CITY,
      cityKey: 'cityKey',
      cityName: 'cityName'
    })).toEqual(updateObject(initialState, {
      selectedCityKey: 'cityKey',
      selectedCityName: 'cityName'
    }));
  });

  it('Should FETCH_CITY_DATA_START', () => {
    expect(reducer(initialState, {
      type: actionTypes.FETCH_CITY_DATA_START
    })).toEqual(updateObject(initialState, { fetchCityDataLoading: true }));
  });

  it('Should FETCH_CITY_DATA_SUCCESS', () => {
    expect(reducer(initialState, {
      type: actionTypes.FETCH_CITY_DATA_SUCCESS,
      currentWeatherData: 'some-data',
      forecastData: 'some-data'
    })).toEqual(updateObject(initialState, {
      fetchCityDataLoading: false,
      currentWeather: 'some-data',
      forecasts: 'some-data'
    }));
  });

  it('Should FETCH_GEO_LOCATION_SUCCESS', () => {
    expect(reducer(initialState, {
      type: actionTypes.FETCH_GEO_LOCATION_SUCCESS,
      cityKey: 'cityKey',
      cityName: 'cityName'
    })).toEqual(updateObject(initialState, {
      selectedCityKey: 'cityKey',
      selectedCityName: 'cityName',
      geoLocationArrived: true
    }));
  });

  it('Should FETCH_GEO_LOCATION_FAIL', () => {
    expect(reducer(initialState, {
      type: actionTypes.FETCH_GEO_LOCATION_FAIL
    })).toEqual(updateObject(initialState, {
      geoLocationArrived: true
    }));
  });
});