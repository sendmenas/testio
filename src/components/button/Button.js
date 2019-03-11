import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, subclass, onClick }) => (
	<button
		className={'button button--' + subclass}
		onClick={onClick}
	>{text}</button>
);

Button.propTypes = {
	subclass: PropTypes.string,
	handleClick: PropTypes.func,
	onClick: PropTypes.func,
	text: PropTypes.string
};

export default Button;