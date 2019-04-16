import React from 'react';
import ReactDOM from 'react-dom';
import thunkMidlleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import * as serviceWorker from './serviceWorker';
import './index.scss';

import appReducers from './reducers/reducers';
import { checkLocalStorage } from './actions';
import Root from './components/Root';

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

store.dispatch(checkLocalStorage());

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);
serviceWorker.unregister();
