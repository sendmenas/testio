import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
    render() {
        return (
            <input
                className={"input input--" + this.props.subclass}
                type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.props.inputHandler}
            ></input>
        )
    }
}

export default Input;