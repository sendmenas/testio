import { combineReducers } from 'redux';
import { actions } from '../actions/constants';

const filters = (state = {
	city: null,
	distance: null,
}, { type, payload}) => {
	switch (type) {
		case actions.SET_CITY_FILTER_LIST:
			return Object.assign({}, state, {
				city: payload,
			});
		case actions.SET_DISTANCE_FILTER:
			return Object.assign({}, state, {
				distance: payload,
			});
		case actions.RESET_FILTER:
			return {
				city: null,
				distance: null,
			};
		default:
			return state;
	}
};

const data = (state = {
	isFetching: false,
	items: [],
	lastSync: null
}, { type, payload }) => {
	switch (type) {
		case actions.REQUEST_DATA:
			return Object.assign({}, state, {
				isFetching: true
			});
		case actions.DATA_RECEIVED:
			return Object.assign({}, state, {
				isFetching: false,
				items: payload.items,
				lastSync: payload.time
			});
		case actions.CLEAR_DATA:
			return Object.assign({}, state, {
				isFetching: false,
				items: [],
				lastSync: null
			});
		default:
			return state;
	}
};

const userAuthorization = (state = {
	isAuthorized: false,
	isDataFetching: false,
	token: null,
	username: '',
	password: ''
}, { type, payload }) => {
	switch (type) {
		case actions.SET_USERNAME:
			return Object.assign({}, state, {
				username: payload
			});
		case actions.SET_PASSWORD:
			return Object.assign({}, state, {
				password: payload
			});			
		case actions.LOGIN:
			return Object.assign({}, state, {
				isAuthorized: false,
				isDataFetching: true,
				token: null,
			});			
		case actions.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isAuthorized: true,
				isDataFetching: false,
				token: payload,
			});
		case actions.LOGOUT:
			return Object.assign({}, state, {
				isAuthorized: false,
				isDataFetching: false,
				token: null
			});
		default:
			return state;
	}
};

const appReducers = combineReducers({
	filters,
	data,
	userAuthorization,
});

export default appReducers;
