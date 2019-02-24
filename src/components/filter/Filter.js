import React from 'react';
import PropTypes from 'prop-types';

import Input from '../input/Input';
import Button from '../button/Button';

import './Filter.scss';

const Filter = ({ onCityFilterInput, onDistanceFilterInput }) => (
	<section className="dashboard__filter">
		<div className="dashboard__filter__input-container">
			<Input subclass={'filter-city'} type={'text'} placeholder={'City'} inputHandler={onCityFilterInput} />
			<Input subclass={'filter-distance'} type={'number'} placeholder={'Distance'} inputHandler={onDistanceFilterInput} />
		</div>
		<Button text={'Reset'} />
	</section>
);

Filter.propTypes = {
	onCityFilterInput: PropTypes.func,
	onDistanceFilterInput: PropTypes.func,
};

export default Filter;