import { connect } from 'react-redux';
import Footer from './Footer';

import {
	fetchData,
	logout,
} from '../../actions/actions';

let token;

const mapStateToProps = state => {
	token = state.userAuthorization.token;
	return {
		lastSyncDate: state.data.lastSync === null ? 'Not synced' : state.data.lastSync 
	};
};

const mapDispatchToProps = dispatch => ({
	refreshData: () => dispatch(fetchData(token)),
	logout: () => {
		dispatch(logout());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
