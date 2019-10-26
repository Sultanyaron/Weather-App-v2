import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home/Home';

const App = props => {


    let routes = (
        <Switch>
            <Route path='/favorites' />
            <Route path='/' redner={() =>  <Home {...props} />} />
            <Redirect to='/' />
        </Switch>
    ); 

    return (
        <div className="App">
            123
        </div>
    );
};

export default App;