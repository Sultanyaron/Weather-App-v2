import React from 'react';
import FavoriteHeart from '../../UI/FavoriteHeart/FavoriteHeart';
import { getIconPath } from '../../../utils/getIconPath';

const CityHeader = ({
  cCityName,
  cWeatherIcon,
  cWeatherTemp,
  cWeatherText,
  cCityKey
}) => {
  return (
    <header className="cityHeader">
      <div className="cityHeader__details">
        <p className="cityHeader__details-title">{cCityName}</p>
        <div className="cityHeader__details-container">
          <img
            className="cityHeader__icon"
            src={getIconPath(cWeatherIcon)}
            alt={cWeatherText}
          />
          <div className="cityHeader__details-subContainer">
            <p className="cityHeader__details-temp">{cWeatherTemp}°</p>
            <div className="cityHeader__details-text">
              <em>{cWeatherText}</em>
            </div>
          </div>
        </div>
      </div>
      <FavoriteHeart
        cityKey={cCityKey}
        cityName={cCityName}
        height="7rem"
        width="7rem"
      />
    </header>
  );
};

export default CityHeader;
