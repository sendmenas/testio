import React, { Component } from 'react';
import './Login.scss';
import Api from '../../api/Api';
import Input from '../input/Input'
import Button from '../button/Button';

class Login extends Component {
  constructor() {
    super();
    this.api = new Api('http://playground.tesonet.lt');
    this.token = null;
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
          <Button type="login" handleClick={this.submitLogin} />
        </section>
      </section>
    );
  }

  submitLogin = () => {
    this.api
      .authenticate('user', 'pass')
      .then(response => {
        console.log(response);
        this.token = response.token;
        this.requestData();
      });
  }

  requestData = () => {
    this.api
      .requestData(this.token)
      .then(response => {
        console.log(response);
      });
  }

  userNameInputHandler = evt => {
    console.log(evt.target.value);
  }

  passwordInputHandler = evt => {
    console.log(evt.target.value);
  }
}

export default Login;
