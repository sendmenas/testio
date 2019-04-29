import { connect } from 'react-redux';

import { filterItems } from '../../selectors';
import DataTable from './DataTable';

const mapStateToProp = state => ({
	data: filterItems(state)
});

export default connect(mapStateToProp)(DataTable);
