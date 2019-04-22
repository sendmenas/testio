import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

import { actions } from '../actions/constants';

const initialFilterState = {
	country: '',
	distance: '',
};

const setCountryFilterListReducer = handleAction(
	actions.SET_COUNTRY_FILTER,
	(state, action) => {
		return Object.assign({}, state, {
			country: action.payload,
		});
	},
	initialFilterState
);

const setDistanceFilterReducer = handleAction(
	actions.SET_DISTANCE_FILTER,
	(state, action) => {
		return Object.assign({}, state, {
			distance: action.payload,
		});
	},
	initialFilterState
);

const resetFilterReducer = handleAction(
	actions.RESET_FILTER,
	() => initialFilterState,
	initialFilterState
);

const filters = reduceReducers(
	setCountryFilterListReducer,
	setDistanceFilterReducer,
	resetFilterReducer
);

const initialDataState = {
	isFetching: false,
	items: [],
	lastSync: null
};

const requestDataReducer = handleAction(
	actions.REQUEST_DATA,
	(state) => {
		return Object.assign({}, state, {
			isFetching: true
		});
	},
	initialDataState
);

const dataReceivedReducer = handleAction(
	actions.DATA_RECEIVED,
	(state, action) => {
		return Object.assign({}, state, {
			isFetching: false,
			items: action.payload.items,
			lastSync: action.payload.time
		});
	},
	initialDataState
);

const clearDataReducer = handleAction(
	actions.CLEAR_DATA,
	() => initialDataState,
	initialDataState
);

const data = reduceReducers(
	requestDataReducer,
	dataReceivedReducer,
	clearDataReducer
);

const initialUserAuthorizationState = {
	isAuthorized: false,
	isDataFetching: false,
	token: null,
	username: '',
	password: ''
};

const setUsernameReducer = handleAction(
	actions.SET_USERNAME,
	(state, action) => {
		return Object.assign({}, state, {
			username: action.payload
		});
	},
	initialUserAuthorizationState
);

const setPasswordReducer = handleAction(
	actions.SET_PASSWORD,
	(state, action) => {
		return Object.assign({}, state, {
			password: action.payload
		});
	},
	initialUserAuthorizationState
);

const loginReducer = handleAction(
	actions.LOGIN,
	(state) => {
		return Object.assign({}, state, {
			isAuthorized: false,
			isDataFetching: true,
			token: null,
		});
	},
	initialUserAuthorizationState
);

const loginSuccessReducer = handleAction(
	actions.LOGIN_SUCCESS,
	(state, action) => {
		return Object.assign({}, state, {
			isAuthorized: true,
			isDataFetching: false,
			token: action.payload,
		});
	},
	initialUserAuthorizationState
);

const logoutReducer = handleAction(
	actions.LOGOUT,
	(state) => {
		return Object.assign({}, state, {
			isAuthorized: false,
			isDataFetching: false,
			token: null
		});
	},
	initialUserAuthorizationState
);

const userAuthorization = reduceReducers(
	setUsernameReducer,
	setPasswordReducer,
	loginReducer,
	loginSuccessReducer,
	logoutReducer
);

const appReducers = combineReducers({
	filters,
	data,
	userAuthorization,
});

export default appReducers;
