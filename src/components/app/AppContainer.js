import { connect } from 'react-redux';

import { getUserAuthorizationState, getUsername, getPassword } from '../../selectors';
import App from './App';

const mapStateToProps = state => ({
	username: getUsername(state),
	password: getPassword(state),
	isAuthorized: getUserAuthorizationState(state)
});

export default connect(mapStateToProps)(App);
