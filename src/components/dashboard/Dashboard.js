import React from 'react';
import './Dashboard.scss';


import Header from '../Header/Header';
import FilterContainer from '../Filter/containers/FilterContainer';
import DataTableContainer from '../DataTable/DataTableContainer';
import FooterContainer from '../Footer/FooterContainer';

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
