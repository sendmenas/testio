import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = state => ({
	isAuthorized: state.authorized.isAuthorized
});

const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer;