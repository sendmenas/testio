import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import Input from '../input/Input';
import Button from '../button/Button';

const Login = ({ userNameInputHandler, passwordInputHandler, submitLogin }) => (
	<section className="login-page">
		<i className="login-page__logo"></i>
		<section className="login-page__form">
			<Input
				type="text"
				placeholder="Username"
				subclass="login"
				inputHandler={userNameInputHandler}
			/>
			<Input
				type="password"
				placeholder="Password"
				subclass="login"
				inputHandler={passwordInputHandler}
			/>
			<Button
				subclass="login"
				text="Log in"
				onClick={submitLogin}
			/>
		</section>
	</section>
);

Login.propTypes = {
	userNameInputHandler: PropTypes.func,
	passwordInputHandler: PropTypes.func,
	submitLogin: PropTypes.func,
};

export default Login;
