import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({subclass, type, placeholder, inputHandler}) => {
	const [value, setValue] = useState('');

	const handleValueChange = evt => {
		setValue(evt.target.value);
		inputHandler(evt.target.value);
	};

	return (
		<input
			className={'input input--' + subclass}
			type={type}
			placeholder={placeholder}
			onChange={evt => handleValueChange(evt)}
			value={value}
		></input>
	);
};

Input.propTypes = {
	subclass: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	inputHandler: PropTypes.func
};

export default Input;