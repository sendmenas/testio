import React from 'react';
import PropTypes from 'prop-types';

import './DataTable.scss';
import DataItem from '../dataItem/DataItem';

const DataTable = ({ data, filters }) => (
	<section>
		<table className="data-table">
			<thead className="data-table__header">
				<tr>
					<th className="data-table__header__name">
						City
					</th>
					<th className="data-table__header__distance">
						Distance
					</th>
				</tr>
			</thead>
			<tbody className="data-table__data" id="dataTable">
				{data.map(({ name, distance }, index) => {
					for (let item in filters) {
						if (filters[item] !== null && filters[item] !== '') {
							if (item === 'city') {
								if (name.toLowerCase().indexOf(filters[item].toLowerCase()) >= 0) {
									return <DataItem key={index} name={name} distance={distance} />;
								} else {
									return null;
								}
							}
							if (item === 'distance') {
								if (distance === parseInt(filters[item])) {
									return <DataItem key={index} name={name} distance={distance} />;
								} else {
									return null;
								}
							}							
						}
					}
					return <DataItem key={index} name={name} distance={distance} />;
				})}
			</tbody>
		</table>
	</section>
);

DataTable.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		distance: PropTypes.number
	})),
	filters: PropTypes.shape({
		city: PropTypes.string,
		distance: PropTypes.string
	})
};

export default DataTable;