import {
	dataReceivedAction,
	loginSuccess,
} from '../actions';

class Api {
	constructor(url) {
		this.url = url;
	}

	authenticate(username = 'tesonet', password = 'partyanimal', dispatch) {
		return fetch(this.url + '/v1/tokens', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then(response => response.json())
			.then(responseJson => {
				dispatch(loginSuccess(responseJson.token));
			})
			.catch((error) => {
				//eslint-disable-next-line
				console.error(error);
			});
	}

	requestData(token, dispatch) {
		return fetch(this.url + '/v1/servers', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': token,
			},
		})
			.then(response => response.json())
			.then(responseJson => {
				dispatch(dataReceivedAction(responseJson));
			})
			.catch((error) => {
				//eslint-disable-next-line
				console.error(error);
			});
	}
}

export default Api;
