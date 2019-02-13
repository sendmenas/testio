import React from 'react';
import './Dashboard.scss';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Filter from '../filter/Filter';
import DataContainer from '../dataContainer/DataContainer';
import DataTable from '../dataTable/DataTable';

const Dashboard = () => (
	<>
		<Header />
		<main className="main">
			<Filter />
			<section className="main__container">
				<DataContainer />
				<DataTable />
			</section>
		</main>
		<Footer />
	</>
);

export default Dashboard;