import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, type, handleClick }) => (
	<button
		className={'button button--' + type}
		onClick={() => handleClick()}
	>{text}</button>
);

Button.propTypes = {
	type: PropTypes.string,
	handleClick: PropTypes.func,
	text: PropTypes.string
};

export default Button;