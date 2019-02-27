import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
class Input extends React.Component {
	constructor(props) {
		super(props);

		this.input = React.createRef();
		this.clearInput = this.clearInput.bind(this);
	}

	clearInput() {
		this.input.current.value = '';
	}

	render() {
		return (
			<input
				className={'input input--' + this.props.subclass}
				type={this.props.type}
				placeholder={this.props.placeholder}
				onChange={evt => this.props.inputHandler(evt.target.value)}
				ref={this.input}
			></input>
		)
	}
};

Input.propTypes = {
	subclass: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	inputHandler: PropTypes.func
};

export default Input;