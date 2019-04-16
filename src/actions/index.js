import Api from '../api/Api';
import { createActions } from 'redux-actions';

import { actions } from './constants';

const url = 'http://playground.tesonet.lt';
const api = new Api(url);

export const {
	login,
	loginSuccess,
	requestData,
	clearData,
	dataReceived,
	resetFilter,
	logout,
	setCityFilter,
	setDistanceFilter,
	setUsername,
	setPassword
} = createActions(
	{},
	actions.LOGIN,
	actions.LOGIN_SUCCESS,
	actions.REQUEST_DATA,
	actions.CLEAR_DATA,
	actions.DATA_RECEIVED,
	actions.RESET_FILTER,
	actions.LOGOUT,
	actions.SET_CITY_FILTER,
	actions.SET_DISTANCE_FILTER,
	actions.SET_USERNAME,
	actions.SET_PASSWORD
);

export const checkLocalStorage = () => {
	return dispatch => {
		const token = localStorage.getItem('token');
		if (token !== null) {
			dispatch(loginSuccessAction(token));
		}
	};
};

export const loginSuccessAction = token => {
	return dispatch => {
		localStorage.setItem('token', token);
		dispatch(loginSuccess(token));
		dispatch(fetchData(token));
	};
};

export const loginAction = (username, password) => {
	return dispatch => {
		dispatch(login());
		api.authenticate(username, password, dispatch);
	};
};

export const logoutAction = () => {
	return dispatch => {
		localStorage.removeItem('token');
		dispatch(clearData());
		dispatch(logout());
	};
};

export const fetchData = token => {
	return dispatch => {
		dispatch(requestData());
		api.requestData(token, dispatch);
	};
};

export const dataReceivedAction = items => {
	return dispatch => {
		dispatch(dataReceived({items: items, time: getTime()}));
	};
};

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
