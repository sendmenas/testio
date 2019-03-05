export const actions = {
	LOGIN: 'LOGIN',
	REQUEST_DATA: 'REQUEST_DATA',
	FILTER_LIST: 'FILTER_LIST',
	RESET_FILTER: 'RESET_FILTER',
	LOGOUT: 'LOGOUT',
};

export const login = (username, password) => (
	{
		type: actions.LOGIN,
		credentials: {
			username,
			password
		}
	}
);

export const requestData = () => (
	{
		type: actions.REQUEST_DATA
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
