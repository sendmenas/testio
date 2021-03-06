import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({value, subclass, type, placeholder, inputHandler}) => {
	const onInputChange = evt => inputHandler(evt.target.value);

	return (
		<input
			className={'input input--' + subclass}
			type={type}
			placeholder={placeholder}
			onChange={onInputChange}
			value={value}
		/>
	);
};

Input.propTypes = {
	value: PropTypes.string,
	stateValue: PropTypes.string,
	subclass: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	inputHandler: PropTypes.func
};

export default Input;
