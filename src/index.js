import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import appReducers from './reducers/reducers';

import LoginPage from './components/login/LoginContainer';
import Dashboard from './components/dashboard/Dashboard';

const store = createStore(appReducers);

const App = () => (
	// resetFilter() {
	// 	this.setState({
	// 		filters: {
	// 			city: null,
	// 			distance: null,
	// 		}
	// 	});
	// }

	// updateAuthStatus(value) {
	// 	this.setState({
	// 		authorized: value
	// 	});
	// }

	// setData(data) {
	// 	this.setState({
	// 		data: data
	// 	});
	// }

	// setCityFilter(value) {
	// 	if (value.length === 0) {
	// 		this.setState({
	// 			filters: {
	// 				city: null,
	// 			}
	// 		});
	// 	} else {
	// 		this.setState({
	// 			filters: {
	// 				city: value,
	// 			}
	// 		});
	// 	}
	// }

	// setDistanceFilter(value) {
	// 	if (value.length === '') {
	// 		this.setState({
	// 			filters: {
	// 				distance: null,
	// 			}
	// 		});
	// 	} else {
	// 		this.setState({
	// 			filters: {
	// 				distance: value,
	// 			}
	// 		});
	// 	}
	// }

	<div className="page">
		<Router>
			<>
				<Route exact path="/" render={() =>
					<Redirect to="/dashboard" />
				} />
				<Route
					path="/login"
					component={LoginPage}
				/>
				<Route path="/dashboard" render={() => (
					store.getState().authorized
						? <Dashboard />
						: <Redirect to="/login" />
				)} />
			</>
		</Router>
	</div>
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
