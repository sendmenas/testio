import React from 'react';
import PropTypes from 'prop-types';

import CountryInput from './containers/CountryInputContainer';
import DistanceFilter from './containers/DistanceInputContainer';
import Button from '../Button/Button';

import './Filter.scss';

const Filter = ({ resetFilter }) => (
	<section className="dashboard__filter">
		<div className="dashboard__filter__input-container">
			<CountryInput />
			<DistanceFilter />
		</div>
		<Button
			text={'Reset'}
			onClick={resetFilter}
		/>
	</section>
);

Filter.propTypes = {
	city: PropTypes.string,
	distance: PropTypes.string,
	resetFilter: PropTypes.func,
	onCityFilterInput: PropTypes.func,
	onDistanceFilterInput: PropTypes.func,
};

export default Filter;
