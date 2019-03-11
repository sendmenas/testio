import React from 'react';
import ReactDOM from 'react-dom';
import thunkMidlleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import appReducers from './reducers/reducers';
import { loginSeccess, fetchData } from './actions/actions';

import AppContainer from './components/app/AppContainer';

const loggerMidlleware = createLogger();

const store = createStore(
	appReducers,
	applyMiddleware(thunkMidlleware, loggerMidlleware)
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
