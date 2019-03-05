import React, { Component } from 'react';
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

import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authorized: false,
			data: [],
			filters: {
				city: null,
				distance: null,
			}
		};

		this.updateAuthStatus = this.updateAuthStatus.bind(this);
		this.setData = this.setData.bind(this);
		this.setCityFilter = this.setCityFilter.bind(this);
		this.setDistanceFilter = this.setDistanceFilter.bind(this);
		this.resetFilter = this.resetFilter.bind(this);
	}

	resetFilter() {
		this.setState({
			filters: {
				city: null,
				distance: null,
			}
		});
	}

	updateAuthStatus(value) {
		this.setState({
			authorized: value
		});
	}

	setData(data) {
		this.setState({
			data: data
		});
	}

	setCityFilter(value) {
		if (value.length === 0) {
			this.setState({
				filters: {
					city: null,
				}
			});
		} else {
			this.setState({
				filters: {
					city: value,
				}
			});
		}
	}

	setDistanceFilter(value) {
		if (value.length === '') {
			this.setState({
				filters: {
					distance: null,
				}
			});
		} else {
			this.setState({
				filters: {
					distance: value,
				}
			});
		}
	}

	render() {
		let data = this.state.data;
		let filters = this.state.filters;
		return (
			<div className="page">
				<Router>
					<>
						<Route exact path="/" render={() =>
							<Redirect to="/dashboard" />
						} />
						<Route
							path="/login"
							render={(props) => <Login
								{...props}
								updateAuthStatus={this.updateAuthStatus}
								setData={this.setData}
							/>}
						/>
						<Route path="/dashboard" render={() => (
							this.state.authorized
								? <Dashboard 
									data={data}
									onCityFilterInput={this.setCityFilter}
									onDistanceFilterInput={this.setDistanceFilter}
									resetFilter={this.resetFilter}
									filters={filters}
								/>
								: <Redirect to="/login" />
						)} />
					</>
				</Router>
			</div>
		);
	}
}

ReactDOM.render(
	<Provider store={createStore(appReducers)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
