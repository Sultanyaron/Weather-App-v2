import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Favorite from '../../components/Favorite/Favorite';
import * as actions from '../../store/actions/rootActions';
import Spinner from '../../components/UI/Spinner/Spinner';


const Favorites = props => {

    const { fetchFavoritesLoading } = useSelector(state => state.favorites)
    const { favorites, fetchedFavorites } = useSelector(state => state.favorites);
    const favoritesCityKeys = [];
    for (let i = 0; i < favorites.length; i++) {
        favoritesCityKeys.push(favorites[i].cityKey);
    };
    const dispatch = useDispatch();
    
    const onFetchFavoritesData = useCallback((favoritesCityKeys) => dispatch(actions.fetchFavorites(favoritesCityKeys)),[dispatch]);

    useEffect(() => {
        onFetchFavoritesData(favoritesCityKeys);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onFetchFavoritesData]);
    

    let favoriteList = <Spinner />

    if (!fetchFavoritesLoading) {
        favoriteList= (
            favorites.map(fav => {
                const currentCityData = fetchedFavorites.filter(item => fav.cityKey === item.cityKey)[0]
                return <Favorite
                    key={fav.cityKey}
                    cityData={currentCityData}
                    cityName={fav.cityName} />
            })
        )
        
    }




    return (
        <div className='favorites'>
            <div className='favorites__list'>
                {favoriteList}
            </div>
        </div>
    )
};

export default Favorites;
