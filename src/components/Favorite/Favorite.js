import React from 'react';
import { useSelector } from 'react-redux';
import { getIconPath } from '../../shared/getIconPath';



const Favorite = (props) => {
    
    const { WeatherIcon, Temperature, WeatherText } = props.cityData.data[0];
    const { metric } = useSelector(state => state.userSettings);

    console.log(props.cityData);
    const icon = getIconPath(WeatherIcon);

    let temp = Math.round(Temperature.Metric.Value);

    if (!metric) {
        temp = Temperature.Imperial.Value
    };
    


    return (
        <div className='favorites__item'>
            <p className='favorites__title'>{props.cityName}</p>
            <div className='favorites__details'>
                <img className='favorites__icon' src={icon} alt={WeatherText} />
                <div className='favorites__container'>
                    <p className='favorites__temp'>{temp}°</p>
                    <p className='favotires__text'>{WeatherText}</p>
                </div>
            </div>
        </div>
    );
};

export default Favorite;