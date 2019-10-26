import React, { useState } from 'react';
import {validLetter} from '../../../shared/validEnglishLetters';
    
const AutoCompleteInput = (props) => {
    const [ inputVal, setInputVal ] = useState('');
    console.log(inputVal);
    


    const inputChangedHandler = (event) => {
        setInputVal(event.target.value)
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