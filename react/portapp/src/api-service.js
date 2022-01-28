export default class API{
    static signUpUser(body) {
        return fetch(`http://127.0.0.1:5000/users/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( body )
        }).then(resp => resp.json())
      }

    static loginUser(body) {
    return fetch(`http://127.0.0.1:5000/users/login`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify( body )
    }).then(resp => resp.json())
    }

    static logoutUser(body) {
        return fetch(`http://127.0.0.1:5000/users/logout`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify( body )
        }).then(resp => resp.json())
    }
    static userProfileInfo(body) {
        return fetch(`http://127.0.0.1:5000/users/me`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify( body )
        }).then(resp => resp.json())
    }

    static deleteUser(body) {
        return fetch(`http://127.0.0.1:5000//users/me`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify( body )
        }).then(resp => resp.json())
    }
}