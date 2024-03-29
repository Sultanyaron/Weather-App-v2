import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  compose,
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { watchHome, watchFavorites } from './store/sagas/rootSaga';
import homeReducer from './store/reducers/home';
import favoriteReducer from './store/reducers/favorites';
import userSettingsReducer from './store/reducers/userSettings';
import App from './App';
import './assets/sass/main.scss';

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const rootReducer = combineReducers({
  home: homeReducer,
  favorites: favoriteReducer,
  userSettings: userSettingsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchHome);
sagaMiddleware.run(watchFavorites);

const app = (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));