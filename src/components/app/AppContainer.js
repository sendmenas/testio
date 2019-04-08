import { connect } from 'react-redux';

import { getAuthorizationState, getUsername, getPassword } from '../../selectors';
import App from './App';

const mapStateToProps = state => ({
	username: getUsername(state),
	password: getPassword(state),
	isAuthorized: getAuthorizationState(state)
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;