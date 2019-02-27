import React from 'react';
import PropTypes from 'prop-types';

import Input from '../input/Input';
import Button from '../button/Button';

import './Filter.scss';

const Filter = ({ onCityFilterInput, onDistanceFilterInput, resetFilter }) => {
	let cityInput = React.createRef();
	let distanceInput = React.createRef();

	function resetInputFields() {
		cityInput.current.clearInput();
		distanceInput.current.clearInput();
	};


	return (
		<section className="dashboard__filter">
			<div className="dashboard__filter__input-container">
				<Input
					subclass={'filter-city'}
					type={'text'}
					placeholder={'City'}
					inputHandler={onCityFilterInput}
					ref={cityInput}
				/>
				<Input
					subclass={'filter-distance'}
					type={'number'}
					placeholder={'Distance'}
					inputHandler={onDistanceFilterInput}
					ref={distanceInput}
				/>
			</div>
			<Button
				text={'Reset'}
				onClick={() => {
					resetInputFields();
					resetFilter();
				}}
			/>
		</section>
	);
};

Filter.propTypes = {
	onCityFilterInput: PropTypes.func,
	onDistanceFilterInput: PropTypes.func,
};

export default Filter;