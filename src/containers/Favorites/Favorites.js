import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Favorite from '../../components/Favorite/Favorite';
import * as actions from '../../store/actions/rootActions';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../shared/axios-weather';


const Favorites = props => {

    if ( !props.error ) {

    }
    const { fetchFavoritesLoading } = useSelector(state => state.favorites)
    const { favorites, fetchedFavorites } = useSelector(state => state.favorites);
    const favoritesCityKeys = [];
    for (let i = 0; i < favorites.length; i++) {
        favoritesCityKeys.push(favorites[i].cityKey);
    };
    const dispatch = useDispatch();
    const onFetchFavoritesData = useCallback((favoritesCityKeys) => dispatch(actions.fetchFavorites(favoritesCityKeys)),[dispatch]);
    const onClearFetchedFavorites = useCallback(() => dispatch(actions.clearFetchedFavorites()),[dispatch]);

    useEffect(() => {
        onFetchFavoritesData(favoritesCityKeys);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onFetchFavoritesData]);

    useEffect(() => {
        return () => {

            onClearFetchedFavorites();
        };
    }, [onClearFetchedFavorites]);
    

    let favoriteList = <Spinner />



    if (!fetchFavoritesLoading && !props.error) {
        favoriteList= (
            favorites.map(fav => {
                const currentCityData = fetchedFavorites.filter(item => fav.cityKey === item.cityKey)[0]
                return <Favorite
                    key={fav.cityKey}
                    cityData={currentCityData}
                    cityName={fav.cityName}
                    cityKey={fav.cityKey} />
            })
        );
        
    };

    if (favorites.length === 0) {
        favoriteList = <h1 className='favorites__empty'>Your favorites is empty<br/>Add them at Homepage</h1>
    };




    return (
        <div className='favorites'>
            <div className='favorites__list'>
                {favoriteList}
            </div>
        </div>
    )
};

export default withErrorHandler(Favorites, axios);
