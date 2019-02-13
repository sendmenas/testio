class Api {
	constructor(url) {
		this.url = url;
	}

	authenticate = (username = 'tesonet', password = 'partyanimal') => {
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
		.then((response) => response.json())
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			console.error(error);
		});
	}

	requestData = token => {
		return fetch(this.url + '/v1/servers', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': token,
			},
		})
		.then((response) => response.json())
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			console.error(error);
		});
	}
}

export default Api;