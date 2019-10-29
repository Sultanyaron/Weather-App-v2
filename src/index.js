import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import { watchHome } from './store/sagas/rootSaga';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import homeReducer from './store/reducers/home';
import favoriteReducer from './store/reducers/favorites';
import userSettingsReducer from './store/reducers/userSettings';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    home: homeReducer,
    favorites : favoriteReducer,
    userSettings: userSettingsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchHome);

const app = (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
