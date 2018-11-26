class Api {
    constructor(url) {
        this.url = url;
    }

    authenticate = (username, password) => {
        return fetch(this.url + '/v1/tokens', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: 'tesonet',
                    password: 'partyanimal',
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
            },
            data: {
                token: token,
            }
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