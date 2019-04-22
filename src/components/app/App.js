import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';

import LoginPage from '../Login/containers/LoginContainer';
import Dashboard from '../Dashboard/Dashboard';

const App = ({ username, password, isAuthorized }) => (
	<div className="page">
		<Router>
			<>
				<Route exact path="/" render={() =>
					<Redirect to="/dashboard" />
				} />
				<Route
					path="/login"
					render={() => (
						isAuthorized
							? <Dashboard />
							: <LoginPage username={username} password={password} />
					)}
				/>
				<Route path="/dashboard" render={() => (
					isAuthorized
						? <Dashboard />
						: <Redirect to="/login" />
				)} />
			</>
		</Router>
	</div>
);

App.propTypes = {
	username: PropTypes.string,
	password: PropTypes.string,
	isAuthorized: PropTypes.bool
};

export default App;
