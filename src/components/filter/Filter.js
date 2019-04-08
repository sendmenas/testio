import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Button from '../Button/Button';

import './Filter.scss';

const Filter = ({ city, distance, onCityFilterInput, onDistanceFilterInput, resetFilter }) => (
	<section className="dashboard__filter">
		<div className="dashboard__filter__input-container">
			<Input
				subclass={'filter-city'}
				type={'text'}
				placeholder={'City'}
				inputHandler={onCityFilterInput}
				value={city}
			/>
			<Input
				subclass={'filter-distance'}
				type={'number'}
				placeholder={'Distance'}
				inputHandler={onDistanceFilterInput}
				value={distance}
			/>
		</div>
		<Button
			text={'Reset'}
			onClick={() => resetFilter()}
		/>
	</section>
);

Filter.propTypes = {
	city: PropTypes.string,
	distance: PropTypes.number,
	resetFilter: PropTypes.func,
	onCityFilterInput: PropTypes.func,
	onDistanceFilterInput: PropTypes.func,
};

export default Filter;