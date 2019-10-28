import React from 'react';
import { useSelector } from 'react-redux';
import DayForecast from './DayForecast/DayForecast';


const CityForecast = () => {

    const { forecasts } = useSelector(state => state.home);
    console.log( forecasts );
    
    let forecastsList = null;
    if (forecasts) {
        debugger;
        const { Headline, DailyForecasts} = forecasts;
        forecastsList = (
            <React.Fragment>
                <h1 className="cityForecast__title"><em>{Headline.Text}</em></h1>
                {DailyForecasts.map(dayForecast => {
                    return <DayForecast 
                                key={dayForecast.EpochDate}
                                dailyForecast={dayForecast}/>
                })}
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