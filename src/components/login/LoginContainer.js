import { connect } from 'react-redux';

import Login from '../Login/Login';
import { login, setUsername, setPassword } from '../../actions/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
	submitLogin: () => {
		const username = ownProps.username;
		const password = ownProps.password;

		return dispatch(login(username, password));
	},
	userNameInputHandler: val => dispatch(setUsername(val)),
	passwordInputHandler: val => dispatch(setPassword(val)),
});

export default connect(
	null,
	mapDispatchToProps
)(Login);
