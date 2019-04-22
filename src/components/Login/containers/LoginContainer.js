import { connect } from 'react-redux';

import Login from '../Login';
import { loginAction } from '../../../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
	submitLogin() {
		const username = ownProps.username;
		const password = ownProps.password;

		return dispatch(loginAction(username, password));
	}
});

export default connect(
	null,
	mapDispatchToProps
)(Login);
