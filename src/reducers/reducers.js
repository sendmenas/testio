import { combineReducers } from 'redux';
import { actions } from '../actions/actions';

const getTime = () => {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
	let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const authorized = (state = {
	isAuthorized: false,
	isDataFetching: false,
	token: null,
}, { type, payload}) => {
	switch (type) {
		case actions.LOGIN:
			return {
				isAuthorized: false,
				isDataFetching: true,
				token: null,
			};
		case actions.LOGIN_SUCCESS:
			localStorage.setItem('token', payload);
			return {
				isAuthorized: true,
				isDataFetching: false,
				token: payload,
			};
		case actions.LOGOUT:
			return {
				isAuthorized: false,
				isDataFetching: false,
				token: null
			};
		default:
			return state;
	}
};

const filters = (state = {
	city: null,
	distance: null,
}, { type, payload}) => {
	switch (type) {
		case actions.FILTER_LIST:
			return {
				city: payload.city,
				distance: payload.distance
			};
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
				items: payload,
				lastSync: getTime()
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

const appReducers = combineReducers({
	authorized,
	filters,
	data
});

export default appReducers;