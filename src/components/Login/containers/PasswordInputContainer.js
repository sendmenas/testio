import { connect } from 'react-redux';

import Input from '../../Input/Input';
import { setPassword } from '../../../actions';
import { getPassword } from '../../../selectors';

const type = 'password';
const placeholder = 'Password';
const subclass = 'login';

const mapStateToProps = state => ({
	type,
	placeholder,
	subclass,
	value: getPassword(state)
});

const mapDispatchToProps = dispatch => ({
	inputHandler(val) { dispatch(setPassword(val.target.value)); },
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Input);
