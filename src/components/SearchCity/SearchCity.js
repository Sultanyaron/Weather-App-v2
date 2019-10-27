import React from 'react';


import AutoCompleteInput from './AutCompleteInput/AutoCompleteInput';
import SearchResults from './SearchResults/SearchResults';

const SearchCity = (props) => {

    return (
        <div className='searchCity-wrapper'>
            <div className="searchCity">
                <AutoCompleteInput />
                <SearchResults />
            </div>
        </div>
    );
};

export default SearchCity;