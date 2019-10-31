import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getIconPath } from '../../utils/getIconPath';
import FavoriteHeart from '../UI/FavoriteHeart/FavoriteHeart';
import * as actions from '../../store/actions/rootActions';

const Favorite = React.memo((props) => {
    const { WeatherIcon, Temperature, WeatherText } = props.cityData.data[0];
    const { metric } = useSelector(state => state.userSettings);
    const icon = getIconPath(WeatherIcon);
    const dispatch = useDispatch();
    const onSelectCity = () => dispatch(actions.updateSelectedCity(props.cityName, props.cityKey))
    let temp = Math.round(Temperature.Metric.Value);

    if (!metric) {
        temp = Temperature.Imperial.Value
    };
    
    const redirectHandler = () => {
        onSelectCity();
        props.history.push('/');
    } ;

    return (
        <div className='favorites__item'>
            <FavoriteHeart 
                cityKey={props.cityKey}
                cityName={props.cityName}
                height='4rem'
                width='4rem' />
            <p className='favorites__title' onClick={redirectHandler}>{props.cityName}</p>
            <div className='favorites__details'>
                <img className='favorites__icon' src={icon} alt={WeatherText} />
                <div className='favorites__container'>
                    <p className='favorites__temp'>{temp}°</p>
                    <p className='favorites__text'>{WeatherText}</p>
                </div>
            </div>
        </div>
    );
});

export default withRouter(Favorite);