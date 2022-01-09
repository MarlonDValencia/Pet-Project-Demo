const URL_BASE = 'http://localhost:8080';

export const GET_USER = "GET_USER";

export function fetchUser(email) {
  return async dispatch => {
    return await fetch(`${URL_BASE}/getUser/${email}`)
      .then(response => {response.json()})
      .then(json => {
        console.log("aaa"+json)
        dispatch({ type: GET_USER, payload: { info: json } })
      })
      .catch(error => console.error('Error:', error))
  }
}

