import React from 'react';
import ReactDOM from 'react-dom';
import thunkMidlleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import appReducers from './reducers/reducers';
import { loginSeccess, fetchData } from './actions/actions';

import AppContainer from './components/App/AppContainer';

const loggerMidlleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	appReducers,
	composeEnhancers(
		applyMiddleware(
			thunkMidlleware,
			loggerMidlleware
		)
	)
);

if (localStorage.getItem('token') !== null) {
	store.dispatch(loginSeccess(localStorage.getItem('token')));
	store.dispatch(fetchData(store.getState().authorized.token));
}

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
