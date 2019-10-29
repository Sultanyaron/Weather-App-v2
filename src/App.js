import React, { Suspense, useEffect, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actions from './store/actions/rootActions';

import Home from './containers/Home/Home';
import Layout from './hoc/Layout';

const Favorites = React.lazy(() => {
    return import('./containers/Favorites/Favorites');
});


const App = props => {
    const dispatch = useDispatch();
    const onInitFavorites = useCallback(() => dispatch(actions.initFavorites()), [dispatch]);

    useEffect(() => {
        onInitFavorites();
    }, [onInitFavorites] )

    let routes = (
        <Switch>
            <Route path={"/favorites"} component={Favorites}  />
            <Route path={"/"} component={Home} />
            <Redirect to={"/"} />
        </Switch>
    ); 

    return (
        <div className="App">
            <Layout>
                <Suspense fallback={<p>Loading...</p>}> <main className='mainContainer'>{ routes }</main>  </Suspense>
            </Layout>
        </div>
    );
};

export default App;