import React from 'react';
import PropTypes from 'prop-types';
import './Dashboard.scss';


import Header from '../header/Header';
import Footer from '../footer/Footer';
import Filter from '../filter/Filter';
import DataTable from '../dataTable/DataTable';

const Dashboard = ({ data, onCityFilterInput, onDistanceFilterInput, resetFilter, filters }) => (
	<>
		<Header />
		<main className="main">
			<Filter
				onCityFilterInput={onCityFilterInput}
				onDistanceFilterInput={onDistanceFilterInput}
				resetFilter={resetFilter}
			/>
			<section className="main__container">
				<DataTable
					data={data}
					filters={filters}
				/>
			</section>
		</main>
		<Footer />
	</>
);

Dashboard.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape()),
	onCityFilterInput: PropTypes.func,
	onDistanceFilterInput: PropTypes.func,
	resetFilter: PropTypes.func,
	filters: PropTypes.shape({
		city: PropTypes.string,
		distance: PropTypes.string
	})
};

export default Dashboard;