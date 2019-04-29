import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({value, subclass, type, placeholder, inputHandler}) => (
	<input
		className={'input input--' + subclass}
		type={type}
		placeholder={placeholder}
		onChange={evt => inputHandler(evt.target.value)}
		value={value}
	/>
);

Input.propTypes = {
	value: PropTypes.string,
	stateValue: PropTypes.string,
	subclass: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	inputHandler: PropTypes.func
};

export default Input;
