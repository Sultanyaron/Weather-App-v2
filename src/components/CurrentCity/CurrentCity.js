import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CityHeader from './CityHeader/CityHeader';
import CityForecast from './CityForecast/CityForecast';
import * as actions from '../../store/actions/rootActions';
import Spinner from '../UI/Spinner/Spinner';

const CurrentCity = () => {
    const { selectedCityKey, selectedCityName, geoLocationArrived, currentWeatherLoading, forecastLoading  } = useSelector(state => state.home); 
    const currentWeather = useSelector(state => state.home.currentWeather);
    const { metric } = useSelector(state => state.userSettings);
    const dispatch = useDispatch();
    const onFetchCurrentWeather = useCallback((cityKey) => dispatch(actions.fetchCurrentWeather(cityKey)), [dispatch]);
    const onFetchForecast = useCallback((cityKey) => dispatch(actions.fetchForecast(cityKey)), [dispatch]);

    if (currentWeather) {
        var { WeatherText, WeatherIcon, Temperature } = currentWeather[0];
        var currentTemp = Temperature.Metric.Value;
        if (!metric) {
            currentTemp = Temperature.Imperial.Value;
        };
    };



    useEffect(() => {
        if (selectedCityKey) {
            onFetchForecast(selectedCityKey);
            onFetchCurrentWeather(selectedCityKey);
        };
        
    }, [onFetchCurrentWeather, onFetchForecast, geoLocationArrived, selectedCityKey]);

    let content = <Spinner />;

    if (!currentWeatherLoading && !forecastLoading) {
        content = (
            <React.Fragment>
                <CityHeader 
                    cWeatherText={WeatherText}
                    cWeatherIcon={WeatherIcon}
                    cWeatherTemp={currentTemp}
                    cCityName={selectedCityName}
                    cCityKey={selectedCityKey} />
                <CityForecast />
            </React.Fragment>
        );
    }

    return (
        <div className='currentCity'>
            {content}
        </div>
    )
};

export default CurrentCity;