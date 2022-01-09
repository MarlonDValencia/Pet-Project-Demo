const URL_BASE = 'http://localhost:8080';

export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER"

export function fetchUser(email) {
  return async dispatch => {
    return await fetch(`${URL_BASE}/getUser/${email}`)
      .then(response => {response.json()})
      .then(json => {
        dispatch({ type: GET_USER, payload: { info: json } })
      })
      .catch(error => console.error('Error:', error))
  }
}

export function fetchNewUser(json) {
  return async function(dispatch) {
      return await fetch(URL_BASE + "/createUser", {
          method: "PUT",
          body: json,
          headers: {'Content-Type':'application/json'}
      }).then(response => response.json())
      .then(json => {
          dispatch({ type: CREATE_USER, payload: json })
      })  
      .catch(error => console.error('Error:', error))
  };
}