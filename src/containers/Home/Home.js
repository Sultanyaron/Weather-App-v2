import React from 'react'; 
import SearchCity from '../../components/SearchCity/SearchCity';
import CurrentCity from '../../components/CurrentCity/CurrentCity';

const Home = props => {

    return (
    <div className='home'>
        <SearchCity />
        <CurrentCity />
    </div>
    );
};


export default Home;