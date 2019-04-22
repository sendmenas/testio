import { connect } from 'react-redux';

import Input from '../../Input/Input';
import { setUsername } from '../../../actions';
import { getUsername } from '../../../selectors';

const type = 'text';
const placeholder = 'Username';
const subclass = 'login';

const mapStateToProps = state => ({
	type,
	placeholder,
	subclass,
	value: getUsername(state)
});

const mapDispatchToProps = dispatch => ({
	inputHandler(val) { dispatch(setUsername(val.target.value)); },
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Input);
