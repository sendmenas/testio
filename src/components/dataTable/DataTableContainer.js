import { connect } from 'react-redux';

import { filterItems } from '../../selectors';
import DataTable from './DataTable';

const mapStateToProp = state => ({
	data: filterItems(state)
});

const DataTableContainer = connect(mapStateToProp)(DataTable);

export default DataTableContainer;