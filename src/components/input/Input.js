import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = props => (
	<input
		className={'input input--' + props.subclass}
		type={props.type}
		placeholder={props.placeholder}
		onChange={props.inputHandler}
	></input>
);

Input.propTypes = {
	subclass: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	inputHandler: PropTypes.func
};

export default Input;