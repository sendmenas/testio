import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';

import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedin: false,
		};

		this.updateAuthStatus = this.updateAuthStatus.bind(this);
	}

	updateAuthStatus(value) {
		this.setState({
			loggedin: value
		});
	}

	render() {
		return (
			<div className="page">
				<Router>
					<>
						<Route exact path="/" render={() =>
							<Redirect to="/dashboard" />
						} />
						<Route path="/login" render={(props) => <Login {...props} updateAuthStatus={this.updateAuthStatus} />}/>
						<Route path="/dashboard" render={() => (
							this.state.loggedin
								? <Dashboard />
								: <Redirect to="/login" />
						)} />
					</>
				</Router>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
