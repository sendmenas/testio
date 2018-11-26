import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        return (
            <button className={"button button--" + this.props.type} onClick={this.props.handleClick}>Log In</button>
        )
    }
}

export default Button;