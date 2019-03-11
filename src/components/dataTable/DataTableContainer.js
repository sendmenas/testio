import { connect } from 'react-redux';

import DataTable from './DataTable';

const filterItems = (data, filters) => data.map(item => {
	for (let filter in filters) {
		if (filters[filter] !== null && filters[filter] !== '') {
			if (filter === 'city') {
				if (item.name.toLowerCase().indexOf(filters[filter].toLowerCase()) < 0) {
					return null;
				}
			}
			if (filter === 'distance') {
				if (item.distance !== parseInt(filters[filter])) {
					return null;
				}
			}
		}
	}
	return item;
});

const mapStateToProp = state => {
	let filters = state.filters;
	let items = state.data.items;
	return {
		data: filterItems(items, filters)
	};
};

const DataTableContainer = connect(mapStateToProp, null)(DataTable);

export default DataTableContainer;