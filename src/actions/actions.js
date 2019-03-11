import Api from '../api/Api';

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

export const loginAction = () => (
	{
		type: actions.LOGIN
	}
);

export const loginSeccess = token => (
	{
		type: actions.LOGIN_SUCCESS,
		token
	}
);

export const requestData = () => (
	{
		type: actions.REQUEST_DATA,
	}
);

export const clearData = () => (
	{
		type: actions.CLEAR_DATA,
	}
);

export const dataReceived = data => (
	{
		type: actions.DATA_RECEIVED,
		data: data
	}
);

export const filterList = (city, distance) => (
	{
		type: actions.FILTER_LIST,
		filter: {
			city,
			distance
		}
	}
);

export const resetFilter = () => (
	{
		type: actions.RESET_FILTER
	}
);

export const logout = () => (
	{
		type: actions.LOGOUT
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