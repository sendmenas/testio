import React, { Component } from 'react';
import './Login.scss';
import Input from '../input/Input'
import Button from '../button/Button';

class Login extends Component {
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
          <Button type="login" />
        </section>
      </section>
    );
  }

  userNameInputHandler = (evt) => {
    console.log(evt.target.value);
  }

  passwordInputHandler = (evt) => {
    console.log(evt.target.value);
  }
}

export default Login;
