import { createSelector } from 'reselect';

const getFilters = state => state.filters;
const getItems = state => state.data.items;

export const getAuthorizationState = state => state.authorized.isAuthorized;
export const getUsername = state => state.user.username;
export const getPassword = state => state.user.password;
export const getCity = state => state.filters.city;
export const getDistance = state => state.filters.distance;

export const filterItems = createSelector(
	[getFilters, getItems],
	(filters, items) => items.map(item => {
		for (let filter in filters) {
			if (filters[filter] !== null && filters[filter] !== '') {
				if (filter === 'city') {
					if (item.name.toLowerCase().indexOf(filters[filter].toLowerCase()) < 0) {
						return null;
					}
				}
				if (filter === 'distance') {
					if (item.distance !== parseInt(filters[filter])) {
						return null;
					}
				}
			}
		}
		return item;
	})
);
