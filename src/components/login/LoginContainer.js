import { connect } from 'react-redux';

import Login from '../login/Login';
import { login } from '../../actions/actions';

let username;
let password;

const mapDispatchToProps = dispatch => ({
	submitLogin: () => dispatch(login(username, password)),
	userNameInputHandler: (val) => { username = val; },
	passwordInputHandler: (val) => { password = val; },
});

const LoginPage = connect(null, mapDispatchToProps)(Login);

export default LoginPage;