import React from 'react';
import PropTypes from 'prop-types';

import './DataTable.scss';
import DataItem from '../dataItem/DataItem';

const DataTable = ({ data }) => (
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
				{data.map((item, index) => {
					if (item !== null) {
						return <DataItem key={index} name={item.name} distance={item.distance} />;
					}
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