import React from 'react';


import AutoCompleteInput from './AutCompleteInput/AutoCompleteInput';
import SearchResults from './SearchResults/SearchResults';

const SearchCity = (props) => {

    return (
        <div className="searchCity">
            <AutoCompleteInput />
            <SearchResults />
        </div>
    );
};

export default SearchCity;