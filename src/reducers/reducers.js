import { combineReducers } from 'redux';
import { actions } from '../actions/actions';

const authorized = (state = false, action) => {
	switch (action.type) {
		case actions.LOGIN:
			return true;
		case actions.LOGOUT:
			return false;
		default:
			return state;
	}
};

const filters = (state = {
	city: null,
	distance: null,
}, { type, city, distance }) => {
	switch (type) {
		case actions.FILTER_LIST:
			return {
				city,
				distance
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

const data = (state = [], { type, data }) => {
	switch (type) {
		case actions.REQUEST_DATA:
			return data;
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