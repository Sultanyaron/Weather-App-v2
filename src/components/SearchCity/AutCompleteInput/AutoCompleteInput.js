import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { validLetter } from '../../../shared/validEnglishLetters';
import * as actions from '../../../store/actions/rootActions';
    
const AutoCompleteInput = (props) => {
    const [ inputVal, setInputVal ] = useState('');
    const dispatch = useDispatch();
    const onSearchCityFetch = useCallback((cityKey) => dispatch(actions.fetchSearch(cityKey)), [dispatch]);
    const onClearSearchResults = useCallback(() => dispatch(actions.clearSearchResults()), [dispatch])
    
    useEffect(() => {
        if ( inputVal !== ' ' && inputVal.length !== 0 ) {
            const timer = setTimeout(() => {
                onSearchCityFetch(inputVal);
            }, 300);
            return () => {
                clearTimeout(timer);
            };
        };
    },[inputVal, onSearchCityFetch])

    const inputChangedHandler = (event) => {
        setInputVal(event.target.value);
        if ( event.target.value.length === 0 ) {
            onClearSearchResults();
        };
    };

    const validKeyHandler = ( event ) => {
        if (!validLetter( event )){
            event.preventDefault()
        };
    };

    return (
        <input
            className='searchCity__input'
            type='text'
            onChange={inputChangedHandler}
            onKeyPress={validKeyHandler} />
    ) ;
};

export default AutoCompleteInput;