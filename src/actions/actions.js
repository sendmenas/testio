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
	FILTER_LIST: 'FILTER_LIST',
	RESET_FILTER: 'RESET_FILTER',
	LOGOUT: 'LOGOUT',
};

export const loginAction = createAction(actions.LOGIN);
export const loginSeccess = createAction(actions.LOGIN_SUCCESS);
export const requestData = createAction(actions.REQUEST_DATA);
export const clearData = createAction(actions.CLEAR_DATA);
export const dataReceived = createAction(actions.DATA_RECEIVED);
export const resetFilter = createAction(actions.RESET_FILTER);
export const logout = createAction(actions.LOGOUT);

export const filterList = (city, distance) => (
	{
		type: actions.FILTER_LIST,
		payload: {
			city,
			distance
		}
	}
);

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