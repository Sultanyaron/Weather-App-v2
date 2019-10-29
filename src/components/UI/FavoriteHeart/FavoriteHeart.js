import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { favoriteCheck } from '../../../shared/favoriteCheck';
import * as actions from '../../../store/actions/rootActions';


const FavoriteHeart = (props) => {
    const { favorites } = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const onRemoveFavorite = (cityKey, favorites) => dispatch(actions.removeFavorite(cityKey, favorites));
    const onAddFavorite = (cityKey, cityName, favorites) => dispatch(actions.addFavorite(cityKey, cityName, favorites));
    const colors = {
        selected: '#e31b23',
        notSelected: '#777'
    };

    const heartStyle = {
        backgroundColor: colors.notSelected,
        height: props.height,
        width: props.width
    };

    if (favoriteCheck(props.cityKey, favorites)) {
        heartStyle.backgroundColor = colors.selected
    };

    const favoriteHandler = (cityKey, cityName) => {
        if (favoriteCheck(cityKey, favorites)) {
            onRemoveFavorite(cityKey, favorites);
        } else {
            onAddFavorite(cityKey, cityName, favorites);
        };
    };

    return (
            <div 
                className="favoriteHeart"
                style={heartStyle}
                onClick={() => favoriteHandler(props.cityKey, props.cityName)}>
            </div>
    );
};  

export default FavoriteHeart