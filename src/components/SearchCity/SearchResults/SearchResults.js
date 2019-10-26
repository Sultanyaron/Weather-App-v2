import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import autoCompleteMock from '../../../mock/citys.json';

const SearchResults = () => {

    // const currentCityKey = useSelector( state => state)
    
    const selectCity = (cityName, cityKey) => {
        // if ( cityName !== )
    };
    
    const results = [];
    for ( let i = 0; i < autoCompleteMock.length; i++) {
        const { LocalizedName, Key } = autoCompleteMock[i];
        let li = (
            <li 
                onclick={() => selectCity(LocalizedName, Key)}
                >
                {LocalizedName}
            </li>
        )
    };

    console.log(results);
    
    return (
        <ul>

        </ul>
    );
    
};

export default SearchResults;