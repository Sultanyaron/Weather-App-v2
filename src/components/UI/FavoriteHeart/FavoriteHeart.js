import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/rootActions';

const FavoriteHeart = ({
  height,
  width,
  cityKey,
  cityName
}) => {
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const onRemoveFavorite = (selectedCityKey, curFavorites) => dispatch(
    actions.removeFavorite(selectedCityKey, curFavorites)
  );
  const onAddFavorite = (selectedCityKey, selectedCityName, curFavorites) => dispatch(
    actions.addFavorite(selectedCityKey, selectedCityName, curFavorites)
  );

  const colors = {
    selected: '#e31b23',
    notSelected: '#777'
  };

  const heartStyle = {
    backgroundColor: colors.notSelected,
    height,
    width
  };

  const favoriteCheck = (selectedKey, checkedFavorites) => {
    return checkedFavorites.some((element) => element.cityKey === selectedKey);
  };

  if (favoriteCheck(cityKey, favorites)) {
    heartStyle.backgroundColor = colors.selected;
  }

  const favoriteHandler = (selectedCityKey, selectedCityName) => {
    if (favoriteCheck(selectedCityKey, favorites)) {
      onRemoveFavorite(selectedCityKey, favorites);
    } else {
      onAddFavorite(selectedCityKey, selectedCityName, favorites);
    }
  };

  return (
    <div
      className="favoriteHeart"
      style={heartStyle}
      onClick={() => favoriteHandler(cityKey, cityName)}
    />
  );
};

export default FavoriteHeart;