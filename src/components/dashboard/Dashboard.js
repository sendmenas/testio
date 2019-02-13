import React from 'react';
import './Dashboard.scss';

import Header from '../header/Header';
import Footer from '../Footer/Footer';

const Dashboard = () => (
	<>
		<Header />
		<main className="main">
			<section className="main__filter">
				<div className="filter-name">
					<input className="filter-input" placeholder="Name" type="text" id="nameFilter" />
				</div>
				<div className="filter-city" id="cityFilter">
					<div id="cityFilterSelection">City</div>
					<i className="fa fa-caret-down" aria-hidden="true"></i>
					<section className="filter-city__select" id="citySelect">
						<div>City</div>
						<div className="cities-container" id="citySelectContainer"></div>
					</section>
				</div>
				<div className="checkbox">
					<div className="checkbox__input" id="activeCheckboxContainer">
						<input type="checkbox" id="activeCheckbox" />
					</div>
					<div className="checkbox__label">Show active</div>
				</div>
				<button className="filter-button" id="filterButton">filter</button>
				<button className="filter-button" id="resetFilterButton">reset</button>
				<button className="add-contact-button" id="addNewContact">
					<i className="fa fa-plus add-contact-button__plus" aria-hidden="true"></i>
					add new contract
				</button>
			</section>
			<section className="main__container">
				<aside className="user-block">
					<figure>
						<img className="user-block__avatar" id="userAvatar"></img>
					</figure>
					<dl className="user-block__data">
						<dt className="contract-label">Name:</dt>
						<dd className="contract-data" id="userName"></dd>
						<dt className="contract-label">Surname:</dt>
						<dd className="contract-data" id="userSurname"></dd>
						<dt className="contract-label">City:</dt>
						<dd className="contract-data" id="userCity"></dd>
						<dt className="contract-label">Email:</dt>
						<dd className="contract-data contract-data--email" id="userEmail"></dd>
						<dt className="contract-label">Phone:</dt>
						<dd className="contract-data" id="userPhone"></dd>
					</dl>
				</aside>
				<section>
					<table className="data-table">
						<thead className="data-table__header">
							<tr>
								<th className="data-table__header__name">
									Name
									<i className="fa fa-arrow-down sort-arrow-inactive" id="sortName"></i>
								</th>
								<th className="data-table__header__surname">
									Surname
									<i className="fa fa-arrow-down sort-arrow-inactive" id="sortSurname"></i>
								</th>
								<th className="data-table__header__city">City</th>
								<th className="data-table__header__email">Email</th>
								<th className="data-table__header__phone">Phone</th>
								<th className="data-table__header__actions"></th>
							</tr>
						</thead>
						<tbody className="data-table__data" id="dataTable"></tbody>
					</table>
				</section>
			</section>
		</main>
		<Footer />
	</>
);

export default Dashboard;