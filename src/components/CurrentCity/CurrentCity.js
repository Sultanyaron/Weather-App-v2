import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CityHeader from './CityHeader/CityHeader';
import CityForecast from './CityForecast/CityForecast';
import * as actions from '../../store/actions/rootActions';

const CurrentCity = () => {
    const { selectedCityKey, selectedCityName, geoLocationArrived, forecast  } = useSelector(state => state.home); 
    const currentWeather = useSelector(state => state.home.currentWeather);
    const { metric } = useSelector(state => state.userSettings);
    const dispatch = useDispatch();
    const onFetchCurrentWeather = useCallback((cityKey) => dispatch(actions.fetchCurrentWeather(cityKey)), [dispatch]);
    const onFetchForecast = useCallback((cityKey) => dispatch(actions.fetchForecast(cityKey)), [dispatch]);
    const onGetGeoLocation = useCallback(() => dispatch(actions.getGeoLocation()), [dispatch]);

    if (currentWeather) {
        var { WeatherText, WeatherIcon, Temperature } = currentWeather[0];
        var currentTemp = Temperature.Metric.Value;
        if (!metric) {
            currentTemp = Temperature.Imperial.Value;
        };
    };

    useEffect(() => {
        onGetGeoLocation();
    }, [onGetGeoLocation]);

    useEffect(() => {
        if (selectedCityKey && geoLocationArrived) {
            onFetchForecast(selectedCityKey);
            onFetchCurrentWeather(selectedCityKey);
        };
        
    }, [onFetchCurrentWeather, onFetchForecast, geoLocationArrived, selectedCityKey]);




    




    return (
        <div className='currentCity'>
            <CityHeader 
                cWeatherText={WeatherText}
                cWeatherIcon={WeatherIcon}
                cWeatherTemp={currentTemp}
                cCityName={selectedCityName} />
            <CityForecast />
        </div>
    )
};

export default CurrentCity;