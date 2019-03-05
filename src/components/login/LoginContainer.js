import Api from '../../api/Api';
import { connect } from 'react-redux';

import Login from '../login/Login';

const api = new Api('http://playground.tesonet.lt');
let username;
let password;
let token;

const requestData = (dispatch) => {
	api
		.requestData(token)
		.then(response => {
			if (response.message) {
				alert(response.message);
				dispatch({
					type: 'LOGOUT',
				});
			} else {
				dispatch({
					type: 'REQUEST_DATA',
					data: response
				});
			}
		});
};


// const checkLocalStorage = () => {
// 	let storageToken = localStorage.getItem('token');
// 	if (storageToken !== null) {
// 		token = storageToken;
// 		this.requestData();
// 		this.props.updateAuthStatus(true);
// 	}
// };

const submitLogin = (dispatch) => {
	api
		.authenticate(username, password)
		.then(response => {
			if (response.token) {
				token = response.token;
				localStorage.setItem('token', response.token);

				requestData(dispatch);
				dispatch({
					type: 'LOGIN',
				});
				// this.props.history.push('/');
			} else if (response.message) {
				alert(response.message);
			}
		});
};

const mapDispatchToProps = (dispatch) => ({
	submitLogin: () => submitLogin(dispatch),
	userNameInputHandler: (val) => { username = val; },
	passwordInputHandler: (val) => { password = val; },
});

const LoginPage = connect(null, mapDispatchToProps)(Login);

export default LoginPage;