import { connect } from 'react-redux';

import { resetFilter, setCityFilter, setDistanceFilter } from '../../actions/actions';
import { getCity, getDistance } from '../../selectors';
import Filter from './Filter';

const mapStateToProps = state => ({
	city: getCity(state),
	distance: getDistance(state)
});

const mapDispatchToProps = dispatch => ({
	onCityFilterInput: value => dispatch(setCityFilter(value)),
	onDistanceFilterInput: value => dispatch(setDistanceFilter(value)),
	resetFilter: () => dispatch(resetFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
