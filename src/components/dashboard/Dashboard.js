import React from 'react';
import './Dashboard.scss';


import Header from '../header/Header';
import FilterContainer from '../filter/FilterContainer';
import DataTableContainer from '../dataTable/DataTableContainer';
import FooterContainer from '../footer/FooterContainer';

const Dashboard = () => (
	<>
		<Header />
		<main className="main">
			<FilterContainer />
			<section className="main__container">
				<DataTableContainer />
			</section>
		</main>
		<FooterContainer />
	</>
);

export default Dashboard;