import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import Api from '../../api/Api';
import Input from '../input/Input';
import Button from '../button/Button';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null,
			token: null,
		};

		this.api = new Api('http://playground.tesonet.lt');
		this.requestData = this.requestData.bind(this);
		this.userNameInputHandler = this.userNameInputHandler.bind(this);
		this.passwordInputHandler = this.passwordInputHandler.bind(this);
	}

	submitLogin(api) {
		api
			.authenticate(this.state.username, this.state.password)
			.then(response => {
				if (response.token) {
					this.setState({
						token: response.token,
					});
					localStorage.setItem('token', response.token);

					this.requestData();
					this.props.updateAuthStatus(true);
					this.props.history.push('/');
				} else if (response.message) {
					alert(response.message);
				}
			});
	}

	requestData() {
		this.api
			.requestData(this.state.token)
			.then(response => {
				this.props.setData(response);
			});
	}

	userNameInputHandler(value) {
		this.setState({
			username: value
		});
	}

	passwordInputHandler(value) {
		this.setState({
			password: value
		});
	}

	render() {
		return (
			<section className="login-page">
				<i className="login-page__logo"></i>
				<section className="login-page__form">
					<Input
						type="text"
						placeholder="Username"
						subclass="login"
						inputHandler={this.userNameInputHandler}
					/>
					<Input
						type="password"
						placeholder="Password"
						subclass="login"
						inputHandler={this.passwordInputHandler}
					/>
					<Button
						type="login"
						text="Log in"
						handleClick={() => this.submitLogin(this.api)}
					/>
				</section>
			</section>
		);
	}
}

Login.propTypes = {
	updateAuthStatus: PropTypes.func,
	setData: PropTypes.func,
};

export default Login;
