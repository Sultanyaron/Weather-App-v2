import React from 'react';
import sunSpinner from '../../../assets/images/sunLoading.png';

const Spinner = (props) => {
    return <img className='spinner' src={sunSpinner} alt='Loading...'></img>
};

export default Spinner;