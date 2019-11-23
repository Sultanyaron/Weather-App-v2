import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/rootActions';

const SearchResults = () => {
  const { selectedCityKey, searchResults } = useSelector((state) => state.home);
  // const { searchResults } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const onSelectCity = (cityName, cityKey) => dispatch(
    actions.updateSelectedCity(cityName, cityKey)
  );
    
  const onClearSearchResults = () => dispatch(
    actions.clearSearchResults()
  );

  const selectCity = (cityName, cityKey) => {
    if (cityKey !== selectedCityKey) {
      onSelectCity(cityName, cityKey);
      onClearSearchResults();
    }
  };

  const results = searchResults.map((city) => {
    const { LocalizedName, Key } = city;
    return (
      <li
        className="searchCity__item"
        onClick={() => selectCity(LocalizedName, Key)}
        key={Key}
      >
        {LocalizedName}
      </li>
    );
  });

  return <ul className="searchCity__results">{results}</ul>;
};

export default SearchResults;