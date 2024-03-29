import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CityHeader from './CityHeader/CityHeader';
import CityForecast from './CityForecast/CityForecast';
import * as actions from '../../store/actions/rootActions';
import Spinner from '../UI/Spinner/Spinner';

const CurrentCity = () => {
  const { selectedCityKey, selectedCityName, fetchCityDataLoading } = useSelector(
    (state) => state.home
  );
  const currentWeather = useSelector((state) => state.home.currentWeather);
  const { metric } = useSelector((state) => state.userSettings);
  const dispatch = useDispatch();
  const onFetchCityDetails = useCallback((cityKey) => dispatch(
    actions.fetchCityData(cityKey)
  ), [dispatch]);
  
  useEffect(() => {
    if (selectedCityKey) {
      onFetchCityDetails(selectedCityKey);
    }
  }, [onFetchCityDetails, selectedCityKey]);

  let content = <Spinner />;

  if (!fetchCityDataLoading) {
    const { WeatherText, WeatherIcon, Temperature } = currentWeather[0];
    let currentTemp = Temperature.Metric.Value;
    if (!metric) {
      currentTemp = Temperature.Imperial.Value;
    }

    content = (
      <>
        <CityHeader
          cWeatherText={WeatherText}
          cWeatherIcon={WeatherIcon}
          cWeatherTemp={currentTemp}
          cCityName={selectedCityName}
          cCityKey={selectedCityKey}
        />
        <CityForecast />
      </>
    );
  }

  return (
    <div className="currentCity">
      <div className="currentCity__box">
        {content}
      </div>
    </div>
  );
};

export default CurrentCity;