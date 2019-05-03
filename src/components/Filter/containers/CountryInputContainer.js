import { connect } from 'react-redux';

import { setCountryFilter } from '../../../actions';
import { getCountry } from '../../../selectors';
import Input from '../../Input/Input';

const subclass = 'filter-city';
const type = 'text';
const placeholder = 'Country';

const mapStateToProps = state => ({
	subclass,
	type,
	placeholder,
	value: getCountry(state)
});

const mapDispatchToProps = dispatch => ({
	inputHandler: val => dispatch(setCountryFilter(val)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Input);
