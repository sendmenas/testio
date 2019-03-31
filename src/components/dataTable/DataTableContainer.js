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
	const filters = state.filters;
	const items = state.data.items;
	return {
		data: filterItems(items, filters)
	};
};

const DataTableContainer = connect(mapStateToProp)(DataTable);

export default DataTableContainer;