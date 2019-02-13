import React, { Component } from 'react';
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
	}

	submitLogin() {
		this.api
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
				console.log(response);
			});
	}

	userNameInputHandler(evt) {
		this.setState({
			username: evt.target.value
		});
	}

	passwordInputHandler(evt) {
		this.setState({
			password: evt.target.value
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
						inputHandler={(evt) => this.userNameInputHandler(evt)}
					/>
					<Input
						type="password"
						placeholder="Password"
						subclass="login"
						inputHandler={(evt) => this.passwordInputHandler(evt)}
					/>
					<Button
						type="login"
						text="Log in"
						handleClick={() => this.submitLogin()}
					/>
				</section>
			</section>
		);
	}
}

export default Login;
