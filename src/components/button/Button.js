import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = props => (
	<button
		className={'button button--' + props.type}
		onClick={props.handleClick}
	>{props.text}</button>
);

Button.propTypes = {
	type: PropTypes.string,
	handleClick: PropTypes.func,
	text: PropTypes.string
};

export default Button;