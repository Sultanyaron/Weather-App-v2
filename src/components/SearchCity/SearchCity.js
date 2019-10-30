import React from 'react';


import AutoCompleteInput from './AutCompleteInput/AutoCompleteInput';
import SearchResults from './SearchResults/SearchResults';

const SearchCity = (props) => {

    return (
        <div className='searchCity'>
            <div className="searchCity-wrapper">
                <AutoCompleteInput />
                <SearchResults />
            </div>
        </div>
    );
};

export default SearchCity;