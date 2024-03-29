import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getIconPath } from '../../utils/getIconPath';
import FavoriteHeart from '../UI/FavoriteHeart/FavoriteHeart';
import * as actions from '../../store/actions/rootActions';

const Favorite = React.memo(({
  cityData,
  cityName,
  cityKey,
  history,
}) => {
  const { WeatherIcon, Temperature, WeatherText } = cityData.data[0];
  const { metric } = useSelector((state) => state.userSettings);
  const icon = getIconPath(WeatherIcon);
  const dispatch = useDispatch();
  const onSelectCity = () => dispatch(actions.updateSelectedCity(cityName, cityKey));
  let temp = Math.round(Temperature.Metric.Value);

  if (!metric) {
    temp = Temperature.Imperial.Value;
  }
  
  const redirectHandler = () => {
    onSelectCity();
    history.push('/');
  };

  return (
    <div className="favorites__item">
      <FavoriteHeart
        cityKey={cityKey}
        cityName={cityName}
        height="4rem"
        width="4rem"
      />
      <p className="favorites__title" onClick={redirectHandler}>{cityName}</p>
      <div className="favorites__details">
        <img className="favorites__icon" src={icon} alt={WeatherText} />
        <div className="favorites__container">
          <p className="favorites__temp">{temp}°</p>
          <p className="favorites__text">{WeatherText}</p>
        </div>
      </div>
    </div>
  );
});

export default withRouter(Favorite);