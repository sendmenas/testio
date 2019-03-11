import { connect } from 'react-redux';

import { filterList, resetFilter } from '../../actions/actions';
import Filter from './Filter';

let city;
let distance;

const mapStateToProps = state => {
	city = state.filters.city;
	distance = state.filters.distance;
	return {};
};

const mapDispatchToProps = dispatch => ({
	onCityFilterInput: value => dispatch(filterList(value, distance)),
	onDistanceFilterInput: value => dispatch(filterList(city, value)),
	resetFilter: () => dispatch(resetFilter())
});

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;