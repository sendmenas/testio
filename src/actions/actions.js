import Api from '../api/Api';
import { createAction } from 'redux-actions';

const url = 'http://playground.tesonet.lt';
const api = new Api(url);

export const actions = {
	CHECK_LOCAL_STORAGE: 'CHECK_LOCAL_STORAGE',
	LOGIN: 'LOGIN',
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	REQUEST_DATA: 'REQUEST_DATA',
	DATA_RECEIVED: 'DATA_RECEIVED',
	CLEAR_DATA: 'CLEAR_DATA',
	SET_CITY_FILTER_LIST: 'SET_CITY_FILTER_LIST',
	SET_DISTANCE_FILTER: 'SET_DISTANCE_FILTER',
	RESET_FILTER: 'RESET_FILTER',
	LOGOUT: 'LOGOUT',
	SET_USERNAME: 'SET_USERNAME',
	SET_PASSWORD: 'SET_PASSWORD',
};

export const checkLocalStorageAction = createAction(actions.CHECK_LOCAL_STORAGE);
export const loginAction = createAction(actions.LOGIN);
export const loginSeccessAction = createAction(actions.LOGIN_SUCCESS);
export const requestData = createAction(actions.REQUEST_DATA);
export const clearData = createAction(actions.CLEAR_DATA);
export const dataReceivedAction = createAction(actions.DATA_RECEIVED);
export const resetFilter = createAction(actions.RESET_FILTER);
export const logoutAction = createAction(actions.LOGOUT);
export const setCityFilter = createAction(actions.SET_CITY_FILTER_LIST);
export const setDistanceFilter = createAction(actions.SET_DISTANCE_FILTER);
export const setUsername = createAction(actions.SET_USERNAME);
export const setPassword = createAction(actions.SET_PASSWORD);

export const checkLocalStorage = () => {
	return dispatch => {
		const token = localStorage.getItem('token');
		if (token !== null) {
			dispatch(loginSeccess(token));
			dispatch(fetchData(token));
		}
	};
};

export const loginSeccess = token => {
	return dispatch => {
		localStorage.setItem('token', token);
		dispatch(loginSeccessAction(token));
	};
};

export const login = (username, password) => {
	return dispatch => {
		dispatch(loginAction());
		api.authenticate(username, password, dispatch);
	};
};

export const logout = () => {
	return dispatch => {
		localStorage.removeItem('token');
		dispatch(clearData());
		dispatch(logoutAction());
	};
};

export const fetchData = token => {
	return dispatch => {
		dispatch(requestData());
		api.requestData(token, dispatch);
	};
};

export const dataReceived = items => {
	return dispatch => {
		dispatch(dataReceivedAction({items: items, time: getTime()}));
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