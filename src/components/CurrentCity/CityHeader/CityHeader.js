import React from 'react';
import FavoriteHeart from '../../UI/FavoriteHeart/FavoriteHeart';
// import SunIcon from '../../../assets/images/weather-icons/01-s.png';
import { getIconPath } from '../../../shared/getIconPath';

const CityHeader = (props) => {

    return (
        <header className='cityHeader'>
            <div className='cityHeader__details'>
                <p className='cityHeader__details-title'>{props.cCityName}</p>
                <div className="cityHeader__details-container">
                    <img className='cityHeader__icon' src={getIconPath(props.cWeatherIcon)} alt={'dsd'} />
                    <div className="cityHeader__details-subContainer">
                        <p className='cityHeader__details-temp'>{props.cWeatherTemp}°</p>
                        <div className='cityHeader__details-text'><em>{props.cWeatherText}</em></div>
                    </div>
                </div>

            </div>
            
            <FavoriteHeart 
                cityKey={props.cCityKey}
                cityName={props.cCityName}
                height='7rem'
                width='7rem' />
        </header>
    );
};

export default CityHeader;