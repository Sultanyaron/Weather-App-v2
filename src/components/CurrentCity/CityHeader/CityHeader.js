import React from 'react';
import FavoriteHeart from '../../UI/FavoriteHeart/FavoriteHeart';
import SunIcon from '../../../assets/images/weather-icons/01-s.png';

const CityHeader = (props) => {

    return (
        <header className='cityHeader'>
            <div className='cityHeader__current'>
                <img className='cityHeader__icon' src={SunIcon} alt={'dsd'} />
                <div className='cityHeader__details'>
                    <p className='cityHeader__details--title'>{props.cCityName}</p>
                    <p className='cityHeader__details--temp'>{props.cWeatherTemp}°</p>
                </div>
            </div>
            <div className='cityHeader__text title-large'><em>{props.cWeatherText}</em></div>
            <FavoriteHeart />
        </header>
    );
};

export default CityHeader;