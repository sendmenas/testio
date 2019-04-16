import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import AppContainer from './App/AppContainer';

const Root = ({ store }) => (
	<Provider store={store}>
		<AppContainer />
	</Provider>
);

Root.propTypes = {
	store: PropTypes.shape()
};

export default Root;
