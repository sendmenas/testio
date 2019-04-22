import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import Button from '../Button/Button';
import UsernameInput from './containers/UsernameInputContainer';
import PasswordInput from './containers/PasswordInputContainer';

const Login = ({ submitLogin }) => (
	<section className="login-page">
		<i className="login-page__logo"></i>
		<section className="login-page__form">
			<UsernameInput />
			<PasswordInput />
			<Button
				subclass="login"
				text="Log in"
				onClick={submitLogin}
			/>
		</section>
	</section>
);

Login.propTypes = {
	submitLogin: PropTypes.func
};

export default Login;
