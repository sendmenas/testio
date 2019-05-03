import { connect } from 'react-redux';

import { setDistanceFilter } from '../../../actions';
import { getDistance } from '../../../selectors';
import Input from '../../Input/Input';

const subclass = 'filter-distance';
const type = 'number';
const placeholder = 'Distance';

const mapStateToProps = state => ({
	subclass,
	type,
	placeholder,
	value: getDistance(state)
});

const mapDispatchToProps = dispatch => ({
	onDistanceFilterInput: val => dispatch(setDistanceFilter(val)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Input);
