import { connect } from 'react-redux';
import Footer from './Footer';

import {
	fetchData,
	logout,
	clearData
} from '../../actions/actions';

let token;

const mapStateToProps = state => {
	token = state.authorized.token;
	return {
		lastSyncDate: state.data.lastSync === null ? 'Not synced' : state.data.lastSync 
	};
};

const mapDispatchToProps = dispatch => ({
	refreshData: () => dispatch(fetchData(token)),
	logout: () => {
		localStorage.removeItem('token');
		dispatch(logout());
		dispatch(clearData());
	}
});

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;