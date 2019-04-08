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

export const checkLocalStorage = createAction(actions.CHECK_LOCAL_STORAGE);
export const loginAction = createAction(actions.LOGIN);
export const loginSeccess = createAction(actions.LOGIN_SUCCESS);
export const requestData = createAction(actions.REQUEST_DATA);
export const clearData = createAction(actions.CLEAR_DATA);
export const dataReceived = createAction(actions.DATA_RECEIVED);
export const resetFilter = createAction(actions.RESET_FILTER);
export const logout = createAction(actions.LOGOUT);
export const setCityFilter = createAction(actions.SET_CITY_FILTER_LIST);
export const setDistanceFilter = createAction(actions.SET_DISTANCE_FILTER);
export const setUsername = createAction(actions.SET_USERNAME);
export const setPassword = createAction(actions.SET_PASSWORD);

export const login = (username, password) => {
	return function(dispatch) {
		dispatch(loginAction());
		return api.authenticate(username, password, dispatch);
	};
};

export const fetchData = token => {
	return function(dispatch) {
		dispatch(requestData());
		return api.requestData(token, dispatch);
	};
};