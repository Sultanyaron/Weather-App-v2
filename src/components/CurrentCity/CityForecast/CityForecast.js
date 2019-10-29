import React from 'react';
import { useSelector } from 'react-redux';
import DayForecast from './DayForecast/DayForecast';


const CityForecast = () => {

    const { forecasts } = useSelector(state => state.home);
  
    
    let forecastsList = null;
    if (forecasts) {
    
        const { Headline, DailyForecasts} = forecasts;
        forecastsList = (
            <React.Fragment>
                <h1 className='cityForecast__title'><em>{Headline.Text}</em></h1>
                <div className='cityForecast__forecasts'>
                    {DailyForecasts.map(dayForecast => {
                        return <DayForecast 
                                    key={dayForecast.EpochDate}
                                    dailyForecast={dayForecast}/>
                    })}
                </div>
            </React.Fragment>
        )
    };

    return (
        <div className='cityForecast'>
            {forecastsList}
        </div>
    );
};

export default CityForecast;