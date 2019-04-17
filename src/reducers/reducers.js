import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { actions } from '../actions/constants';

const initialFilterState = {
	city: null,
	distance: null,
};

const setCountryFilterListReducer = handleAction(
	actions.SET_CITY_FILTER,
	(state, action) => {
		return Object.assign({}, state, {
			city: action.payload,
		});
	},
	initialFilterState
);

const filters = (state = initialFilterState, action) => {
	switch (action.type) {
		case actions.SET_CITY_FILTER:
			return setCountryFilterListReducer(state, action);
		case actions.SET_DISTANCE_FILTER:
			return Object.assign({}, state, {
				distance: action.payload,
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
