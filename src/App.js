import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home/Home';
import Layout from './hoc/Layout';

const Favorites = React.lazy(() => {
    return import('./containers/Favorites/Favorites');
});


const App = props => {
    let routes = (
        <Switch>
            <Route path="/favorites" component={Favorites}  />
            <Route path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    ); 

    return (
        <div className="App">
            <Layout>
                <Suspense fallback={<p>Loading...</p>}> <main>{ routes }</main>  </Suspense>
            </Layout>
        </div>
    );
};

export default App;