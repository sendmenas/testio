import { connect } from 'react-redux';

import { resetFilter } from '../../../actions';
import Filter from '../Filter';

const mapDispatchToProps = dispatch => ({
	resetFilter() { dispatch(resetFilter()); }
});

export default connect(
	null,
	mapDispatchToProps
)(Filter);
