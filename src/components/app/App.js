import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';

import LoginPage from '../Login/LoginContainer';
import Dashboard from '../Dashboard/Dashboard';

const App = ({ isAuthorized }) => (
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
							: <LoginPage />
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
	isAuthorized: PropTypes.bool
};

export default App;