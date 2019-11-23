import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Favorite from '../../components/Favorite/Favorite';
import * as actions from '../../store/actions/rootActions';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../utils/axios-weather';

const Favorites = () => {
  const { fetchFavoritesLoading, favorites, fetchedFavorites } = useSelector(
    (state) => state.favorites
  );
  const favoritesCityKeys = [];
  const dispatch = useDispatch();
  const onFetchFavoritesData = useCallback(
    (favoritesKeys) => dispatch(actions.fetchFavorites(favoritesKeys)), [dispatch]
  );
  const onClearFetchedFavorites = useCallback(
    () => dispatch(actions.clearFetchedFavorites()), [dispatch]
  );

  for (let i = 0; i < favorites.length; i++) {
    favoritesCityKeys.push(favorites[i].cityKey);
  }

  useEffect(() => {
    if (favoritesCityKeys.length !== 0) {
      onFetchFavoritesData(favoritesCityKeys);
    }
  }, [onFetchFavoritesData]);

  useEffect(() => {
    return () => {
      onClearFetchedFavorites();
    };
  }, [onClearFetchedFavorites]);
  
  let favoriteList = <Spinner />;
  if (!fetchFavoritesLoading) {
    favoriteList = (
      favorites.map((fav) => {
        const currentCityData = fetchedFavorites.filter((item) => fav.cityKey === item.cityKey)[0];
        return (
          <Favorite
            key={fav.cityKey}
            cityData={currentCityData}
            cityName={fav.cityName}
            cityKey={fav.cityKey}
          />
        );
      })
    );
  }
  
  if (favorites.length === 0) {
    favoriteList = <h1 className="favorites__empty">Your favorites is empty<br />Add them at Homepage</h1>;
  }

  return (
    <div className="favorites">
      <div className="favorites__list">
        {favoriteList}
      </div>
    </div>
  );
};

export default withErrorHandler(Favorites, axios);
