import React from 'react'; 
import SearchCity from '../../components/SearchCity/SearchCity';
import CurrentCity from '../../components/CurrentCity/CurrentCity';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../utils/axios-weather';

const Home = props => {    
    return (
    <div className='home'>
        <SearchCity />
        <CurrentCity />
    </div>
    );
};

export default withErrorHandler(Home, axios);